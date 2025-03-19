import{a0 as d,c as n,w as S,j as e,p as j,J as r}from"./index-D16XrLiV.js";const Y=r.div`
  width: 1060px;
  margin: 30px 35px;
  overflow-y: scroll;
`,I=r.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: #eee;
  font-weight: 700;
  align-items: center;
  border-radius: 10px 10px 0 0;
  border: 1px solid #929292;
`,m=r.div`
  border-right: 1px solid #929292;
  border-bottom: 1px solid #929292;
  width: 100%;
  justify-content: space-between;
  display: flex;
  background-color: #eee;
  border-left: 1px solid #929292;
`,a=r.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  border-right: 1px solid #929292;
`,p=r(a)`
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  line-height: 70px;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  text-overflow: ellipsis;
`,N=r.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  border-right: 1px solid #929292;
`;function L(){const l=d().format("YYYY-MM-DD"),y=d(l).add(-1,"day").format("YYYY-MM-DD"),[u,h]=n.useState([]),[o,D]=n.useState(y),[i,v]=n.useState(l),g=sessionStorage.getItem("restaurantId"),f=S();n.useEffect(()=>{const t={restaurantId:g,startDate:"",endDate:"",page:1,size:15};(async()=>{try{const x=(await j.get("/api/admin/restaurant/order/list",{params:t,headers:{Authorization:`Bearer ${f}`}})).data.resultData;h([...x])}catch(s){console.log(s)}})()},[]),n.useEffect(()=>{const t={restaurantId:g,startDate:o||l,endDate:i||l,page:1,size:15};(async()=>{console.log(t);try{const x=(await j.get("/api/admin/restaurant/order/list",{params:t,headers:{Authorization:`Bearer ${f}`}})).data.resultData;h([...x])}catch(s){console.log(s)}})()},[o,i]),console.log(u);const w=t=>{console.log(t.target.value),D(t.target.value)},b=t=>{console.log(t.target.value),v(t.target.value)};return e.jsxs(Y,{className:"scrollbar-hide",children:[e.jsxs(I,{children:[e.jsx("div",{children:"매출 내역"}),e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx("label",{htmlFor:"",children:"시작일"}),e.jsx("input",{type:"date",className:"px-2",onChange:t=>w(t),value:o}),e.jsx("span",{children:"~"}),e.jsx("label",{htmlFor:"",children:"종료일"}),e.jsx("input",{type:"date",className:"px-2",onChange:t=>b(t),value:i})]})]}),e.jsxs(m,{children:[e.jsx(a,{children:"주문 번호"}),e.jsx(a,{children:"주문 일시"}),e.jsx(a,{children:"주문자 성함"}),e.jsx(a,{children:"주문한 메뉴"}),e.jsx(a,{style:{border:"none"},children:"주문 종류"})]}),u.map((t,c)=>e.jsxs(m,{style:{backgroundColor:"#fff"},children:[e.jsx(p,{children:c+1}),e.jsxs(a,{children:[e.jsx("span",{children:d(t.createdAt).format("YYYY-MM-DD")}),e.jsx("span",{children:d(t.createdAt).format("HH : mm")})]}),e.jsx(p,{children:t.userName}),e.jsx(N,{children:t.orderDetails.map(s=>e.jsxs("div",{className:"flex w-full",children:[e.jsx("span",{className:"flex w-[80%] justify-center text-nowrap",children:s.menuName}),e.jsxs("span",{className:"flex w-[20%] justify-start text-nowrap",children:[s.menuCount,"개"]})]},s.menuId))}),e.jsx(p,{style:{border:"none"},children:t.reservationYnStr})]},t.orderId))]})}export{L as default};
