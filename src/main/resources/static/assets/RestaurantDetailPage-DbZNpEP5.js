import{c,R as M,aG as P,ag as T,u as A,af as _,j as e,D as C,x as E,ae as O,aH as G,I as H,q as x,p as K,J as i,w as q}from"./index-DA5DsCSi.js";import{B as N}from"./index-B5MwJcJZ.js";import{F as J}from"./index-CNlTsVLy.js";import{p as U}from"./purify.es-DhD2mIk-.js";const Q=i.div`
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
`,V=i.div`
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  div > div {
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
    font-size: 1.25rem;
  }
  h2 {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
  }
`,I=i.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
`,W=i.div`
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
`,X=i.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  img {
    width: 75px;
    height: 75px;
    border-radius: 5px;
  }
`,Y=i.div`
  display: flex;
  gap: 35px;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: #fff;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  button {
    padding: 5px 40px;
    font-size: 14px;
    background-color: #6f4cdb;
    color: #fff;
    border-radius: 5px;
  }
`,Z=i.div`
  width: 20px;
  height: 20px;
  background-color: #ddd;
  color: #fff;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  padding-right: 1px;
  font-size: 9px;
`,p=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  margin-bottom: 10px;
  span {
    width: 40px;
    margin-right: 10px;
  }
  p {
    padding: 2px 5px;
    border-radius: 2px;
    background-color: #e7e1f9;
    color: #fff;
    font-size: 8px;
  }
