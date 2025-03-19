import{u as P,c as m,d as U,j as e,L as G,H as Q,f as W,x as X,F as Z,T as _,k as r,Y as i,K as ee,m as u,n as se,y as te,z as ie,J as B,p as v,q as N,A as ae,B as l}from"./index-CYoNUBdu.js";import{h as oe}from"./index.esm-_UKnP-61.js";import{u as ne}from"./useModal-Dl94TWei.js";const k=B.button`
  color: #fff;
  border-radius: 5px;
  width: 120px;
  padding: 15px 0;
  font-size: 20px;

  @media (max-width: 430px) {
    font-size: 14px;
    max-width: 80px;
    width: 100%;
    padding: 10px 0;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    width: 120px;
    padding: 15px 0;
    font-size: 20px;
  }
`,S=B.input`
  border-bottom: 1px solid #bababa;
  color: #bababa;
  margin-right: 30px;
  width: 350px;
  font-size: 24px;
  padding: 15px 0;
  @media (max-width: 430px) {
    margin-right: 20px;
    max-width: 220px;
    width: 100%;
    padding: 10px 0;
  }
  @media (max-width: 1400px) and (min-width: 431px) {
    margin-right: 30px;
    width: 350px;
    font-size: 24px;
    padding: 15px 0;
  }
`,re=ae({name:l().required("회사이름은 필수입니다.").min(2,"회사이름은 최소 2자 이상이어야 합니다."),email:l().required("이메일은 필수입니다.").email("올바른 이메일 형식이 아닙니다."),address:l(),businessNumber:l(),ceoName:l().required("대표자이름은 필수입니다.").min(2,"대표자이름은 최소 2자 이상이어야 합니다.")});function me(){var g,w,y,C;const h=P(),[D,F]=m.useState(!1),[f,z]=m.useState({}),[b,x]=m.useState(!1),[A,I]=m.useState(!1),{Modal:V,open:p,close:T}=ne({title:"주소검색"}),{register:a,handleSubmit:$,formState:{errors:d},watch:o,setValue:q}=U({mode:"all",resolver:ie(re)}),L=async s=>{try{await v.post("/api/admin/company/v3/enrollment",s),N.fire({title:"회사 제휴 신청이 완료 되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(t=>{t.isConfirmed&&h("/store")})}catch(t){console.log(t)}},E=s=>{b?(console.log(s),F(t=>!t),L(s)):N.fire({title:"사업자 진위여부를 확인해주세요.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1})},H=o("name"),M=o("email"),Y=o("address"),c=o("businessNumber"),O=o("ceoName"),j=H&&M&&Y&&c&&O,R=async()=>{I(!0);try{const t=(await v.post(`/api/company/status?bNo=${c}`)).data.resultData;t.bstt==="계속사업자"||t.bstt==="신규사업자"?x(!0):x(!1)}catch(s){console.log(s)}},J=async s=>{console.log(s);let t=s.address,n="";const K=s.zonecode;s.addressType==="R"&&(s.bname!==""&&(n+=s.bname),s.buildingName!==""&&(n+=n!==""?`, ${s.buildingName}`:s.buildingName),t+=n!==""?` (${n})`:""),T(),z({fullAddress:t,zoneCode:K}),q("address",t)};return e.jsxs("div",{className:"bg-white h-[100vh] overflow-y-auto scrollbar-hide",children:[e.jsxs(G,{style:{position:"relative"},children:[e.jsx(Q,{children:e.jsx(W,{children:e.jsx(X,{className:"w-full h-full cursor-pointer",onClick:()=>h(-1)})})}),e.jsx(Z,{children:e.jsxs("form",{onSubmit:$(E),children:[e.jsx(_,{children:"기업 제휴 신청서"}),e.jsxs(r,{children:[e.jsxs("div",{className:"flex justify-between items-center w-[500px]",children:[e.jsx(S,{type:"text",placeholder:"사업자등록번호",...a("businessNumber")}),e.jsx(k,{type:"button",style:{backgroundColor:c?"#6F4CDB":"#ddd"},disabled:!c,onClick:()=>{R()},children:"번호조회"})]}),A?b?e.jsxs(i,{style:{color:"#888"},children:[e.jsx(ee,{}),"입점신청 가능한 사업자번호입니다."]}):e.jsx(i,{style:{color:"red"},children:"사업자 번호를 확인해 주세요."}):e.jsx(e.Fragment,{})]}),e.jsxs(r,{children:[e.jsx(u,{type:"text",placeholder:"회사 이름",...a("name")}),e.jsx(i,{children:(g=d.name)==null?void 0:g.message})]}),e.jsxs(r,{children:[e.jsxs("div",{className:"flex justify-between items-center w-[500px]",children:[e.jsx(S,{type:"text",placeholder:"회사 주소",value:f?f.fullAddress:"",onClick:()=>p(),...a("address")}),e.jsx(k,{type:"button",style:{backgroundColor:"#6F4CDB"},onClick:()=>p(),children:"주소찾기"})]}),e.jsx(i,{children:(w=d.address)==null?void 0:w.message})]}),e.jsxs(r,{children:[e.jsx(u,{type:"text",placeholder:"대표자 이름",...a("ceoName")}),e.jsx(i,{children:(y=d.ceoName)==null?void 0:y.message})]}),e.jsxs(r,{children:[e.jsx(u,{type:"email",placeholder:"이메일",...a("email")}),e.jsx(i,{children:(C=d.email)==null?void 0:C.message})]}),e.jsx("div",{className:"mx-[20px]",children:e.jsx(se,{type:"submit",style:{backgroundColor:j?"#6F4CDB":"#ddd"},disabled:!j,children:"확인"})})]})})]}),p?e.jsx(V,{children:e.jsx(oe,{onComplete:s=>J(s)})}):e.jsx(e.Fragment,{}),D&&e.jsx(te,{})]})}export{me as default};
