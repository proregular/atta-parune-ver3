import{u as b,c as B,e as D,r as k,d as F,j as e,L,H as R,f as T,x as E,F as I,T as P,k as m,m as u,Y as h,n as $,y as A,z as O,U,p as x,q as f,S as V,A as Y,B as p}from"./index-CYoNUBdu.js";const q=Y({id:p().min(6,"최소 6자 이상 작성해야 합니다."),email:p().required("이메일은 필수입니다.").email("올바른 이메일 형식이 아닙니다.")});function _(){var c,d;const t=b(),[j,g]=B.useState(!1),a=D(k),{register:n,handleSubmit:v,formState:{errors:o},watch:r}=F({mode:"onChange",resolver:O(q)}),w=async i=>{try{a===U?(await x.put("/api/user/v3/find-password",i),f.fire({title:`${i.email}로 비밀번호가 전송되었습니다.`,icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(s=>{s.isConfirmed&&t("/auth")})):a===V&&(await x.put("/api/admin/v3/find-password",i),f.fire({title:`${i.email}로 비밀번호가 전송되었습니다.`,icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(s=>{s.isConfirmed&&t("/auth")}))}catch(s){console.log(s)}},S=i=>{g(s=>!s),w(i)},y=r("id"),C=r("email"),l=y&&C;return e.jsxs("div",{children:[e.jsxs(L,{style:{position:"relative"},children:[e.jsx(R,{children:e.jsx(T,{children:e.jsx(E,{style:{width:"100%",height:"100%",cursor:"pointer"},onClick:()=>t(-1)})})}),e.jsx(I,{children:e.jsxs("form",{onSubmit:v(S),children:[e.jsx(P,{children:"비밀번호 찾기"}),e.jsxs(m,{children:[e.jsx(u,{type:"text",placeholder:"아이디",...n("id")}),e.jsx(h,{children:(c=o.id)==null?void 0:c.message})]}),e.jsxs(m,{children:[e.jsx(u,{type:"email",placeholder:"이메일",...n("email")}),e.jsx(h,{children:(d=o.email)==null?void 0:d.message})]}),e.jsx("div",{style:{marginLeft:20,marginRight:20},children:e.jsx($,{type:"submit",style:{backgroundColor:l?"#6F4CDB":"#ddd"},disabled:!l,children:"확인"})})]})})]}),j&&e.jsx(A,{})]})}export{_ as default};
