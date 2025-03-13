import{g as q,r,j as e,P as j,z as H,d as l,n as s,e as h}from"./index-BXJcS394.js";import{o as Q,c as W,d as X,e as S,a as B}from"./index.esm-B1QwyXqu.js";import{c as k}from"./index-DZD75Lp0.js";import{F as Y}from"./index-CowzvnjE.js";import{S as Z}from"./SideBar--GbhTdvT.js";import{u as ee}from"./index.esm-Cwsj84Ww.js";import{u as te}from"./useModal-DMc7YeYV.js";import"./index-D56dZV4x.js";const ae=s.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  background-color: #eee;
  max-height: 100vh;
  height: auto;
  overflow: hidden;
`,oe=s.div`
  flex-wrap: wrap;
  padding: 20px 0;
  padding-bottom: 30px;
  width: 830px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
`,$=s.div`
  padding-left: 10px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`,se=s.div`
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 350px;
  background-color: #fff;
`,ne=s.div`
  background-color: #fff;
  margin: 10px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
`,re=s.img`
  width: 210px;
  height: 210px;
  border-radius: 5px;
  background-color: #eee;
`,ie=s.div`
  margin-top: 5px;
  font-size: 20px;
  overflow: hidden;
  max-height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ce=s.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;
`,M=s.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
`,E=s.div`
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
`,le=W({restaurantId:S(),categoryName:B(),menuName:B(),price:S(),pic:X()});function je(){const g=sessionStorage.getItem("restaurantId"),p=q(),[d,F]=r.useState(!1),[c,u]=r.useState({modal1:!1,modal2:!1}),[P,T]=r.useState([]),[y,b]=r.useState(),[z,A]=r.useState({}),[f,L]=r.useState({}),[O,R]=r.useState(),{register:n,handleSubmit:w,setValue:o}=ee({mode:"onChange",resolver:Q(le)}),U=()=>{if(c.modal1)return"메뉴 추가하기";if(c.modal2)return"메뉴 수정하기"},{Modal:v,open:I}=te({title:U()}),m=async()=>{try{const t=(await l.get(`/api/restaurant?restaurantId=${g}`)).data.resultData;A(t),T(t.menuCateList)}catch(a){console.log(a)}},J=async(a,t)=>{try{await l.delete(`/api/admin/restaurant/v3/menu?categoryId=${a}&menuId=${t}&restaurantId=${g}`,{headers:{Authorization:`Bearer ${p}`,"Content-Type":"multipart/form-data"}}),m(),h.fire("메뉴가 삭제 되었습니다.","","success")}catch(i){console.log(i)}},G=async a=>{try{await l.post("/api/admin/restaurant/v3/menu",a,{headers:{Authorization:`Bearer ${p}`,"Content-Type":"multipart/form-data"}}),u({}),h.fire({title:"메뉴가 추가되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),m()}catch(t){console.log(a),console.log(t)}},K=async a=>{try{await l.patch("/api/admin/restaurant/v3/pic/menu",a,{headers:{Authorization:`Bearer ${p}`,"Content-Type":"multipart/form-data"}})}catch(t){console.log(t)}},V=async a=>{try{await l.patch("/api/admin/restaurant/menu",a,{headers:{Authorization:`Bearer ${p}`}}),u({}),h.fire({title:"메뉴가 수정되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),m()}catch(t){console.log(t)}},_=(a,t)=>{h.fire({title:"메뉴를 삭제하시겠습니까?",text:"삭제한 메뉴는 복구할 수 없습니다.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#79BAF2",cancelButtonColor:"#E44B58",confirmButtonText:"확인",cancelButtonText:"취소",reverseButtons:!1}).then(i=>{i.isConfirmed&&J(a,t)})},N=a=>{const t=a.target.files[0];t&&(b(URL.createObjectURL(t)),o("pic",[t]))},C=a=>{console.log("폼데이터:",a);const t=new FormData,i={restaurantId:a.restaurantId,categoryName:a.categoryName,menuName:a.menuName,price:a.price};console.log(a.pic),t.append("pic",a.pic[0]),t.append("p",new Blob([JSON.stringify(i)],{type:"application/json"}));const D={menuId:f.menuId,categoryId:f.categoryId,menuName:a.menuName,price:a.price},x=new FormData;x.append("pic",a.pic[0]),x.append("p",new Blob([JSON.stringify({menuId:f.menuId})],{type:"application/json"})),console.log("FormData 확인:",[...t.entries()]),console.log("patchData 확인:",D),console.log("ImgData 확인:",[...x.entries()]),c.modal1?G(t):c.modal2&&(K(x),V(D))};return r.useEffect(()=>{m(),o("restaurantId",g)},[]),e.jsxs("div",{children:[e.jsxs(ae,{children:[e.jsx(Z,{}),e.jsx("div",{className:"p-[10px]",children:e.jsx(oe,{className:"scrollbar-hide",children:P.map(a=>e.jsxs("div",{children:[e.jsx($,{children:a.categoryName}),e.jsx("div",{className:"flex gap-[40px] flex-wrap mb-[30px]",children:a.menuList.map(t=>e.jsxs(ne,{children:[e.jsx(re,{src:`${j}/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`,alt:"없음"}),e.jsxs("div",{className:"flex items-center w-[210px] justify-between",children:[e.jsx(ie,{children:t.menuName}),d?e.jsxs("div",{className:"flex items-center gap-[5px]",children:[e.jsx(Y,{onClick:()=>{L(i=>({...i,menuId:t.menuId,categoryId:a.categoryId})),R(`${j}/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`),u({modal2:!0}),o("categoryName",a.categoryName),o("menuName",t.menuName),o("price",t.price),o("pic",`${j}/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`),I()},className:"w-5 h-5 cursor-pointer"}),e.jsx(H,{onClick:()=>_(a.categoryId,t.menuId),className:"w-6 h-6 cursor-pointer"})]}):e.jsx(e.Fragment,{})]}),e.jsxs(ce,{children:[t.price.toLocaleString(),"원"]})]},t.menuId))})]},a.categoryId))})}),e.jsxs(se,{children:[e.jsx("div",{className:"flex justify-center"}),e.jsx($,{style:{color:"#B3A1EC",textAlign:"center",marginBottom:250,marginTop:40},children:z.restaurantName}),e.jsx(M,{onClick:()=>{u({modal1:!0}),o("categoryName",""),o("menuName",""),o("price",""),o("pic",null),b(null),I()},children:"메뉴 추가"}),e.jsx(M,{style:{backgroundColor:d?"#A28CE8":"#fff",color:d?"#fff":"#333"},onClick:()=>F(!d),children:"메뉴 수정"})]})]}),c.modal1&&e.jsx(v,{children:e.jsx(E,{children:e.jsxs("form",{onSubmit:w(C),children:[e.jsx("img",{src:y}),e.jsxs("p",{children:[e.jsx("label",{htmlFor:"menuImg",children:e.jsx(k,{className:"w-full h-full cursor-pointer"})}),e.jsx("input",{type:"file",id:"menuImg",className:"opacity-0",accept:"image/png, image/jpeg",...n("pic"),onChange:a=>N(a)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"카테고리"}),e.jsx("input",{type:"text",placeholder:"카테고리 이름",...n("categoryName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴명"}),e.jsx("input",{type:"text",placeholder:"메뉴명",...n("menuName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴가격"}),e.jsx("input",{type:"number",placeholder:"가격",...n("price")})]}),e.jsx("button",{type:"submit",children:"추가"})]})})}),c.modal2&&e.jsx(v,{children:e.jsx(E,{children:e.jsxs("form",{onSubmit:w(C),children:[e.jsx("img",{src:y||O}),e.jsxs("p",{children:[e.jsx("label",{htmlFor:"menuImg",children:e.jsx(k,{className:"w-full h-full cursor-pointer"})}),e.jsx("input",{type:"file",id:"menuImg",className:"opacity-0",accept:"image/png, image/jpeg",...n("pic"),onChange:a=>N(a)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"카테고리"}),e.jsx("input",{type:"text",placeholder:"카테고리 이름",readOnly:!0,...n("categoryName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴명"}),e.jsx("input",{type:"text",placeholder:"메뉴명",...n("menuName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴가격"}),e.jsx("input",{type:"number",placeholder:"가격",...n("price")})]}),e.jsx("button",{type:"submit",children:"수정완료"})]})})})]})}export{je as default};
