import{j as e,I as f,b as o}from"./index-BExaS2Py.js";const h=({onClose:a,children:r,title:n,width:c=400,height:s=450})=>e.jsx("div",{className:"w-full h-dvh overflow-hidden fixed top-0 left-0 bg-darkGray bg-opacity-70 flex justify-center items-center text-center z-10",children:e.jsxs("div",{onClick:l=>l.stopPropagation(),style:{width:`${c}px`,height:`${s}px`},className:"absolute z-50 bg-white border-2 border-darkGray rounded-lg border-opacity-30 overflow-x-hidden overflow-y-scroll scrollbar-hide max-w-[90vw] max-h-[90vh]",children:[e.jsx("div",{className:"relative flex w-full h-[15%]",children:e.jsxs("div",{className:"absolute top-0 left-0 flex w-full h-full justify-between items-center px-5 border-b-2 border-gray",children:[e.jsx("span",{className:"font-medium text-2xl",children:n}),e.jsx(f,{onClick:a,className:"font-semibold size-6 cursor-pointer"})]})}),e.jsx("div",{className:"flex w-full h-[85%]",children:r})]})}),b=({useBlur:a=!0,title:r,width:n,height:c}={})=>{const[s,l]=o.useState(!1),[d,x]=o.useState({}),u=o.useCallback(t=>{console.log(t),x({...t}),l(()=>!0)},[]),i=o.useCallback(()=>{l(()=>!1)},[]);return{Modal:s?({children:t})=>e.jsx(h,{onClose:a?i:null,title:r,width:n,height:c,children:t}):()=>null,open:u,close:i,isOpen:s,eventData:d}};export{b as u};
