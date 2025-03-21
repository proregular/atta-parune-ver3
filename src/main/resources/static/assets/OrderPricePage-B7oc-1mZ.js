import{c as o,R as d,a as A,bq as D,bp as S,u as P,Q as T,aw as B,j as s,V as M,bs as R,q as j,v as $}from"./index-QD4sUlUr.js";const E=()=>{const[n,w]=o.useState({}),[c,b]=o.useState({}),[r,x]=o.useState(0),[O,y]=o.useState(0);d(A);const[u,p]=d(D),[l,N]=d(S),m=P(),I=sessionStorage.getItem("userId"),h=T(),{id:f}=B();o.useEffect(()=>{(async()=>{try{const t=await j.get("/api/user/activeOrderCheck",{headers:{Authorization:`Bearer ${h}`}});console.log(t.data.resultData);const a=t.data.resultData.totalMenuCost;x(a),y(a)}catch(t){console.log(t)}})()},[]);const v=async()=>{const e={...u,orderId:f};console.log(e);try{const t=await j.post("/api/user/user-payment-member",e,{headers:{Authorization:`Bearer ${h}`}});console.log(t.data.resultData),t.data.resultData>=0?(console.log("결제 승인 요청을 보냈습니다"),m(`/user/placetoorder/request/${f}`,{state:{restaurantId:r==null?void 0:r.restaurantId}})):console.log("요청에 실패했습니다. 다시 시도해주세요")}catch(t){console.log(t)}},C=({target:{value:e}},t)=>{console.log(e),w(a=>({...a,[t]:e}))},k=e=>{b(a=>({...a,[e]:!a[e]}));const t=parseInt(n[e],10)||0;p(a=>({...a,data:[...a.data.filter(i=>i.userId!==e),{userId:e,point:t}]})),x(a=>{const i=n[e]&&parseInt(n[e],10)||0;return c[e]?a+i:a-t})},g=()=>{$.fire({icon:"warning",title:"다시 시작하시겠습니까?",text:"확인을 누를 시, 인원 선택을 다시 해야합니다",showCancelButton:!0,confirmButtonText:"확인",cancelButtonText:"취소"}).then(e=>{e.isConfirmed&&(p(t=>({...t,point:[],userId:[parseInt(I)]})),N([]),m(-1))})};return console.log("화면에 출력할 데이터 : ",l),console.log("서버에 보낼 데이터 : ",u),s.jsxs("div",{className:"w-full h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide",children:[s.jsxs("div",{className:"flex w-full justify-between py-6 items-center border-b border-gray",children:[s.jsx("div",{className:"flex w-[15%] justify-center",children:s.jsx(M,{className:"text-3xl",onClick:()=>g()})}),s.jsx("span",{className:"text-lg font-semibold",children:"금액 선택"}),s.jsx("div",{className:"w-[15%]",children:s.jsx("span",{className:"text-center px-3 py-1 rounded-md text-white text-opacity-0",children:" "})})]}),s.jsxs("div",{className:"flex flex-col w-full h-full gap-6",children:[s.jsxs("div",{className:"flex w-full justify-center gap-2 pt-4 text-xl",children:[s.jsx("span",{children:"총 결제 금액 : "}),s.jsxs("span",{className:`text-end px-2 ${Math.sign(parseInt(r))===-1?"text-red":"text-black"}`,children:[r==null?void 0:r.toLocaleString("ko-KR"),"원"]})]}),Array.isArray(l)&&(l==null?void 0:l.map(e=>{var t;return s.jsxs("div",{className:"flex w-full h-[6%] px-6 justify-between items-center border-b border-gray",children:[s.jsxs("span",{className:"flex w-[40%] text-base text-nowrap",children:[e.name,"(",e.uid,")"]}),s.jsx("div",{className:"flex w-[35%] gap-2 items-center justify-end",children:c[e.userId]?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"text-end px-2",children:(t=n[e.userId])==null?void 0:t.toLocaleString("ko-KR")}),s.jsx("span",{children:"원"})]}):s.jsxs(s.Fragment,{children:[s.jsx("input",{type:"tel",className:"flex w-[70%] border border-darkGray px-2 text-end rounded-md",onChange:a=>C(a,e.userId),value:n[e.userId]||""}),s.jsx("span",{children:"원"})]})}),s.jsx("div",{className:"flex w-[15%] justify-center gap-2 text-nowrap items-center",children:s.jsx("span",{onClick:()=>k(e.userId),className:` px-2  font-medium rounded-md cursor-pointer
                    ${c[e.userId]?"bg-red text-white":"bg-blue text-white"}
                    `,children:c[e.userId]?"수정":"확인"})})]},e.userId)})),s.jsx("div",{className:"flex w-full h-[5%] justify-center items-center",children:s.jsx(R,{onClick:g,className:"text-3xl"})}),s.jsx("div",{className:"flex w-full justify-center",children:s.jsx("span",{onClick:()=>v(),className:"bg-primary text-white text-lg px-2 py-1 rounded-md",children:"승인 요청"})})]})]})};export{E as default};
