import{y as _,r as i,j as e,J as f,t as q,g as l,n,h}from"./index-BEM99ApS.js";import{c as B}from"./index-EXaYp185.js";import{F as H}from"./index-TzKRpCpo.js";import{S as Q}from"./SideBar-ClWAnffy.js";import{o as X,c as Y,d as Z,e as S,a as k}from"./index.esm-zOLO25P3.js";import{u as ee}from"./index.esm-CxUxhHPv.js";import{u as te}from"./useModal-DGcU7Q0C.js";import"./index-z-0vrsf_.js";const ae=n.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  background-color: #eee;
  max-height: 100vh;
  height: auto;
  overflow: hidden;
`,oe=n.div`
  flex-wrap: wrap;
  padding: 20px 0;
  padding-bottom: 30px;
  border-radius: 10px;
  width: 830px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
`,$=n.div`
  padding-left: 10px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`,ne=n.div`
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 350px;
  background-color: #fff;
`,re=n.div`
  background-color: #fff;
  margin: 10px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
`,ie=n.img`
  width: 210px;
  height: 210px;
  border-radius: 5px;
  background-color: #eee;
`,se=n.div`
  margin-top: 5px;
  font-size: 20px;
`,ce=n.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;
`,M=n.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
`,E=n.div`
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
`,le=Y({restaurantId:S(),categoryName:k(),menuName:k(),price:S(),pic:Z()});function ye(){const y=sessionStorage.getItem("restaurantId"),p=_(),[d,F]=i.useState(!1),[c,u]=i.useState({modal1:!1,modal2:!1}),[P,T]=i.useState([]),[j,b]=i.useState(),[A,L]=i.useState({}),[g,z]=i.useState({}),[R,O]=i.useState(),{register:r,handleSubmit:w,setValue:o}=ee({mode:"onChange",resolver:X(le)}),J=()=>{if(c.modal1)return"메뉴 추가하기";if(c.modal2)return"메뉴 수정하기"},{Modal:v,open:I}=te({title:J()}),x=async()=>{try{const t=(await l.get(`/api/restaurant?restaurantId=${y}`)).data.resultData;L(t),T(t.menuCateList)}catch(a){console.log(a)}},U=async(a,t)=>{try{await l.delete(`/api/restaurant/menu?categoryId=${a}&menuId=${t}`,{headers:{Authorization:`Bearer ${p}`,"Content-Type":"multipart/form-data"}}),x()}catch(s){console.log(s)}},G=async a=>{try{await l.post("/api/restaurant/menu",a,{headers:{Authorization:`Bearer ${p}`,"Content-Type":"multipart/form-data"}}),u({}),h.fire({title:"메뉴가 추가되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),x()}catch(t){console.log(a),console.log(t)}},K=async a=>{try{await l.patch("/api/pic/restaurant/menu",a,{headers:{Authorization:`Bearer ${p}`,"Content-Type":"multipart/form-data"}})}catch(t){console.log(t)}},V=async a=>{try{await l.patch("/api/restaurant/menu",a,{headers:{Authorization:`Bearer ${p}`}}),u({}),h.fire({title:"메뉴가 수정되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),x()}catch(t){console.log(t)}},W=(a,t)=>{h.fire({title:"메뉴를 삭제하시겠습니까?",text:"삭제한 메뉴는 복구할 수 없습니다.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#79BAF2",cancelButtonColor:"#E44B58",confirmButtonText:"확인",cancelButtonText:"취소",reverseButtons:!1}).then(s=>{s.isConfirmed&&(U(a,t),h.fire("메뉴가 삭제 되었습니다.","","success"))})},C=a=>{const t=a.target.files[0];t&&(b(URL.createObjectURL(t)),o("pic",[t]))},N=a=>{console.log("폼데이터:",a);const t=new FormData,s={restaurantId:a.restaurantId,categoryName:a.categoryName,menuName:a.menuName,price:a.price};console.log(a.pic),t.append("pic",a.pic[0]),t.append("p",new Blob([JSON.stringify(s)],{type:"application/json"}));const D={menuId:g.menuId,categoryId:g.categoryId,menuName:a.menuName,price:a.price},m=new FormData;m.append("pic",a.pic[0]),m.append("p",new Blob([JSON.stringify({menuId:g.menuId})],{type:"application/json"})),console.log("FormData 확인:",[...t.entries()]),console.log("patchData 확인:",D),console.log("ImgData 확인:",[...m.entries()]),c.modal1?G(t):c.modal2&&(K(m),V(D))};return i.useEffect(()=>{x(),o("restaurantId",y)},[]),e.jsxs("div",{children:[e.jsxs(ae,{children:[e.jsx(Q,{}),e.jsx("div",{style:{padding:"10px 10px"},children:e.jsx(oe,{className:"scrollbar-hide",children:P.map(a=>e.jsxs("div",{children:[e.jsx($,{children:a.categoryName}),e.jsx("div",{style:{display:"flex",gap:40,flexWrap:"wrap",marginBottom:30},children:a.menuList.map(t=>e.jsxs(re,{children:[e.jsx(ie,{src:`${f}/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`,alt:"없음"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(se,{children:t.menuName}),d?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[e.jsx(H,{onClick:()=>{z(s=>({...s,menuId:t.menuId,categoryId:a.categoryId})),O(`${f}/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`),u({modal2:!0}),o("categoryName",a.categoryName),o("menuName",t.menuName),o("price",t.price),o("pic",`${f}/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`),I()},style:{width:20,height:20,cursor:"pointer"}}),e.jsx(q,{onClick:()=>W(a.categoryId,t.menuId),style:{width:25,height:25,cursor:"pointer"}})]}):e.jsx(e.Fragment,{})]}),e.jsxs(ce,{children:[t.price.toLocaleString(),"원"]})]},t.menuId))})]},a.categoryId))})}),e.jsxs(ne,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"}}),e.jsx($,{style:{color:"#B3A1EC",textAlign:"center",marginBottom:250,marginTop:40},children:A.restaurantName}),e.jsx(M,{onClick:()=>{u({modal1:!0}),o("categoryName",""),o("menuName",""),o("price",""),o("pic",null),b(null),I()},children:"메뉴 추가"}),e.jsx(M,{style:{backgroundColor:d?"#A28CE8":"#fff",color:d?"#fff":"#333"},onClick:()=>F(!d),children:"메뉴 수정"})]})]}),c.modal1&&e.jsx(v,{children:e.jsx(E,{children:e.jsxs("form",{onSubmit:w(N),children:[e.jsx("img",{src:j}),e.jsxs("p",{children:[e.jsx("label",{htmlFor:"menuImg",children:e.jsx(B,{className:"w-full h-full cursor-pointer"})}),e.jsx("input",{type:"file",id:"menuImg",className:"opacity-0",accept:"image/png, image/jpeg",...r("pic"),onChange:a=>C(a)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"카테고리"}),e.jsx("input",{type:"text",placeholder:"카테고리 이름",...r("categoryName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴명"}),e.jsx("input",{type:"text",placeholder:"메뉴명",...r("menuName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴가격"}),e.jsx("input",{type:"number",placeholder:"가격",...r("price")})]}),e.jsx("button",{type:"submit",children:"추가"})]})})}),c.modal2&&e.jsx(v,{children:e.jsx(E,{children:e.jsxs("form",{onSubmit:w(N),children:[e.jsx("img",{src:j||R}),e.jsxs("p",{children:[e.jsx("label",{htmlFor:"menuImg",children:e.jsx(B,{className:"w-full h-full cursor-pointer"})}),e.jsx("input",{type:"file",id:"menuImg",className:"opacity-0",accept:"image/png, image/jpeg",...r("pic"),onChange:a=>C(a)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"카테고리"}),e.jsx("input",{type:"text",placeholder:"카테고리 이름",...r("categoryName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴명"}),e.jsx("input",{type:"text",placeholder:"메뉴명",...r("menuName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴가격"}),e.jsx("input",{type:"number",placeholder:"가격",...r("price")})]}),e.jsx("button",{type:"submit",children:"수정완료"})]})})})]})}export{ye as default};