`,D=i.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 5px 5px 0 0;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`,ee=i.div`
  display: flex;
  justify-content: center;
  button {
    font-size: 10px;
    padding: 5px 100px;
    border-radius: 5px;
    background-color: #6f4cdb;
    color: #fff;
  }
`;function ae(){var b,v,w,y,k;const[t,B]=c.useState({}),[u,h]=c.useState(!1),[te,g]=M(P),[o,d]=c.useState({}),[f,S]=c.useState([]),j=((b=T().state)==null?void 0:b.from)||"/user/restaurant";console.log("이전 경로는 : ",j);const a=A(),{id:l}=_(),F=async()=>{try{const r=(await K.get(`/api/restaurant?restaurantId=${l}`)).data.resultData;console.log(r.menuCateList),S(r.menuCateList),B(r),console.log(r)}catch(n){console.log(n)}},z=()=>{switch(t.categoryId){case 1:return"한식";case 2:return"중식";case 3:return"일식";default:return"잘못된 값"}},m=n=>{const r=q();n?r?(g(!0),h(!0)):x.fire({title:"로그인이 필요한 서비스입니다.",text:"확인을 누르면 로그인으로 이동합니다.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(s=>{s.isConfirmed&&a("/auth")}):r?(g(!1),a(`/user/restaurant/detail/reserve/${l}`)):x.fire({title:"로그인이 필요한 서비스입니다.",text:"확인을 누르면 로그인으로 이동합니다.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(s=>{s.isConfirmed&&a("/auth")})},R=[1,2,3,4,5,6,7,8],$=["11:30","12:00","12:30","13:00","13:30"];return c.useEffect(()=>{F(),console.log(l)},[]),e.jsxs("div",{style:{height:"100vh",backgroundColor:"white"},children:[(v=t==null?void 0:t.restaurantPics)!=null&&v.filePath?e.jsx("img",{src:`${C}/pic/restaurant/${t==null?void 0:t.restaurantId}/${(w=t==null?void 0:t.restaurantPics)==null?void 0:w.filePath}`,alt:"가게 이미지",style:{width:"100%",height:260,position:"relative"}}):e.jsx("img",{src:"/restaurant_default.png",className:"bg-cover bg-gray py-6"}),e.jsx(Q,{children:e.jsx(E,{style:{width:"100%",height:"100%"},onClick:()=>a(j)})}),e.jsx(V,{onClick:()=>console.log(f),children:e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{children:[(y=t==null?void 0:t.restaurantAddress)==null?void 0:y.match(/^(?:대구광역시|대구)\s*(.+)/)[1]," ",e.jsx("span",{children:"I"})," ",z()]}),e.jsxs("section",{className:"flex w-full justify-between items-center pr-16",children:[e.jsx("h1",{children:t==null?void 0:t.restaurantName}),e.jsxs("div",{className:"flex w-1/3 h-full items-center gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1 ",children:[e.jsx(J,{className:"text-yellow text-lg drop-shadow-sm mb-0.5"}),e.jsx("p",{className:"tracking-wide text-black text-base",children:(k=t==null?void 0:t.ratingAvg)==null?void 0:k.toFixed(1)})]}),e.jsx("p",{className:"text-3xl text-darkGray pb-1.5 ",children:"·"}),e.jsxs("div",{className:"flex text-nowrap text-base gap-1.5 items-center cursor-pointer",onClick:()=>a(`/user/restaurant/detail/review/${t.restaurantId}`,{state:{reviewCnt:t==null?void 0:t.reviewCnt}}),children:[e.jsx("p",{className:"text-black text-base",children:"리뷰"}),e.jsxs("p",{className:"text-black text-base",children:[t==null?void 0:t.reviewCnt," 개"]}),e.jsx(O,{className:"text-black text-base"})]})]})]}),e.jsx("div",{dangerouslySetInnerHTML:{__html:U.sanitize(String(t==null?void 0:t.restaurantDescription))}}),e.jsxs("h2",{children:[e.jsx(G,{}),t==null?void 0:t.restaurantAddress]}),e.jsxs("h2",{style:{marginTop:10},children:[e.jsx(N,{}),"매장 연락처 : ",t==null?void 0:t.restaurantNumber]})]})}),e.jsx(I,{}),e.jsxs(W,{children:[e.jsx("h1",{children:"메뉴"}),f.map((n,r)=>e.jsx("div",{children:n.menuList.map((s,L)=>e.jsxs("div",{children:[e.jsxs(X,{children:[e.jsx("img",{src:`${C}/pic/menu/${s==null?void 0:s.menuId}/${s==null?void 0:s.menuPic}`,alt:"메뉴 이미지"}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{children:s==null?void 0:s.menuName}),e.jsxs("span",{children:[s==null?void 0:s.price.toLocaleString("ko-KR"),"원"]})]}),e.jsx("span",{className:"text-darkGray text-opacity-60",children:s==null?void 0:s.details})]})]}),e.jsx(I,{style:{height:1,backgroundColor:"#eee",marginBottom:10}})]},L))},r))]}),!u&&e.jsxs(Y,{children:[e.jsx("button",{onClick:()=>m(!1),children:"앉아서 주문"}),e.jsx("button",{onClick:()=>m(!0),children:"예약하기"})]}),u&&e.jsxs(D,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginRight:10},children:e.jsx(H,{onClick:()=>{h(!1),d({})}})}),e.jsx("div",{style:{textAlign:"center",fontSize:12,marginBottom:10},children:"예약할 시간과 인원을 선택해주세요"}),e.jsxs(p,{children:[e.jsx("span",{children:"인원수"}),e.jsx("div",{style:{display:"flex",gap:10},children:R.map((n,r)=>e.jsxs(Z,{style:{backgroundColor:n===o.count&&"#6F4CDB"},onClick:()=>d({...o,count:n}),children:[n,"명"]},r))})]}),e.jsxs(p,{children:[e.jsx("span",{children:"시간 선택"}),e.jsx("div",{style:{display:"flex",gap:5},children:$.map((n,r)=>e.jsxs("p",{style:{backgroundColor:n===o.time&&"#6F4CDB"},onClick:()=>d({...o,time:n}),children:[n==="11:30"?"오전":"오후"," ",n==="13:00"?"1:00":n==="13:30"?"1:30":n]},r))})]}),e.jsxs(p,{style:{gap:5,color:"#FF9500"},children:[e.jsx(N,{}),e.jsx("div",{children:"9명 이상은 가게에 직접 문의해주세요"})]}),e.jsx(ee,{children:e.jsx("button",{onClick:()=>{o.time&&o.count?a(`/user/restaurant/detail/reserve/${l}`,{state:o}):x.fire({title:"시간과 인원을 선택해주세요.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1})},children:"확인"})})]})]})}export{ae as default};
