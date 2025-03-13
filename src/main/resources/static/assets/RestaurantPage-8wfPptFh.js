var fe=Object.defineProperty;var ge=(r,e,t)=>e in r?fe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var B=(r,e,t)=>ge(r,typeof e!="symbol"?e+"":e,t);import{r as l,T as F,j as s,V as ne,o as ke,W as me,u as xe,I as be,m as ve,P as ye,d as Y,n as T}from"./index-BXJcS394.js";import{F as we}from"./index-DZD75Lp0.js";import{S as Ce,a as te}from"./swiper-bundle-CjUBIWF2.js";const Z=typeof window<"u"&&typeof document<"u"?l.useLayoutEffect:l.useEffect,b=(r,e,t)=>{Z(()=>{if(!r||!t)return;const n=function(){for(var a=arguments.length,x=new Array(a),d=0;d<a;d++)x[d]=arguments[d];return x===void 0?t(r):t(r,...x)};return kakao.maps.event.addListener(r,e,n),()=>{kakao.maps.event.removeListener(r,e,n)}},[r,e,t])},re="__react-kakao-maps-sdk__";let H=function(r){return r[r.INITIALIZED=0]="INITIALIZED",r[r.LOADING=1]="LOADING",r[r.SUCCESS=2]="SUCCESS",r[r.FAILURE=3]="FAILURE",r}({});const Le=`${re}_Loader`,k=class k{constructor(e){B(this,"callbacks",[]);B(this,"done",!1);B(this,"loading",!1);B(this,"errors",[]);let{appkey:t,id:n=Le,libraries:a=[],nonce:x,retries:d=3,url:w="//dapi.kakao.com/v2/maps/sdk.js"}=e;if(this.id=n,this.appkey=t,this.libraries=a,this.nonce=x,this.retries=d,this.url=w,k.instance&&!k.equalOptions(this.options,k.instance.options)&&!k.equalOptions(this.options,k.instance.options))switch(k.instance.status){case H.FAILURE:throw new Error(`Loader must not be called again with different options. 
${JSON.stringify(this.options,null,2)}
!==
${JSON.stringify(k.instance.options,null,2)}`);default:k.instance.reset(),k.instance=this;break}return k.instance||(k.instance=this),k.instance}get options(){return{appkey:this.appkey,id:this.id,libraries:this.libraries,nonce:this.nonce,retries:this.retries,url:this.url}}static addLoadEventLisnter(e){return window.kakao&&window.kakao.maps&&window.kakao.maps.load(e),k.loadEventCallback.add(e),e}static removeLoadEventLisnter(e){return k.loadEventCallback.delete(e)}load(){return new Promise((e,t)=>{this.loadCallback(n=>{n?t(n):e(window.kakao)})})}get status(){return this.onEvent?H.FAILURE:this.done?H.SUCCESS:this.loading?H.LOADING:H.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}loadCallback(e){this.callbacks.push(e),this.execute()}resetIfRetryingFailed(){this.failed&&this.reset()}reset(){this.deleteScript(),this.done=!0,this.loading=!1,this.errors=[],this.onEvent=void 0}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.kakao&&window.kakao.maps){console.warn("Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다.설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다."),window.kakao.maps.load(this.callback);return}this.loading||(this.loading=!0,this.setScript())}}setScript(){document.getElementById(this.id)&&this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.onload=this.callback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*2**this.errors.length;console.log(`Failed to load Kakao Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.done=!0,this.loading=!1,this.onEvent=this.errors[this.errors.length-1],this.callbacks.forEach(t=>{t(this.onEvent)}),this.callbacks=[],k.loadEventCallback.forEach(t=>{t(this.onEvent)})}createUrl(){let e=this.url;return e+=`?appkey=${this.appkey}`,this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),e+="&autoload=false",e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}callback(){kakao.maps.load(()=>{k.instance.done=!0,k.instance.loading=!1,k.instance.callbacks.forEach(e=>{e(k.instance.onEvent)}),k.instance.callbacks=[],k.loadEventCallback.forEach(e=>{e(k.instance.onEvent)})})}static equalOptions(e,t){if(e.appkey!==t.appkey||e.id!==t.id||e.libraries.length!==t.libraries.length)return!1;for(let n=0;n<e.libraries.length;++n)if(e.libraries[n]!==t.libraries[n])return!1;return!(e.nonce!==t.nonce||e.retries!==t.retries||e.url!==t.url)}};B(k,"loadEventCallback",new Set);let q=k;const m=function(r,e){for(var t=arguments.length,n=new Array(t>2?t-2:0),a=2;a<t;a++)n[a-2]=arguments[a];Z(()=>{!r||n.every(x=>typeof x>"u")||r[e].call(r,...n)},[r,e,...n])},oe=F.createContext(void 0),Me=F.forwardRef(function(e,t){let{id:n,as:a,children:x,center:d,isPanto:w=!1,padding:C=32,disableDoubleClick:h,disableDoubleClickZoom:f,draggable:v,zoomable:M,keyboardShortcuts:i,level:E,maxLevel:I,minLevel:R,mapTypeId:j,projectionId:L,scrollwheel:z,tileAnimation:$,onBoundsChanged:P,onCenterChanged:O,onClick:p,onDoubleClick:N,onDrag:o,onDragEnd:u,onDragStart:g,onIdle:y,onMaptypeidChanged:D,onMouseMove:U,onRightClick:G,onTileLoaded:J,onZoomChanged:V,onZoomStart:W,onCreate:K,...de}=e;const ce=a||"div",[X,ue]=l.useState(!1),[c,pe]=l.useState(),ee=l.useRef(null);return Z(()=>{const S=q.addLoadEventLisnter(A=>ue(!A));return()=>{q.removeLoadEventLisnter(S)}},[]),Z(()=>{if(!X)return;const S=ee.current;if(!S)return;const A="lat"in d?new kakao.maps.LatLng(d.lat,d.lng):new kakao.maps.Coords(d.x,d.y),he=new kakao.maps.Map(S,{center:A,disableDoubleClick:h,disableDoubleClickZoom:f,draggable:v,keyboardShortcuts:i,level:E,mapTypeId:typeof j=="string"?kakao.maps.MapTypeId[j]:j,projectionId:L,scrollwheel:z,tileAnimation:$});return pe(he),()=>{S.innerHTML=""}},[X,h,f,$]),l.useImperativeHandle(t,()=>c,[c]),Z(()=>{!c||!K||K(c)},[c,K]),Z(()=>{if(!c)return;let S=c.getCenter();S instanceof kakao.maps.Coords&&(S=S.toLatLng());const A="lat"in d?new kakao.maps.LatLng(d.lat,d.lng):new kakao.maps.Coords(d.x,d.y);A instanceof kakao.maps.LatLng&&A.equals(S)||A instanceof kakao.maps.Coords&&A.toLatLng().equals(S)||(w?c.panTo(A,C):c.setCenter(A))},[c,d.lat,d.lng,d.x,d.y]),m(c,"setDraggable",v),m(c,"setZoomable",M),m(c,"setKeyboardShortcuts",i),m(c,"setLevel",E),m(c,"setMapTypeId",X?typeof j=="string"?kakao.maps.MapTypeId[j]:j:void 0),m(c,"setProjectionId",L),m(c,"setMinLevel",I),m(c,"setMaxLevel",R),b(c,"bounds_changed",P),b(c,"center_changed",O),b(c,"click",p),b(c,"dblclick",N),b(c,"drag",o),b(c,"dragstart",g),b(c,"dragend",u),b(c,"idle",y),b(c,"maptypeid_changed",D),b(c,"mousemove",U),b(c,"rightclick",G),b(c,"tilesloaded",J),b(c,"zoom_changed",V),b(c,"zoom_start",W),s.jsxs(s.Fragment,{children:[s.jsx(ce,{id:n||`${re}_Map`,...de,ref:ee}),c&&s.jsx(oe.Provider,{value:c,children:x})]})}),ie=r=>{const e=l.useContext(oe);if(!e)throw new Error(`${r?r+" Component":"useMap"} must exist inside Map Component!`);return e},Ee=F.forwardRef(function(e,t){let{map:n,position:a,marker:x,children:d,altitude:w,disableAutoPan:C,range:h,removable:f,zIndex:v,onCreate:M}=e;const i=l.useMemo(()=>{const I=document.createElement("div");return I.style.display="none",new kakao.maps.InfoWindow({altitude:w,disableAutoPan:C,range:h,removable:f,zIndex:v,content:I,position:a})},[C,f]),E=l.useMemo(()=>i.getContent(),[i]);return l.useImperativeHandle(t,()=>i,[i]),l.useLayoutEffect(()=>(i.open(n,x),()=>{i.close()}),[n,x]),l.useLayoutEffect(()=>{M&&M(i)},[i,M]),m(i,"setPosition",a),m(i,"setAltitude",w),m(i,"setRange",h),m(i,"setZIndex",v),ne.createPortal(d,E.parentElement??E)}),le=F.createContext(void 0),Ie=F.forwardRef(function(e,t){let{map:n,position:a,children:x,altitude:d,clickable:w,draggable:C,image:h,infoWindowOptions:f,onCreate:v,onClick:M,onDragEnd:i,onDragStart:E,onMouseOut:I,onMouseOver:R,opacity:j,range:L,title:z,zIndex:$}=e;const P=l.useContext(le),O=l.useMemo(()=>{var N,o,u,g,y,D,U,G,J,V,W,K;return h&&new kakao.maps.MarkerImage(h.src,new kakao.maps.Size(h.size.width,h.size.height),{alt:(N=h.options)==null?void 0:N.alt,coords:(o=h.options)==null?void 0:o.coords,offset:((u=h.options)==null?void 0:u.offset)&&new kakao.maps.Point((g=h.options)==null?void 0:g.offset.x,(y=h.options)==null?void 0:y.offset.y),shape:(D=h.options)==null?void 0:D.shape,spriteOrigin:((U=h.options)==null?void 0:U.spriteOrigin)&&new kakao.maps.Point((G=h.options)==null?void 0:G.spriteOrigin.x,(J=h.options)==null?void 0:J.spriteOrigin.y),spriteSize:((V=h.options)==null?void 0:V.spriteSize)&&new kakao.maps.Size((W=h.options)==null?void 0:W.spriteSize.width,(K=h.options)==null?void 0:K.spriteSize.height)})},[JSON.stringify(h)]),p=l.useMemo(()=>new kakao.maps.Marker({altitude:d,clickable:w,draggable:C,image:O,opacity:j,range:L,title:z,zIndex:$,position:a}),[]);return l.useImperativeHandle(t,()=>p,[p]),l.useLayoutEffect(()=>P?(P.addMarker(p,!0),()=>P.removeMarker(p,!0)):(p.setMap(n),()=>p.setMap(null)),[n,P,p]),l.useLayoutEffect(()=>{v&&v(p)},[p,v]),m(p,"setPosition",a),m(p,"setImage",O),m(p,"setAltitude",d),m(p,"setClickable",w),m(p,"setDraggable",C),m(p,"setOpacity",j),m(p,"setRange",L),m(p,"setRange",L),m(p,"setTitle",z),m(p,"setTitle",z),m(p,"setZIndex",$),b(p,"click",M),b(p,"dragstart",E),b(p,"dragend",i),b(p,"mouseout",I),b(p,"mouseover",R),x?s.jsx(Ee,{position:a,map:n,marker:p,altitude:f==null?void 0:f.altitude,disableAutoPan:f==null?void 0:f.disableAutoPan,range:f==null?void 0:f.range,removable:f==null?void 0:f.removable,zIndex:f==null?void 0:f.zIndex,children:x}):null}),ae=F.forwardRef(function(e,t){let{position:n,...a}=e;const x=ie("MapMarker"),d=l.useMemo(()=>"lat"in n?new kakao.maps.LatLng(n.lat,n.lng):new kakao.maps.Coords(n.x,n.y).toLatLng(),[n.lat,n.lng,n.x,n.y]);return s.jsx(Ie,{map:x,position:d,...a,ref:t})}),se=F.forwardRef(function(e,t){let{position:n,children:a,clickable:x,xAnchor:d,yAnchor:w,zIndex:C,onCreate:h}=e;const f=l.useContext(le),v=ie("CustomOverlayMap"),M=l.useMemo(()=>new kakao.maps.LatLng(n.lat,n.lng),[n.lat,n.lng]),i=l.useMemo(()=>{const I=document.createElement("div");return I.style.display="none",new kakao.maps.CustomOverlay({clickable:x,xAnchor:d,yAnchor:w,zIndex:C,position:M,content:I})},[x,d,w]),E=l.useMemo(()=>i.getContent(),[i]);return l.useImperativeHandle(t,()=>i,[i]),l.useLayoutEffect(()=>{if(v)return f?f.addMarker(i,!0):i.setMap(v),()=>{f?f.removeMarker(i,!0):i.setMap(null)}},[v,f,i]),l.useLayoutEffect(()=>{h&&h(i)},[i,h]),m(i,"setPosition",M),m(i,"setZIndex",C),E.parentElement&&ne.createPortal(a,E.parentElement)}),je=r=>{const[e,t]=l.useState([!0,void 0]);return l.useEffect(()=>{new q({...r}).load().then(()=>t([!1,void 0])).catch(n=>{t([!1,n])})},[JSON.stringify(r)]),e},Se=T.div`
  position: absolute;
  width: 100%;
  height: ${r=>`${r.height}px`};
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
`,Q=T.div`
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
`,ze=T.div`
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
`,Re=T.div`
  background-color: #6f4cdb;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  font-size: 10px;
  position: absolute;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  left: 10px;
  bottom: -10px;
`;function Fe(){je({appkey:"223f69f1eff1187f853d5ddbe870fde4",libraries:["clusterer","drawing","services"]});const[r,e]=l.useState(!1),[t,n]=l.useState(!1),[a,x]=ke(me),[d,w]=l.useState(null),[C,h]=l.useState(250),[f,v]=l.useState([]),[M,i]=l.useState([]),[E,I]=l.useState({}),[R,j]=l.useState(),[L,z]=l.useState(1),$=xe(),P=async()=>{i([]);try{const o=await Y.get(`/api/restaurant/around?orderFilter=${L}&userLat=${a==null?void 0:a.latitude}&userLng=${a==null?void 0:a.longitude}`);console.log(o);const u=o.data.resultData;v([...u]),u.map(g=>{i(y=>[...y,{title:g.restaurantName,address:g.restaurantAddress,position:{lat:g.lat,lng:g.lng}}])})}catch(o){console.log(o)}},O=async(o,u)=>{i([]);try{const g=await Y.get(`/api/restaurant/around?orderFilter=${L}&userLat=${o}&userLng=${u}`);console.log(g);const y=g.data.resultData;v([...y]),y.map(D=>{i(U=>[...U,{title:D.restaurantName,address:D.restaurantAddress,position:{lat:D.lat,lng:D.lng}}])})}catch(g){console.log(g)}},p=async()=>{i([]);try{const u=(await Y.get(`/api/restaurant/around?searchFilter=${R}&userLat=${a.latitude}&userLng=${a.longitude}`)).data.resultData;v(u),u.map(g=>{i(y=>[...y,{title:g.restaurantName,address:g.restaurantAddress,position:{lat:g.lat,lng:g.lng}}])}),console.log(u)}catch(o){console.log(o)}};l.useEffect(()=>{i([]),P()},[L,a]),l.useEffect(()=>{(()=>{var g;if((g=window.kakao)!=null&&g.maps){e(!0);return}const u=document.createElement("script");return u.async=!0,u.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=223f69f1eff1187f853d5ddbe870fde4&autoload=false&libraries=services",u.addEventListener("load",()=>{window.kakao.maps.load(()=>e(!0))}),document.head.appendChild(u),()=>document.head.removeChild(u)})()},[]);const N=()=>{n(o=>!o),h(o=>{if(o!==250){const u=document.querySelector(".scrollable-content");u&&(u.scrollTop=0)}return o===250?window.innerHeight:250})};return r?s.jsxs("div",{className:"w-full h-dvh overflow-hidden overflow-y-scroll scrollbar-hide relative",children:[s.jsxs(Me,{center:{lat:a==null?void 0:a.latitude,lng:a==null?void 0:a.longitude},style:{width:"100%",height:"100%"},level:3,onCenterChanged:o=>{const u=o.getCenter();w({latitude:u.getLat(),longitude:u.getLng()})},onTouchEnd:()=>{d&&x(d),O(a.latitude,a.longitude)},onMouseUp:()=>{d&&x(d),O(a.latitude,a.longitude)},children:[s.jsxs("div",{style:{position:"relative"},children:[s.jsx(ae,{position:{lat:a==null?void 0:a.latitude,lng:a==null?void 0:a.longitude}}),s.jsx(se,{position:{lat:a==null?void 0:a.latitude,lng:a==null?void 0:a.longitude},children:s.jsx(Re,{children:"내 위치"})})]}),(M??[]).map((o,u)=>s.jsxs("div",{children:[s.jsx(ae,{position:o.position,image:{src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",size:{width:24,height:35}},clickable:!0,onClick:()=>I(u)}),E===u&&s.jsx(se,{position:o.position,children:s.jsxs(De,{children:[s.jsx("button",{onClick:()=>I(null),children:"❌"}),s.jsx("h3",{children:o.title}),s.jsx("p",{children:o.address})]})})]},u))]}),s.jsx(ze,{children:s.jsxs("div",{children:[s.jsx(be,{style:{width:24,height:24,cursor:"pointer"},onClick:()=>$(-1)}),s.jsx("input",{type:"text",placeholder:"검색어를 입력해 주세요",value:R,onChange:o=>j(o.target.value)}),s.jsx(ve,{style:{width:24,height:24,cursor:"pointer"},onClick:()=>{p(),j("")}})]})}),s.jsxs(Se,{className:"scrollbar-hide",isOpen:t,height:C,children:[s.jsx("div",{style:{display:"flex",justifyContent:"center",paddingRight:20},onClick:N,children:s.jsx(Ae,{})}),s.jsxs(_,{style:{gap:10,marginBottom:10},children:[s.jsx(Q,{style:{backgroundColor:L===1&&"#6f4cdb"},onClick:()=>z(1),children:"거리순"}),s.jsx(Q,{style:{backgroundColor:L===2&&"#6f4cdb"},onClick:()=>z(2),children:"별점순"}),s.jsx(Q,{style:{backgroundColor:L===3&&"#6f4cdb"},onClick:()=>z(3),children:"빠른식사순"})]}),s.jsx("div",{className:"scrollable-content scrollbar-hide mt-3",style:{maxHeight:C===250?180:840,overflowY:"scroll",overflowX:"hidden"},children:f.map(o=>{var u;return s.jsxs("div",{onClick:()=>$(`/user/restaurant/detail/${o.restaurantId}`),className:"mb-5 cursor-pointer",children:[s.jsxs(_,{children:[s.jsx("span",{children:o.restaurantName}),s.jsxs("span",{style:{fontSize:10},onClick:()=>console.log(o.restaurantAddress),children:["식사시간 : ",o.avgRestaurant,"분"]})]}),s.jsxs(_,{children:[s.jsx(we,{style:{width:10,height:10,color:"E1FF00"}}),s.jsx("span",{style:{fontWeight:700,fontSize:8},children:"4.8"}),s.jsxs("span",{style:{fontSize:8,color:"#BABABA"},children:[o==null?void 0:o.restaurantAddress.match(/^(?:대구광역시|대구)\s*(.+)/)[1]," ","· 한식"]})]}),s.jsx(Ce,{slidesPerView:3,spaceBetween:30,children:(u=o.restaurantArroundPicList)==null?void 0:u.map((g,y)=>g?s.jsx(te,{children:s.jsx("img",{src:`${ye}/pic/restaurant/${o.restaurantId}/${g==null?void 0:g.filePath}`,style:{minWidth:140,width:140,height:140,objectFit:"cover"}},y)},y):s.jsx(te,{children:s.jsx("img",{src:"/restaurant_default.png",style:{minWidth:140,width:140,height:140,objectFit:"cover"}},y)},y))})]},o.restaurantId)})})]})]}):s.jsx("div",{children:"지도를 불러오는 중입니다..."})}export{Fe as default};
