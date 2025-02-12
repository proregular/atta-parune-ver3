import{r as n,g as S,j as t,b as p,n as d}from"./index-XkiSkCIq.js";import{d as h}from"./dayjs.min-0i5z1ykI.js";const w=d.div`
  margin: 30px 35px;
  overflow-y: scroll;
`,Y=d.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: #eee;
  font-weight: 700;
  align-items: center;
  border-radius: 10px 10px 0 0;
  border: 1px solid #929292;
`,j=d.div`
  justify-content: space-between;
  display: flex;
  background-color: #eee;
  border-left: 1px solid #929292;
`,s=d.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
  padding: 10px 0;
  border-right: 1px solid #929292;
  border-bottom: 1px solid #929292;
`;function T(){const[i,g]=n.useState([]),[o,f]=n.useState(""),[r,D]=n.useState(""),m=sessionStorage.getItem("restaurantId"),x=S(),l=h().format("YYYY-MM-DD"),u=h(l).add(1,"day").format("YYYY-MM-DD");console.log(o),console.log(r),console.log(l),console.log(u),n.useEffect(()=>{const e={restaurantId:m,startDate:"",endDate:"",page:1,size:15};(async()=>{console.log(e);try{const a=await p.get("/api/restaurant/orderList",{params:e,headers:{Authorization:`Bearer ${x}`}});console.log("이거 뭐야?",a.data);const c=a.data.resultData;g([...c])}catch(a){console.log(a)}})()},[]),n.useEffect(()=>{const e={restaurantId:1,startDate:o||l,endDate:r||l,page:1,size:15};(async()=>{console.log(e);try{const a=await p.get("/api/restaurant/orderList",{params:e,headers:{Authorization:`Bearer ${x}`}});console.log("이거 뭐야?",a.data);const c=a.data.resultData;g([...c])}catch(a){console.log(a)}})()},[o,r]),console.log(i);const y=e=>{console.log(e.target.value),f(e.target.value)},b=e=>{console.log(e.target.value),D(e.target.value)};return t.jsxs(w,{className:"scrollbar-hide",children:[t.jsxs(Y,{children:[t.jsx("div",{children:"매출 내역"}),t.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[t.jsx("label",{htmlFor:"",children:"시작일"}),t.jsx("input",{type:"date",className:"px-2",onChange:e=>y(e),value:o,defaultValue:l}),t.jsx("span",{children:"~"}),t.jsx("label",{htmlFor:"",children:"종료일"}),t.jsx("input",{type:"date",className:"px-2",onChange:e=>b(e),value:r,defaultValue:u})]})]}),t.jsxs(j,{children:[t.jsx(s,{children:"주문 번호"}),t.jsx(s,{children:"주문 일시"}),t.jsx(s,{children:"주문자 성함"}),t.jsx(s,{children:"주문한 메뉴"}),t.jsx(s,{children:"주문 종류"})]}),i.map(e=>t.jsxs(j,{style:{backgroundColor:"#fff"},children:[t.jsx(s,{children:e.orderId}),t.jsx(s,{children:e.createdAt}),t.jsx(s,{children:e.userName}),e.orderDetails.length===1?t.jsx(s,{children:e.orderDetails[0].menuName}):t.jsxs(s,{children:[e.orderDetails[0].menuName," 외 ",e.orderDetails.length-1," ","개"]}),t.jsx(s,{children:e.reservationYnStr})]},e.orderId))]})}export{T as default};
