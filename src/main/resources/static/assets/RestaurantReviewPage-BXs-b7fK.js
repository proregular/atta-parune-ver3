import{b as c,au as $,u as R,av as k,j as e,as as L,aw as M,ax as S,ae as j,af as g,K as h,p as _}from"./index-Dwn4ReT8.js";import{F as w}from"./index-BPqH7yQR.js";import{I as C}from"./ImgPreview-D2Nxc2dP.js";import{M as E}from"./MenuBar-NpvOjMNV.js";import"./index-DBfSUapb.js";import"./index-Diu-U0Ae.js";import"./index-BbgKz01_.js";const U=()=>{var f,m,p,u;const[o,x]=c.useState(null),[l,b]=c.useState({}),[v,d]=c.useState(!0),{id:N}=$(),y=R(),i=k().state.reviewCnt;console.log("orderId 찾기 : ",l),c.useEffect(()=>{(async()=>{d(!0);try{const a=await _.get(`/api/restaurant/v3/review?restaurantId=${N}`);b({...a.data.resultData})}catch(a){console.log(a)}finally{setTimeout(()=>d(!1),500)}})()},[]);const I=s=>{console.log(s),x(s)};return e.jsxs("div",{className:"flex flex-col w-full h-dvh",children:[v&&e.jsx("div",{className:"absolute w-full h-full z-50 bg-white top-0 left-0",children:e.jsx(L,{message:"리뷰 불러오는 중..."})}),e.jsxs("div",{className:"flex absolute z-10 w-full px-3 py-5 justify-between items-center border-b-2 border-gray border-opacity-70 bg-white",children:[e.jsx("span",{onClick:()=>y(-1),className:"flex w-[10%] justify-center text-2xl cursor-pointer",children:e.jsx(M,{})}),e.jsxs("span",{className:"text-xl font-semibold tracking-wider",children:[l.restaurantName," 리뷰"]}),e.jsx("span",{className:"flex w-[10%] justify-center text-lg",children:" "})]}),e.jsxs("div",{className:"flex w-[90%] bg-gray px-4 py-4 mt-24 justify-between mx-auto rounded-sm",children:[e.jsxs("div",{className:"flex flex-col w-[30%] justify-center items-center text-nowrap",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(w,{className:"text-yellow text-xl"}),e.jsx("span",{className:"text-2xl font-semibold",children:(f=l.avgRating)==null?void 0:f.toFixed(1)})]}),e.jsxs("span",{className:"text-sm",children:["리뷰 ",i,"개"]})]}),e.jsx("div",{className:"flex flex-col w-[70%] items-center justify-end px-4",children:(m=l.ratingCounts)==null?void 0:m.map((s,a)=>{const t=(i===0?0:s.count/i*100).toFixed(0);return e.jsxs("div",{className:"flex w-full items-center gap-2",children:[e.jsx("span",{className:"flex w-[5%]",children:s.rating}),e.jsx("div",{className:"relative flex w-full h-2.5 rounded-md bg-darkGray",children:e.jsx("div",{className:"absolute left-0 top-0 h-full rounded-md bg-yellow",style:{width:`${t}%`}})}),e.jsx("span",{className:"flex w-[10%] text-darkGray ",children:`${t}%`})]},a)})})]}),e.jsx("div",{className:"flex flex-col w-full pb-24",children:((p=l.reviews)==null?void 0:p.length)===0?e.jsx("div",{className:"flex w-full justify-center pt-20 text-xl",children:"아직 작성된 리뷰가 없습니다"}):(u=l.reviews)==null?void 0:u.map((s,a)=>{var t;return e.jsxs("div",{className:"flex flex-col px-10 pt-10 pb-5 gap-3",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[s.userPic?e.jsx("img",{src:`${S}/${s.userId}/${s.userPic}`,alt:"",className:"flex w-10 h-10 rounded-full"}):e.jsx("img",{src:"/profile.jpeg",alt:"",className:"flex w-10 h-10 rounded-full"}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"flex items-center gap-1 text-lg ",children:e.jsx("span",{className:"font-semibold",children:s.nickName})}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("span",{className:"flex items-center text-sm",children:[...Array(5)].map((n,r)=>e.jsx(w,{className:r<s.rating?"text-yellow":"text-gray"},r))}),e.jsx("span",{className:"text-xs ",children:j(s.createdAt).format("YYYY-MM-DD")})]})]})]}),e.jsx("div",{className:"flex w-full",children:(t=s==null?void 0:s.reviewPic)==null?void 0:t.map((n,r)=>e.jsx("img",{src:`${g}/${s.orderId}/${n}`,alt:"",className:"flex w-1/3 h-32 cursor-pointer",onClick:()=>I(`${g}/${s.orderId}/${n}`)},r))}),e.jsx("div",{className:"flex w-full",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:h.sanitize(String(s.reviewText))}})}),e.jsx("div",{className:"flex w-full flex-wrap gap-4 items-center",children:s==null?void 0:s.menuName.map((n,r)=>e.jsx("span",{className:"flex px-2 py-1 border bg-white rounded-xl",children:n},r))}),e.jsx("div",{className:"flex w-full justify-end items-center"}),s.commentCreatedAt?e.jsxs("div",{className:"flex w-full gap-3",children:[e.jsx("img",{src:"/restaurant_default.png",alt:"",className:"flex w-10 h-10 object-cover border rounded-full"}),e.jsx("div",{className:"flex flex-col border w-full",children:e.jsxs("div",{className:`relative bg-white border border-black\r
                after:content-[''] after:absolute after: after:border-solid after:border-transparent after:h-0 after:w-0 after:right-full after:top-1/2 after:mt-[-10px] after:border-r-[#ffffff]\r
                before:content-[''] before:absolute before: before:border-solid before:border-transparent before:h-0 before:w-0 before:right-full before:top-5 before:border-[9px] before:mt-[-11px] before:border-r-black`,children:[e.jsxs("div",{className:"flex items-center px-4 pt-4 gap-4",children:[e.jsx("span",{children:"사장님"}),e.jsx("span",{className:"text-sm",children:j(s.commentCreatedAt).format("YYYY-MM-DD")})]}),e.jsx("div",{className:"flex p-4",children:e.jsx("span",{className:"bg-gray p-4 rounded-[5px]",dangerouslySetInnerHTML:{__html:h.sanitize(String(s.commentText))}})})]})})]}):e.jsx(e.Fragment,{})]},a)})}),e.jsx(E,{}),o&&e.jsx(C,{image:o,onClose:()=>x(null)})]})};export{U as default};
