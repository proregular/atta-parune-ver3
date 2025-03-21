import{c as n,R as L,b as O,j as e,q as p,v as S,Q as $,ag as G}from"./index-QD4sUlUr.js";import{S as M}from"./SideBar-BToDWL3b.js";import{u as _}from"./useModal-CUY2NTKe.js";import"./index-2Luirxk7.js";const P=()=>{var y,b,v,k,I;const[j,w]=n.useState([]),[g,m]=n.useState([]),[h,N]=L(O),u=window.sessionStorage.getItem("restaurantId"),{Modal:f,open:a,close:l,eventData:s}=_({title:"주문 정보를 확인해주세요"});n.useEffect(()=>{(async()=>{const t={restaurantId:u};try{const c=(await p.get("/api/admin/restaurant/order/reservation",{params:t})).data.resultData;console.log("api 요청 성공 : ",c);const i=c.map(x=>x.orderDetails?x.orderDetails:[]);w([...c]),m([...i.flat()])}catch(d){console.log(d)}})()},[h]);const o=()=>N(r=>!r),C=async()=>{console.log(s);const r={orderId:s.orderId,reservationStatus:1};try{const t=await p.put("/api/admin/restaurant/order/reservation/status",r);console.log(t),t.data.resultData===1&&(S.fire({title:"주문을 승인했습니다!",text:"사용자 결제완료 후 테이블 목록에 추가됩니다",icon:"success"}).then(()=>{o()}),l())}catch(t){console.log(t),S.fire({title:"에러 발생",text:"처리 중 문제가 발생했습니다. 다시 시도해주세요.",icon:"error"})}},R=async()=>{const r={orderId:s.orderId,reservationStatus:2};try{const t=await p.put("/api/admin/restaurant/order/reservation/status",r);console.log(t),l(),o()}catch(t){console.log(t)}};return e.jsx("div",{className:"flex flex-col min-w-[350px] h-dvh border-l-2 bg-white border-l-gray shadow-xl",children:e.jsxs("div",{className:"w-100% h-dvh",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex w-100% h-100% flex-col text-center pt-10 text-2xl mb-6 font-semibold",children:"새로운 주문"}),e.jsxs("div",{className:"flex w-full items-center justify-between px-6 py-2 border-b border-gray",children:[e.jsx("span",{className:"flex w-[30%] justify-center text-darkGray",children:"주문번호"}),e.jsx("span",{className:"flex w-[40%] justify-center text-darkGray",children:"메뉴"}),e.jsx("span",{className:"flex w-[30%] justify-center text-darkGray",children:"주문시간"})]})]}),e.jsx("ul",{className:"flex flex-col w-[100%] h-[100%] gap-4 pt-3 text-nowrap",children:j.map((r,t)=>{var d,c;return r.length===0?e.jsx("li",{className:"flex w-full items-center justify-between px-6 py-2",children:e.jsx("span",{children:"새로운 주문이 없습니다"})},r):e.jsxs("li",{onClick:()=>a(r),className:"flex w-full items-center justify-between px-6 py-2 border-b border-gray cursor-pointer",children:[e.jsx("span",{className:"flex w-[30%] justify-center text-black",children:r.orderId}),e.jsx("span",{className:"flex flex-col w-[30%] justify-center text-black",children:r.orderDetails.map((i,x)=>e.jsx("div",{className:"truncate",children:i==null?void 0:i.menuName},x))}),e.jsx("span",{className:"flex w-[30%] justify-center text-black",children:(c=(d=r.orderDetails[0])==null?void 0:d.createdAt.split(" "))==null?void 0:c[1].slice(0,5)})]},t)})}),e.jsx(f,{children:e.jsxs("div",{className:"flex flex-col w-full h-full justify-between",children:[e.jsxs("div",{className:"flex flex-col w-full h-[60%] gap-4 pt-10 items-center",children:[e.jsxs("div",{className:"flex w-full px-10 gap-3",children:[e.jsx("span",{className:"flex w-[25%]",children:"주문번호"}),e.jsx("span",{className:"text-xl",children:s==null?void 0:s.orderId})]}),e.jsxs("div",{className:"flex w-full px-10 gap-3 items-center",children:[e.jsx("span",{className:"flex w-[25%]",children:"주문한 메뉴"}),e.jsx("span",{className:"text-xl",children:((b=(y=s==null?void 0:s.orderDetails)==null?void 0:y[0])==null?void 0:b.menuName)||"메뉴 정보 없음"})]}),e.jsxs("div",{className:"flex w-full px-10 gap-3 items-center",children:[e.jsx("span",{className:"flex w-[25%]",children:"주문한 사람"}),e.jsx("span",{className:"text-xl",children:s==null?void 0:s.userName})]}),e.jsxs("div",{className:"flex w-full px-10 gap-3 items-center",children:[e.jsx("span",{className:"flex w-[25%]",children:"핸드폰 번호"}),s.userPhone===null?e.jsx("span",{className:"text-darkGray",children:"등록된 번호가 없어요"}):e.jsx("span",{className:"text-xl",children:(I=(k=(v=s==null?void 0:s.userPhone)==null?void 0:v.replace(/[^0-9]/g,""))==null?void 0:k.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g,"$1-$2-$3"))==null?void 0:I.replace(/(-{1,2})$/g,"")})]}),e.jsxs("div",{className:"flex w-full h-[20%] px-10 gap-3 items-center",children:[e.jsx("span",{className:"flex w-[25%]",children:"인원 수"}),e.jsx("span",{className:"text-xl",children:(s==null?void 0:s.reservationPeopleCount)===0?"앉아서 주문":`${s==null?void 0:s.reservationPeopleCount}명`})]})]}),e.jsxs("div",{className:"flex w-full justify-center gap-10 mb-10",children:[e.jsx("div",{onClick:C,className:"bg-blue px-2 py-1 rounded-md text-nowrap text-white font-medium cursor-pointer",children:"주문 승인"}),e.jsx("div",{onClick:R,className:"bg-red px-2 py-1 rounded-md text-nowrap text-white font-medium cursor-pointer",children:"주문 취소"})]})]})})]})})},E=()=>{const[j,w]=n.useState(!0),[g,m]=n.useState([]),[h,N]=L(O),u=sessionStorage.getItem("restaurantId"),f=$();return n.useEffect(()=>{const a={restaurantId:u};(async()=>{try{const s=await p.get("/api/admin/restaurant/order",{params:a,headers:{Authorization:`Bearer ${f}`}});console.log(s.data.resultData);const o=s.data.resultData;m([...o])}catch(s){console.log(s)}})()},[h]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full h-full bg-gray",children:e.jsx("div",{className:"w-100% h-[calc(100%_-_4rem)] mx-4 my-8 bg-white rounded-lg overflow-hidden overflow-y-scroll scrollbar-hide",children:e.jsx("div",{className:"flex flex-wrap ml-5 mt-5 gap-4 bg-white justify-start",children:g.map(a=>e.jsxs("div",{className:"w-[calc(33%_-_1rem)] min-w-48 h-48 border-2 border-darkGray bg-white",children:[e.jsxs("div",{className:" px-4 py-1 bg-third",children:[e.jsxs("div",{className:"flex justify-between items-center gap-3",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("span",{className:"text-sm text-nowrap",children:"주문번호"}),e.jsx("span",{className:"text-lg",children:a.orderId})]}),e.jsxs("span",{className:"font-base text-nowrap text-white",children:[a==null?void 0:a.orderDetails.reduce((l,s)=>l+s.price,0).toLocaleString("ko-KR"),"원"]})]}),e.jsxs("div",{className:"flex gap-2 tracking-wider items-center",children:[e.jsx("span",{className:"text-sm",children:"주문시간"}),e.jsxs("span",{className:"text-md",children:[G(a.reservationTime).format("HH:MM")," ~"]})]})]}),e.jsxs("div",{className:"px-3 py-3",children:[a.orderDetails.map((l,s)=>e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:l==null?void 0:l.menuName}),e.jsxs("span",{children:["x",l==null?void 0:l.menuCount]})]},s)),e.jsx("div",{className:"pt-1 pl-6 text-darkGray",children:a.menuInfo})]})]},a.orderId))})})}),e.jsx(P,{})]})},D=()=>e.jsxs("div",{className:"flex w-full h-dvh overflow-hidden scrollbar-hide justify-between",children:[e.jsx(M,{}),e.jsx(E,{})]});export{D as default};
