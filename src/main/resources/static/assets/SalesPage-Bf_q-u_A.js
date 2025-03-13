import{r as l,g as S,j as t,d as f,n as d}from"./index-BXJcS394.js";import{d as i}from"./dayjs.min-CpBk8O8I.js";const Y=d.div`
  width: 1060px;
  margin: 30px 35px;
  overflow-y: scroll;
`,I=d.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: #eee;
  font-weight: 700;
  align-items: center;
  border-radius: 10px 10px 0 0;
  border: 1px solid #929292;
`,m=d.div`
  border-right: 1px solid #929292;
  border-bottom: 1px solid #929292;
  width: 100%;
  justify-content: space-between;
  display: flex;
  background-color: #eee;
  border-left: 1px solid #929292;
`,a=d.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  padding: 10px 10px;
  border-right: 1px solid #929292;
`,c=d(a)`
  padding: 0 10px;
  height: 70px;
  line-height: 70px;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
`;function E(){const o=i().format("YYYY-MM-DD"),x=i(o).add(1,"day").format("YYYY-MM-DD"),[g,h]=l.useState([]),[r,D]=l.useState(o),[n,y]=l.useState(x),u=sessionStorage.getItem("restaurantId"),j=S();console.log(r),console.log(n),console.log(o),console.log(x),l.useEffect(()=>{const e={restaurantId:u,startDate:"",endDate:"",page:1,size:15};(async()=>{console.log(e);try{const s=await f.get("/api/admin/restaurant/order/list",{params:e,headers:{Authorization:`Bearer ${j}`}});console.log("이거 뭐야?",s.data);const p=s.data.resultData;h([...p])}catch(s){console.log(s)}})()},[]),l.useEffect(()=>{const e={restaurantId:u,startDate:r||o,endDate:n||o,page:1,size:15};(async()=>{console.log(e);try{const s=await f.get("/api/admin/restaurant/order/list",{params:e,headers:{Authorization:`Bearer ${j}`}});console.log("이거 뭐야?",s.data);const p=s.data.resultData;h([...p])}catch(s){console.log(s)}})()},[r,n]),console.log(g);const b=e=>{console.log(e.target.value),D(e.target.value)},v=e=>{console.log(e.target.value),y(e.target.value)};return t.jsxs(Y,{className:"scrollbar-hide",children:[t.jsxs(I,{children:[t.jsx("div",{children:"매출 내역"}),t.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[t.jsx("label",{htmlFor:"",children:"시작일"}),t.jsx("input",{type:"date",className:"px-2",onChange:e=>b(e),value:r}),t.jsx("span",{children:"~"}),t.jsx("label",{htmlFor:"",children:"종료일"}),t.jsx("input",{type:"date",className:"px-2",onChange:e=>v(e),value:n})]})]}),t.jsxs(m,{children:[t.jsx(a,{children:"주문 번호"}),t.jsx(a,{children:"주문 일시"}),t.jsx(a,{children:"주문자 성함"}),t.jsx(a,{children:"주문한 메뉴"}),t.jsx(a,{style:{border:"none"},children:"주문 종류"})]}),g.map(e=>t.jsxs(m,{style:{backgroundColor:"#fff"},children:[t.jsx(c,{children:e.orderId}),t.jsxs(a,{children:[t.jsx("span",{children:i(e.createdAt).format("YYYY-MM-DD")}),t.jsx("span",{children:i(e.createdAt).format("HH : mm")})]}),t.jsx(c,{children:e.userName}),t.jsx(c,{children:e.orderDetails[0].menuName}),t.jsx(c,{style:{border:"none"},children:e.reservationYnStr})]},e.orderId))]})}export{E as default};
