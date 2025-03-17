var fe=Object.defineProperty;var ge=(o,e,t)=>e in o?fe(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var Z=(o,e,t)=>ge(o,typeof e!="symbol"?e+"":e,t);import{c as i,a1 as N,j as s,a2 as ne,R as ke,a3 as me,u as xe,k as be,J as ve,D as ye,e as Q,n as T}from"./index-CQbk2HOI.js";import{F as we}from"./index-A94kbpTM.js";import{S as Ce,f as te}from"./swiper-react-gi5DtScE.js";const q=typeof window<"u"&&typeof document<"u"?i.useLayoutEffect:i.useEffect,b=(o,e,t)=>{q(()=>{if(!o||!t)return;const n=function(){for(var a=arguments.length,x=new Array(a),d=0;d<a;d++)x[d]=arguments[d];return x===void 0?t(o):t(o,...x)};return kakao.maps.event.addListener(o,e,n),()=>{kakao.maps.event.removeListener(o,e,n)}},[o,e,t])},re="__react-kakao-maps-sdk__";let J=function(o){return o[o.INITIALIZED=0]="INITIALIZED",o[o.LOADING=1]="LOADING",o[o.SUCCESS=2]="SUCCESS",o[o.FAILURE=3]="FAILURE",o}({});const Le=`${re}_Loader`,k=class k{constructor(e){Z(this,"callbacks",[]);Z(this,"done",!1);Z(this,"loading",!1);Z(this,"errors",[]);let{appkey:t,id:n=Le,libraries:a=[],nonce:x,retries:d=3,url:w="//dapi.kakao.com/v2/maps/sdk.js"}=e;if(this.id=n,this.appkey=t,this.libraries=a,this.nonce=x,this.retries=d,this.url=w,k.instance&&!k.equalOptions(this.options,k.instance.options)&&!k.equalOptions(this.options,k.instance.options))switch(k.instance.status){case J.FAILURE:throw new Error(`Loader must not be called again with different options. 
${JSON.stringify(this.options,null,2)}
!==
${JSON.stringify(k.instance.options,null,2)}`);default:k.instance.reset(),k.instance=this;break}return k.instance||(k.instance=this),k.instance}get options(){return{appkey:this.appkey,id:this.id,libraries:this.libraries,nonce:this.nonce,retries:this.retries,url:this.url}}static addLoadEventLisnter(e){return window.kakao&&window.kakao.maps&&window.kakao.maps.load(e),k.loadEventCallback.add(e),e}static removeLoadEventLisnter(e){return k.loadEventCallback.delete(e)}load(){return new Promise((e,t)=>{this.loadCallback(n=>{n?t(n):e(window.kakao)})})}get status(){return this.onEvent?J.FAILURE:this.done?J.SUCCESS:this.loading?J.LOADING:J.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}loadCallback(e){this.callbacks.push(e),this.execute()}resetIfRetryingFailed(){this.failed&&this.reset()}reset(){this.deleteScript(),this.done=!0,this.loading=!1,this.errors=[],this.onEvent=void 0}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.kakao&&window.kakao.maps){console.warn("Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다.설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다."),window.kakao.maps.load(this.callback);return}this.loading||(this.loading=!0,this.setScript())}}setScript(){document.getElementById(this.id)&&this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.onload=this.callback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*2**this.errors.length;console.log(`Failed to load Kakao Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.done=!0,this.loading=!1,this.onEvent=this.errors[this.errors.length-1],this.callbacks.forEach(t=>{t(this.onEvent)}),this.callbacks=[],k.loadEventCallback.forEach(t=>{t(this.onEvent)})}createUrl(){let e=this.url;return e+=`?appkey=${this.appkey}`,this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),e+="&autoload=false",e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}callback(){kakao.maps.load(()=>{k.instance.done=!0,k.instance.loading=!1,k.instance.callbacks.forEach(e=>{e(k.instance.onEvent)}),k.instance.callbacks=[],k.loadEventCallback.forEach(e=>{e(k.instance.onEvent)})})}static equalOptions(e,t){if(e.appkey!==t.appkey||e.id!==t.id||e.libraries.length!==t.libraries.length)return!1;for(let n=0;n<e.libraries.length;++n)if(e.libraries[n]!==t.libraries[n])return!1;return!(e.nonce!==t.nonce||e.retries!==t.retries||e.url!==t.url)}};Z(k,"loadEventCallback",new Set);let G=k;const m=function(o,e){for(var t=arguments.length,n=new Array(t>2?t-2:0),a=2;a<t;a++)n[a-2]=arguments[a];q(()=>{!o||n.every(x=>typeof x>"u")||o[e].call(o,...n)},[o,e,...n])},oe=N.createContext(void 0),Me=N.forwardRef(function(e,t){let{id:n,as:a,children:x,center:d,isPanto:w=!1,padding:C=32,disableDoubleClick:h,disableDoubleClickZoom:f,draggable:v,zoomable:M,keyboardShortcuts:l,level:E,maxLevel:I,minLevel:z,mapTypeId:j,projectionId:L,scrollwheel:R,tileAnimation:$,onBoundsChanged:P,onCenterChanged:O,onClick:p,onDoubleClick:F,onDrag:U,onDragEnd:K,onDragStart:r,onIdle:c,onMaptypeidChanged:g,onMouseMove:y,onRightClick:D,onTileLoaded:B,onZoomChanged:V,onZoomStart:X,onCreate:H,...de}=e;const ce=a||"div",[Y,ue]=i.useState(!1),[u,pe]=i.useState(),ee=i.useRef(null);return q(()=>{const S=G.addLoadEventLisnter(A=>ue(!A));return()=>{G.removeLoadEventLisnter(S)}},[]),q(()=>{if(!Y)return;const S=ee.current;if(!S)return;const A="lat"in d?new kakao.maps.LatLng(d.lat,d.lng):new kakao.maps.Coords(d.x,d.y),he=new kakao.maps.Map(S,{center:A,disableDoubleClick:h,disableDoubleClickZoom:f,draggable:v,keyboardShortcuts:l,level:E,mapTypeId:typeof j=="string"?kakao.maps.MapTypeId[j]:j,projectionId:L,scrollwheel:R,tileAnimation:$});return pe(he),()=>{S.innerHTML=""}},[Y,h,f,$]),i.useImperativeHandle(t,()=>u,[u]),q(()=>{!u||!H||H(u)},[u,H]),q(()=>{if(!u)return;let S=u.getCenter();S instanceof kakao.maps.Coords&&(S=S.toLatLng());const A="lat"in d?new kakao.maps.LatLng(d.lat,d.lng):new kakao.maps.Coords(d.x,d.y);A instanceof kakao.maps.LatLng&&A.equals(S)||A instanceof kakao.maps.Coords&&A.toLatLng().equals(S)||(w?u.panTo(A,C):u.setCenter(A))},[u,d.lat,d.lng,d.x,d.y]),m(u,"setDraggable",v),m(u,"setZoomable",M),m(u,"setKeyboardShortcuts",l),m(u,"setLevel",E),m(u,"setMapTypeId",Y?typeof j=="string"?kakao.maps.MapTypeId[j]:j:void 0),m(u,"setProjectionId",L),m(u,"setMinLevel",I),m(u,"setMaxLevel",z),b(u,"bounds_changed",P),b(u,"center_changed",O),b(u,"click",p),b(u,"dblclick",F),b(u,"drag",U),b(u,"dragstart",r),b(u,"dragend",K),b(u,"idle",c),b(u,"maptypeid_changed",g),b(u,"mousemove",y),b(u,"rightclick",D),b(u,"tilesloaded",B),b(u,"zoom_changed",V),b(u,"zoom_start",X),s.jsxs(s.Fragment,{children:[s.jsx(ce,{id:n||`${re}_Map`,...de,ref:ee}),u&&s.jsx(oe.Provider,{value:u,children:x})]})}),ie=o=>{const e=i.useContext(oe);if(!e)throw new Error(`${o?o+" Component":"useMap"} must exist inside Map Component!`);return e},Ee=N.forwardRef(function(e,t){let{map:n,position:a,marker:x,children:d,altitude:w,disableAutoPan:C,range:h,removable:f,zIndex:v,onCreate:M}=e;const l=i.useMemo(()=>{const I=document.createElement("div");return I.style.display="none",new kakao.maps.InfoWindow({altitude:w,disableAutoPan:C,range:h,removable:f,zIndex:v,content:I,position:a})},[C,f]),E=i.useMemo(()=>l.getContent(),[l]);return i.useImperativeHandle(t,()=>l,[l]),i.useLayoutEffect(()=>(l.open(n,x),()=>{l.close()}),[n,x]),i.useLayoutEffect(()=>{M&&M(l)},[l,M]),m(l,"setPosition",a),m(l,"setAltitude",w),m(l,"setRange",h),m(l,"setZIndex",v),ne.createPortal(d,E.parentElement??E)}),le=N.createContext(void 0),Ie=N.forwardRef(function(e,t){let{map:n,position:a,children:x,altitude:d,clickable:w,draggable:C,image:h,infoWindowOptions:f,onCreate:v,onClick:M,onDragEnd:l,onDragStart:E,onMouseOut:I,onMouseOver:z,opacity:j,range:L,title:R,zIndex:$}=e;const P=i.useContext(le),O=i.useMemo(()=>{var F,U,K,r,c,g,y,D,B,V,X,H;return h&&new kakao.maps.MarkerImage(h.src,new kakao.maps.Size(h.size.width,h.size.height),{alt:(F=h.options)==null?void 0:F.alt,coords:(U=h.options)==null?void 0:U.coords,offset:((K=h.options)==null?void 0:K.offset)&&new kakao.maps.Point((r=h.options)==null?void 0:r.offset.x,(c=h.options)==null?void 0:c.offset.y),shape:(g=h.options)==null?void 0:g.shape,spriteOrigin:((y=h.options)==null?void 0:y.spriteOrigin)&&new kakao.maps.Point((D=h.options)==null?void 0:D.spriteOrigin.x,(B=h.options)==null?void 0:B.spriteOrigin.y),spriteSize:((V=h.options)==null?void 0:V.spriteSize)&&new kakao.maps.Size((X=h.options)==null?void 0:X.spriteSize.width,(H=h.options)==null?void 0:H.spriteSize.height)})},[JSON.stringify(h)]),p=i.useMemo(()=>new kakao.maps.Marker({altitude:d,clickable:w,draggable:C,image:O,opacity:j,range:L,title:R,zIndex:$,position:a}),[]);return i.useImperativeHandle(t,()=>p,[p]),i.useLayoutEffect(()=>P?(P.addMarker(p,!0),()=>P.removeMarker(p,!0)):(p.setMap(n),()=>p.setMap(null)),[n,P,p]),i.useLayoutEffect(()=>{v&&v(p)},[p,v]),m(p,"setPosition",a),m(p,"setImage",O),m(p,"setAltitude",d),m(p,"setClickable",w),m(p,"setDraggable",C),m(p,"setOpacity",j),m(p,"setRange",L),m(p,"setRange",L),m(p,"setTitle",R),m(p,"setTitle",R),m(p,"setZIndex",$),b(p,"click",M),b(p,"dragstart",E),b(p,"dragend",l),b(p,"mouseout",I),b(p,"mouseover",z),x?s.jsx(Ee,{position:a,map:n,marker:p,altitude:f==null?void 0:f.altitude,disableAutoPan:f==null?void 0:f.disableAutoPan,range:f==null?void 0:f.range,removable:f==null?void 0:f.removable,zIndex:f==null?void 0:f.zIndex,children:x}):null}),ae=N.forwardRef(function(e,t){let{position:n,...a}=e;const x=ie("MapMarker"),d=i.useMemo(()=>"lat"in n?new kakao.maps.LatLng(n.lat,n.lng):new kakao.maps.Coords(n.x,n.y).toLatLng(),[n.lat,n.lng,n.x,n.y]);return s.jsx(Ie,{map:x,position:d,...a,ref:t})}),se=N.forwardRef(function(e,t){let{position:n,children:a,clickable:x,xAnchor:d,yAnchor:w,zIndex:C,onCreate:h}=e;const f=i.useContext(le),v=ie("CustomOverlayMap"),M=i.useMemo(()=>new kakao.maps.LatLng(n.lat,n.lng),[n.lat,n.lng]),l=i.useMemo(()=>{const I=document.createElement("div");return I.style.display="none",new kakao.maps.CustomOverlay({clickable:x,xAnchor:d,yAnchor:w,zIndex:C,position:M,content:I})},[x,d,w]),E=i.useMemo(()=>l.getContent(),[l]);return i.useImperativeHandle(t,()=>l,[l]),i.useLayoutEffect(()=>{if(v)return f?f.addMarker(l,!0):l.setMap(v),()=>{f?f.removeMarker(l,!0):l.setMap(null)}},[v,f,l]),i.useLayoutEffect(()=>{h&&h(l)},[l,h]),m(l,"setPosition",M),m(l,"setZIndex",C),E.parentElement&&ne.createPortal(a,E.parentElement)}),je=o=>{const[e,t]=i.useState([!0,void 0]);return i.useEffect(()=>{new G({...o}).load().then(()=>t([!1,void 0])).catch(n=>{t([!1,n])})},[JSON.stringify(o)]),e},Se=T.div`
  position: absolute;
  width: 100%;
  height: ${o=>`${o.height}px`};
  bottom: 0px;
  z-index: 1;
  background-color: #fff;
  border-radius: 5px 5px 0 0;
  padding-left: 20px;
  overflow-y: auto;
  transition: height 0.3s ease-in-out;
  z-index: 10;
`,Ae=T.div`
  width: 100px;
  height: 5px;
  margin-top: 10px;
  background-color: #eee;
  border-radius: 2px;
  margin-bottom: 20px;
  cursor: pointer;
`,W=T.div`
  padding: 3px 10px;
  background-color: #ddd;
  color: #fff;
  display: inline-block;
  font-size: 10px;
  border-radius: 10px;
  cursor: pointer;
`,_=T.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin-bottom: 5px;
`,Re=T.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 2%;
  width: 100%;
  z-index: 10;
  color: #333;
  div {
    display: flex;
    gap: 10px;
    background-color: #fff;
    width: calc(100% - 40px);
    padding: 5px 10px;
    border-radius: 2px;
    box-shadow:
      0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  input {
    width: 100%;
  }
`,De=T.div`
  position: relative;
  background-color: #fff;
  padding: 10px;
  color: #333;
  font-size: 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  button {
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    cursor: pointer;
  }
  h3 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  p {
    font-size: 12px;
    color: #999;
  }
`,ze=T.div`
  background-color: #6f4cdb;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  font-size: 10px;
  position: absolute;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  left: 10px;
  bottom: -10px;
`;function Ne(){je({appkey:"223f69f1eff1187f853d5ddbe870fde4",libraries:["clusterer","drawing","services"]});const[o,e]=i.useState(!1),[t,n]=i.useState(!1),[a,x]=ke(me),[d,w]=i.useState(null),[C,h]=i.useState(250),[f,v]=i.useState([]),[M,l]=i.useState([]),[E,I]=i.useState({}),[z,j]=i.useState(),[L,R]=i.useState(1),$=xe(),P=async()=>{l([]);try{const r=await Q.get(`/api/restaurant/around?orderFilter=${L}&userLat=${a==null?void 0:a.latitude}&userLng=${a==null?void 0:a.longitude}`);console.log(r);const c=r.data.resultData;v([...c]),c.map(g=>{l(y=>[...y,{title:g.restaurantName,address:g.restaurantAddress,position:{lat:g.lat,lng:g.lng}}])})}catch(r){console.log(r)}},O=async(r,c)=>{l([]);try{const g=await Q.get(`/api/restaurant/around?orderFilter=${L}&userLat=${r}&userLng=${c}`);console.log(g);const y=g.data.resultData;v([...y]),y.map(D=>{l(B=>[...B,{title:D.restaurantName,address:D.restaurantAddress,position:{lat:D.lat,lng:D.lng}}])})}catch(g){console.log(g)}},p=async()=>{l([]);try{const c=(await Q.get(`/api/restaurant/around?searchFilter=${z}&userLat=${a.latitude}&userLng=${a.longitude}`)).data.resultData;v(c),c.map(g=>{l(y=>[...y,{title:g.restaurantName,address:g.restaurantAddress,position:{lat:g.lat,lng:g.lng}}])}),console.log(c)}catch(r){console.log(r)}},F=r=>{const{latitude:c,longitude:g}=r.coords;x({latitude:c,longitude:g})},U=r=>{console.log(r)};i.useEffect(()=>{l([]),P()},[L,a]),i.useEffect(()=>{navigator.geolocation.getCurrentPosition(F,U)},[]),i.useEffect(()=>{(()=>{var g;if((g=window.kakao)!=null&&g.maps){e(!0);return}const c=document.createElement("script");return c.async=!0,c.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=223f69f1eff1187f853d5ddbe870fde4&autoload=false&libraries=services",c.addEventListener("load",()=>{window.kakao.maps.load(()=>e(!0))}),document.head.appendChild(c),()=>document.head.removeChild(c)})()},[]);const K=()=>{n(r=>!r),h(r=>{if(r!==250){const c=document.querySelector(".scrollable-content");c&&(c.scrollTop=0)}return r===250?window.innerHeight:250})};return o?s.jsxs("div",{className:"w-full h-dvh overflow-hidden overflow-y-scroll scrollbar-hide relative",children:[s.jsxs(Me,{center:{lat:a==null?void 0:a.latitude,lng:a==null?void 0:a.longitude},style:{width:"100%",height:"100%"},level:3,onCenterChanged:r=>{const c=r.getCenter();w({latitude:c.getLat(),longitude:c.getLng()})},onTouchEnd:()=>{d&&x(d),O(a.latitude,a.longitude)},onMouseUp:()=>{d&&x(d),O(a.latitude,a.longitude)},children:[s.jsxs("div",{style:{position:"relative"},children:[s.jsx(ae,{position:{lat:a==null?void 0:a.latitude,lng:a==null?void 0:a.longitude}}),s.jsx(se,{position:{lat:a==null?void 0:a.latitude,lng:a==null?void 0:a.longitude},children:s.jsx(ze,{children:"내 위치"})})]}),(M??[]).map((r,c)=>s.jsxs("div",{children:[s.jsx(ae,{position:r.position,image:{src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",size:{width:24,height:35}},clickable:!0,onClick:()=>I(c)}),E===c&&s.jsx(se,{position:r.position,children:s.jsxs(De,{children:[s.jsx("button",{onClick:()=>I(null),children:"❌"}),s.jsx("h3",{children:r.title}),s.jsx("p",{children:r.address})]})})]},c))]}),s.jsx(Re,{children:s.jsxs("div",{children:[s.jsx(be,{style:{width:24,height:24,cursor:"pointer"},onClick:()=>$(-1)}),s.jsx("input",{type:"text",placeholder:"검색어를 입력해 주세요",value:z,onChange:r=>j(r.target.value)}),s.jsx(ve,{style:{width:24,height:24,cursor:"pointer"},onClick:()=>{p(),j("")}})]})}),s.jsxs(Se,{className:"scrollbar-hide",isOpen:t,height:C,children:[s.jsx("div",{style:{display:"flex",justifyContent:"center",paddingRight:20},onClick:K,children:s.jsx(Ae,{})}),s.jsxs(_,{style:{gap:10,marginBottom:10},children:[s.jsx(W,{style:{backgroundColor:L===1&&"#6f4cdb"},onClick:()=>R(1),children:"거리순"}),s.jsx(W,{style:{backgroundColor:L===2&&"#6f4cdb"},onClick:()=>R(2),children:"별점순"}),s.jsx(W,{style:{backgroundColor:L===3&&"#6f4cdb"},onClick:()=>R(3),children:"빠른식사순"})]}),s.jsx("div",{className:"scrollable-content scrollbar-hide mt-3",style:{maxHeight:C===250?180:840,overflowY:"scroll",overflowX:"hidden"},children:f.map(r=>{var c;return s.jsxs("div",{onClick:()=>$(`/user/restaurant/detail/${r.restaurantId}`),className:"mb-5 cursor-pointer",children:[s.jsxs(_,{children:[s.jsx("span",{children:r.restaurantName}),s.jsxs("span",{style:{fontSize:10},onClick:()=>console.log(r.restaurantAddress),children:["식사시간 : ",r.avgRestaurant,"분"]})]}),s.jsxs(_,{children:[s.jsx(we,{style:{width:10,height:10,color:"E1FF00"}}),s.jsx("span",{style:{fontWeight:700,fontSize:8},children:r.avgRating.toFixed(1)}),s.jsxs("span",{style:{fontSize:8,color:"#BABABA"},children:[r==null?void 0:r.restaurantAddress.match(/^(?:대구광역시|대구)\s*(.+)/)[1]," ","· 한식"]})]}),s.jsx(Ce,{slidesPerView:3,spaceBetween:30,children:(c=r.restaurantArroundPicList)==null?void 0:c.map((g,y)=>g?s.jsx(te,{children:s.jsx("img",{src:`${ye}/pic/restaurant/${r.restaurantId}/${g==null?void 0:g.filePath}`,style:{minWidth:140,width:140,height:140,objectFit:"cover"}},y)},y):s.jsx(te,{children:s.jsx("img",{src:"/restaurant_default.png",style:{minWidth:140,width:140,height:140,objectFit:"cover"}},y)},y))})]},r.restaurantId)})})]})]}):s.jsx("div",{children:"지도를 불러오는 중입니다..."})}export{Ne as default};
