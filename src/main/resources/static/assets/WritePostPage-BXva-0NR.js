import{c as a,u as b,j as e,W as w,X as N,Z as g,_ as y,I as k,$ as C,J as S}from"./index-DA5DsCSi.js";import{M as $}from"./index-Ddmy_4UK.js";import{R}from"./quill.snow-vY5sSHAX.js";import{S as I,f as F}from"./swiper-react-C2U4Jbu-.js";import"./isEqual-CwlUOuli.js";const z=S.div`
  min-width: ${({width:s})=>s?`${s}px`:"25px"};
  min-height: ${({height:s})=>s?`${s}px`:"25px"};
  width: ${({width:s})=>s?`${s}px`:"25px"};
  height: ${({height:s})=>s?`${s}px`:"25px"};
`,M=()=>{const[s,p]=a.useState("구분"),[c,o]=a.useState(!1),h=b(),[d,m]=a.useState([]),[f,u]=a.useState([]),x=a.useRef(null),j=r=>{const l=r.target.files&&r.target.files;if(console.log(l),l){const t=Array.from(l);u(t);const n=t.map(i=>URL.createObjectURL(i));m(n)}x.current&&(x.current.value="")},v=r=>{const l=d.indexOf(r);l!==-1&&(m(t=>t.filter((n,i)=>i!==l)),u(t=>t.filter((n,i)=>i!==l)))};return a.useEffect(()=>{console.log("프리뷰",d),console.log("이미지 파일",f)},[f,d]),e.jsxs("div",{className:"relative w-full h-dvh bg-white overflow-y-auto scrollbar-hide z-10 flex flex-col",children:[e.jsx(w,{}),e.jsx("div",{className:"mt-[150px] flex-grow",children:e.jsxs("form",{children:[e.jsxs("div",{className:"flex justify-center relative",children:[e.jsxs("div",{className:"flex w-[1280px] justify-between z-10",children:[e.jsxs("div",{className:`relative border border-slate-300 w-[100px] text-[16px] bg-white ${c?"rounded-t-[5px]":"rounded-[5px]"}`,children:[e.jsxs("div",{className:"flex gap-1 justify-between py-1 cursor-pointer px-3 w-[100px] items-center",onClick:()=>o(!c),children:[e.jsx("div",{children:s}),c?e.jsx(N,{}):e.jsx(g,{})]}),c&&e.jsxs("div",{className:"absolute left-[-1px] bg-white w-[100px] px-3 border border-collapse border-slate-300 rounded-b-[5px]",children:[e.jsx("div",{className:"py-1 cursor-pointer",onClick:()=>{p("문의사항"),o(!1)},children:"문의사항"}),e.jsx("div",{className:"py-1 cursor-pointer",onClick:()=>{p("불편사항"),o(!1)},children:"불편사항"})]})]}),e.jsxs("div",{className:"flex items-center gap-2 h-[34px]",children:[e.jsx(y,{className:"text-[30px]"}),e.jsx("div",{className:"text-[20px]",children:"김길동"})]})]}),e.jsx("div",{className:"absolute mt-20",children:e.jsx("div",{className:"flex w-[1280px] text-[20px]",children:e.jsx("div",{className:"border border-darkGray w-full rounded-[5px] overflow-hidden",children:e.jsx("input",{type:"text",placeholder:"제목을 입력해주세요",className:"px-4 py-2 w-full"})})})})]}),e.jsx("div",{className:"flex justify-center relative mt-32",children:e.jsx("div",{className:"flex w-[1280px] h-[450px] border-collapse border border-black justify-between z-10 rounded-[5px] overflow-hidden",children:e.jsx(R,{className:"h-[450px] w-full rounded-[5px]",placeholder:"문의 및 불편사항을 남겨주세요.",readOnly:!1,modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike"]]},formats:["header","bold","italic","underline","strike","bullet"]})})}),e.jsx("div",{className:"flex justify-center mt-5",children:e.jsxs("div",{className:"flex gap-5 w-[1280px] h-[85px] z-10 items-center",children:[e.jsx("div",{className:"text-[20px] text-black",children:"첨부파일"}),e.jsxs("label",{htmlFor:"fileinput",className:"flex items-center gap-[2px] cursor-pointer border-2 border-dashed px-4 py-2 border-slate-300 rounded-lg",children:[e.jsx("div",{children:"파일선택"}),e.jsx($,{className:"text-[20px]"})]}),e.jsx("input",{type:"file",id:"fileinput",ref:x,onChange:r=>j(r),className:"absolute left-[-5000px]"}),e.jsx(I,{slidesPerView:2,spaceBetween:"5px",className:"w-[200px]",children:d.map((r,l)=>e.jsx(F,{className:"min-w-[85px]",children:e.jsxs(z,{width:85,height:85,className:"relative",children:[e.jsx("img",{src:r,alt:`preview-${l}`,className:"w-full h-full object-cover"}),e.jsx("div",{className:"w-[24px] h-[24px] cursor-pointer absolute top-0 right-0 rounded-full bg-black text-white p-[2px]",children:e.jsx(k,{onClick:()=>v(r),className:"w-full h-full"})})]},l)}))})]})}),e.jsx("div",{className:"flex justify-center mt-5",children:e.jsxs("div",{className:"flex gap-5 w-[1280px] z-10 justify-center items-center",children:[e.jsx("button",{type:"button",onClick:()=>h(-1),className:"px-6 py-2.5 border border-gray rounded-lg",children:"취소"}),e.jsx("button",{type:"submit",className:"px-6 py-2.5 bg-primary text-white rounded-lg",children:"작성완료"})]})})]})}),e.jsx(C,{})]})};export{M as default};
