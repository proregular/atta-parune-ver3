import{u as D,b as B,d as $,r as k,c as F,j as e,L as I,H as L,C as R,P as T,T as V,F as E,k as h,m as x,Y as f,n as q,Q as O,V as U,U as Y,p as g,S as A,q as j,W as H,X as p}from"./index-Dwn4ReT8.js";const P=H({name:p().required("이름은 필수입니다.").min(2,"이름은 최소 2자 이상이어야 합니다."),email:p().required("이메일은 필수입니다.").email("올바른 이메일 형식이 아닙니다.")});function M(){var d,u;const a=D(),[v,t]=B.useState(!1),n=$(k),{register:o,handleSubmit:S,formState:{errors:r},watch:l,setValue:m}=F({mode:"onChange",resolver:U(P)}),C=async s=>{try{n===Y?await g.get(`/api/user/find-id?name=${s.name}&email=${s.email}`):n===A&&await g.get(`/api/admin/find-id?name=${s.name}&email=${s.email}`),j.fire({title:`${s.email} 이메일로 아이디가 전송되었습니다.`,icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(i=>{i.isConfirmed&&a("/auth")})}catch(i){j.fire({title:"이름과 이메일이 일치하지 않습니다.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),m("name",""),m("email",""),t(!1),console.log(i)}},w=s=>{console.log(s),t(i=>!i),C(s)},y=l("name"),b=l("email"),c=y&&b;return e.jsxs("div",{children:[e.jsxs(I,{style:{position:"relative"},children:[e.jsx(L,{children:e.jsx(R,{children:e.jsx(T,{style:{width:"100%",height:"100%",cursor:"pointer"},onClick:()=>a(-1)})})}),e.jsx(V,{children:"아이디 찾기"}),e.jsx(E,{children:e.jsxs("form",{onSubmit:S(w),children:[e.jsxs(h,{children:[e.jsx(x,{type:"text",placeholder:"이름",...o("name")}),e.jsx(f,{children:(d=r.name)==null?void 0:d.message})]}),e.jsxs(h,{children:[e.jsx(x,{type:"email",placeholder:"이메일",...o("email")}),e.jsx(f,{children:(u=r.email)==null?void 0:u.message})]}),e.jsx("div",{style:{marginLeft:20,marginRight:20},children:e.jsx(q,{type:"submit",style:{backgroundColor:c?"#6F4CDB":"#ddd"},disabled:!c,children:"확인"})})]})})]}),v&&e.jsx(O,{})]})}export{M as default};
