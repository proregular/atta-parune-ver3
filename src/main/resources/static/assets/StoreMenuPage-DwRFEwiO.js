import{g as K,r as n,j as e,b as l,n as r,S as h}from"./index-XkiSkCIq.js";import{a as B}from"./index-0rdTubEZ.js";import{F as Q}from"./index-XVYYsUuH.js";import{a as X}from"./index-Cu020-X3.js";import{S as Y}from"./SideBar-91HAkM02.js";import{o as Z,c as _,d as ee,e as k,a as M}from"./index.esm-kZtGv46w.js";import{u as te}from"./index.esm-j2erOJPr.js";import{u as ae}from"./useModal-BISKceEi.js";import"./iconBase-DXw1Gjh5.js";import"./index-UaCtCoyR.js";import"./index-CVEDjnF9.js";import"./index-DVqpnsV0.js";import"./roleAtom-ClRng8Ap.js";const ie=r.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  background-color: #eee;
  max-height: 100vh;
  height: auto;
  overflow: hidden;
`,re=r.div`
  flex-wrap: wrap;
  padding: 30px 30px;
  padding-bottom: 30px;
  background-color: #fff;
  border-radius: 10px;
  width: 750px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
`,$=r.div`
  font-size: 24px;
  font-weight: 700;
`,oe=r.div`
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 320px;
  background-color: #fff;
`,ne=r.div`
  margin: 10px 0;
  width: calc(33.33% - 26.66px);
  height: 260px;
