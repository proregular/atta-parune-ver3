import{u as k,b as h,d as D,r as F,c as A,j as e,L,H as T,C as E,Q as I,F as P,T as R,k as m,m as f,U as t,Y as x,n as z,_ as O,V,W as Y,P as Z,p as g,t as j,S as _,X as q,Z as C,$ as H}from"./index-Da4pPRdE.js";const M=q({newUpw:C().required("비밀번호는 필수입니다.").min(8,"최소 8자 이상 작성해야 합니다.").max(16,"최대 16자까지 작성 가능합니다.").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,"비밀번호는 영어, 숫자, 특수문자만 가능합니다."),pwConfirm:C().required("비밀번호 확인을 입력해주세요.").oneOf([H("newUpw")],"비밀번호가 일치하지 않습니다.")});function Q(){var w,p;const r=k(),[v,S]=h.useState(!1),s=D(F),{register:c,handleSubmit:y,formState:{errors:l},watch:d}=A({mode:"onChange",resolver:Y(M)}),U=async i=>{try{const o=Z();console.log(o),s===t?(await g.put("/api/user/v3/upw",i,{headers:{Authorization:`Bearer ${o}`}}),j.fire({title:"비밀번호가 변경 되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(a=>{a.isConfirmed&&r("/user/userInfo")})):s===_&&(await g.put("/api/admin/v3/upw",i,{headers:{Authorization:`Bearer ${o}`}}),j.fire({title:"비밀번호가 변경 되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(a=>{a.isConfirmed&&r("/store")}))}catch(o){console.log(o)}},b=i=>{S(o=>!o),U({newUpw:i.newUpw})},B=d("newUpw"),$=d("pwConfirm"),n=B&&$;h.useEffect(()=>{console.log("계정 role 확인 : ",s)},[]);const u=e.jsxs(L,{style:{position:"relative"},children:[e.jsx(T,{children:e.jsx(E,{children:e.jsx(I,{style:{width:"100%",height:"100%",cursor:"pointer"},onClick:()=>r(-1)})})}),e.jsx(P,{children:e.jsxs("form",{onSubmit:y(b),children:[e.jsx(R,{children:"비밀번호 변경"}),e.jsxs(m,{children:[e.jsx(f,{type:"password",placeholder:"새 비밀번호",width:s===t?"100%":void 0,...c("newUpw")}),e.jsx(x,{children:(w=l.newUpw)==null?void 0:w.message})]}),e.jsxs(m,{children:[e.jsx(f,{type:"password",placeholder:"새 비밀번호 확인",width:s===t?"100%":void 0,...c("pwConfirm")}),e.jsx(x,{children:(p=l.pwConfirm)==null?void 0:p.message})]}),e.jsx("div",{style:{marginLeft:20,marginRight:20},children:e.jsx(z,{type:"submit",style:{backgroundColor:n?"#6F4CDB":"#ddd",cursor:n?"pointer":"not-allowed"},width:s===t?"100%":void 0,disabled:!n,children:"확인"})})]})})]});return e.jsxs(e.Fragment,{children:[s===t?e.jsx(O,{children:u}):u,v&&e.jsx(V,{})]})}export{Q as default};
