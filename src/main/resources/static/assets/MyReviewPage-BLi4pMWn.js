import{b as n,M as y,u as I,j as e,N as k,aq as M,ad as u,G as A,ae as C,p as h,ac as R,q as j}from"./index-BGt-xJRX.js";import{F as $}from"./index-BVoY1Ey6.js";import{M as L}from"./MenuBar-BhhDkGRr.js";import{I as S}from"./ImgPreview-B9Fa-z82.js";import{L as T}from"./LoadingScreen-CMAJMRGh.js";import"./index-BTXkr4Kg.js";import"./index-DlJ3IajS.js";import"./index-Dg2K4xYJ.js";const q=()=>{const[c,f]=n.useState(null),[x,g]=n.useState([]),[w,o]=n.useState(!0),d=y(),m=I(),p=async()=>{o(!0);const s={page:1,size:15};try{const r=(await h.get("/api/user/v3/review",{params:s,headers:{Authorization:`Bearer ${d}`}})).data.resultData.map(l=>({...l,createdAt:R(l.createdAt).format("YYYY-MM-DD")}));g([...r]),r.length===0?o(!1):setTimeout(()=>o(!1),1e3)}catch(t){console.log(t),o(!1)}};n.useEffect(()=>{p()},[]);const b=async s=>{const t={orderId:s};try{await h.delete("/api/user/v3/review",{params:t,headers:{Authorization:`Bearer ${d}`}}),j.fire({title:"삭제 성공",text:"리뷰가 삭제되었습니다",icon:"success",confirmButtonText:"확인",allowOutsideClick:!1}).then(()=>p())}catch(r){j.fire({title:"삭제 실패",text:r.response.data.resultMsg,icon:"error",confirmButtonText:"확인",allowOutsideClick:!1})}},v=s=>{f(s)},N=s=>{m(`/user/restaurant/detail/${s}`)};return e.jsxs("div",{className:"flex flex-col w-full h-dvh",children:[e.jsxs("div",{className:"flex w-full px-3 py-5 justify-between items-center border-b-2 border-gray border-opacity-70 bg-white",children:[e.jsx("span",{onClick:()=>m("/user/userInfo"),className:"flex w-[10%] justify-center text-2xl cursor-pointer",children:e.jsx(k,{})}),e.jsx("span",{className:"text-xl font-semibold tracking-wider",children:"내가 쓴 리뷰"}),e.jsx("span",{className:"flex w-[10%] justify-center text-lg",children:" "})]}),e.jsx("div",{className:"flex flex-col flex-1 overflow-y-auto",children:w?e.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:e.jsx(T,{message:"리뷰 불러오는 중..."})}):x.length===0?e.jsx("div",{className:"flex w-full h-full justify-center text-xl pt-40",children:"아직 작성한 리뷰가 없습니다"}):x.map((s,t)=>{var r,l;return e.jsxs("div",{className:"flex flex-col px-10 py-4 gap-2",children:[e.jsx("div",{className:"flex items-center text-lg",children:e.jsxs("div",{onClick:()=>N(s.restaurantId),className:"flex items-center gap-1 cursor-pointer",children:[e.jsx("span",{children:s.restaurantName}),e.jsx(M,{className:"font-semibold"})]})}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("span",{className:"flex items-center",children:[...Array(5)].map((i,a)=>e.jsx($,{className:a<s.rating?"text-yellow":"text-gray"},a))}),e.jsx("span",{className:"text-sm",children:s.createdAt})]}),(r=s==null?void 0:s.reviewPic)==null?void 0:r.map((i,a)=>e.jsx("div",{className:"flex w-full",children:e.jsx("img",{src:`${u}/${s.orderId}/${i}`,alt:"",className:"flex w-1/3 h-32 object-cover cursor-pointer",onClick:()=>v(`${u}/${s.orderId}/${i}`)})},a)),e.jsx("div",{className:"flex w-full",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:A.sanitize(String(s.reviewText))}})}),e.jsx("div",{className:"flex w-full gap-4 flex-wrap items-center",children:(l=s.menuName)==null?void 0:l.map((i,a)=>e.jsx("span",{className:"flex px-2 py-1 border bg-white rounded-xl",children:i},a))}),e.jsx("div",{className:"flex w-full justify-end items-center",children:e.jsxs("div",{onClick:()=>b(s.orderId),className:"flex items-center cursor-pointer gap-1",children:[e.jsx(C,{}),e.jsx("span",{children:"삭제"})]})}),s.commentCreatedAt&&e.jsxs("div",{className:"flex w-full gap-3",children:[e.jsx("img",{src:"/restaurant_default.png",alt:"",className:"flex w-10 h-10 object-cover border rounded-full"}),e.jsx("div",{className:"flex flex-col border w-full",children:e.jsxs("div",{className:`relative bg-white border border-black\r
                  after:content-[''] after:absolute after:border-solid after:border-transparent after:h-0 after:w-0 after:right-full after:top-1/2 after:mt-[-10px] after:border-r-[#ffffff]\r
                  before:content-[''] before:absolute before:border-solid before:border-transparent before:h-0 before:w-0 before:right-full before:top-5 before:border-[9px] before:mt-[-11px] before:border-r-black`,children:[e.jsxs("div",{className:"flex items-center p-4 gap-4",children:[e.jsx("span",{children:"사장님"}),e.jsx("span",{className:"text-sm",children:s.createdAt})]}),e.jsx("div",{className:"flex p-4",children:e.jsx("span",{children:s.commentText})})]})})]})]},t)})}),e.jsx(L,{}),c&&e.jsx(S,{image:c,onClose:()=>f(null)})]})};export{q as default};
