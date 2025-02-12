import{r as d,R as F,A as M,u as P,B as N,j as e,S as x,b as T,n as o,g as $}from"./index-XkiSkCIq.js";import{B as y}from"./index-UsXWEp9N.js";import{I as L,a as A}from"./index-Cu020-X3.js";import{c as E}from"./index-ChvRCRnw.js";import"./iconBase-DXw1Gjh5.js";const O=o.div`
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
`,_=o.div`
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
`,C=o.div`
  width: 100%;
  height: 10px;
  background-color: #ddd;
`,D=o.div`
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
`,G=o.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  img {
    width: 75px;
    height: 75px;
    border-radius: 5px;
  }
`,K=o.div`
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
`,q=o.div`
  width: 20px;
  height: 20px;
  background-color: #ddd;
  color: #fff;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  padding-right: 1px;
  font-size: 9px;
`,p=o.div`
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
`,H=o.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 5px 5px 0 0;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`,J=o.div`
  display: flex;
  justify-content: center;
  button {
    font-size: 10px;
    padding: 5px 100px;
    border-radius: 5px;
    background-color: #6f4cdb;
    color: #fff;
  }
`;function Z(){var b,m,v;const[t,k]=d.useState({}),[u,h]=d.useState(!1),[Q,g]=F(M),[i,l]=d.useState({}),[f,w]=d.useState([]),a=P(),{id:c}=N(),B=async()=>{try{const r=(await T.get(`/api/restaurant?restaurantId=${c}`)).data.resultData;console.log(r.menuCateList),w(r.menuCateList),k(r),console.log(r)}catch(n){console.log(n)}},I=()=>{switch(t.categoryId){case 1:return"한식";case 2:return"중식";case 3:return"일식";default:return"잘못된 값"}},j=n=>{const r=$();n?r?(g(!0),h(!0)):x.fire({title:"로그인이 필요한 서비스입니다.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(s=>{s.isConfirmed&&a("/auth")}):r?(g(!1),a(`/user/restaurant/detail/reserve/${c}`)):x.fire({title:"로그인이 필요한 서비스입니다.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(s=>{s.isConfirmed&&a("/auth")})},S=[1,2,3,4,5,6,7,8],z=["11:30","12:00","12:30","13:00","13:30"];return d.useEffect(()=>{B(),console.log(c)},[]),e.jsxs("div",{style:{height:"100vh"},children:[(b=t==null?void 0:t.restaurantPics)!=null&&b.filePath?e.jsx("img",{src:`http://112.222.157.156:5222/pic/restaurant/${t==null?void 0:t.restaurantId}/${(m=t==null?void 0:t.restaurantPics)==null?void 0:m.filePath}`,alt:"가게 이미지",style:{width:"100%",height:260,position:"relative"}}):e.jsx("img",{src:"/restaurant_default.png",className:"bg-cover bg-gray py-6"}),e.jsx(O,{children:e.jsx(L,{style:{width:"100%",height:"100%"},onClick:()=>a(-1)})}),e.jsxs(_,{onClick:()=>console.log(f),children:[e.jsxs("div",{children:[(v=t==null?void 0:t.restaurantAddress)==null?void 0:v.match(/^(?:대구광역시|대구)\s*(.+)/)[1]," ",e.jsx("span",{children:"I"})," ",I()]}),e.jsx("h1",{children:t==null?void 0:t.restaurantName}),e.jsx("div",{children:t==null?void 0:t.restaurantDescription}),e.jsxs("h2",{children:[e.jsx(E,{}),t==null?void 0:t.restaurantAddress]}),e.jsxs("h2",{style:{marginTop:10},children:[e.jsx(y,{}),"매장 연락처 : ",t==null?void 0:t.restaurantNumber]})]}),e.jsx(C,{}),e.jsxs(D,{children:[e.jsx("h1",{children:"메뉴"}),f.map((n,r)=>e.jsx("div",{children:n.menuList.map((s,R)=>e.jsxs("div",{children:[e.jsxs(G,{children:[e.jsx("img",{src:`http://112.222.157.156:5222/pic/menu/${s==null?void 0:s.menuId}/${s==null?void 0:s.menuPic}`,alt:"메뉴 이미지"}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{children:s==null?void 0:s.menuName}),e.jsxs("span",{children:[s==null?void 0:s.price.toLocaleString("ko-KR"),"원"]})]}),e.jsx("span",{className:"text-darkGray text-opacity-60",children:s==null?void 0:s.details})]})]}),e.jsx(C,{style:{height:1,backgroundColor:"#eee",marginBottom:10}})]},R))},r))]}),!u&&e.jsxs(K,{children:[e.jsx("button",{onClick:()=>j(!1),children:"앉아서 주문"}),e.jsx("button",{onClick:()=>j(!0),children:"예약하기"})]}),u&&e.jsxs(H,{children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginRight:10},children:e.jsx(A,{onClick:()=>{h(!1),l({})}})}),e.jsx("div",{style:{textAlign:"center",fontSize:12,marginBottom:10},children:"예약할 시간과 인원을 선택해주세요"}),e.jsxs(p,{children:[e.jsx("span",{children:"인원수"}),e.jsx("div",{style:{display:"flex",gap:10},children:S.map((n,r)=>e.jsxs(q,{style:{backgroundColor:n===i.count&&"#6F4CDB"},onClick:()=>l({...i,count:n}),children:[n,"명"]},r))})]}),e.jsxs(p,{children:[e.jsx("span",{children:"시간 선택"}),e.jsx("div",{style:{display:"flex",gap:5},children:z.map((n,r)=>e.jsxs("p",{style:{backgroundColor:n===i.time&&"#6F4CDB"},onClick:()=>l({...i,time:n}),children:[n==="11:30"?"오전":"오후"," ",n==="13:00"?"1:00":n==="13:30"?"1:30":n]},r))})]}),e.jsxs(p,{style:{gap:5,color:"#FF9500"},children:[e.jsx(y,{}),e.jsx("div",{children:"9명 이상은 가게에 직접 문의해주세요"})]}),e.jsx(J,{children:e.jsx("button",{onClick:()=>{i.time&&i.count?a(`/user/restaurant/detail/reserve/${c}`,{state:i}):x.fire({title:"시간과 인원을 선택해주세요.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1})},children:"확인"})})]})]})}export{Z as default};
