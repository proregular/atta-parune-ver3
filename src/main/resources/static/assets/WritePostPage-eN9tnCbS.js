import{b as r,u as R,M as B,c as T,j as e,a5 as z,a6 as P,a7 as E,a8 as O,a9 as U,aa as L,B as A,D as M,I as V,ab as H,P as Q,Z as _,p as G,q as w,Q as J,V as h}from"./index-BExaS2Py.js";const W=_.div`
  min-width: ${({width:t})=>t?`${t}px`:"25px"};
  min-height: ${({height:t})=>t?`${t}px`:"25px"};
  width: ${({width:t})=>t?`${t}px`:"25px"};
  height: ${({height:t})=>t?`${t}px`:"25px"};
`,Z=J({postCode:h(),inquiryTitle:h(),inquiryDetail:h()}),X=()=>{const[t,j]=r.useState("문의사항"),[d,p]=r.useState(!1),b=R(),y=sessionStorage.getItem("name"),N=parseInt(sessionStorage.getItem("id")),C=sessionStorage.getItem("roleCode"),S=B(),[x,v]=r.useState([]),[u,g]=r.useState([]),m=r.useRef(null),{handleSubmit:k,setValue:o,register:$}=T({resolver:Q(Z)}),D=s=>{const a=s.target.files&&s.target.files;if(console.log(a),a){const l=Array.from(a);g(l);const n=l.map(i=>URL.createObjectURL(i));v(n)}m.current&&(m.current.value="")},I=s=>{const a=x.indexOf(s);a!==-1&&(v(l=>l.filter((n,i)=>i!==a)),g(l=>l.filter((n,i)=>i!==a)))},q=async s=>{const{inquiryDetail:a,inquiryTitle:l,postCode:n}=s,i={postCode:n,inquiryTitle:l,inquiryDetail:a,roleCode:C,id:N};console.log(i);const f=new FormData;f.append("req",new Blob([JSON.stringify(i)],{type:"application/json"})),u.forEach(c=>{f.append("reviewPics",c)});try{await G.post("/api/system/v3/post",f,{headers:{Authorization:`Bearer ${S}`}}),w.fire({title:"게시글 등록에 성공하였습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(c=>{c.isConfirmed&&b("/service/notice")})}catch(c){w.fire("게시글 등록에 실패하였습니다.","","error"),console.log(c)}},F=s=>{q(s)};return r.useEffect(()=>{console.log("프리뷰",x),console.log("이미지 파일",u)},[u,x]),r.useEffect(()=>{o("inquiryDetail",""),o("inquiryTitle",""),o("postCode","00202")},[]),e.jsxs("div",{className:"relative w-full h-dvh bg-white overflow-y-auto overflow-x-hidden z-10 flex flex-col",children:[e.jsx(z,{}),e.jsx("div",{className:"mt-[150px] flex-grow",children:e.jsxs("form",{onSubmit:k(F),children:[e.jsxs("div",{className:"flex justify-center relative",children:[e.jsxs("div",{className:"flex w-[1280px] justify-between z-10",children:[e.jsxs("div",{className:`relative border border-slate-300 w-[100px] text-[16px] bg-white ${d?"rounded-t-[5px]":"rounded-[5px]"}`,children:[e.jsxs("div",{className:"flex gap-1 justify-between py-1 cursor-pointer px-3 w-[100px] items-center",onClick:()=>p(!d),children:[e.jsx("div",{children:t}),d?e.jsx(P,{}):e.jsx(E,{})]}),d&&e.jsxs("div",{className:"absolute left-[-1px] bg-white w-[100px] px-3 border border-collapse border-slate-300 rounded-b-[5px]",children:[e.jsx("div",{className:"py-1 cursor-pointer",onClick:()=>{j("문의사항"),o("postCode","00202"),p(!1)},children:"문의사항"}),e.jsx("div",{className:"py-1 cursor-pointer",onClick:()=>{j("불편사항"),o("postCode","00203"),p(!1)},children:"불편사항"})]})]}),e.jsxs("div",{className:"flex items-center gap-2 h-[34px]",children:[e.jsx(O,{className:"text-[30px]"}),e.jsx("div",{className:"text-[20px]",children:y})]})]}),e.jsx("div",{className:"absolute mt-20",children:e.jsx("div",{className:"flex w-[1280px] text-[20px]",children:e.jsx("div",{className:"border border-darkGray w-full rounded-[5px] overflow-hidden",children:e.jsx("input",{type:"text",placeholder:"제목을 입력해주세요",className:"px-4 py-2 w-full",...$("inquiryTitle")})})})})]}),e.jsx("div",{className:"flex justify-center relative mt-32",children:e.jsx("div",{className:"flex w-[1280px] h-[450px] border-collapse border border-black justify-between z-10 rounded-[5px] overflow-hidden",children:e.jsx(U,{className:"h-[450px] w-full rounded-[5px]",placeholder:"문의 및 불편사항을 남겨주세요.",readOnly:!1,modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike"]]},onChange:s=>o("inquiryDetail",s),formats:["header","bold","italic","underline","strike","bullet"]})})}),e.jsx("div",{className:"flex justify-center mt-5",children:e.jsxs("div",{className:"flex gap-5 w-[1280px] h-[85px] z-10 items-center",children:[e.jsx("div",{className:"text-[20px] text-black",children:"첨부파일"}),e.jsxs("label",{htmlFor:"fileinput",className:"flex items-center gap-[2px] cursor-pointer border-2 border-dashed px-4 py-2 border-slate-300 rounded-lg",children:[e.jsx("div",{children:"파일선택"}),e.jsx(L,{className:"text-[20px]"})]}),e.jsx("input",{type:"file",id:"fileinput",ref:m,accept:"image/png, image/jpeg",onChange:s=>D(s),className:"absolute left-[-5000px]"}),e.jsx(A,{slidesPerView:2,spaceBetween:"5px",className:"w-[200px]",children:x.map((s,a)=>e.jsx(M,{className:"min-w-[85px]",children:e.jsxs(W,{width:85,height:85,className:"relative",children:[e.jsx("img",{src:s,alt:`preview-${a}`,className:"w-full h-full object-cover"}),e.jsx("div",{className:"w-[24px] h-[24px] cursor-pointer absolute top-0 right-0 rounded-full bg-black text-white p-[2px]",children:e.jsx(V,{onClick:()=>I(s),className:"w-full h-full"})})]},a)}))})]})}),e.jsx("div",{className:"flex justify-center mt-5",children:e.jsxs("div",{className:"flex gap-5 w-[1280px] z-10 justify-center items-center",children:[e.jsx("button",{type:"button",onClick:()=>b(-1),className:"px-6 py-2.5 border border-gray rounded-lg",children:"취소"}),e.jsx("button",{type:"submit",className:"px-6 py-2.5 bg-primary text-white rounded-lg",children:"작성완료"})]})})]})}),e.jsx(H,{})]})};export{X as default};
