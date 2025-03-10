import{r as n,B as S,j as t,g as h,n as d}from"./index-DJgBPc4Q.js";import{d as j}from"./dayjs.min-CzUCcK2h.js";const w=d.div`
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
`,f=d.div`
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
`;function T(){const[i,g]=n.useState([]),[o,D]=n.useState(""),[r,m]=n.useState(""),x=sessionStorage.getItem("restaurantId"),u=S(),l=j().format("YYYY-MM-DD"),p=j(l).add(1,"day").format("YYYY-MM-DD");console.log(o),console.log(r),console.log(l),console.log(p),n.useEffect(()=>{const e={restaurantId:x,startDate:"",endDate:"",page:1,size:15};(async()=>{console.log(e);try{const a=await h.get("/api/restaurant/orderList",{params:e,headers:{Authorization:`Bearer ${u}`}});console.log("이거 뭐야?",a.data);const c=a.data.resultData;g([...c])}catch(a){console.log(a)}})()},[]),n.useEffect(()=>{const e={restaurantId:x,startDate:o||l,endDate:r||l,page:1,size:15};(async()=>{console.log(e);try{const a=await h.get("/api/restaurant/orderList",{params:e,headers:{Authorization:`Bearer ${u}`}});console.log("이거 뭐야?",a.data);const c=a.data.resultData;g([...c])}catch(a){console.log(a)}})()},[o,r]),console.log(i);const y=e=>{console.log(e.target.value),D(e.target.value)},v=e=>{console.log(e.target.value),m(e.target.value)};return t.jsxs(w,{className:"scrollbar-hide",children:[t.jsxs(Y,{children:[t.jsx("div",{children:"매출 내역"}),t.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[t.jsx("label",{htmlFor:"",children:"시작일"}),t.jsx("input",{type:"date",className:"px-2",onChange:e=>y(e),value:o,defaultValue:l}),t.jsx("span",{children:"~"}),t.jsx("label",{htmlFor:"",children:"종료일"}),t.jsx("input",{type:"date",className:"px-2",onChange:e=>v(e),value:r,defaultValue:p})]})]}),t.jsxs(f,{children:[t.jsx(s,{children:"주문 번호"}),t.jsx(s,{children:"주문 일시"}),t.jsx(s,{children:"주문자 성함"}),t.jsx(s,{children:"주문한 메뉴"}),t.jsx(s,{children:"주문 종류"})]}),i.map(e=>t.jsxs(f,{style:{backgroundColor:"#fff"},children:[t.jsx(s,{children:e.orderId}),t.jsx(s,{children:e.createdAt}),t.jsx(s,{children:e.userName}),e.orderDetails.length===1?t.jsx(s,{children:e.orderDetails[0].menuName}):t.jsxs(s,{children:[e.orderDetails[0].menuName," 외 ",e.orderDetails.length-1," ","개"]}),t.jsx(s,{children:e.reservationYnStr})]},e.orderId))]})}export{T as default};
