import{c,u as o,j as e,e as y,H as w,J as b,R as g,K as k,v as C,z as G}from"./index-CQbk2HOI.js";import{d as S}from"./dayjs.min-CeLsBkk8.js";import{F as j}from"./index-BUmomptc.js";import{G as P,a as x}from"./index-kw6KE48s.js";import{a as d}from"./index-C8_Lswh2.js";const D=()=>{const[t,a]=c.useState([]),[m,p]=c.useState(0),[i,h]=c.useState(1),n=o(),v=async()=>{const s={page:i,size:10};try{const r=await y.get("/api/system/v3/post",{params:s});console.log("이거???",r.data.resultData),p(r.data.resultData.totalPageCount),a(r.data.resultData.postList)}catch(r){console.log(r)}},u=s=>{switch(s.roleCode){case"00101":return"식당";case"00102":return"회사";case"00103":return"관리자";case"00104":return"사용자"}},f=s=>{switch(s.postCode){case"00201":return e.jsxs(e.Fragment,{children:["[공지] ",s.inquiryTitle]});case"00202":return e.jsxs("div",{className:"flex items-center gap-2",children:["[문의] ",s.inquiryTitle,e.jsx(x,{})]});case"00203":return e.jsxs("div",{className:"flex items-center gap-2",children:["[불편사항] ",s.inquiryTitle,e.jsx(x,{})]})}},N=(s,r)=>{switch(s.postCode){case"00201":return e.jsx(w,{});case"00202":return e.jsx("div",{children:r});case"00203":return"[불편사항]"}};return c.useEffect(()=>{v()},[i]),e.jsxs("div",{className:"h-[510px] flex flex-col",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("div",{className:"flex border-y border-black w-[1400px] text-center py-2 gap-5 text-darkGray",children:[e.jsx("div",{className:"w-[10%]",children:"No"}),e.jsx("div",{className:"w-[60%]",children:"제목"}),e.jsx("div",{className:"w-[10%]",children:"작성자"}),e.jsx("div",{className:"w-[20%]",children:"작성일"})]})}),t.map((s,r)=>e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"flex border-b border-tableGray w-[1400px] text-center items-center py-2 gap-5",children:[e.jsx("div",{className:"w-[10%] flex justify-center",children:N(s,r+1)}),e.jsx("div",{className:"w-[60%] text-left cursor-pointer",onClick:()=>n("/service/notice/detail"),children:f(s)}),e.jsx("div",{className:"w-[10%]",children:u(s)}),e.jsx("div",{className:"w-[20%]",children:S(s.createdAt).format("YYYY-MM-DD")})]})}))]}),e.jsx("div",{className:"flex justify-center bottom-0",children:e.jsxs("div",{className:"relative flex w-[1400px] justify-center text-center items-center py-2 gap-5",children:[[...Array(m)].map((s,r)=>{const l=r+1;return e.jsx("div",{style:{color:i===l?"#333":"#929292",cursor:"pointer"},onClick:()=>h(l),children:l})}),e.jsx(P,{}),e.jsxs("div",{className:"flex absolute right-0 items-center gap-[5px] bg-gray px-4 py-2 rounded-[5px] cursor-pointer",onClick:()=>n("/service/notice/writepost"),children:[e.jsx(j,{}),e.jsx("button",{children:"글쓰기"})]})]})})]})},B=()=>{const t=o();return e.jsxs("div",{className:"h-[510px] flex flex-col",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("div",{className:"flex border-y border-black w-[1400px] text-center py-2 gap-5 text-darkGray",children:[e.jsx("div",{className:"w-[10%]",children:"No"}),e.jsx("div",{className:"w-[60%]",children:"제목"}),e.jsx("div",{className:"w-[10%]",children:"작성자"}),e.jsx("div",{className:"w-[20%]",children:"작성일"})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"flex border-b border-tableGray w-[1400px] text-center items-center py-2 gap-5",children:[e.jsx("div",{className:"w-[10%] flex justify-center",children:e.jsx(d,{})}),e.jsx("div",{className:"w-[60%] text-left cursor-pointer",onClick:()=>t("/service/notice/detail"),children:"개선 요구사항이 있어요!"}),e.jsx("div",{className:"w-[10%]",children:"관리자"}),e.jsx("div",{className:"w-[20%]",children:"2025-02-17"})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"flex border-b border-tableGray w-[1400px] text-center items-center py-2 gap-5",children:[e.jsx("div",{className:"w-[10%] flex justify-center",children:e.jsx(d,{})}),e.jsx("div",{className:"w-[60%] text-left",children:"제휴 및 입점은 어떻게 하나요?"}),e.jsx("div",{className:"w-[10%]",children:"관리자"}),e.jsx("div",{className:"w-[20%]",children:"2025-02-17"})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"flex border-b border-tableGray w-[1400px] text-center items-center py-2 gap-5",children:[e.jsx("div",{className:"w-[10%] flex justify-center",children:e.jsx(d,{})}),e.jsx("div",{className:"w-[60%] text-left",children:"서비스 이용 방법이 궁금해요."}),e.jsx("div",{className:"w-[10%]",children:"관리자"}),e.jsx("div",{className:"w-[20%]",children:"2025-02-17"})]})})]}),e.jsx("div",{className:"flex justify-center bottom-0",children:e.jsxs("div",{className:"relative flex w-[1400px] justify-center text-center gap-5 items-center",children:[e.jsxs("div",{className:"flex items-center border border-darkGray rounded-[5px] px-4 py-1 gap-2 h-[40px]",children:[e.jsx("input",{type:"text",placeholder:"검색어를 입력해 주세요"}),e.jsx(b,{className:"text-darkGray cursor-pointer"})]}),e.jsxs("div",{className:"flex absolute right-0 items-center gap-[5px] bg-gray px-4 py-2 rounded-[5px] cursor-pointer",onClick:()=>t("/service/notice/writepost"),children:[e.jsx(j,{}),e.jsx("button",{children:"글쓰기"})]})]})})]})},T=()=>{const[t,a]=g(k);return e.jsxs("div",{className:"relative w-full h-dvh bg-white overflow-y-auto scrollbar-hide z-10 flex flex-col",children:[e.jsx(C,{}),e.jsxs("div",{className:"mt-[100px] relative flex-grow",children:[e.jsx("div",{className:"flex justify-center text-[30px] font-bold",children:t}),e.jsxs("div",{className:"flex justify-center text-[18px] my-[20px] gap-[30px]",children:[e.jsx("div",{className:`cursor-pointer ${t==="자주 묻는 질문"?"text-black":"text-darkGray"}`,onClick:()=>a("자주 묻는 질문"),children:"자주 묻는 질문"}),e.jsx("div",{className:`cursor-pointer ${t==="공지 및 게시판"?"text-black":"text-darkGray"}`,onClick:()=>a("공지 및 게시판"),children:"공지 및 게시판"})]}),t==="공지 및 게시판"?e.jsx(D,{}):e.jsx(B,{})]}),e.jsx(G,{})]})};export{T as default};
