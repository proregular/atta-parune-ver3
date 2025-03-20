import{u as j,R as i,a as g,l as w,b,q as d,j as e,au as N,b2 as v,aq as y,M as I,p as k,b3 as C,b4 as $}from"./index-B5oM9k1B.js";import{i as R,M as B}from"./MenuBar-Bxx6aTbp.js";import{N as M}from"./NotificationIcon-D7k8vaE6.js";import"./index-DlKsry6x.js";import"./index-Br8KdqMx.js";import"./index-dG2tDvEL.js";function G(){const r=j(),[s,n]=i(g),[U,x]=i(R),[m,o]=i(w),l=window.sessionStorage.getItem("userId");b.useEffect(()=>{m||d.fire({title:"잘못된 접근입니다.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(t=>{t.isConfirmed&&r(-1)}),x(!1),(async()=>{try{if(l){const t={userId:l},h=I(),a=(await k.get("/api/user",{params:t,headers:{Authorization:`Bearer ${h}`}})).data.resultData,f=a.phone.replace(/[^0-9]/g,"").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g,"$1-$2-$3").replace(/(-{1,2})$/g,""),u=a.point.toLocaleString("ko-KR");console.log(a),n({...a,phone:f,point:u})}}catch(t){console.log(t)}})()},[]);const p=()=>{C(),$(),window.sessionStorage.removeItem("userId"),o(!1),d.fire({title:"로그아웃 되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(c=>{c.isConfirmed&&(o(!1),r("/user"),n({}))})};return e.jsxs("div",{className:"h-dvh overflow-x-hidden overflow-y-scroll scrollbar-hide bg-white",children:[e.jsx(M,{}),e.jsxs("div",{className:"absolute top-0 left-0 w-full flex justify-between items-center px-3 py-5 border-b-2 border-gray border-opacity-70 bg-white",children:[e.jsx("span",{children:" "}),e.jsx("span",{className:"text-xl font-semibold tracking-wider",children:"내 정보"}),e.jsx("span",{children:" "})]}),e.jsxs("div",{className:"flex flex-col h-dvh justify-around mt-24 gap-10",children:[e.jsxs("div",{className:"w-full h-[35%] flex flex-col items-center gap-4",children:[s.userPic?e.jsx("img",{src:`${N}/${s.userId}/${s.userPic}`,alt:"프로필 이미지",className:"w-32 h-32 rounded-full object-cover border border-gray shadow-lg"}):e.jsx("img",{src:"/profile.jpeg",alt:"프로필 이미지",className:"w-32 h-32 rounded-full object-cover border border-gray shadow-lg"}),e.jsxs("div",{className:"flex items-center ",children:[e.jsx("span",{className:"pr-3 ",children:"사용가능 포인트"}),e.jsx("span",{className:"font-bold text-2xl",children:s.point})]}),e.jsxs("span",{className:"flex items-center gap-2 px-3 py-1 border-2 border-gray rounded-xl ",children:[e.jsx(v,{className:"text-xl"}),s.email]}),e.jsxs("div",{onClick:()=>r("/user/userInfo/myreview"),className:"flex items-center gap-1 cursor-pointer",children:[e.jsx("span",{className:"text-lg font-semibold",children:"내가 작성한 리뷰"}),e.jsx(y,{className:"text-xl font-semibold"})]})]}),e.jsx("div",{className:"h-[40%] flex justify-center items-center ",children:e.jsxs("div",{className:"flex w-1/2 gap-5 items-center",children:[e.jsxs("div",{className:"flex flex-col w-[20%] gap-6 font-thin text-lg h-full text-darkGray text-nowrap",children:[e.jsx("span",{children:"닉네임"}),e.jsx("span",{children:"이름"}),e.jsx("span",{children:"아이디"}),e.jsx("span",{children:"소속"}),e.jsx("span",{children:"휴대폰"})]}),e.jsxs("div",{className:"flex flex-col w-[80%] gap-6 font-medium text-lg h-full text-nowrap",children:[s!=null&&s.nickName?e.jsx("span",{children:s.nickName}):e.jsx("span",{className:"text-darkGray",children:"닉네임 없음"}),e.jsx("span",{children:s.name}),e.jsx("span",{children:s.uid}),e.jsx("span",{children:s.companyName}),e.jsx("span",{children:s.phone})]})]})}),e.jsxs("div",{className:"flex h-[20%] justify-center gap-5 mb-32",children:[e.jsx("div",{onClick:()=>r("/user/userInfo/edit"),children:e.jsx("span",{className:"flex px-3 py-1 bg-primary rounded-lg text-white font-semibold text-center cursor-pointer",children:"회원정보 수정"})}),e.jsx("div",{onClick:()=>r("/auth/editpw"),children:e.jsx("span",{className:"flex px-3 py-1 bg-primary rounded-lg text-white font-semibold text-center cursor-pointer",children:"비밀번호 변경"})}),e.jsx("div",{onClick:p,children:e.jsx("span",{className:"flex px-3 py-1 bg-primary rounded-lg text-white font-semibold text-center cursor-pointer",children:"로그아웃"})})]})]}),e.jsx(B,{})]})}export{G as default};
