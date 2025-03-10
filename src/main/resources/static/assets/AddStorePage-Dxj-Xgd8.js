import{u as oe,r as l,j as e,I as le,e as de,f as ce,n as j,g as q,h as L}from"./index-DJgBPc4Q.js";import{o as xe,c as pe,e as g,a as c}from"./index.esm-CZuSFxBQ.js";import{h as ue}from"./index.esm-Bdq_nA-h.js";import{u as me}from"./index.esm-ChsSJTbT.js";import{u as he}from"./useModal-BpbXFQEG.js";import{L as ge,H as fe,C as je,F as be,T as ye,I as i,Y as d,S as f,a as we}from"./loginStyle-CKYpu_lu.js";const R=j.button`
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
`,C=j.input`
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
`,v=j.div`
  padding: 10px 30px;
  border-radius: 30px;
  background-color: #6f4cdb;
  background-color: #ddd;
  color: #fff;
  cursor: pointer;
`,M=j.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  span {
    padding: 10px 25px;
    font-weight: 700;
    color: #6f4cdb;
  }
  input {
    font-size: 16px;
    background-color: none;
    width: 120px;
    height: 40px;
  }
`,Ce=pe({restaurantName:c().required("가게이름은 필수입니다.").min(2,"가게이름은 최소 2자 이상이어야 합니다."),email:c().required("이메일은 필수입니다.").email("올바른 이메일 형식이 아닙니다."),restaurantAddress:c(),businessNumber:c(),restaurantNumber:c().required("전화번호는 필수입니다.").matches(/^\d{10,12}$/,"하이픈을 빼고 10~12자리 숫자만 입력해주세요."),categoryId:g(),operatingHours:c(),restaurantDescription:c().required("상세 설명은 필수입니다."),maxCapacity:g().min(1,"최대 수용 인원은 1 이상이어야 합니다."),lat:g(),lng:g()});function Ae(){var B,F,z,$,H,V;const k=oe(),[O,Y]=l.useState(!1),[N,K]=l.useState({}),[p,D]=l.useState({startTime:"10:00",endTime:"22:00"}),[S,b]=l.useState(!1),[U,P]=l.useState(!1),{Modal:G,open:y,close:J}=he({title:"주소검색"}),{register:a,handleSubmit:Q,formState:{errors:x},watch:r,setValue:n}=me({mode:"all",resolver:xe(Ce)}),W=async s=>{try{await q.post("/api/restaurant",s),L.fire({title:"가게 등록이 완료 되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(t=>{t.isConfirmed&&k("/store")})}catch(t){console.log(t)}},X=s=>{S?(console.log(s),Y(t=>!t),W(s)):L.fire({title:"사업자 진위여부를 확인해주세요.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1})},Z=r("restaurantName"),_=r("email"),w=r("restaurantAddress"),u=r("businessNumber"),ee=r("restaurantNumber"),m=r("categoryId"),se=r("operatingHours"),te=r("restaurantDescription"),re=r("maxCapacity"),I=r("lat"),A=r("lng"),T=Z&&_&&w&&u&&ee&&m&&se&&te&&re&&I&&A,ae=async()=>{P(!0);try{const t=(await q.post(`/api/user/company/status?bNo=${u}`)).data.resultData;t.bstt==="계속사업자"||t.bstt==="신규사업자"?b(!0):b(!1)}catch(s){console.log(s)}},ie=async s=>{try{const o=await(await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(s)}`,{headers:{Authorization:"KakaoAK c39062d8559862a0fe376de133d3af0c"}})).json();if(o.documents.length>0){const{x:h,y:E}=o.documents[0];n("lat",E),n("lng",h),console.log("이 주소의 위도 : ",E,", 경도 : ",h)}}catch(t){console.error("Error fetching coordinates:",t)}},ne=async s=>{console.log(s);let t=s.address,o="";const h=s.zonecode;s.addressType==="R"&&(s.bname!==""&&(o+=s.bname),s.buildingName!==""&&(o+=o!==""?`, ${s.buildingName}`:s.buildingName),t+=o!==""?` (${o})`:""),await ie(t),J(),K({fullAddress:t,zoneCode:h}),n("restaurantAddress",t)};return l.useEffect(()=>{n("operatingHours",`${p.startTime} ~ ${p.endTime}`),console.log("운영시간 ",r("operatingHours"))},[p]),l.useEffect(()=>{n("categoryId",1)},[]),l.useEffect(()=>{console.log(w),console.log("이 주소의 위도 : ",I),console.log("이 주소의 경도 : ",A)},[w]),e.jsxs("div",{className:"bg-white h-[100vh] overflow-y-auto scrollbar-hide",children:[e.jsxs(ge,{style:{position:"relative"},children:[e.jsx(fe,{children:e.jsx(je,{children:e.jsx(le,{className:"w-full h-full cursor-pointer",onClick:()=>k(-1)})})}),e.jsx(be,{children:e.jsxs("form",{onSubmit:Q(X),children:[e.jsx("input",{type:"tel",className:"absolute left-[-5000px]",...a("lat")}),e.jsx("input",{type:"tel",className:"absolute left-[-5000px]",...a("lng")}),e.jsx(ye,{children:"매장 입점 신청서"}),e.jsxs(i,{children:[e.jsxs("div",{className:"flex justify-between items-center w-[500px]",children:[e.jsx(C,{type:"text",placeholder:"사업자등록번호",...a("businessNumber")}),e.jsx(R,{type:"button",style:{backgroundColor:u?"#6F4CDB":"#ddd"},disabled:!u,onClick:()=>{ae()},children:"번호조회"})]}),U?S?e.jsxs(d,{style:{color:"#888"},children:[e.jsx(de,{}),"입점신청 가능한 사업자번호입니다."]}):e.jsx(d,{style:{color:"red"},children:"사업자 번호를 확인해 주세요."}):e.jsx(e.Fragment,{})]}),e.jsxs(i,{children:[e.jsx(f,{type:"text",placeholder:"가게 이름",...a("restaurantName")}),e.jsx(d,{children:(B=x.restaurantName)==null?void 0:B.message})]}),e.jsxs(i,{children:[e.jsx(f,{type:"email",placeholder:"이메일",...a("email")}),e.jsx(d,{children:(F=x.email)==null?void 0:F.message})]}),e.jsxs(i,{children:[e.jsx(f,{type:"tel",maxLength:12,placeholder:"가게 전화번호",...a("restaurantNumber")}),e.jsx(d,{children:(z=x.restaurantNumber)==null?void 0:z.message})]}),e.jsxs(i,{children:[e.jsxs("div",{className:"flex justify-between items-center w-[500px]",children:[e.jsx(C,{type:"text",placeholder:"가게 주소",value:N?N.fullAddress:"",onClick:()=>y(),...a("restaurantAddress")}),e.jsx(R,{type:"button",style:{backgroundColor:"#6F4CDB"},onClick:()=>y(),children:"주소찾기"})]}),e.jsx(d,{children:($=x.restaurantAddress)==null?void 0:$.message})]}),e.jsxs(i,{children:[e.jsx(f,{type:"text",placeholder:"가게 상세설명",...a("restaurantDescription")}),e.jsx(d,{children:(H=x.restaurantDescription)==null?void 0:H.message})]}),e.jsxs(i,{children:[e.jsxs("div",{className:"flex items-center justify-between w-[500px] text-[24px]",children:[e.jsx("div",{children:"최대 수용 인원 : "}),e.jsx(C,{type:"number",placeholder:"0",style:{width:280,textAlign:"right",paddingRight:10},...a("maxCapacity",{setValueAs:s=>s===""?0:s})}),e.jsx("div",{children:"명"})]}),e.jsx(d,{children:(V=x.maxCapacity)==null?void 0:V.message})]}),e.jsx(i,{children:e.jsxs("div",{className:"flex justify-between items-center w-[500px] mt-[20px]",children:[e.jsx("div",{style:{fontSize:24},children:"카테고리 선택"}),e.jsxs("div",{style:{display:"flex",gap:20},children:[e.jsx(v,{onClick:()=>n("categoryId",1),style:{backgroundColor:m===1&&"#6F4CDB"},children:"한식"}),e.jsx(v,{onClick:()=>n("categoryId",2),style:{backgroundColor:m===2&&"#6F4CDB"},children:"중식"}),e.jsx(v,{onClick:()=>n("categoryId",3),style:{backgroundColor:m===3&&"#6F4CDB"},children:"일식"})]})]})}),e.jsxs(i,{children:[e.jsx("div",{className:"text-[24px] text-left",children:"운영시간"}),e.jsxs("div",{className:"flex items-center justify-between w-[500px] mt-[20px]",children:[e.jsxs(M,{children:[e.jsx("span",{children:"오픈시간"}),e.jsx("input",{type:"time",value:p.startTime,onChange:s=>D(t=>({...t,startTime:s.target.value}))})]}),e.jsxs(M,{children:[e.jsx("span",{children:"마감시간"}),e.jsx("input",{type:"time",value:p.endTime,onChange:s=>D(t=>({...t,endTime:s.target.value}))})]})]})]}),e.jsx("div",{className:"mx-[20px]",children:e.jsx(we,{type:"submit",style:{backgroundColor:T?"#6F4CDB":"#ddd"},disabled:!T,children:"확인"})})]})})]}),y?e.jsx(G,{children:e.jsx(ue,{onComplete:s=>ne(s)})}):e.jsx(e.Fragment,{}),O&&e.jsx(ce,{})]})}export{Ae as default};
