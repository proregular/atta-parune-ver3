import{c as n,w,u as b,p as m,a0 as v,j as e,x as N,af as y,a1 as p,a2 as I,q as k}from"./index-CYoNUBdu.js";import{F as M}from"./index-BLJ-O3Sp.js";import{M as A}from"./MenuBar-BT6rhJdS.js";import{I as C}from"./ImgPreview-De2s0pdh.js";import{p as R}from"./purify.es-DhD2mIk-.js";import"./index-CSCgtsCb.js";import"./index-DR0ZvOQL.js";import"./index-MZAjMObU.js";const z=()=>{const[c,f]=n.useState(null),[o,u]=n.useState([]),x=w(),d=b();n.useEffect(()=>{const s={page:1,size:15};try{(async()=>{const r=await m.get("/api/user/v3/review",{params:s,headers:{Authorization:`Bearer ${x}`}});console.log("서버에서 받아온 데이터 : ",r.data.resultData);const i=r.data.resultData.map(t=>({...t,createdAt:v(t.createdAt).format("YYYY-MM-DD")}));u([...i])})()}catch(a){console.log(a)}},[]);const h=async s=>{const a={orderId:s};try{const r=await m.delete("/api/user/v3/review",{params:a,headers:{Authorization:`Bearer ${x}`}});console.log(r.data)}catch(r){console.log(r),k.fire({title:"삭제 실패",text:r.response.data.resultMsg,icon:"error",confirmButtonText:"확인",allowOutsideClick:!1})}},j=s=>{console.log("미리보기 : ",s),f(s)},g=s=>{d(`/user/restaurant/detail/${s}`)};return e.jsxs("div",{className:"flex flex-col w-full h-dvh",children:[e.jsxs("div",{className:"flex w-full px-3 py-5 justify-between items-center border-b-2 border-gray border-opacity-70 bg-white",children:[e.jsx("span",{onClick:()=>d("/user/userInfo"),className:"flex w-[10%] justify-center text-2xl cursor-pointer",children:e.jsx(N,{})}),e.jsx("span",{className:"text-xl font-semibold tracking-wider",children:"내가 쓴 리뷰"}),e.jsx("span",{className:"flex w-[10%] justify-center text-lg",children:" "})]}),o.length===0?e.jsx("div",{className:"flex w-full h-full justify-center text-xl pt-40",children:"아직 작성한 리뷰가 없습니다"}):o==null?void 0:o.map((s,a)=>{var r,i;return e.jsxs("div",{className:"flex flex-col px-10 py-4 gap-2",children:[e.jsx("div",{className:"flex items-center text-lg",children:e.jsxs("div",{onClick:()=>g(s.restaurantId),className:"flex items-center gap-1 cursor-pointer",children:[e.jsx("span",{children:s.restaurantName}),e.jsx(y,{className:"font-semibold"})]})}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("span",{className:"flex items-center",children:[...Array(5)].map((t,l)=>e.jsx(M,{className:l<s.rating?"text-yellow":"text-gray"},l))}),e.jsx("span",{className:"text-sm",children:s.createdAt})]}),(r=s==null?void 0:s.reviewPic)==null?void 0:r.map((t,l)=>e.jsx("div",{className:"flex w-full",children:e.jsx("img",{src:`${p}/${s.orderId}/${t}`,alt:"",className:"flex w-1/3 h-28 cursor-pointer",onClick:()=>j(`${p}/${s.orderId}/${t}`)})},l)),e.jsx("div",{className:"flex w-full",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:R.sanitize(String(s.reviewText))}})}),e.jsx("div",{className:"flex w-full gap-4 items-center",children:(i=s.menuName)==null?void 0:i.map((t,l)=>e.jsx("span",{className:"flex px-2 py-1 border bg-white rounded-xl",children:t},l))}),e.jsx("div",{className:"flex w-full justify-end items-center",children:e.jsxs("div",{onClick:()=>h(s.orderId),className:"flex items-center cursor-pointer gap-1",children:[e.jsx(I,{}),e.jsx("span",{children:"삭제"})]})}),s.commentCreatedAt&&e.jsxs("div",{className:"flex w-full gap-3",children:[e.jsx("img",{src:"/restaurant_default.png",alt:"",className:"flex w-10 h-10 object-cover border rounded-full"}),e.jsx("div",{className:"flex flex-col border w-full",children:e.jsxs("div",{className:`relative bg-white border border-black\r
                after:content-[''] after:absolute after: after:border-solid after:border-transparent after:h-0 after:w-0 after:right-full after:top-1/2 after:mt-[-10px] after:border-r-[#ffffff]\r
                before:content-[''] before:absolute before: before:border-solid before:border-transparent before:h-0 before:w-0 before:right-full before:top-5 before:border-[9px] before:mt-[-11px] before:border-r-black`,children:[e.jsxs("div",{className:"flex items-center p-4 gap-4",children:[e.jsx("span",{children:"사장님"}),e.jsx("span",{className:"text-sm",children:s.createdAt})]}),e.jsx("div",{className:"flex p-4",children:e.jsx("span",{children:s.commentText})})]})})]})]},a)}),e.jsx(A,{}),c&&e.jsx(C,{image:c,onClose:()=>f(null)})]})};export{z as default};
