import{r as i,j as e,R as r,n as a}from"./index-BEM99ApS.js";import{d as n}from"./dayjs.min-DsW2vIxn.js";import{F as o}from"./index-EXaYp185.js";import{S as f,P as u}from"./SideBar-ClWAnffy.js";import{R as b}from"./quill.snow-DuuSNiXC.js";import"./index-z-0vrsf_.js";import"./isEqual-CwlUOuli.js";const y=a.div`
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  max-height: 100vh;
  height: auto;
  overflow: hidden;
`,N=a.div`
  margin-top: 32px;
  flex-wrap: wrap;
  padding: 20px 30px;
  padding-bottom: 30px;
  border-radius: 10px;
  width: 830px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  background-color: #fff;
`,m=a.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`,g=a.div`
  box-shadow:
    0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 350px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;function B(){const[p,d]=i.useState(!1),[k,j]=i.useState(""),[s,t]=i.useState(!1),l=n().format("YYYY-MM-DD"),h=n(l).add(-1,"day").format("YYYY-MM-DD");return e.jsx("div",{children:e.jsxs(y,{children:[e.jsx(f,{}),e.jsxs(N,{className:"scrollbar-hide",children:[e.jsx(m,{children:"리뷰관리"}),e.jsx("div",{className:"border-gray border mb-5"}),e.jsx("div",{className:"mb-2 text-[18px]",children:"전체 별점"}),e.jsxs("div",{className:"flex gap-3 items-center mb-3",children:[e.jsx(o,{className:"text-yellow"}),e.jsx("div",{className:"font-bold",children:"4.8"}),e.jsx("div",{className:"text-darkGray",children:"(총 리뷰 1,111개)"})]}),e.jsxs("div",{className:"inline-flex gap-3 items-center border border-gray px-4 py-2 rounded-[5px] mb-10",children:[e.jsx("div",{className:"text-darkGray",children:"조회기간"}),e.jsx("input",{type:"date",defaultValue:h}),e.jsx("div",{children:"~"}),e.jsx("input",{type:"date",defaultValue:l})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex gap-5",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold mb-2",children:"건물주 고양이"}),e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{className:"font-bold text-[20px]",children:"5.0"}),e.jsx("div",{className:"flex gap-2",children:[...Array(5)].map((x,v)=>{const c=v+1;return e.jsx(o,{className:`w-[20px] h-[20px] ${c<=5?"text-yellow":"text-gray"}`},c)})})]}),e.jsx("div",{className:"mt-2 text-darkGray",children:"2025-02-23"})]}),e.jsxs("div",{children:[e.jsx("div",{children:"양도 많고 감자도 잘 튀겨졌어요~~~ 역시 최고 !!"}),e.jsxs("div",{className:"flex w-[300px] my-3 gap-1",children:[e.jsx("img",{src:"/swiper1.jpg",className:"flex w-1/3 rounded-[5px]",alt:""}),e.jsx("img",{src:"/swiper2.jpg",className:"flex w-1/3 rounded-[5px]",alt:""}),e.jsx("img",{src:"/swiper3.jpg",className:"flex w-1/3 rounded-[5px]",alt:""})]}),e.jsx("div",{className:"mb-2",children:"모짜렐라인더 버거-베이컨 세트 1개, 양념감자(양파맛) 2개"}),p?e.jsxs("div",{children:[e.jsx(b,{className:"h-[150px]",placeholder:"소중한 리뷰에 답글을 남겨보세요!",modules:{toolbar:!1},readOnly:!1,onChange:x=>j(x)}),e.jsxs("div",{className:"flex justify-end gap-3 mt-2",children:[e.jsx("button",{className:"bg-gray py-1 px-3 rounded-[5px]",onClick:()=>d(!1),children:"취소"}),e.jsx("button",{className:"bg-primary text-white py-1 px-3 rounded-[5px]",children:"등록"})]})]}):e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded-sm",onClick:()=>d(!0),children:"댓글쓰기"})]}),e.jsxs("div",{className:"flex gap-2 items-center cursor-pointer ml-24 text-red h-4",children:[e.jsx(u,{className:"w-[20px] h-[20px]"}),e.jsx("div",{children:"신고하기"})]})]}),e.jsx("div",{className:"border-gray border my-5"})]})]}),e.jsxs(g,{children:[e.jsx(m,{className:"text-center my-10",children:"블랙리스트 목록"}),e.jsxs("div",{className:"mx-10 overflow-y-auto scrollbar-hide mb-5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mt-2",children:[e.jsx("div",{children:"배고픈직장인(10001211)"}),s&&e.jsx(r,{className:"cursor-pointer w-5 h-5"})]}),e.jsx("div",{className:"border-gray border mt-2"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mt-2",children:[e.jsx("div",{children:"점심사냥꾼(10002213)"}),s&&e.jsx("button",{children:e.jsx(r,{className:"cursor-pointer w-5 h-5"})})]}),e.jsx("div",{className:"border-gray border mt-2"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mt-2",children:[e.jsx("div",{children:"밥심으로버틴다(10003211)"}),s&&e.jsx("button",{children:e.jsx(r,{className:"cursor-pointer w-5 h-5"})})]}),e.jsx("div",{className:"border-gray border mt-2"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mt-2",children:[e.jsx("div",{children:"맛집탐험가(10001201)"}),s&&e.jsx("button",{children:e.jsx(r,{className:"cursor-pointer w-5 h-5"})})]}),e.jsx("div",{className:"border-gray border mt-2"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mt-2",children:[e.jsx("div",{children:"오늘뭐먹지(10001011)"}),s&&e.jsx("button",{children:e.jsx(r,{className:"cursor-pointer w-5 h-5"})})]}),e.jsx("div",{className:"border-gray border mt-2"})]})]}),e.jsx("div",{className:"mt-auto mb-5 flex justify-center",children:s?e.jsx("button",{className:"bg-primary text-white py-2 px-5 rounded-[5px]",onClick:()=>t(!1),children:"확인"}):e.jsx("button",{className:"bg-primary text-white py-2 px-5 rounded-[5px]",onClick:()=>t(!0),children:"수정하기"})})]})]})})}export{B as default};
