import{u as ae,r as a,j as e,L as le,n as f,b as E,S as L}from"./index-XkiSkCIq.js";import{o as de,c as ce,e as x,a as c}from"./index.esm-kZtGv46w.js";import{h as pe}from"./index.esm-NabwU_Io.js";import{u as ue}from"./index.esm-j2erOJPr.js";import{I as xe}from"./index-Cu020-X3.js";import{u as me}from"./useModal-BISKceEi.js";import{L as he,H as ge,C as fe,F as ye,T as je,I as l,Y as d,S as C,a as be}from"./loginStyle-DMumf38V.js";import{F as Ce}from"./index-UaCtCoyR.js";import"./iconBase-DXw1Gjh5.js";const R=f.button`
  color: #fff;
  border-radius: 5px;
  width: 120px;

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
`,w=f.input`
  border-bottom: 1px solid #bababa;
  color: #bababa;
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
`,v=f.div`
  padding: 10px 30px;
  border-radius: 30px;
  background-color: #6f4cdb;
  background-color: #ddd;
  color: #fff;
  cursor: pointer;
`,q=f.div`
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
`,we=ce({adminId:x(),restaurantName:c().required("가게이름은 필수입니다.").min(2,"가게이름은 최소 2자 이상이어야 합니다."),restaurantAddress:c(),businessNumber:c(),restaurantNumber:c().required("전화번호는 필수입니다.").matches(/^\d{10,12}$/,"하이픈을 빼고 10~12자리 숫자만 입력해주세요."),categoryId:x(),operatingHours:c(),restaurantDescription:c().required("상세 설명은 필수입니다."),maxCapacity:x().min(1,"가게 규모는 1 이상이어야 합니다."),lat:x(),lng:x()});function Fe(){var B,F,z,$,H;const I=ae(),[M,O]=a.useState(!1),[k,Y]=a.useState({}),[p,S]=a.useState({startTime:"10:00",endTime:"22:00"}),[T,y]=a.useState(!1),[K,U]=a.useState(!1),{Modal:P,open:j,close:G}=me({title:"주소검색"}),{register:i,handleSubmit:J,formState:{errors:u},watch:n,setValue:r}=ue({mode:"all",resolver:de(we)}),Q=async t=>{try{await E.post("/api/restaurant",t),L.fire({title:"가게 등록이 완료 되었습니다.",icon:"success",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1}).then(s=>{s.isConfirmed&&I("/store")})}catch(s){console.log(s)}},W=t=>{T?(console.log(t),O(s=>!s),Q(t)):L.fire({title:"사업자 진위여부를 확인해주세요.",icon:"error",confirmButtonText:"확인",showConfirmButton:!0,allowOutsideClick:!1})},X=n("adminId"),Z=n("restaurantName"),b=n("restaurantAddress"),m=n("businessNumber"),_=n("restaurantNumber"),h=n("categoryId"),ee=n("operatingHours"),te=n("restaurantDescription"),se=n("maxCapacity"),D=n("lat"),A=n("lng"),N=X&&Z&&b&&m&&_&&h&&ee&&te&&se&&D&&A,ne=async()=>{U(!0);try{const s=(await E.post(`/api/user/company/status?bNo=${m}`)).data.resultData;s.bstt==="계속사업자"||s.bstt==="신규사업자"?y(!0):y(!1)}catch(t){console.log(t)}},ie=async t=>{try{const o=await(await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(t)}`,{headers:{Authorization:"KakaoAK c39062d8559862a0fe376de133d3af0c"}})).json();if(o.documents.length>0){const{x:g,y:V}=o.documents[0];r("lat",V),r("lng",g),console.log("이 주소의 위도 : ",V,", 경도 : ",g)}}catch(s){console.error("Error fetching coordinates:",s)}},re=async t=>{console.log(t);let s=t.address,o="";const g=t.zonecode;t.addressType==="R"&&(t.bname!==""&&(o+=t.bname),t.buildingName!==""&&(o+=o!==""?`, ${t.buildingName}`:t.buildingName),s+=o!==""?` (${o})`:""),await ie(s),G(),Y({fullAddress:s,zoneCode:g}),r("restaurantAddress",s)};a.useEffect(()=>{r("operatingHours",`${p.startTime} ~ ${p.endTime}`),console.log("운영시간 ",n("operatingHours"))},[p]);const oe=sessionStorage.getItem("adminId");return a.useEffect(()=>{r("adminId",oe),r("categoryId",1)},[]),a.useEffect(()=>{console.log(b),console.log("이 주소의 위도 : ",D),console.log("이 주소의 경도 : ",A)},[b]),e.jsxs("div",{children:[e.jsxs(he,{style:{position:"relative"},children:[e.jsx(ge,{children:e.jsx(fe,{children:e.jsx(xe,{style:{width:"100%",height:"100%",cursor:"pointer"},onClick:()=>I("/")})})}),e.jsx(ye,{children:e.jsxs("form",{onSubmit:J(W),children:[e.jsx("input",{type:"tel",style:{position:"absolute",left:"-5000px"},...i("adminId")}),e.jsx("input",{type:"tel",...i("lat"),style:{position:"absolute",left:"-5000px"}}),e.jsx("input",{type:"tel",...i("lng"),style:{position:"absolute",left:"-5000px"}}),e.jsx(je,{children:"온라인 입점신청서"}),e.jsxs(l,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:20,width:500},children:[e.jsx(w,{type:"text",placeholder:"사업자등록번호",...i("businessNumber")}),e.jsx(R,{type:"button",style:{backgroundColor:m?"#6F4CDB":"#ddd"},disabled:!m,onClick:()=>{ne()},children:"번호조회"})]}),K?T?e.jsxs(d,{style:{color:"#888"},children:[e.jsx(Ce,{}),"입점신청 가능한 사업자번호입니다."]}):e.jsx(d,{style:{color:"red"},children:"사업자 번호를 확인해 주세요."}):e.jsx(e.Fragment,{})]}),e.jsxs(l,{children:[e.jsx(C,{type:"text",placeholder:"가게 이름",...i("restaurantName")}),e.jsx(d,{children:(B=u.restaurantName)==null?void 0:B.message})]}),e.jsxs(l,{children:[e.jsx(C,{type:"tel",maxLength:12,placeholder:"가게 전화번호",...i("restaurantNumber")}),e.jsx(d,{children:(F=u.restaurantNumber)==null?void 0:F.message})]}),e.jsxs(l,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:20,width:500},children:[e.jsx(w,{type:"text",placeholder:"가게 주소",value:k?k.fullAddress:"",onClick:()=>j(),...i("restaurantAddress")}),e.jsx(R,{type:"button",style:{backgroundColor:"#6F4CDB"},onClick:()=>j(),children:"주소찾기"})]}),e.jsx(d,{children:(z=u.restaurantAddress)==null?void 0:z.message})]}),e.jsxs(l,{children:[e.jsx(C,{type:"text",placeholder:"가게 상세설명",...i("restaurantDescription")}),e.jsx(d,{children:($=u.restaurantDescription)==null?void 0:$.message})]}),e.jsxs(l,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:500,fontSize:24},children:[e.jsx("div",{style:{fontSize:24},children:"가게 규모 : "}),e.jsx(w,{type:"number",placeholder:"0",style:{width:300,textAlign:"right",paddingRight:20},...i("maxCapacity",{setValueAs:t=>t===""?0:t})}),e.jsx("div",{children:"명"})]}),e.jsx(d,{children:(H=u.maxCapacity)==null?void 0:H.message})]}),e.jsx(l,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:20,width:500},children:[e.jsx("div",{style:{fontSize:24},children:"카테고리 선택"}),e.jsxs("div",{style:{display:"flex",gap:20},children:[e.jsx(v,{onClick:()=>r("categoryId",1),style:{backgroundColor:h===1&&"#6F4CDB"},children:"한식"}),e.jsx(v,{onClick:()=>r("categoryId",2),style:{backgroundColor:h===2&&"#6F4CDB"},children:"중식"}),e.jsx(v,{onClick:()=>r("categoryId",3),style:{backgroundColor:h===3&&"#6F4CDB"},children:"일식"})]})]})}),e.jsxs(l,{children:[e.jsx("div",{style:{fontSize:24,textAlign:"left"},children:"운영시간"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:20,width:500},children:[e.jsxs(q,{children:[e.jsx("span",{children:"오픈시간"}),e.jsx("input",{type:"time",value:p.startTime,onChange:t=>S(s=>({...s,startTime:t.target.value}))})]}),e.jsxs(q,{children:[e.jsx("span",{children:"마감시간"}),e.jsx("input",{type:"time",value:p.endTime,onChange:t=>S(s=>({...s,endTime:t.target.value}))})]})]})]}),e.jsx("div",{style:{marginLeft:20,marginRight:20,marginTop:40},children:e.jsx(be,{type:"submit",style:{backgroundColor:N?"#6F4CDB":"#ddd"},disabled:!N,children:"확인"})})]})})]}),j?e.jsx(P,{children:e.jsx(pe,{onComplete:t=>re(t)})}):e.jsx(e.Fragment,{}),M&&e.jsx(le,{})]})}export{Fe as default};
