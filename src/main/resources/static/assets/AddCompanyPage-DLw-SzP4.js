import{u as G,r as m,j as e,I as J,h as K,i as Q,n as B,c as v,d as N}from"./index-ji0Yrnpj.js";import{o as W,c as X,a as n}from"./index.esm-D8A7WmYZ.js";import{h as Z}from"./index.esm-CKgp2eFm.js";import{u as _}from"./index.esm-Lv2zPOY3.js";import{u as ee}from"./useModal-DS29YlEr.js";import{L as se,H as te,C as ie,F as ae,T as oe,I as l,Y as i,S as u,a as re}from"./loginStyle-QJIAXPef.js";const S=B.button`
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
`,k=B.input`
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
`,ne=X({name:n().required("회사이름은 필수입니다.").min(2,"회사이름은 최소 2자 이상이어야 합니다."),email:n().required("이메일은 필수입니다.").email("올바른 이메일 형식이 아닙니다."),address:n(),businessNumber:n(),ceoName:n().required("대표자이름은 필수입니다.").min(2,"대표자이름은 최소 2자 이상이어야 합니다.")});function ue(){var g,w,y,C;const h=G(),[D,F]=m.useState(!1),[f,I]=m.useState({}),[b,x]=m.useState(!1),[z,A]=m.useState(!1),{Modal:V,open:p,close:T}=ee({title:"주소검색"}),{register:a,handleSubmit:$,formState:{errors:d},watch:o,setValue:L}=_({mode:"all",resolver:W(ne)}),q=async s=>{try{await v.post("/api/restaurant",s),N.fire({title:"가게 등록이 완료 되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(t=>{t.isConfirmed&&h("/store")})}catch(t){console.log(t)}},E=s=>{b?(console.log(s),F(t=>!t),q(s)):N.fire({title:"사업자 진위여부를 확인해주세요.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1})},H=o("name"),M=o("email"),Y=o("address"),c=o("businessNumber"),O=o("ceoName"),j=H&&M&&Y&&c&&O,R=async()=>{A(!0);try{const t=(await v.post(`/api/user/company/status?bNo=${c}`)).data.resultData;t.bstt==="계속사업자"||t.bstt==="신규사업자"?x(!0):x(!1)}catch(s){console.log(s)}},P=async s=>{console.log(s);let t=s.address,r="";const U=s.zonecode;s.addressType==="R"&&(s.bname!==""&&(r+=s.bname),s.buildingName!==""&&(r+=r!==""?`, ${s.buildingName}`:s.buildingName),t+=r!==""?` (${r})`:""),T(),I({fullAddress:t,zoneCode:U}),L("address",t)};return e.jsxs("div",{className:"bg-white h-[100vh] overflow-y-auto scrollbar-hide",children:[e.jsxs(se,{style:{position:"relative"},children:[e.jsx(te,{children:e.jsx(ie,{children:e.jsx(J,{className:"w-full h-full cursor-pointer",onClick:()=>h(-1)})})}),e.jsx(ae,{children:e.jsxs("form",{onSubmit:$(E),children:[e.jsx(oe,{children:"기업 제휴 신청서"}),e.jsxs(l,{children:[e.jsxs("div",{className:"flex justify-between items-center w-[500px]",children:[e.jsx(k,{type:"text",placeholder:"사업자등록번호",...a("businessNumber")}),e.jsx(S,{type:"button",style:{backgroundColor:c?"#6F4CDB":"#ddd"},disabled:!c,onClick:()=>{R()},children:"번호조회"})]}),z?b?e.jsxs(i,{style:{color:"#888"},children:[e.jsx(K,{}),"입점신청 가능한 사업자번호입니다."]}):e.jsx(i,{style:{color:"red"},children:"사업자 번호를 확인해 주세요."}):e.jsx(e.Fragment,{})]}),e.jsxs(l,{children:[e.jsx(u,{type:"text",placeholder:"회사 이름",...a("name")}),e.jsx(i,{children:(g=d.name)==null?void 0:g.message})]}),e.jsxs(l,{children:[e.jsxs("div",{className:"flex justify-between items-center w-[500px]",children:[e.jsx(k,{type:"text",placeholder:"회사 주소",value:f?f.fullAddress:"",onClick:()=>p(),...a("address")}),e.jsx(S,{type:"button",style:{backgroundColor:"#6F4CDB"},onClick:()=>p(),children:"주소찾기"})]}),e.jsx(i,{children:(w=d.address)==null?void 0:w.message})]}),e.jsxs(l,{children:[e.jsx(u,{type:"text",placeholder:"대표자 이름",...a("ceoName")}),e.jsx(i,{children:(y=d.ceoName)==null?void 0:y.message})]}),e.jsxs(l,{children:[e.jsx(u,{type:"email",placeholder:"이메일",...a("email")}),e.jsx(i,{children:(C=d.email)==null?void 0:C.message})]}),e.jsx("div",{className:"mx-[20px]",children:e.jsx(re,{type:"submit",style:{backgroundColor:j?"#6F4CDB":"#ddd"},disabled:!j,children:"확인"})})]})})]}),p?e.jsx(V,{children:e.jsx(Z,{onComplete:s=>P(s)})}):e.jsx(e.Fragment,{}),D&&e.jsx(Q,{})]})}export{ue as default};
