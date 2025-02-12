import{u as _,a as S,A as K,E as O,r as a,R as U,z as q,c as G,B as H,j as e,b as f,n as i,g as J,F,S as Q}from"./index-XkiSkCIq.js";import{B as V}from"./index-UsXWEp9N.js";import{F as W,c as X,d as Z,e as ee}from"./index-UaCtCoyR.js";import{b as te,c as se}from"./index-XVYYsUuH.js";import{I as oe}from"./index-Cu020-X3.js";import{c as ne}from"./index-ChvRCRnw.js";import{d as re}from"./dayjs.min-0i5z1ykI.js";import"./iconBase-DXw1Gjh5.js";const ae=i.div`
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
`,ie=i.div`
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
`,j=i.div`
  height: 10px;
  background-color: #ddd;
`,ce=i.div`
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
`,de=i.div`
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
`,M=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,ue=i.div`
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
`,v=i.div`
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
`;function Ce(){var D,k;const C=_(),h=S(K),L=O(),{time:b,count:P}=L.state||{},[r,A]=a.useState({}),[I,l]=a.useState(!1),[z,N]=a.useState([]),[c,p]=a.useState([]),[d,x]=a.useState([]),[le,w]=U(q),[u,y]=a.useState({}),R=S(G),{id:m}=H(),T=async()=>{try{const t=await f.get(`/api/restaurant?restaurantId=${m}`),o=t.data.resultData;A(t.data.resultData),N(o.menuCateList),console.log(t.data.resultData)}catch(t){console.log(t)}},B=async()=>{var o,s;const t=J();console.log(u);try{if(h){const n=await f.post("/api/reservation",u,{headers:{Authorization:t}});console.log(n.data.resultData),w(n.data.resultData),F((o=n.data)==null?void 0:o.resultData)}else{const n=await f.post("/api/order/with-detail",u,{headers:{Authorization:t}});console.log(n.data.resultData),w(n.data.resultData),F((s=n.data)==null?void 0:s.resultData)}Q.fire({title:`${b}에 예약이 완료 되었습니다.`,icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(n=>{n.isConfirmed&&C("/user")})}catch(n){console.log(n)}},$=()=>{switch(r.categoryId){case 1:return"한식";case 2:return"중식";case 3:return"일식";default:return"기타"}},E=t=>{const o=[...c];o[t].menuCount+=1,p(o);const s=[...d];s[t].menuCount+=1,x(s)},Y=t=>{const o=[...c];o[t].menuCount>1&&(o[t].menuCount-=1,p(o));const s=[...d];s[t].menuCount>1&&(s[t].menuCount-=1,x(s))};return a.useEffect(()=>{T(),console.log(m)},[]),a.useEffect(()=>{const t=window.sessionStorage.getItem("userId");if(h){const s=`${re(new Date).format("YYYY-MM-DD")} ${b}`;console.log("현재 시간",s),console.log(d),y({userId:parseInt(t),restaurantId:parseInt(m),reservationTime:s,reservationPeopleCount:P,userPhone:R.phone.replace(/-/g,""),menuList:[...d]})}else y({userId:t,restaurantId:parseInt(m),orderDetails:[...d]})},[d]),a.useEffect(()=>{console.log("포스트 데이터",u)},[u]),e.jsxs("div",{style:{height:"100vh"},children:[e.jsx("img",{src:`http://112.222.157.156:5222/pic/restaurant/${r.restaurantId}/${(D=r.restaurantPics)==null?void 0:D.filePath}`,alt:"가게 이미지",style:{width:"100%",height:260,position:"relative"}}),e.jsx(ae,{children:e.jsx(oe,{style:{width:"100%",height:"100%"},onClick:()=>C(-1)})}),e.jsxs(ie,{children:[e.jsxs("div",{children:[(k=r==null?void 0:r.restaurantAddress)==null?void 0:k.match(/^(?:대구광역시|대구)\s*(.+)/)[1]," ",e.jsx("span",{children:"I"})," ",$()]}),e.jsx("h1",{children:r.restaurantName}),e.jsx("div",{children:r.restaurantDescription}),e.jsxs("h2",{children:[e.jsx(ne,{}),r.restaurantAddress]}),e.jsxs("h2",{style:{marginTop:10},children:[e.jsx(V,{}),"매장 연락처 : ",r.restaurantNumber]})]}),e.jsx(j,{}),e.jsxs(ce,{children:[e.jsx("h1",{children:"메뉴 선택"}),z.map((t,o)=>e.jsx("div",{children:t.menuList.map(s=>e.jsxs("div",{children:[e.jsxs(de,{children:[e.jsx("img",{src:`http://112.222.157.156:5222/pic/menu/${s.menuId}/${s==null?void 0:s.menuPic}`,alt:"메뉴 이미지"}),e.jsxs("div",{onClick:()=>console.log(),children:[e.jsx("div",{children:s.menuName}),e.jsxs("span",{children:[s.price.toLocaleString("ko-KR"),"원"]})]}),e.jsx("div",{style:{position:"absolute",right:20,cursor:"pointer"},children:c.some(n=>n.menuId===s.menuId)?e.jsx(W,{onClick:()=>{p(n=>n.filter(g=>g.menuId!==s.menuId)),x(n=>n.filter(g=>g.menuId!==s.menuId)),l(!0)}}):e.jsx(X,{onClick:()=>{p(n=>[...n,{menuId:s.menuId,menuName:s.menuName,price:s.price,menuCount:1}]),x(n=>[...n,{menuId:s.menuId,menuCount:1}]),l(!0)}})})]}),e.jsx(j,{style:{height:1,backgroundColor:"#eee",marginBottom:10}})]},s.menuId))},o))]}),e.jsxs(ue,{children:[e.jsx(M,{children:I?e.jsx(Z,{style:{color:"#6F6F6F",cursor:"pointer"},onClick:()=>l(!1)}):e.jsx(ee,{style:{color:"#6F6F6F",cursor:"pointer"},onClick:()=>l(!0)})}),I&&e.jsxs("div",{children:[c.map((t,o)=>e.jsxs("div",{children:[e.jsxs(v,{children:[e.jsx("p",{children:t.menuName}),e.jsx("div",{children:t.price.toLocaleString()})]}),e.jsxs(v,{style:{margin:"5px 30px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15},children:[e.jsx("p",{onClick:()=>Y(o),children:e.jsx(te,{className:"cursor-pointer"})}),e.jsx("p",{children:t.menuCount}),e.jsx("p",{onClick:()=>E(o),children:e.jsx(se,{className:"cursor-pointer"})})]}),e.jsxs("div",{children:[(t.menuCount*t.price).toLocaleString("ko-KR"),"원"]})]})]},o)),e.jsx(j,{style:{height:1,backgroundColor:"#eee",margin:"10px 0"}}),e.jsxs(v,{style:{marginBottom:10},children:[e.jsxs("p",{children:["총 수량 ",c.reduce((t,o)=>t+o.menuCount,0),"개"]}),e.jsxs("p",{children:["총"," ",c.reduce((t,o)=>t+o.menuCount*o.price,0).toLocaleString("ko-KR"),"원"]})]}),e.jsx(M,{children:e.jsx("button",{onClick:()=>B(),children:h?"예약하기":"결제하기"})})]})]})]})}export{Ce as default};
