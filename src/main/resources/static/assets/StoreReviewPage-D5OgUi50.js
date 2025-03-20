import{b as r,ac as v,M as H,j as e,G as N,ad as Q,ae as B,a9 as U,p as n,Z as m,q as o}from"./index-DdD4BO7B.js";import{F as C}from"./index-1eKKLbez.js";import{S as V,P as W}from"./SideBar-mAnVCpvE.js";import"./useModal-ySdaEymv.js";const Z=m.div`
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  max-height: 100vh;
  height: auto;
  overflow: hidden;
`,J=m.div`
  margin-top: 32px;
  flex-wrap: wrap;
  padding: 20px 30px;
  padding-bottom: 30px;
  border-radius: 10px;
  width: 830px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  background-color: #fff;
`,k=m.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`,K=m.div`
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 350px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;function se(){const[I,p]=r.useState(0),[l,S]=r.useState(""),[j,y]=r.useState(!1),[x,D]=r.useState([]),[$,R]=r.useState([]),[T,A]=r.useState(0),w=v().format("YYYY-MM-DD"),E=v(w).add(-1,"day").format("YYYY-MM-DD"),[u,Y]=r.useState(E),[h,M]=r.useState(w),i=H(),c=parseInt(sessionStorage.getItem("adminId")),d=parseInt(sessionStorage.getItem("restaurantId")),f=async()=>{const t={adminId:c,restaurantId:d};try{const a=await n.get("/api/admin/restaurant/v3/black-list",{params:t,headers:{Authorization:`Bearer ${i}`}});R(a.data.resultData),console.log("블랙리스트 조회 완료",a.data.resultData)}catch(a){console.log(a)}},g=async()=>{const t={restaurantId:d,startDate:u,endDate:h};try{const a=await n.get("/api/restaurant/v3/review",{params:t});console.log("리뷰",a.data.resultData),A(a.data.resultData.avgRating),D(a.data.resultData.reviews)}catch(a){console.log(a)}},z=async t=>{const a={adminId:c,orderId:t};try{const s=await n.patch("/api/admin/restaurant/v3/review/del-request",a,{headers:{Authorization:`Bearer ${i}`}});o.fire({title:"신고가 성공적으로 접수되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),console.log(s)}catch(s){console.log(s)}},L=async t=>{const a={adminId:c,orderId:t,commentText:l};if(console.log(a),l==="<p><br></p>")o.fire({title:"댓글 내용을 입력해주세요.",icon:"error",allowOutsideClick:!1});else if(!l)o.fire({title:"댓글 내용을 입력해주세요.",icon:"error",allowOutsideClick:!1});else try{await n.post("/api/admin/restaurant/v3/review",a,{headers:{Authorization:`Bearer ${i}`}}),o.fire({title:"댓글이 등록되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),g()}catch(s){console.log(s)}},F=async t=>{const a={adminId:c,restaurantId:d,userId:t,reason:""};try{await n.post("/api/admin/restaurant/v3/black-list",a,{headers:{Authorization:`Bearer ${i}`}}),f()}catch(s){console.log(s)}},_=async t=>{try{await n.delete(`/api/admin/restaurant/reviewComment?restaurantId=${d}&orderId=${t}`,{headers:{Authorization:`Bearer ${i}`}}),o.fire("댓글이 삭제 되었습니다.","","success"),g(),p(0)}catch(a){console.log(a)}},G=t=>{o.fire({title:"댓글을 삭제하시겠습니까?",text:"삭제한 댓글은 복구할 수 없습니다.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#79BAF2",cancelButtonColor:"#E44B58",confirmButtonText:"확인",cancelButtonText:"취소",reverseButtons:!1}).then(a=>{a.isConfirmed&&_(t)})},O=async(t,a)=>{try{await n.delete(`/api/admin/restaurant/v3/black-list?adminId=${c}&restaurantId=${d}&userId=${t}`,{headers:{Authorization:`Bearer ${i}`}}),o.fire(`${a}님이 
 블랙리스트에서 삭제 되었습니다.`,"","success"),f()}catch(s){console.log(s)}},P=(t,a)=>{o.fire({title:`${a}님을 
 블랙리스트에서 삭제하시겠습니까?`,text:"삭제한 내용은 복구할 수 없습니다.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#79BAF2",cancelButtonColor:"#E44B58",confirmButtonText:"확인",cancelButtonText:"취소",reverseButtons:!1}).then(s=>{s.isConfirmed&&O(t,a)})};return r.useEffect(()=>{f(),g()},[u,h]),r.useEffect(()=>{console.log("가져온 데이터??",x)},[x]),r.useEffect(()=>{console.log("댓글",l)},[l]),e.jsx("div",{children:e.jsxs(Z,{children:[e.jsx(V,{}),e.jsxs(J,{className:"scrollbar-hide",children:[e.jsx(k,{children:"리뷰관리"}),e.jsx("div",{className:"border-gray border mb-5"}),e.jsx("div",{className:"mb-2 text-[18px]",children:"전체 별점"}),e.jsxs("div",{className:"flex gap-3 items-center mb-3",children:[e.jsx(C,{className:"text-yellow"}),e.jsx("div",{className:"font-bold",children:T.toFixed(1)}),e.jsxs("div",{className:"text-darkGray",children:["(총 리뷰 ",x.length,"개)"]})]}),e.jsxs("div",{className:"inline-flex gap-3 items-center border border-gray px-4 py-2 rounded-[5px] mb-10",children:[e.jsx("div",{className:"text-darkGray",children:"조회기간"}),e.jsx("input",{type:"date",value:u,onChange:t=>Y(t.target.value)}),e.jsx("div",{children:"~"}),e.jsx("input",{type:"date",value:h,onChange:t=>M(t.target.value)})]}),x.map((t,a)=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex gap-5",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold mb-2",children:t.nickName}),e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{className:"font-bold text-[20px]",children:t.rating.toFixed(1)}),e.jsx("div",{className:"flex gap-2",children:[...Array(5)].map((s,q)=>{const b=q+1;return e.jsx(C,{className:`w-[20px] h-[20px] ${b<=t.rating?"text-yellow":"text-gray"}`},b)})})]}),e.jsx("div",{className:"mt-2 text-darkGray",children:v(t.createdAt).format("YYYY-MM-DD")})]}),e.jsxs("div",{children:[e.jsx("p",{className:"w-[435px]",dangerouslySetInnerHTML:{__html:N.sanitize(String(t.reviewText))}}),e.jsx("div",{className:"flex w-[300px] my-3 gap-1",children:t.reviewPic.map(s=>e.jsx("img",{src:`${Q}/${t.orderId}/${s}`,className:"flex min-w-[100px] w-[100px] h-[100px] object-cover rounded-[5px]",alt:""}))}),e.jsx("div",{className:"mb-2 w-[435px] flex flex-wrap gap-2",children:t.menuName.map(s=>e.jsx("div",{className:"border border-slate-300 px-3 py-1 rounded-full inline",children:s}))}),t.commentText?e.jsxs("div",{className:"mt-5 w-[435px]",children:[e.jsxs("div",{className:"flex gap-3 items-center mb-3",children:[e.jsx("div",{className:"font-bold text-[20px]",children:"내가 남긴 댓글"}),e.jsx(B,{onClick:()=>G(t.orderId),className:"cursor-pointer text-[20px]"})]}),e.jsx("p",{className:"bg-gray p-4 rounded-[5px]",dangerouslySetInnerHTML:{__html:N.sanitize(String(t.commentText))}})]}):e.jsx("div",{children:I!==t.orderId?e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded-sm",onClick:()=>p(t.orderId),children:"댓글쓰기"}):e.jsxs("div",{children:[e.jsx(U,{className:"h-[150px] w-[435px]",placeholder:"소중한 리뷰에 답글을 남겨보세요!",modules:{toolbar:!1},readOnly:!1,onChange:s=>S(s)}),e.jsxs("div",{className:"flex justify-end gap-3 mt-2",children:[e.jsx("button",{className:"bg-gray py-1 px-3 rounded-[5px]",onClick:()=>p(0),children:"취소"}),e.jsx("button",{className:"bg-primary text-white py-1 px-3 rounded-[5px]",onClick:()=>L(t.orderId),children:"등록"})]})]})})]}),e.jsxs("div",{className:"flex gap-2 items-center cursor-pointer ml-5 text-red h-4",onClick:()=>{F(t.userId),z(t.orderId)},children:[e.jsx(W,{className:"w-[20px] h-[20px]"}),e.jsx("div",{children:"신고하기"})]})]}),e.jsx("div",{className:"border-gray border my-5"})]},a))]}),e.jsxs(K,{children:[e.jsx(k,{className:"text-center my-10",children:"블랙리스트 목록"}),e.jsx("div",{className:"mx-10 overflow-y-auto scrollbar-hide mb-5",children:$.map(t=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mt-2",children:[e.jsxs("div",{children:[t.nickName,"(",t.uid,")"]}),j&&e.jsx(B,{onClick:()=>P(t.userId,t.nickName),className:"cursor-pointer w-5 h-5"})]}),e.jsx("div",{className:"border-gray border mt-2"})]}))}),e.jsx("div",{className:"mt-auto mb-5 flex justify-center",children:j?e.jsx("button",{className:"bg-primary text-white py-2 px-5 rounded-[5px]",onClick:()=>y(!1),children:"확인"}):e.jsx("button",{className:"bg-primary text-white py-2 px-5 rounded-[5px]",onClick:()=>y(!0),children:"수정하기"})})]})]})})}export{se as default};
