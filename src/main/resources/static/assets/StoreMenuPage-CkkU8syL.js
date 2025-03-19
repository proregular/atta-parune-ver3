import{w as q,c as s,d as K,j as e,D as w,I as V,z as _,p as d,J as o,q as u,A as G,B as b}from"./index-C7IDMRLB.js";import{d as $}from"./index-CN4ghhxF.js";import{F as H}from"./index-O5EEaJ5u.js";import{S as Q}from"./SideBar-LHlr-Z3T.js";import{u as W}from"./useModal-Bkx5xisA.js";import"./index-ydYAXTdr.js";const X=o.div`
  display: flex;
  gap: 30px;
  background-color: #eee;
  max-height: 100vh;
  height: auto;
  overflow: hidden;
`,Y=o.div`
  flex-wrap: wrap;
  padding: 20px 0;
  padding-bottom: 30px;
  width: 100%;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
`,Z=o.div`
  padding-left: 10px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`,ee=o.div`
  background-color: #fff;
  margin: 10px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
`,te=o.img`
  width: 210px;
  height: 210px;
  border-radius: 5px;
  background-color: #eee;
`,ae=o.div`
  margin-top: 5px;
  font-size: 20px;
  overflow: hidden;
  max-height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,se=o.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;
`,M=o.div`
  margin: 10px auto;
  img {
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 5px;
    background-color: #eee;
    position: relative;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  span {
    display: block;
    width: 60px;
    text-align: left;
  }
  input {
    width: 120px;
  }
  button {
    margin-top: 20px;
    padding: 5px 20px;
    color: #fff;
    background-color: #6f4cdb;
    border-radius: 5px;
  }
  p {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 96px;
    bottom: 37%;
    color: #6f4cdb;
    background-color: #fff;
    border-radius: 15px;
  }
`,oe=G({categoryName:b(),menuName:b(),price:b()});function de(){const f=sessionStorage.getItem("restaurantId"),m=q(),[i,x]=s.useState({modal1:!1,modal2:!1}),[F,P]=s.useState([]),[v,I]=s.useState(),[l,j]=s.useState([]),h=s.useRef(null),[y,T]=s.useState({}),[L,z]=s.useState(),{register:n,handleSubmit:N,setValue:c}=K({mode:"onSubmit",resolver:_(oe)}),E=()=>{if(i.modal1)return"메뉴 추가하기";if(i.modal2)return"메뉴 수정하기"},{Modal:C,open:B}=W({title:E()}),g=async()=>{try{const t=(await d.get(`/api/restaurant?restaurantId=${f}`)).data.resultData;P(t.menuCateList)}catch(a){console.log(a)}},O=async(a,t)=>{try{await d.delete(`/api/admin/restaurant/v3/menu?categoryId=${a}&menuId=${t}&restaurantId=${f}`,{headers:{Authorization:`Bearer ${m}`,"Content-Type":"multipart/form-data"}}),g(),u.fire("메뉴가 삭제 되었습니다.","","success")}catch(r){console.log(r)}},A=async a=>{try{await d.post("/api/admin/restaurant/v3/menu",a,{headers:{Authorization:`Bearer ${m}`,"Content-Type":"multipart/form-data"}}),x({}),u.fire({title:"메뉴가 추가되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),g()}catch(t){u.fire({title:"입력 데이터가 부족합니다.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),console.log(t)}},R=async a=>{try{await d.patch("/api/admin/restaurant/v3/pic/menu",a,{headers:{Authorization:`Bearer ${m}`,"Content-Type":"multipart/form-data"}})}catch(t){console.log(t)}},J=async a=>{try{await d.patch("/api/admin/restaurant/menu",a,{headers:{Authorization:`Bearer ${m}`}}),x({}),u.fire({title:"메뉴가 수정되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),g()}catch(t){console.log(t)}},U=(a,t)=>{u.fire({title:"메뉴를 삭제하시겠습니까?",text:"삭제한 메뉴는 복구할 수 없습니다.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#79BAF2",cancelButtonColor:"#E44B58",confirmButtonText:"확인",cancelButtonText:"취소",reverseButtons:!1}).then(r=>{r.isConfirmed&&O(a,t)})},D=a=>{const t=a.target.files[0];t&&(I(URL.createObjectURL(t)),j([t])),h.current&&(h.current.value="")},S=a=>{console.log("폼데이터:",a);const t=new FormData,r={restaurantId:f,categoryName:a.categoryName,menuName:a.menuName,price:parseInt(a.price)};console.log("이거 먼데??",l),l?t.append("pic",l[0]):t.append("pic",""),t.append("p",new Blob([JSON.stringify(r)],{type:"application/json"}));const k={menuId:y.menuId,categoryId:y.categoryId,menuName:a.menuName,price:a.price},p=new FormData;l?p.append("pic",l[0]):p.append("pic",[]),p.append("p",new Blob([JSON.stringify({menuId:y.menuId})],{type:"application/json"})),console.log("FormData 확인:",[...t.entries()]),console.log("patchData 확인:",k),console.log("ImgData 확인:",[...p.entries()]),i.modal1?A(t):i.modal2&&(R(p),J(k))};return s.useEffect(()=>{g()},[]),e.jsxs("div",{children:[e.jsxs(X,{children:[e.jsx(Q,{}),e.jsx("div",{className:"p-[10px]",children:e.jsxs(Y,{className:"scrollbar-hide",children:[e.jsx("div",{className:"absolute right-0 mr-10",children:e.jsx("button",{type:"button",onClick:()=>{x({modal1:!0}),c("categoryName",""),c("menuName",""),c("price",""),j([]),I(null),B()},className:"px-4 py-2 bg-primary text-white rounded-[5px] shadow-lg",children:"메뉴추가"})}),F.map(a=>e.jsxs("div",{children:[e.jsx(Z,{children:a.categoryName}),e.jsx("div",{className:"flex gap-[40px] flex-wrap mb-[30px]",children:a.menuList.map(t=>e.jsxs(ee,{children:[e.jsx(te,{src:`${w}/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`}),e.jsxs("div",{className:"flex items-center w-[210px] justify-between",children:[e.jsx(ae,{children:t.menuName}),e.jsxs("div",{className:"flex items-center gap-[5px]",children:[e.jsx(H,{onClick:()=>{T(r=>({...r,menuId:t.menuId,categoryId:a.categoryId})),z(`${w}/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`),x({modal2:!0}),c("categoryName",a.categoryName),c("menuName",t.menuName),c("price",t.price),j(`${w}/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`),B()},className:"w-5 h-5 cursor-pointer"}),e.jsx(V,{onClick:()=>U(a.categoryId,t.menuId),className:"w-6 h-6 cursor-pointer"})]})]}),e.jsxs(se,{children:[t.price.toLocaleString(),"원"]})]},t.menuId))})]},a.categoryId))]})})]}),i.modal1&&e.jsx(C,{children:e.jsx(M,{children:e.jsxs("form",{onSubmit:N(S),children:[e.jsx("img",{src:v}),e.jsxs("p",{children:[e.jsx("label",{htmlFor:"menuImg",children:e.jsx($,{className:"w-full h-full cursor-pointer"})}),e.jsx("input",{type:"file",id:"menuImg",className:"opacity-0",accept:"image/png, image/jpeg",ref:h,onChange:a=>D(a)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"카테고리"}),e.jsx("input",{type:"text",placeholder:"카테고리 이름",...n("categoryName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴명"}),e.jsx("input",{type:"text",placeholder:"메뉴명",...n("menuName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴가격"}),e.jsx("input",{type:"number",placeholder:"가격",...n("price")})]}),e.jsx("button",{type:"submit",children:"추가"})]})})}),i.modal2&&e.jsx(C,{children:e.jsx(M,{children:e.jsxs("form",{onSubmit:N(S),children:[e.jsx("img",{src:v||L}),e.jsxs("p",{children:[e.jsx("label",{htmlFor:"menuImg",children:e.jsx($,{className:"w-full h-full cursor-pointer"})}),e.jsx("input",{type:"file",id:"menuImg",className:"opacity-0",accept:"image/png, image/jpeg",ref:h,onChange:a=>D(a)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"카테고리"}),e.jsx("input",{type:"text",placeholder:"카테고리 이름",readOnly:!0,...n("categoryName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴명"}),e.jsx("input",{type:"text",placeholder:"메뉴명",...n("menuName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴가격"}),e.jsx("input",{type:"number",placeholder:"가격",...n("price")})]}),e.jsx("button",{type:"submit",children:"수정완료"})]})})})]})}export{de as default};
