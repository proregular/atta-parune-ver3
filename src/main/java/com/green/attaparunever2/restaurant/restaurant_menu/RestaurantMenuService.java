package com.green.attaparunever2.restaurant.restaurant_menu;


import com.green.attaparunever2.common.MyFileUtils;
import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.restaurant.restaurant_menu.model.PostMenuReq;
import com.green.attaparunever2.restaurant.restaurant_menu.model.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RestaurantMenuService {
    private final RestaurantMenuMapper restaurantMenuMapper;
    private final MyFileUtils myFileUtils;

    public int postMenu(MultipartFile pic, PostMenuReq p){ // 메뉴 사진 등록 해야함
        InsMenuReq insMenuReq = new InsMenuReq();
        String savedPicName = pic != null ? myFileUtils.makeRandomFileName(pic) : null;
        p.setMenuPic(savedPicName);

        MenuCategorySelDto dto = restaurantMenuMapper.selMenuCategoryByRestaurantIdAndCategoryName(p);

        // 해당 메뉴 카테고리가 존재 한다면
        if(dto != null) {
            insMenuReq.setCategoryId(dto.getCategoryId());
        } else {
            // 카테고리 생성
            PostCategoryReq postCategoryReq = new PostCategoryReq();
            postCategoryReq.setRestaurantId(p.getRestaurantId());
            postCategoryReq.setCategoryName(p.getCategoryName());

            restaurantMenuMapper.postCategory(postCategoryReq);
            insMenuReq.setCategoryId(postCategoryReq.getCategoryId());
        }

        insMenuReq.setMenuName(p.getMenuName());
        insMenuReq.setAvailable(p.getAvailable());
        insMenuReq.setDetails(p.getDetails());
        insMenuReq.setPrice(p.getPrice());
        insMenuReq.setMenuPic(savedPicName);

        int result = restaurantMenuMapper.insMenu(insMenuReq);

        long menuId = insMenuReq.getMenuId();
        if(pic != null) {
            String middlePath = String.format("menu/%d", menuId);
            myFileUtils.makeFolders(middlePath);
            String filePath = String.format("%s/%s", middlePath, savedPicName);
            try {
                myFileUtils.transferTo(pic, filePath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return result;
    }

    public List<SelMenuRes> getMenu(SelMenuReq p){
        List<SelMenuRes> res = restaurantMenuMapper.selMenu(p);

        return res;
    }

    public int delMenu(DelMenuReq p){
        int result = restaurantMenuMapper.delMenu(p);

        if(result != 0) {
            int count = restaurantMenuMapper.selCategoryMenuCount(p.getCategoryId());

            if(count <= 0) {
                DelCategoryReq req = new DelCategoryReq();
                req.setCategoryId(p.getCategoryId());
                result = restaurantMenuMapper.delCategory(req);
            }

        }

        return result;
    }

    @Transactional
    public int updRestaurantMenu(UpdMenuReq p) {
        int result = restaurantMenuMapper.updMenu(p);
        if (result == 0) {
            throw new CustomException("메뉴 수정 실패", HttpStatus.BAD_REQUEST);
        }
        return result;
    }

    public int postCategory(PostCategoryReq p) {
        int result = restaurantMenuMapper.postCategory(p);
        return result;
    }

    public int updCategory(UpdCategoryReq p) {
        int result = restaurantMenuMapper.updCategory(p);
        return result;
    }

    public int delCategory(DelCategoryReq p) {
        int result = restaurantMenuMapper.delCategory(p);
        return result;
    }
}
