package com.green.attaparunever2.config.security;

import com.green.attaparunever2.common.repository.CodeRepository;
import com.green.attaparunever2.config.jwt.JwtUser;
import com.green.attaparunever2.entity.Code;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationFacade {
    @Autowired
    private CodeRepository codeRepository;

    public JwtUser getSignedUser() {
        MyUserDetails myUserDetails = (MyUserDetails) SecurityContextHolder.getContext()
                .getAuthentication()
                .getPrincipal();

        return myUserDetails == null ? null : myUserDetails.getJwtUser();
    }

    public long getSignedUserId() {
        return getSignedUser().getSignedUserId();
    }

    public String getSignedUserCodeName() {
        JwtUser signedUser = getSignedUser();
        if (signedUser != null) {
            Code code = codeRepository.findByCode(signedUser.getRoles());
            if (code != null) {
                return code.getName();
            }
        }
        return null;
    }
}
