import{u as U,D as M,ad as H,w as q,r as i,m as G,a9 as J,H as Q,v as V,j as e,N as F,I as W,ae as X,h as Z,ai as ee,aj as te,ak as se,c as C,n as c,g as ne,al as T,d as L}from"./index-ji0Yrnpj.js";import{B as oe}from"./index-Dar3Tgle.js";import{b as ae,c as re}from"./index-DaTKmmlO.js";import{d as ie}from"./dayjs.min-BTg5tAUl.js";const ce=c.div`
  background-color: #fff;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  padding: 3px;
  cursor: pointer;
  position: absolute;
  top: 0;
  margin: 10px 20px;
  color: #333;
`,de=c.div`
  padding: 15px 25px;
  div {
    font-size: 10px;
    color: #bababa;
    margin-bottom: 5px;
  }
  span {
    color: #eee;
    padding: 0 5px;
  }
  h1 {
    margin-bottom: 5px;
  }
  h2 {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
  }
`,w=c.div`
  height: 10px;
  background-color: #ddd;
`,ue=c.div`
  overflow-y: auto;
  padding: 15px 25px;
  padding-bottom: 100px;
  div {
    color: #707070;
  }
  span {
    word-wrap: break-word;
    font-size: 12px;
    font-weight: 700;
  }
  h1 {
    font-weight: 700;
    margin-bottom: 20px;
  }
`,le=c.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  img {
    width: 75px;
    height: 75px;
    border-radius: 5px;
  }
`,P=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,pe=c.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  padding: 10px 10px;
  border-radius: 5px 5px 0 0;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  transition: height 0.3s ease-in-out;
  button {
    padding: 5px 40px;
    font-size: 14px;
    background-color: #6f4cdb;
    color: #fff;
    border-radius: 5px;
  }
`,b=c.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 0 30px;
  p {
    font-size: 14px;
  }
  div {
    font-size: 12px;
    color: #888888;
  }
  span {
  }