`,F=r.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  background-color: #eee;
`,se=r.div`
  margin-top: 5px;
  font-size: 20px;
`,ce=r.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 700;
`,P=r.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
`,E=r.div`
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
`,le=_({restaurantId:k(),categoryName:M(),menuName:M(),price:k(),pic:ee()});function Ie(){var D;const y=sessionStorage.getItem("restaurantId"),p=K(),[d,T]=n.useState(!1),[c,u]=n.useState({modal1:!1,modal2:!1}),[A,L]=n.useState([]),[j,b]=n.useState(),[g,z]=n.useState({}),[f,R]=n.useState({}),[O,J]=n.useState(),{register:o,handleSubmit:w,setValue:i}=te({mode:"onChange",resolver:Z(le)}),U=()=>{if(c.modal1)return"메뉴 추가하기";if(c.modal2)return"메뉴 수정하기"},{Modal:v,open:I}=ae({title:U()}),m=async()=>{try{const t=(await l.get(`/api/restaurant?restaurantId=${y}`)).data.resultData;z(t),L(t.menuCateList)}catch(a){console.log(a)}},G=async(a,t)=>{try{await l.delete(`/api/restaurant/menu?categoryId=${a}&menuId=${t}`,{headers:{Authorization:`Bearer ${p}`,"Content-Type":"multipart/form-data"}}),m()}catch(s){console.log(s)}},V=async a=>{try{await l.post("/api/restaurant/menu",a,{headers:{Authorization:`Bearer ${p}`,"Content-Type":"multipart/form-data"}}),u({}),h.fire({title:"메뉴가 추가되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),m()}catch(t){console.log(a),console.log(t)}},W=async a=>{try{await l.patch("/api/pic/restaurant/menu",a,{headers:{Authorization:`Bearer ${p}`,"Content-Type":"multipart/form-data"}})}catch(t){console.log(t)}},q=async a=>{try{await l.patch("/api/restaurant/menu",a,{headers:{Authorization:`Bearer ${p}`}}),u({}),h.fire({title:"메뉴가 수정되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),m()}catch(t){console.log(t)}},H=(a,t)=>{h.fire({title:"메뉴를 삭제하시겠습니까?",text:"삭제한 메뉴는 복구할 수 없습니다.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#79BAF2",cancelButtonColor:"#E44B58",confirmButtonText:"확인",cancelButtonText:"취소",reverseButtons:!1}).then(s=>{s.isConfirmed&&(G(a,t),h.fire("메뉴가 삭제 되었습니다.","","success"))})},C=a=>{const t=a.target.files[0];t&&(b(URL.createObjectURL(t)),i("pic",[t]))},N=a=>{console.log("폼데이터:",a);const t=new FormData,s={restaurantId:a.restaurantId,categoryName:a.categoryName,menuName:a.menuName,price:a.price};console.log(a.pic),t.append("pic",a.pic[0]),t.append("p",new Blob([JSON.stringify(s)],{type:"application/json"}));const S={menuId:f.menuId,categoryId:f.categoryId,menuName:a.menuName,price:a.price},x=new FormData;x.append("pic",a.pic[0]),x.append("p",new Blob([JSON.stringify({menuId:f.menuId})],{type:"application/json"})),console.log("FormData 확인:",[...t.entries()]),console.log("patchData 확인:",S),console.log("ImgData 확인:",[...x.entries()]),c.modal1?V(t):c.modal2&&(W(x),q(S))};return n.useEffect(()=>{m(),i("restaurantId",y)},[]),e.jsxs("div",{children:[e.jsxs(ie,{children:[e.jsx(Y,{}),e.jsx("div",{style:{padding:"10px 10px"},children:e.jsx(re,{className:"scrollbar-hide",children:A.map(a=>e.jsxs("div",{children:[e.jsx($,{children:a.categoryName}),e.jsx("div",{style:{display:"flex",gap:40,flexWrap:"wrap",marginBottom:30},children:a.menuList.map(t=>e.jsxs(ne,{children:[e.jsx(F,{src:`http://112.222.157.156:5222/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`,alt:"없음"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(se,{children:t.menuName}),d?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[e.jsx(Q,{onClick:()=>{R(s=>({...s,menuId:t.menuId,categoryId:a.categoryId})),J(`http://112.222.157.156:5222/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`),u({modal2:!0}),i("categoryName",a.categoryName),i("menuName",t.menuName),i("price",t.price),i("pic",`http://112.222.157.156:5222/pic/menu/${t.menuId}/${t==null?void 0:t.menuPic}`),I()},style:{width:20,height:20,cursor:"pointer"}}),e.jsx(X,{onClick:()=>H(a.categoryId,t.menuId),style:{width:25,height:25,cursor:"pointer"}})]}):e.jsx(e.Fragment,{})]}),e.jsxs(ce,{children:[t.price.toLocaleString(),"원"]})]},t.menuId))})]},a.categoryId))})}),e.jsxs(oe,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:50},children:e.jsx(F,{style:{borderRadius:100},src:`http://112.222.157.156:5222/pic/restaurant/${g.restaurantId}/${(D=g.restaurantPics)==null?void 0:D.filePath}`,alt:"없음"})}),e.jsx($,{style:{color:"#B3A1EC",marginLeft:0,textAlign:"center",marginBottom:40},children:g.restaurantName}),e.jsx(P,{onClick:()=>{u({modal1:!0}),i("categoryName",""),i("menuName",""),i("price",""),i("pic",null),b(null),I()},children:"메뉴 추가"}),e.jsx(P,{style:{backgroundColor:d?"#A28CE8":"#fff",color:d?"#fff":"#333"},onClick:()=>T(!d),children:"메뉴 수정"})]})]}),c.modal1&&e.jsx(v,{children:e.jsx(E,{children:e.jsxs("form",{onSubmit:w(N),children:[e.jsx("img",{src:j}),e.jsxs("p",{children:[e.jsx("label",{htmlFor:"menuImg",children:e.jsx(B,{style:{width:"100%",height:"100%"}})}),e.jsx("input",{type:"file",id:"menuImg",className:"opacity-0",accept:"image/png, image/jpeg",...o("pic"),onChange:a=>C(a)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"카테고리"}),e.jsx("input",{type:"text",placeholder:"카테고리 이름",...o("categoryName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴명"}),e.jsx("input",{type:"text",placeholder:"메뉴명",...o("menuName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴가격"}),e.jsx("input",{type:"number",placeholder:"가격",...o("price")})]}),e.jsx("button",{type:"submit",children:"추가"})]})})}),c.modal2&&e.jsx(v,{children:e.jsx(E,{children:e.jsxs("form",{onSubmit:w(N),children:[e.jsx("img",{src:j||O}),e.jsxs("p",{children:[e.jsx("label",{htmlFor:"menuImg",children:e.jsx(B,{style:{width:"100%",height:"100%"}})}),e.jsx("input",{type:"file",id:"menuImg",className:"opacity-0",accept:"image/png, image/jpeg",...o("pic"),onChange:a=>C(a)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"카테고리"}),e.jsx("input",{type:"text",placeholder:"카테고리 이름",...o("categoryName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴명"}),e.jsx("input",{type:"text",placeholder:"메뉴명",...o("menuName")})]}),e.jsxs("div",{children:[e.jsx("span",{children:"메뉴가격"}),e.jsx("input",{type:"number",placeholder:"가격",...o("price")})]}),e.jsx("button",{type:"submit",children:"수정완료"})]})})})]})}export{Ie as default};
