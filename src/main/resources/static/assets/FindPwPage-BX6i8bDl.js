import{u as b,b as D,d as B,r as k,c as F,j as s,L,H as P,C as R,N as T,F as E,T as I,k as m,m as u,Y as h,n as O,O as V,P as $,U,p as x,q as f,S as Y,Q as q,V as p}from"./index-BebHIGA7.js";const A=q({id:p().min(6,"최소 6자 이상 작성해야 합니다."),email:p().required("이메일은 필수입니다.").email("올바른 이메일 형식이 아닙니다.")});function N(){var c,d;const t=b(),[j,g]=D.useState(!1),a=B(k),{register:n,handleSubmit:v,formState:{errors:o},watch:r}=F({mode:"onChange",resolver:$(A)}),w=async i=>{try{a===U?(await x.put("/api/user/v3/find-password",i),f.fire({title:`${i.email}로 비밀번호가 전송되었습니다.`,icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(e=>{e.isConfirmed&&t("/auth")})):a===Y&&(await x.put("/api/admin/v3/find-password",i),f.fire({title:`${i.email}로 비밀번호가 전송되었습니다.`,icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(e=>{e.isConfirmed&&t("/auth")}))}catch(e){console.log(e)}},S=i=>{g(e=>!e),w(i)},C=r("id"),y=r("email"),l=C&&y;return s.jsxs("div",{children:[s.jsxs(L,{style:{position:"relative"},children:[s.jsx(P,{children:s.jsx(R,{children:s.jsx(T,{style:{width:"100%",height:"100%",cursor:"pointer"},onClick:()=>t(-1)})})}),s.jsx(E,{children:s.jsxs("form",{onSubmit:v(S),children:[s.jsx(I,{children:"비밀번호 찾기"}),s.jsxs(m,{children:[s.jsx(u,{type:"text",placeholder:"아이디",...n("id")}),s.jsx(h,{children:(c=o.id)==null?void 0:c.message})]}),s.jsxs(m,{children:[s.jsx(u,{type:"email",placeholder:"이메일",...n("email")}),s.jsx(h,{children:(d=o.email)==null?void 0:d.message})]}),s.jsx("div",{style:{marginLeft:20,marginRight:20},children:s.jsx(O,{type:"submit",style:{backgroundColor:l?"#6F4CDB":"#ddd"},disabled:!l,children:"확인"})})]})})]}),j&&s.jsx(V,{})]})}export{N as default};