`;function je(){var y,S;const g=U(),f=M(H),N=q(),{time:j,count:R}=N.state||{},[r,$]=i.useState({}),[I,p]=i.useState(!1),[A,B]=i.useState([]),[d,x]=i.useState([]),[u,m]=i.useState([]),[xe,D]=G(J),[l,k]=i.useState({}),z=M(Q),{id:h}=V(),E=async()=>{try{const t=await C.get(`/api/restaurant?restaurantId=${h}`),n=t.data.resultData;$(t.data.resultData),B(n.menuCateList),console.log(t.data.resultData)}catch(t){console.log(t)}},_=async()=>{var s,a;const t=ne();console.log(l),console.log(new Date);try{if(f){const o=await C.post("/api/reservation",l,{headers:{Authorization:t}});console.log(o.data.resultData),D(o.data.resultData),T((s=o.data)==null?void 0:s.resultData),L.fire({title:`${j}에 예약이 완료 되었습니다.`,icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(v=>{v.isConfirmed&&g("/user")})}else{const o=await C.post("/api/order/with-detail",l,{headers:{Authorization:t}});console.log(o.data.resultData),D(o.data.resultData),T((a=o.data)==null?void 0:a.resultData),L.fire({title:`${j}에 예약이 완료 되었습니다.`,icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(v=>{v.isConfirmed&&g("/user")})}}catch(o){console.log(o)}},K=()=>{switch(r.categoryId){case 1:return"한식";case 2:return"중식";case 3:return"일식";default:return"기타"}},O=t=>{const n=[...d];n[t].menuCount+=1,x(n);const s=[...u];s[t].menuCount+=1,m(s)},Y=t=>{const n=[...d];n[t].menuCount>1&&(n[t].menuCount-=1,x(n));const s=[...u];s[t].menuCount>1&&(s[t].menuCount-=1,m(s))};return i.useEffect(()=>{E(),console.log(h)},[]),i.useEffect(()=>{const t=window.sessionStorage.getItem("userId");if(f){const s=`${ie(new Date).format("YYYY-MM-DD")}T${j}`;k({userId:parseInt(t),restaurantId:parseInt(h),reservationTime:s,reservationPeopleCount:R,userPhone:z.phone.replace(/-/g,""),menuList:[...u]})}else k({userId:t,restaurantId:parseInt(h),orderDetails:[...u]})},[u]),i.useEffect(()=>{console.log("포스트 데이터",l)},[l]),e.jsxs("div",{style:{height:"100vh"},children:[e.jsx("img",{src:`${F}/pic/restaurant/${r.restaurantId}/${(y=r.restaurantPics)==null?void 0:y.filePath}`,alt:"가게 이미지",style:{width:"100%",height:260,position:"relative"}}),e.jsx(ce,{children:e.jsx(W,{style:{width:"100%",height:"100%"},onClick:()=>g(-1)})}),e.jsxs(de,{children:[e.jsxs("div",{children:[(S=r==null?void 0:r.restaurantAddress)==null?void 0:S.match(/^(?:대구광역시|대구)\s*(.+)/)[1]," ",e.jsx("span",{children:"I"})," ",K()]}),e.jsx("h1",{children:r.restaurantName}),e.jsx("div",{children:r.restaurantDescription}),e.jsxs("h2",{children:[e.jsx(X,{}),r.restaurantAddress]}),e.jsxs("h2",{style:{marginTop:10},children:[e.jsx(oe,{}),"매장 연락처 : ",r.restaurantNumber]})]}),e.jsx(w,{}),e.jsxs(ue,{children:[e.jsx("h1",{children:"메뉴 선택"}),A.map((t,n)=>e.jsx("div",{children:t.menuList.map(s=>e.jsxs("div",{children:[e.jsxs(le,{children:[e.jsx("img",{src:`${F}/pic/menu/${s.menuId}/${s==null?void 0:s.menuPic}`,alt:"메뉴 이미지"}),e.jsxs("div",{onClick:()=>console.log(),children:[e.jsx("div",{children:s.menuName}),e.jsxs("span",{children:[s.price.toLocaleString("ko-KR"),"원"]})]}),e.jsx("div",{style:{position:"absolute",right:20,cursor:"pointer"},children:d.some(a=>a.menuId===s.menuId)?e.jsx(Z,{onClick:()=>{x(a=>a.filter(o=>o.menuId!==s.menuId)),m(a=>a.filter(o=>o.menuId!==s.menuId)),p(!0)}}):e.jsx(ee,{onClick:()=>{x(a=>[...a,{menuId:s.menuId,menuName:s.menuName,price:s.price,menuCount:1}]),m(a=>[...a,{menuId:s.menuId,menuCount:1}]),p(!0)}})})]}),e.jsx(w,{style:{height:1,backgroundColor:"#eee",marginBottom:10}})]},s.menuId))},n))]}),e.jsxs(pe,{children:[e.jsx(P,{children:I?e.jsx(te,{style:{color:"#6F6F6F",cursor:"pointer"},onClick:()=>p(!1)}):e.jsx(se,{style:{color:"#6F6F6F",cursor:"pointer"},onClick:()=>p(!0)})}),I&&e.jsxs("div",{children:[d.map((t,n)=>e.jsxs("div",{children:[e.jsxs(b,{children:[e.jsx("p",{children:t.menuName}),e.jsx("div",{children:t.price.toLocaleString()})]}),e.jsxs(b,{style:{margin:"5px 30px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15},children:[e.jsx("p",{onClick:()=>Y(n),children:e.jsx(ae,{className:"cursor-pointer"})}),e.jsx("p",{children:t.menuCount}),e.jsx("p",{onClick:()=>O(n),children:e.jsx(re,{className:"cursor-pointer"})})]}),e.jsxs("div",{children:[(t.menuCount*t.price).toLocaleString("ko-KR"),"원"]})]})]},n)),e.jsx(w,{style:{height:1,backgroundColor:"#eee",margin:"10px 0"}}),e.jsxs(b,{style:{marginBottom:10},children:[e.jsxs("p",{children:["총 수량 ",d.reduce((t,n)=>t+n.menuCount,0),"개"]}),e.jsxs("p",{children:["총"," ",d.reduce((t,n)=>t+n.menuCount*n.price,0).toLocaleString("ko-KR"),"원"]})]}),e.jsx(P,{children:e.jsx("button",{onClick:()=>_(),children:f?"예약하기":"결제하기"})})]})]})]})}export{je as default};
