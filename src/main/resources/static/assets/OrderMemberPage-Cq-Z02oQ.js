import{R as h,a as B,bo as E,bp as P,b8 as R,b as u,av as T,u as U,O as x,au as H,j as s,P as $,bq as G,p as m}from"./index-Dwn4ReT8.js";const F=()=>{const[n,w]=h(B),[i,p]=h(E),[N,I]=h(P);h(R);const[K,V]=u.useState(!0),[f,g]=u.useState([]),[o,v]=u.useState(""),{state:_}=T(),y=U(),k=sessionStorage.getItem("userId"),D=x(),{id:b}=H();u.useEffect(()=>{const e={userId:k};(async()=>{try{const a=await m.get("/api/user",{params:e,headers:{Authorization:`Bearer ${D}`}});console.log(a.data.resultData);const t=a.data.resultData;w({...t}),I(c=>({...c,orderId:parseInt(b),data:[{userId:t.userId,point:0},...c.data.filter(l=>l.userId!==t.userId)]})),p(c=>{const l=c||[];return l.some(z=>z.userId===n.userId)?l:[{userId:t.userId,name:t.name,uid:t.uid},...l]})}catch(a){console.log(a)}})()},[]),u.useEffect(()=>{(async(r=o)=>{const a=x(),t={companyId:n.companyId,page:1,size:30,name:r};try{const l=(await m.get("/api/user/user-payment-member/searchPeople",{params:t,headers:{Authorization:`Bearer ${a}`}})).data.resultData.filter(d=>d.userId!==n.userId);g([...l])}catch(c){console.log(c)}})()},[o]);const j=async(e=o)=>{const r=x(),a={companyId:n.companyId,page:1,size:30,searchText:e};try{const c=(await m.get("/api/user/user-payment-member/searchPeople",{params:a,headers:{Authorization:`Bearer ${r}`}})).data.resultData.filter(l=>l.userId!==n.userId);g([...c])}catch(t){console.log(t)}},S=e=>{const r=e.target.value;v(r)},M=e=>{e.code==="Enter"&&j()},A=e=>{!e||!e.userId||(p(r=>{const a=r||[],t=a.some(d=>d.userId===e.userId);let c;return t?c=a.filter(d=>d.userId!==e.userId):c=[...a,{userId:e.userId,name:e.name,uid:e.uid}],[{userId:n.userId,name:n.name,uid:n.uid},...c.filter(d=>d.userId!==n.userId)]}),I(r=>{const a=r.data.filter(t=>t.userId!==e.userId);return a.length===r.data.length?{...r,data:[{userId:e.userId,point:0},...r.data]}:{...r,data:a}}))},C=()=>{y(`/user/placetoorder/price/${b}`)};return console.log("화면에 출력할 데이터 : ",i),console.log("서버에 보낼 데이터 : ",N),s.jsxs("div",{className:"w-full h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide",children:[s.jsxs("div",{className:"flex w-full justify-between py-6 items-center border-b border-gray",children:[s.jsx("div",{onClick:()=>y("/user"),className:"flex w-[15%] justify-center",children:s.jsx($,{className:"text-3xl"})}),s.jsx("span",{className:"text-lg font-semibold",children:"인원 선택"}),s.jsx("div",{className:"w-[15%]",children:s.jsx("span",{className:"bg-primary text-center px-3 py-1 rounded-md text-white",onClick:C,children:"다음"})})]}),s.jsx("div",{className:"flex w-full justify-end p-4",children:s.jsxs("div",{children:["총 ",i==null?void 0:i.length,"명 선택 중"]})}),s.jsxs("div",{className:"w-full h-dvh ",children:[s.jsxs("div",{className:"flex w-full h-[6%] items-center px-6 border-b border-gray",children:[s.jsxs("div",{className:"flex w-[90%] items-center gap-4",children:[s.jsx("input",{type:"checkbox",className:"w-5 h-5",checked:!0,disabled:!0}),s.jsxs("label",{className:"text-xl",children:[n.name,"(",n.uid,")"]})]}),s.jsx("span",{className:"w-[20%] text-darkGray",children:"본인"})]}),s.jsxs("div",{className:"flex flex-col w-full h-dvh",children:[s.jsxs("div",{className:"flex p-6 items-center gap-1",children:[s.jsx("input",{type:"text",className:"w-[90%] border border-darkGray rounded-md px-2",placeholder:"회사 내 인원을 이름으로 검색해보세요",onChange:e=>S(e),onKeyDown:e=>M(e),value:o}),s.jsx(G,{onClick:()=>{o.trim()&&j(o)},className:"flex w-[10%] text-2xl"})]}),s.jsx("div",{className:"flex flex-col w-full pb-20",children:f.length>0?f.map(e=>s.jsxs("div",{className:"flex w-full h-14 items-center gap-4 px-6 py-2 border-b border-gray",children:[s.jsx("input",{type:"checkbox",className:"w-5 h-5",id:e.userId,value:e.userId,onChange:()=>A(e)}),s.jsxs("label",{className:"text-xl",htmlFor:e.userId,children:[e.name,"(",e.uid,")"]})]},e.userId)):s.jsxs("div",{className:"flex justify-center items-center h-40 text-gray-500 text-lg",children:[o,"에 대한 검색 결과가 없습니다."]})})]})]})]})};export{F as default};
