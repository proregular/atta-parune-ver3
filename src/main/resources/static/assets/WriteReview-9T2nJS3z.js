import{u as I,b as r,M as k,as as S,j as e,I as f,a9 as $,B as D,D as F,Z as g,p as B,q as w}from"./index-BGt-xJRX.js";import{b as O,F as L,c as T}from"./index-BVoY1Ey6.js";/* empty css                      */const A=g.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  gap: 30px;
  span {
    font-size: 20px;
    font-weight: 700;
  }
`,d=g.div`
  min-width: ${({width:i})=>i?`${i}px`:"25px"};
  min-height: ${({height:i})=>i?`${i}px`:"25px"};
  width: ${({width:i})=>i?`${i}px`:"25px"};
  height: ${({height:i})=>i?`${i}px`:"25px"};
`;function P(){const i=I(),[j,v]=r.useState(""),[n,m]=r.useState([]),[p,h]=r.useState([]),x=r.useRef(null),[u,N]=r.useState(0),b=k(),o=S();console.log(o.state);const y=a=>{const t=a.target.files&&a.target.files;if(console.log(t),t){const s=Array.from(t);h(s);const l=s.map(c=>URL.createObjectURL(c));m(l)}x.current&&(x.current.value="")},C=async()=>{const a={orderId:o.state.orderId,rating:u,reviewText:j};console.log(a);const t=new FormData;t.append("reviewRequestDto",new Blob([JSON.stringify(a)],{type:"application/json"})),p.forEach(s=>{t.append("reviewPics",s)});try{const s=await B.post("/api/user/v3/review",t,{headers:{Authorization:`Bearer ${b}`}});console.log("res : ",s.data),s.data.statusCode==="200"&&w.fire({title:"리뷰가 등록되었어요",icon:"success",confirmButtonText:"확인",allowOutsideClick:!1}).then(l=>{l.isConfirmed&&i("/user/order")})}catch(s){console.log("리뷰 작성 중 오류 발생 : ",s),w.fire({title:"리뷰 작성 중 오류발생",text:s==null?void 0:s.response.data.resultMsg,icon:"error",confirmButtonText:"확인",allowOutsideClick:!1}).then(l=>{l.isConfirmed&&i("/user/order")})}},R=a=>{const t=n.indexOf(a);t!==-1&&(m(s=>s.filter((l,c)=>c!==t)),h(s=>s.filter((l,c)=>c!==t)))};return r.useEffect(()=>{console.log("프리뷰",n),console.log("이미지 파일",p)},[p,n]),e.jsxs("div",{className:"h-[100vh] relative",children:[e.jsxs(A,{children:[e.jsx(d,{children:e.jsx(f,{className:"w-full h-full cursor-pointer",onClick:()=>i(-1)})}),e.jsx("span",{children:"만족도 평가 및 리뷰"})]}),e.jsxs("div",{className:"p-[10px] px-[15px] mt-2",children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(d,{width:30,height:30,children:e.jsx(O,{className:"w-full h-full text-third"})}),e.jsx("div",{className:"text-[24px] font-bold",children:"음식 평가"})]}),e.jsxs("div",{className:"ml-[46px]",children:[e.jsx("div",{className:"mt-2 text-[18px]",children:o.state.restaurantName}),e.jsx("div",{className:"flex gap-1 mt-2",children:[...Array(5)].map((a,t)=>{const s=t+1;return e.jsx(L,{className:s<=u?"text-yellow":"text-gray",onClick:()=>N(s),style:{cursor:"pointer"}},s)})}),e.jsx($,{className:"h-[150px] mt-6 mr-5",placeholder:"다른 고객들이 참고할 수 있도록 음식 맛, 가격, 양 등 음식에 대한 경험을 적어주세요.",modules:{toolbar:!1},readOnly:!1,onChange:a=>v(a)}),e.jsxs("div",{className:"flex mt-4 items-center gap-5 mr-5",children:[e.jsx("div",{className:"px-[10px] py-[10px] border border-black rounded-[5px] w-[85px] h-[85px]",children:e.jsxs("label",{htmlFor:"reviewImg",className:"cursor-pointer",children:[e.jsx(d,{width:30,height:30,className:"m-auto mb-2",children:e.jsx(T,{className:"w-full h-full"})}),e.jsx("div",{className:"w-[65px]",children:"사진 추가"})]})}),e.jsx("input",{type:"file",id:"reviewImg",multiple:!0,className:"opacity-0 w-0 h-0",accept:"image/png, image/jpeg",onChange:a=>y(a),ref:x}),e.jsx(D,{slidesPerView:2,spaceBetween:"5px",className:"w-[200px]",children:n.map((a,t)=>e.jsx(F,{className:"min-w-[85px]",children:e.jsxs(d,{width:85,height:85,className:"relative",children:[e.jsx("img",{src:a,alt:`preview-${t}`,className:"w-full h-full"}),e.jsx("div",{className:"w-[24px] h-[24px] cursor-pointer absolute top-0 right-0 rounded-full bg-black text-white p-[2px]",children:e.jsx(f,{onClick:()=>R(a),className:"w-full h-full"})})]},t)}))})]}),e.jsx("div",{className:"mt-5 flex justify-between mr-5 items-center",children:e.jsx("div",{children:o.state.pastDtoList.map((a,t)=>e.jsx("div",{children:e.jsx("div",{className:"text-[18px]",children:a.menuName})},t))})})]})]}),e.jsx("button",{onClick:C,className:"w-full py-3 bg-primary text-white absolute bottom-0",children:"등록하기"})]})}export{P as default};
