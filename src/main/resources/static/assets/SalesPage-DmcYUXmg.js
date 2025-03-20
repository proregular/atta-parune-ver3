import{ac as d,b as r,M as S,j as e,p as j,Z as n}from"./index-BGt-xJRX.js";const Y=n.div`
  width: 100%;
  margin: 30px 35px;
  overflow-y: scroll;
  padding-right: 20px;
`,I=n.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: #eee;
  font-weight: 700;
  align-items: center;
  border-radius: 10px 10px 0 0;
  border: 1px solid #929292;
`,m=n.div`
  border-right: 1px solid #929292;
  border-bottom: 1px solid #929292;
  width: 100%;
  justify-content: space-between;
  display: flex;
  background-color: #eee;
  border-left: 1px solid #929292;
`,a=n.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  border-right: 1px solid #929292;
`,x=n(a)`
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  line-height: 70px;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  text-overflow: ellipsis;
`,M=n.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  border-right: 1px solid #929292;
`;function T(){const o=d().format("YYYY-MM-DD"),y=d(o).add(-1,"day").format("YYYY-MM-DD"),[h,u]=r.useState([]),[i,v]=r.useState(y),[l,D]=r.useState(o),g=sessionStorage.getItem("restaurantId"),f=S();r.useEffect(()=>{const t={restaurantId:g,startDate:"",endDate:"",page:1,size:15};(async()=>{try{const p=(await j.get("/api/admin/restaurant/order/list",{params:t,headers:{Authorization:`Bearer ${f}`}})).data.resultData;u([...p])}catch(s){console.log(s)}})()},[]),r.useEffect(()=>{const t={restaurantId:g,startDate:i||o,endDate:l||o,page:1,size:15};(async()=>{console.log(t);try{const p=(await j.get("/api/admin/restaurant/order/list",{params:t,headers:{Authorization:`Bearer ${f}`}})).data.resultData;u([...p])}catch(s){console.log(s)}})()},[i,l]),console.log(h);const b=t=>{console.log(t.target.value),v(t.target.value)},w=t=>{console.log(t.target.value),D(t.target.value)};return e.jsxs(Y,{className:"scrollbar-hide",children:[e.jsxs(I,{children:[e.jsx("div",{children:"매출 내역"}),e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx("label",{htmlFor:"",children:"시작일"}),e.jsx("input",{type:"date",className:"px-2",onChange:t=>b(t),value:i}),e.jsx("span",{children:"~"}),e.jsx("label",{htmlFor:"",children:"종료일"}),e.jsx("input",{type:"date",className:"px-2",onChange:t=>w(t),value:l})]})]}),e.jsxs(m,{children:[e.jsx(a,{children:"주문 번호"}),e.jsx(a,{children:"주문 일시"}),e.jsx(a,{children:"주문자 성함"}),e.jsx(a,{children:"주문한 메뉴"}),e.jsx(a,{style:{border:"none"},children:"주문 종류"})]}),h.map((t,c)=>e.jsxs(m,{style:{backgroundColor:"#fff"},children:[e.jsx(x,{children:c+1}),e.jsxs(a,{children:[e.jsx("span",{children:d(t.createdAt).format("YYYY-MM-DD")}),e.jsx("span",{children:d(t.createdAt).format("HH : mm")})]}),e.jsx(x,{children:t.userName}),e.jsx(M,{children:t.orderDetails.map(s=>e.jsxs("div",{className:"flex justify-between w-full",children:[e.jsx("span",{className:"w-[120px] text-nowrap overflow-hidden truncate",children:s.menuName}),e.jsxs("span",{className:"w-[30px] text-nowrap",children:[s.menuCount,"개"]})]},s.menuId))}),e.jsx(x,{style:{border:"none"},children:t.reservationYnStr})]},t.orderId))]})}export{T as default};
