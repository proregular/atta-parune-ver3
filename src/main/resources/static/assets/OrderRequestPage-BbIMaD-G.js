import{b as l,R as i,a as I,bq as k,bj as A,u as S,aw as D,P as C,av as P,j as e,Q as B,bx as R,p as c,t as d}from"./index-Da4pPRdE.js";const E=()=>{const[r,x]=l.useState([]),[$,z]=l.useState({}),[p,u]=l.useState({});i(I),i(k);const[M,h]=i(A),g=sessionStorage.getItem("userId"),f=S(),j=D(),n=C(),{id:o}=P(),y=j.state;console.log("navigate 로 받아온 데이터 : ",y),l.useEffect(()=>{const s={orderId:parseInt(o)};(async()=>{try{const a=await c.get("/api/user/user-payment-member",{params:s,headers:{Authorization:`Bearer ${n}`}});console.log(a.data.resultData);const N=a.data.resultData;x([...N])}catch(a){console.log(a)}})()},[]);const w=async()=>{const s={orderId:parseInt(o)};try{const t=await c.get("/api/user/user-payment-member/approval-status",{params:s,headers:{Authorization:`Bearer ${n}`}});console.log("승인 상태 확인하기 : ",t.data.resultData);const a=t.data.resultData;x([...a])}catch(t){console.log(t)}},b=async()=>{const s={orderId:parseInt(o)};try{const t=await c.post("/api/user/user-payment-member/insTicket",s,{headers:{Authorization:`Bearer ${n}`}});console.log(t.data.resultData);const a=t.data.resultData;window.sessionStorage.setItem("ticketId",a),h(a),d.fire({title:"결제 완료!",text:"식권이 생성되었습니다.",timer:2e3}),f("/user/order")}catch(t){console.log(t),d.fire({title:"결제 오류",text:"다시 한번 시도해주세요",timer:2e3})}},v=async s=>{u(!p),console.log(s);const t={orderId:parseInt(o),userId:s};try{const a=await c.delete("/api/user/user-payment-member",{params:t,headers:{Authorization:`Bearer ${n}`}});console.log(a.data),a.data.status===200&&d.fire({title:"주문 취소",text:"주문이 취소되었습니다!",timer:2e3})}catch(a){console.log(a)}},m=!r.every(s=>s.approvalStatus===1);return e.jsxs("div",{className:"w-full h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide",children:[e.jsxs("div",{className:"flex w-full justify-between py-6 items-center border-b border-gray",children:[e.jsx("div",{className:"flex w-[15%] justify-center",children:e.jsx(B,{className:"text-3xl"})}),e.jsx("span",{className:"text-lg font-semibold",children:"결제 상태"}),e.jsx("div",{className:"w-[15%]",children:e.jsx("span",{className:"text-center px-3 py-1 rounded-md text-white text-opacity-0",children:" "})})]}),e.jsxs("div",{className:"flex flex-col w-full h-full gap-6",children:[e.jsx("div",{className:"flex w-full items-center justify-center mt-6",children:e.jsxs("div",{className:"flex gap-2 px-5 py-2 bg-gray rounded-md",children:[e.jsx(R,{className:"text-2xl"}),e.jsx("span",{onClick:()=>w(),className:"text-lg font-medium cursor-pointer",children:"승인 상태 확인"})]})}),Array.isArray(r)&&r.map((s,t)=>e.jsxs("div",{className:"flex w-full h-[6%] px-6 justify-between items-center border-b border-gray",children:[e.jsx("span",{className:"flex w-[30%] text-base text-nowrap",children:s.name}),e.jsx("div",{className:"flex w-[40%] gap-2 items-center justify-end",children:p[s.userId]?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-end px-2 text-nowrap",children:s.point}),e.jsx("span",{children:"원"})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{children:s.approvalStatus===0?e.jsx("span",{className:"text-red font-semibold text-nowrap text-opacity-70",children:"대기중"}):s.approvalStatus===1?e.jsx("span",{className:"text-blue font-semibold text-nowrap",children:"승인"}):e.jsx("span",{className:"text-red font-semibold text-nowrap",children:"거절"})}),e.jsxs("div",{children:[e.jsx("span",{className:"text-end px-1 text-nowrap",children:s.point.toLocaleString()}),e.jsx("span",{children:"원"})]})]})})})]},t)),e.jsx("div",{className:"flex w-full justify-center gap-10",children:(r==null?void 0:r.userId)!==parseInt(g)&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>b(),disabled:m,className:`text-lg px-2 py-1 rounded-md cursor-pointer ${m?"bg-darkGray text-gray cursor-not-allowed":"bg-primary text-white"}`,children:"결제 요청"}),e.jsx("button",{onClick:()=>v(),className:"text-lg px-2 py-1 rounded-md cursor-pointer bg-red text-white",children:"결제 취소"})]})})]})]})};export{E as default};
