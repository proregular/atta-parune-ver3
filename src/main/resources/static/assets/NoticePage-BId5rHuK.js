import{c as n,u as j,w as m,j as e,a0 as h,a5 as w,q as b,p,a6 as k,a7 as C,R as D,a8 as G,W as S,$ as q}from"./index-CYoNUBdu.js";import{F as T}from"./index-CSCgtsCb.js";import{G as u}from"./index-DR0ZvOQL.js";import{a as Y}from"./index-BRmwj2zG.js";const P=()=>{const[a,i]=n.useState([]),[x,o]=n.useState(0),d=j(),l=m(),r=async s=>{const t={page:s,size:10};try{const c=await p.get("/api/system/v3/post",{params:t});console.log("이거???",c.data.resultData),o(c.data.resultData.totalPageCount),i(c.data.resultData.postList)}catch(c){console.log(c)}},f=s=>{switch(s.roleCode){case"00101":return"식당";case"00102":return"회사";case"00103":return"관리자";case"00104":return"사용자"}},v=s=>{switch(s.postCode){case"00201":return e.jsxs(e.Fragment,{children:["[공지] ",s.inquiryTitle]});case"00202":return e.jsxs("div",{className:"flex items-center gap-2",children:["[문의] ",s.inquiryTitle,e.jsx(u,{})]});case"00203":return e.jsxs("div",{className:"flex items-center gap-2",children:["[불편사항] ",s.inquiryTitle,e.jsx(u,{})]})}},N=(s,t)=>{switch(s.postCode){case"00201":return e.jsx(k,{});case"00202":return e.jsx("div",{children:t});case"00203":return e.jsx("div",{children:t})}},y=(s,t,c)=>t==="prev"?e.jsx("a",{children:"<"}):t==="next"?e.jsx("a",{children:">"}):c,g=s=>{r(s)};return n.useEffect(()=>{r(1)},[]),e.jsxs("div",{className:"h-[510px] flex flex-col",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("div",{className:"flex border-y border-black w-[1400px] text-center py-2 gap-5 text-darkGray",children:[e.jsx("div",{className:"w-[10%]",children:"No"}),e.jsx("div",{className:"w-[60%]",children:"제목"}),e.jsx("div",{className:"w-[10%]",children:"작성자"}),e.jsx("div",{className:"w-[20%]",children:"작성일"})]})}),a.map((s,t)=>e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"flex border-b border-tableGray w-[1400px] text-center items-center py-2 gap-5",children:[e.jsx("div",{className:"w-[10%] flex justify-center",children:N(s,t+1)}),e.jsx("div",{className:"w-[60%] text-left cursor-pointer",onClick:()=>d(`/service/notice/detail?inquiryId=${s.inquiryId}`),children:v(s)}),e.jsx("div",{className:"w-[10%]",children:f(s)}),e.jsx("div",{className:"w-[20%]",children:h(s.createdAt).format("YYYY-MM-DD")})]})}))]}),e.jsx("div",{className:"flex justify-center bottom-0",children:e.jsxs("div",{className:"relative flex w-[1400px] justify-center text-center items-center py-2 gap-5",children:[e.jsx(w,{total:x*15,itemRender:y,showSizeChanger:!1,onChange:g,pageSize:15}),e.jsxs("div",{className:"flex absolute right-0 items-center gap-[5px] bg-gray px-4 py-2 rounded-[5px] cursor-pointer",onClick:()=>{l?d("/service/notice/writepost"):b.fire({title:"로그인이 필요한 서비스입니다!",text:"오른쪽 상단의 로그인 버튼을 눌러 로그인해주세요.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1})},children:[e.jsx(T,{}),e.jsx("button",{children:"글쓰기"})]})]})})]})},B=()=>{const[a,i]=n.useState([]),x=j(),o=m(),d=async()=>{const l={page:1,size:15};try{const r=await p.get("/api/system/v3/post-question",{params:l});console.log(r.data.resultData),i(r.data.resultData.postList)}catch(r){console.log(r)}};return n.useEffect(()=>{d(),console.log("이게 머임????",o)},[o]),e.jsxs("div",{className:"h-[510px] flex flex-col",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsx("div",{className:"flex justify-center items-center",children:e.jsxs("div",{className:"flex border-y border-black w-[1400px] text-center py-2 gap-5 text-darkGray",children:[e.jsx("div",{className:"w-[10%]",children:"No"}),e.jsx("div",{className:"w-[60%]",children:"제목"}),e.jsx("div",{className:"w-[10%]",children:"작성자"}),e.jsx("div",{className:"w-[20%]",children:"작성일"})]})}),a.map(l=>e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"flex border-b border-tableGray w-[1400px] text-center items-center py-2 gap-5",children:[e.jsx("div",{className:"w-[10%] flex justify-center",children:e.jsx(Y,{})}),e.jsx("div",{className:"w-[60%] text-left cursor-pointer",onClick:()=>x("/service/notice/detail"),children:l.inquiryTitle}),e.jsx("div",{className:"w-[10%]",children:"관리자"}),e.jsx("div",{className:"w-[20%]",children:h(l.createdAt).format("YYYY-MM-DD")})]})}))]}),e.jsx("div",{className:"flex justify-center bottom-0",children:e.jsx("div",{className:"relative flex w-[1400px] justify-center text-center gap-5 items-center",children:e.jsxs("div",{className:"flex items-center border border-darkGray rounded-[5px] px-4 py-1 gap-2 h-[40px]",children:[e.jsx("input",{type:"text",placeholder:"검색어를 입력해 주세요"}),e.jsx(C,{className:"text-darkGray cursor-pointer"})]})})})]})},M=()=>{const[a,i]=D(G);return e.jsxs("div",{className:"relative w-full h-dvh bg-white overflow-y-auto scrollbar-hide z-10 flex flex-col",children:[e.jsx(S,{}),e.jsxs("div",{className:"mt-[100px] relative flex-grow",children:[e.jsx("div",{className:"flex justify-center text-[30px] font-bold",children:a}),e.jsxs("div",{className:"flex justify-center text-[18px] my-[20px] gap-[30px]",children:[e.jsx("div",{className:`cursor-pointer ${a==="자주 묻는 질문"?"text-black":"text-darkGray"}`,onClick:()=>i("자주 묻는 질문"),children:"자주 묻는 질문"}),e.jsx("div",{className:`cursor-pointer ${a==="공지 및 게시판"?"text-black":"text-darkGray"}`,onClick:()=>i("공지 및 게시판"),children:"공지 및 게시판"})]}),a==="공지 및 게시판"?e.jsx(P,{}):e.jsx(B,{})]}),e.jsx(q,{})]})};export{M as default};
