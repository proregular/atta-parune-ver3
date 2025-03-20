import{u as q,e as F,aH as H,ah as J,c as i,R as Q,aw as G,b as V,ag as W,a0 as X,j as e,D as T,x as Z,aI as ee,K as te,aN as se,aO as ne,aP as oe,p as w,q as j,J as c,w as re,aQ as B}from"./index-DE1blNUs.js";import{B as ae}from"./index-DQwe6qxQ.js";import{b as ie,c as ce}from"./index-DMy5bR6J.js";const de=c.div`
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
`,ue=c.div`
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
`,b=c.div`
  height: 10px;
  background-color: #ddd;
`,le=c.div`
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
`,pe=c.div`
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
`,L=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,xe=c.div`
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
`,I=c.div`
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
`;function je(){var M,S;const C=q(),v=F(H),P=J(),{time:x,count:R}=P.state||{},[a,N]=i.useState({}),[D,m]=i.useState(!1),[$,A]=i.useState([]),[d,h]=i.useState([]),[u,g]=i.useState([]),[me,k]=Q(G),[l,y]=i.useState({}),z=F(V),{id:f}=W(),O=async()=>{try{const t=await w.get(`/api/restaurant?restaurantId=${f}`),n=t.data.resultData;N(t.data.resultData),A(n.menuCateList),console.log(t.data.resultData)}catch(t){console.log(t),j.fire({title:"주문에 실패했습니다",text:"다시 한번 시도해주세요",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(n=>{n.isConfirmed})}},E=async()=>{var s,r;const t=re();console.log(l),console.log(new Date);try{if(v){const o=await w.post("/api/reservation",l,{headers:{Authorization:t}});console.log(o.data.resultData),k(o.data.resultData),B((s=o.data)==null?void 0:s.resultData),j.fire({title:`${x}에 예약이 완료 되었습니다.`,icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(p=>{p.isConfirmed&&C("/user")})}else{const o=await w.post("/api/order/with-detail",l,{headers:{Authorization:t}});console.log(o.data.resultData),k(o.data.resultData),B((r=o.data)==null?void 0:r.resultData);const p=x?`${x}에 예약이 완료 되었습니다.`:"예약이 완료 되었습니다.";j.fire({title:p,icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(U=>{U.isConfirmed&&C("/user")})}}catch(o){console.log(o),j.fire({title:"예약에 실패했습니다",text:"다시 한번 시도해주세요",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(p=>{p.isConfirmed})}},K=()=>{switch(a.categoryId){case 1:return"한식";case 2:return"중식";case 3:return"일식";default:return"기타"}},_=t=>{const n=[...d];n[t].menuCount+=1,h(n);const s=[...u];s[t].menuCount+=1,g(s)},Y=t=>{const n=[...d];n[t].menuCount>1&&(n[t].menuCount-=1,h(n));const s=[...u];s[t].menuCount>1&&(s[t].menuCount-=1,g(s))};return i.useEffect(()=>{O(),console.log(f)},[]),i.useEffect(()=>{const t=window.sessionStorage.getItem("userId");if(v){const s=`${X(new Date).format("YYYY-MM-DD")}T${x}`;y({userId:parseInt(t),restaurantId:parseInt(f),reservationTime:s,reservationPeopleCount:R,userPhone:z.phone.replace(/-/g,""),menuList:[...u]})}else y({userId:t,restaurantId:parseInt(f),orderDetails:[...u]})},[u]),i.useEffect(()=>{console.log("포스트 데이터",l)},[l]),e.jsxs("div",{style:{height:"100vh"},children:[e.jsx("img",{src:`${T}/pic/restaurant/${a.restaurantId}/${(M=a.restaurantPics)==null?void 0:M.filePath}`,alt:"가게 이미지",style:{width:"100%",height:260,position:"relative"}}),e.jsx(de,{children:e.jsx(Z,{style:{width:"100%",height:"100%"},onClick:()=>C(-1)})}),e.jsxs(ue,{children:[e.jsxs("div",{children:[(S=a==null?void 0:a.restaurantAddress)==null?void 0:S.match(/^(?:대구광역시|대구)\s*(.+)/)[1]," ",e.jsx("span",{children:"I"})," ",K()]}),e.jsx("h1",{children:a.restaurantName}),e.jsx("div",{children:a.restaurantDescription}),e.jsxs("h2",{children:[e.jsx(ee,{}),a.restaurantAddress]}),e.jsxs("h2",{style:{marginTop:10},children:[e.jsx(ae,{}),"매장 연락처 : ",a.restaurantNumber]})]}),e.jsx(b,{}),e.jsxs(le,{children:[e.jsx("h1",{children:"메뉴 선택"}),$.map((t,n)=>e.jsx("div",{children:t.menuList.map(s=>e.jsxs("div",{children:[e.jsxs(pe,{children:[e.jsx("img",{src:`${T}/pic/menu/${s.menuId}/${s==null?void 0:s.menuPic}`,alt:"메뉴 이미지"}),e.jsxs("div",{onClick:()=>console.log(),children:[e.jsx("div",{children:s.menuName}),e.jsxs("span",{children:[s.price.toLocaleString("ko-KR"),"원"]})]}),e.jsx("div",{style:{position:"absolute",right:20,cursor:"pointer"},children:d.some(r=>r.menuId===s.menuId)?e.jsx(te,{onClick:()=>{h(r=>r.filter(o=>o.menuId!==s.menuId)),g(r=>r.filter(o=>o.menuId!==s.menuId)),m(!0)}}):e.jsx(se,{onClick:()=>{h(r=>[...r,{menuId:s.menuId,menuName:s.menuName,price:s.price,menuCount:1}]),g(r=>[...r,{menuId:s.menuId,menuCount:1}]),m(!0)}})})]}),e.jsx(b,{style:{height:1,backgroundColor:"#eee",marginBottom:10}})]},s.menuId))},n))]}),e.jsxs(xe,{children:[e.jsx(L,{children:D?e.jsx(ne,{style:{color:"#6F6F6F",cursor:"pointer"},onClick:()=>m(!1)}):e.jsx(oe,{style:{color:"#6F6F6F",cursor:"pointer"},onClick:()=>m(!0)})}),D&&e.jsxs("div",{children:[d.map((t,n)=>e.jsxs("div",{children:[e.jsxs(I,{children:[e.jsx("p",{children:t.menuName}),e.jsx("div",{children:t.price.toLocaleString()})]}),e.jsxs(I,{style:{margin:"5px 30px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15},children:[e.jsx("p",{onClick:()=>Y(n),children:e.jsx(ie,{className:"cursor-pointer"})}),e.jsx("p",{children:t.menuCount}),e.jsx("p",{onClick:()=>_(n),children:e.jsx(ce,{className:"cursor-pointer"})})]}),e.jsxs("div",{children:[(t.menuCount*t.price).toLocaleString("ko-KR"),"원"]})]})]},n)),e.jsx(b,{style:{height:1,backgroundColor:"#eee",margin:"10px 0"}}),e.jsxs(I,{style:{marginBottom:10},children:[e.jsxs("p",{children:["총 수량 ",d.reduce((t,n)=>t+n.menuCount,0),"개"]}),e.jsxs("p",{children:["총"," ",d.reduce((t,n)=>t+n.menuCount*n.price,0).toLocaleString("ko-KR"),"원"]})]}),e.jsx(L,{children:e.jsx("button",{onClick:()=>E(),children:v?"예약하기":"결제하기"})})]})]})]})}export{je as default};
