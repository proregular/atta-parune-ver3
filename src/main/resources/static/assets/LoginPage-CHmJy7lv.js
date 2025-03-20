import{u as U,R as m,l as B,i as H,a as N,b as c,c as _,d as M,r as O,j as e,L as Y,H as P,C as V,I as q,T as z,e as G,f as J,U as g,S as p,g as I,h,F as K,k as D,m as y,n as Q,o as f,p as d,s as l,q as W}from"./index-BGt-xJRX.js";function ss(){const n=U(),[v,w]=m(B),[X,k]=m(H),[Z,C]=m(N),[o,x]=c.useState({id:"",pw:""}),[S,j]=c.useState(!1),T=sessionStorage.getItem("userId"),L=sessionStorage.getItem("restaurantId"),{handleSubmit:b}=_(),a=M(O),R=()=>{a===g?n("/user"):a===p?n("/store"):a===I?n("/company"):a===h&&n("/admin")},E=async()=>{try{if(a===g){const s=(await d.post("/api/user/sign-in",o)).data.resultData;C({companyId:s.companyId,companyName:s.companyName,email:s.email,name:s.name,phone:s.phone,pic:s.pic,point:s.point,roleId:s.roleId,uid:s.uid,userId:s.userId}),console.log(s);const i=s.userId||T,r=s.accessToken;window.sessionStorage.setItem("userId",i),l(r),w(!0)}else if(a===p){const t=await d.post("/api/admin/sign-in",o);console.log(t.data.resultData);const s=t.data.resultData,i=s.divisionId||L,r=s.adminId,u=s.coalitionState,A=s.accessToken;window.sessionStorage.setItem("adminId",r),window.sessionStorage.setItem("restaurantId",i),window.sessionStorage.setItem("coalitionState",u),l(A),k(!0)}else if(a===I){const t=await d.post("/api/admin/sign-in",o);console.log(t.data.resultData);const s=t.data.resultData,i=s.adminId,r=s.divisionId,u=s.accessToken;window.sessionStorage.setItem("adminId",i),window.sessionStorage.setItem("companyId",r),l(u)}else if(a===h){const t=await d.post("/api/admin/sign-in",o);console.log(t.data.resultData);const s=t.data.resultData,i=s.adminId,r=s.accessToken;window.sessionStorage.setItem("adminId",i),l(r)}w(!0),R()}catch(t){W.fire({title:"아이디와 비밀번호가 일치하지 않습니다.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}),console.log(t)}},F=()=>{E()};return c.useEffect(()=>{v&&n(-1)},[]),c.useEffect(()=>{o.id&&o.pw?j(!0):j(!1)},[o]),e.jsxs(Y,{children:[e.jsx(P,{children:e.jsx(V,{children:e.jsx(q,{style:{width:"100%",height:"100%",cursor:"pointer"},onClick:()=>n(-1)})})}),e.jsxs(z,{children:[e.jsx(G,{src:"/logo.png",alt:"로고"}),e.jsx(J,{children:a===g?"사용자":a===p?"사장님":a===I?"회사":a===h?"시스템":""})]}),e.jsx(K,{children:e.jsxs("form",{onSubmit:b(F),children:[e.jsx(D,{children:e.jsx(y,{type:"text",placeholder:"아이디",value:o.id,onChange:t=>x({...o,id:t.target.value})})}),e.jsx(D,{children:e.jsx(y,{type:"password",value:o.pw,placeholder:"비밀번호 (8-16자)",onChange:t=>x({...o,pw:t.target.value})})}),e.jsx("div",{style:{marginLeft:20,marginRight:20},children:e.jsx(Q,{type:"submit",style:{backgroundColor:S?"#6F4CDB":"#ddd"},disabled:!S,children:"로그인"})})]})}),e.jsx(f,{onClick:()=>n("/auth/findid"),children:"아이디 찾기"}),e.jsx(f,{style:{color:"#bababa"},children:"I"}),e.jsx(f,{onClick:()=>n("/auth/findpw"),children:"비밀번호 찾기"})]})}export{ss as default};
