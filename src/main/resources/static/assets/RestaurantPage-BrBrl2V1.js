var he=Object.defineProperty;var fe=(r,e,t)=>e in r?he(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var B=(r,e,t)=>fe(r,typeof e!="symbol"?e+"":e,t);import{r as l,M as F,j as n,N as se,l as ge,O as ke,u as me,I as xe,k as be,J as ve,g as W,n as T}from"./index-BEM99ApS.js";import{F as ye}from"./index-EXaYp185.js";const Z=typeof window<"u"&&typeof document<"u"?l.useLayoutEffect:l.useEffect,b=(r,e,t)=>{Z(()=>{if(!r||!t)return;const s=function(){for(var a=arguments.length,x=new Array(a),d=0;d<a;d++)x[d]=arguments[d];return x===void 0?t(r):t(r,...x)};return kakao.maps.event.addListener(r,e,s),()=>{kakao.maps.event.removeListener(r,e,s)}},[r,e,t])},ne="__react-kakao-maps-sdk__";let H=function(r){return r[r.INITIALIZED=0]="INITIALIZED",r[r.LOADING=1]="LOADING",r[r.SUCCESS=2]="SUCCESS",r[r.FAILURE=3]="FAILURE",r}({});const we=`${ne}_Loader`,k=class k{constructor(e){B(this,"callbacks",[]);B(this,"done",!1);B(this,"loading",!1);B(this,"errors",[]);let{appkey:t,id:s=we,libraries:a=[],nonce:x,retries:d=3,url:y="//dapi.kakao.com/v2/maps/sdk.js"}=e;if(this.id=s,this.appkey=t,this.libraries=a,this.nonce=x,this.retries=d,this.url=y,k.instance&&!k.equalOptions(this.options,k.instance.options)&&!k.equalOptions(this.options,k.instance.options))switch(k.instance.status){case H.FAILURE:throw new Error(`Loader must not be called again with different options. 
${JSON.stringify(this.options,null,2)}
!==
${JSON.stringify(k.instance.options,null,2)}`);default:k.instance.reset(),k.instance=this;break}return k.instance||(k.instance=this),k.instance}get options(){return{appkey:this.appkey,id:this.id,libraries:this.libraries,nonce:this.nonce,retries:this.retries,url:this.url}}static addLoadEventLisnter(e){return window.kakao&&window.kakao.maps&&window.kakao.maps.load(e),k.loadEventCallback.add(e),e}static removeLoadEventLisnter(e){return k.loadEventCallback.delete(e)}load(){return new Promise((e,t)=>{this.loadCallback(s=>{s?t(s):e(window.kakao)})})}get status(){return this.onEvent?H.FAILURE:this.done?H.SUCCESS:this.loading?H.LOADING:H.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}loadCallback(e){this.callbacks.push(e),this.execute()}resetIfRetryingFailed(){this.failed&&this.reset()}reset(){this.deleteScript(),this.done=!0,this.loading=!1,this.errors=[],this.onEvent=void 0}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.kakao&&window.kakao.maps){console.warn("Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다.설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다."),window.kakao.maps.load(this.callback);return}this.loading||(this.loading=!0,this.setScript())}}setScript(){document.getElementById(this.id)&&this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.onload=this.callback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*2**this.errors.length;console.log(`Failed to load Kakao Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.done=!0,this.loading=!1,this.onEvent=this.errors[this.errors.length-1],this.callbacks.forEach(t=>{t(this.onEvent)}),this.callbacks=[],k.loadEventCallback.forEach(t=>{t(this.onEvent)})}createUrl(){let e=this.url;return e+=`?appkey=${this.appkey}`,this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),e+="&autoload=false",e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}callback(){kakao.maps.load(()=>{k.instance.done=!0,k.instance.loading=!1,k.instance.callbacks.forEach(e=>{e(k.instance.onEvent)}),k.instance.callbacks=[],k.loadEventCallback.forEach(e=>{e(k.instance.onEvent)})})}static equalOptions(e,t){if(e.appkey!==t.appkey||e.id!==t.id||e.libraries.length!==t.libraries.length)return!1;for(let s=0;s<e.libraries.length;++s)if(e.libraries[s]!==t.libraries[s])return!1;return!(e.nonce!==t.nonce||e.retries!==t.retries||e.url!==t.url)}};B(k,"loadEventCallback",new Set);let q=k;const m=function(r,e){for(var t=arguments.length,s=new Array(t>2?t-2:0),a=2;a<t;a++)s[a-2]=arguments[a];Z(()=>{!r||s.every(x=>typeof x>"u")||r[e].call(r,...s)},[r,e,...s])},re=F.createContext(void 0),Ce=F.forwardRef(function(e,t){let{id:s,as:a,children:x,center:d,isPanto:y=!1,padding:C=32,disableDoubleClick:h,disableDoubleClickZoom:f,draggable:v,zoomable:M,keyboardShortcuts:i,level:E,maxLevel:I,minLevel:R,mapTypeId:j,projectionId:L,scrollwheel:z,tileAnimation:$,onBoundsChanged:O,onCenterChanged:N,onClick:p,onDoubleClick:P,onDrag:o,onDragEnd:u,onDragStart:g,onIdle:w,onMaptypeidChanged:D,onMouseMove:U,onRightClick:J,onTileLoaded:G,onZoomChanged:X,onZoomStart:Y,onCreate:K,...le}=e;const de=a||"div",[V,ce]=l.useState(!1),[c,ue]=l.useState(),ee=l.useRef(null);return Z(()=>{const S=q.addLoadEventLisnter(A=>ce(!A));return()=>{q.removeLoadEventLisnter(S)}},[]),Z(()=>{if(!V)return;const S=ee.current;if(!S)return;const A="lat"in d?new kakao.maps.LatLng(d.lat,d.lng):new kakao.maps.Coords(d.x,d.y),pe=new kakao.maps.Map(S,{center:A,disableDoubleClick:h,disableDoubleClickZoom:f,draggable:v,keyboardShortcuts:i,level:E,mapTypeId:typeof j=="string"?kakao.maps.MapTypeId[j]:j,projectionId:L,scrollwheel:z,tileAnimation:$});return ue(pe),()=>{S.innerHTML=""}},[V,h,f,$]),l.useImperativeHandle(t,()=>c,[c]),Z(()=>{!c||!K||K(c)},[c,K]),Z(()=>{if(!c)return;let S=c.getCenter();S instanceof kakao.maps.Coords&&(S=S.toLatLng());const A="lat"in d?new kakao.maps.LatLng(d.lat,d.lng):new kakao.maps.Coords(d.x,d.y);A instanceof kakao.maps.LatLng&&A.equals(S)||A instanceof kakao.maps.Coords&&A.toLatLng().equals(S)||(y?c.panTo(A,C):c.setCenter(A))},[c,d.lat,d.lng,d.x,d.y]),m(c,"setDraggable",v),m(c,"setZoomable",M),m(c,"setKeyboardShortcuts",i),m(c,"setLevel",E),m(c,"setMapTypeId",V?typeof j=="string"?kakao.maps.MapTypeId[j]:j:void 0),m(c,"setProjectionId",L),m(c,"setMinLevel",I),m(c,"setMaxLevel",R),b(c,"bounds_changed",O),b(c,"center_changed",N),b(c,"click",p),b(c,"dblclick",P),b(c,"drag",o),b(c,"dragstart",g),b(c,"dragend",u),b(c,"idle",w),b(c,"maptypeid_changed",D),b(c,"mousemove",U),b(c,"rightclick",J),b(c,"tilesloaded",G),b(c,"zoom_changed",X),b(c,"zoom_start",Y),n.jsxs(n.Fragment,{children:[n.jsx(de,{id:s||`${ne}_Map`,...le,ref:ee}),c&&n.jsx(re.Provider,{value:c,children:x})]})}),oe=r=>{const e=l.useContext(re);if(!e)throw new Error(`${r?r+" Component":"useMap"} must exist inside Map Component!`);return e},Le=F.forwardRef(function(e,t){let{map:s,position:a,marker:x,children:d,altitude:y,disableAutoPan:C,range:h,removable:f,zIndex:v,onCreate:M}=e;const i=l.useMemo(()=>{const I=document.createElement("div");return I.style.display="none",new kakao.maps.InfoWindow({altitude:y,disableAutoPan:C,range:h,removable:f,zIndex:v,content:I,position:a})},[C,f]),E=l.useMemo(()=>i.getContent(),[i]);return l.useImperativeHandle(t,()=>i,[i]),l.useLayoutEffect(()=>(i.open(s,x),()=>{i.close()}),[s,x]),l.useLayoutEffect(()=>{M&&M(i)},[i,M]),m(i,"setPosition",a),m(i,"setAltitude",y),m(i,"setRange",h),m(i,"setZIndex",v),se.createPortal(d,E.parentElement??E)}),ie=F.createContext(void 0),Me=F.forwardRef(function(e,t){let{map:s,position:a,children:x,altitude:d,clickable:y,draggable:C,image:h,infoWindowOptions:f,onCreate:v,onClick:M,onDragEnd:i,onDragStart:E,onMouseOut:I,onMouseOver:R,opacity:j,range:L,title:z,zIndex:$}=e;const O=l.useContext(ie),N=l.useMemo(()=>{var P,o,u,g,w,D,U,J,G,X,Y,K;return h&&new kakao.maps.MarkerImage(h.src,new kakao.maps.Size(h.size.width,h.size.height),{alt:(P=h.options)==null?void 0:P.alt,coords:(o=h.options)==null?void 0:o.coords,offset:((u=h.options)==null?void 0:u.offset)&&new kakao.maps.Point((g=h.options)==null?void 0:g.offset.x,(w=h.options)==null?void 0:w.offset.y),shape:(D=h.options)==null?void 0:D.shape,spriteOrigin:((U=h.options)==null?void 0:U.spriteOrigin)&&new kakao.maps.Point((J=h.options)==null?void 0:J.spriteOrigin.x,(G=h.options)==null?void 0:G.spriteOrigin.y),spriteSize:((X=h.options)==null?void 0:X.spriteSize)&&new kakao.maps.Size((Y=h.options)==null?void 0:Y.spriteSize.width,(K=h.options)==null?void 0:K.spriteSize.height)})},[JSON.stringify(h)]),p=l.useMemo(()=>new kakao.maps.Marker({altitude:d,clickable:y,draggable:C,image:N,opacity:j,range:L,title:z,zIndex:$,position:a}),[]);return l.useImperativeHandle(t,()=>p,[p]),l.useLayoutEffect(()=>O?(O.addMarker(p,!0),()=>O.removeMarker(p,!0)):(p.setMap(s),()=>p.setMap(null)),[s,O,p]),l.useLayoutEffect(()=>{v&&v(p)},[p,v]),m(p,"setPosition",a),m(p,"setImage",N),m(p,"setAltitude",d),m(p,"setClickable",y),m(p,"setDraggable",C),m(p,"setOpacity",j),m(p,"setRange",L),m(p,"setRange",L),m(p,"setTitle",z),m(p,"setTitle",z),m(p,"setZIndex",$),b(p,"click",M),b(p,"dragstart",E),b(p,"dragend",i),b(p,"mouseout",I),b(p,"mouseover",R),x?n.jsx(Le,{position:a,map:s,marker:p,altitude:f==null?void 0:f.altitude,disableAutoPan:f==null?void 0:f.disableAutoPan,range:f==null?void 0:f.range,removable:f==null?void 0:f.removable,zIndex:f==null?void 0:f.zIndex,children:x}):null}),te=F.forwardRef(function(e,t){let{position:s,...a}=e;const x=oe("MapMarker"),d=l.useMemo(()=>"lat"in s?new kakao.maps.LatLng(s.lat,s.lng):new kakao.maps.Coords(s.x,s.y).toLatLng(),[s.lat,s.lng,s.x,s.y]);return n.jsx(Me,{map:x,position:d,...a,ref:t})}),ae=F.forwardRef(function(e,t){let{position:s,children:a,clickable:x,xAnchor:d,yAnchor:y,zIndex:C,onCreate:h}=e;const f=l.useContext(ie),v=oe("CustomOverlayMap"),M=l.useMemo(()=>new kakao.maps.LatLng(s.lat,s.lng),[s.lat,s.lng]),i=l.useMemo(()=>{const I=document.createElement("div");return I.style.display="none",new kakao.maps.CustomOverlay({clickable:x,xAnchor:d,yAnchor:y,zIndex:C,position:M,content:I})},[x,d,y]),E=l.useMemo(()=>i.getContent(),[i]);return l.useImperativeHandle(t,()=>i,[i]),l.useLayoutEffect(()=>{if(v)return f?f.addMarker(i,!0):i.setMap(v),()=>{f?f.removeMarker(i,!0):i.setMap(null)}},[v,f,i]),l.useLayoutEffect(()=>{h&&h(i)},[i,h]),m(i,"setPosition",M),m(i,"setZIndex",C),E.parentElement&&se.createPortal(a,E.parentElement)}),Ee=r=>{const[e,t]=l.useState([!0,void 0]);return l.useEffect(()=>{new q({...r}).load().then(()=>t([!1,void 0])).catch(s=>{t([!1,s])})},[JSON.stringify(r)]),e},Ie=T.div`
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
`,je=T.div`
  width: 100px;
  height: 5px;
  margin-top: 10px;
  background-color: #eee;
  border-radius: 2px;
  margin-bottom: 20px;
  cursor: pointer;
`,_=T.div`
  padding: 3px 10px;
  background-color: #ddd;
  color: #fff;
  display: inline-block;
  font-size: 10px;
  border-radius: 10px;
  cursor: pointer;
`,Q=T.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin-bottom: 5px;
`,Se=T.div`
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
`,Ae=T.div`
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
`;function Oe(){Ee({appkey:"223f69f1eff1187f853d5ddbe870fde4",libraries:["clusterer","drawing","services"]});const[r,e]=l.useState(!1),[t,s]=l.useState(!1),[a,x]=ge(ke),[d,y]=l.useState(null),[C,h]=l.useState(250),[f,v]=l.useState([]),[M,i]=l.useState([]),[E,I]=l.useState({}),[R,j]=l.useState(),[L,z]=l.useState(1),$=me(),O=async()=>{i([]);try{const o=await W.get(`/api/restaurant/around?orderFilter=${L}&userLat=${a==null?void 0:a.latitude}&userLng=${a==null?void 0:a.longitude}`);console.log(o);const u=o.data.resultData;v([...u]),u.map(g=>{i(w=>[...w,{title:g.restaurantName,address:g.restaurantAddress,position:{lat:g.lat,lng:g.lng}}])})}catch(o){console.log(o)}},N=async(o,u)=>{i([]);try{const g=await W.get(`/api/restaurant/around?orderFilter=${L}&userLat=${o}&userLng=${u}`);console.log(g);const w=g.data.resultData;v([...w]),w.map(D=>{i(U=>[...U,{title:D.restaurantName,address:D.restaurantAddress,position:{lat:D.lat,lng:D.lng}}])})}catch(g){console.log(g)}},p=async()=>{i([]);try{const u=(await W.get(`/api/restaurant/around?searchFilter=${R}&userLat=${a.latitude}&userLng=${a.longitude}`)).data.resultData;v(u),u.map(g=>{i(w=>[...w,{title:g.restaurantName,address:g.restaurantAddress,position:{lat:g.lat,lng:g.lng}}])}),console.log(u)}catch(o){console.log(o)}};l.useEffect(()=>{i([]),O()},[L,a]),l.useEffect(()=>{(()=>{var g;if((g=window.kakao)!=null&&g.maps){e(!0);return}const u=document.createElement("script");return u.async=!0,u.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=223f69f1eff1187f853d5ddbe870fde4&autoload=false&libraries=services",u.addEventListener("load",()=>{window.kakao.maps.load(()=>e(!0))}),document.head.appendChild(u),()=>document.head.removeChild(u)})()},[]);const P=()=>{s(o=>!o),h(o=>{if(o!==250){const u=document.querySelector(".scrollable-content");u&&(u.scrollTop=0)}return o===250?window.innerHeight:250})};return r?n.jsxs("div",{className:"w-full h-dvh overflow-hidden overflow-y-scroll scrollbar-hide relative",children:[n.jsxs(Ce,{center:{lat:a==null?void 0:a.latitude,lng:a==null?void 0:a.longitude},style:{width:"100%",height:"100%"},level:3,onCenterChanged:o=>{const u=o.getCenter();y({latitude:u.getLat(),longitude:u.getLng()})},onTouchEnd:()=>{d&&x(d),N(a.latitude,a.longitude)},onMouseUp:()=>{d&&x(d),N(a.latitude,a.longitude)},children:[n.jsxs("div",{style:{position:"relative"},children:[n.jsx(te,{position:{lat:a==null?void 0:a.latitude,lng:a==null?void 0:a.longitude}}),n.jsx(ae,{position:{lat:a==null?void 0:a.latitude,lng:a==null?void 0:a.longitude},children:n.jsx(ze,{children:"내 위치"})})]}),(M??[]).map((o,u)=>n.jsxs("div",{children:[n.jsx(te,{position:o.position,image:{src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",size:{width:24,height:35}},clickable:!0,onClick:()=>I(u)}),E===u&&n.jsx(ae,{position:o.position,children:n.jsxs(Ae,{children:[n.jsx("button",{onClick:()=>I(null),children:"❌"}),n.jsx("h3",{children:o.title}),n.jsx("p",{children:o.address})]})})]},u))]}),n.jsx(Se,{children:n.jsxs("div",{children:[n.jsx(xe,{style:{width:24,height:24,cursor:"pointer"},onClick:()=>$(-1)}),n.jsx("input",{type:"text",placeholder:"검색어를 입력해 주세요",value:R,onChange:o=>j(o.target.value)}),n.jsx(be,{style:{width:24,height:24,cursor:"pointer"},onClick:()=>{p(),j("")}})]})}),n.jsxs(Ie,{className:"scrollbar-hide",isOpen:t,height:C,children:[n.jsx("div",{style:{display:"flex",justifyContent:"center",paddingRight:20},onClick:P,children:n.jsx(je,{})}),n.jsxs(Q,{style:{gap:10,marginBottom:10},children:[n.jsx(_,{style:{backgroundColor:L===1&&"#6f4cdb"},onClick:()=>z(1),children:"거리순"}),n.jsx(_,{style:{backgroundColor:L===2&&"#6f4cdb"},onClick:()=>z(2),children:"별점순"}),n.jsx(_,{style:{backgroundColor:L===3&&"#6f4cdb"},onClick:()=>z(3),children:"빠른식사순"})]}),n.jsx("div",{className:"scrollable-content scrollbar-hide",style:{maxHeight:C===250?180:840,overflowY:"scroll",overflowX:"hidden"},children:f.map(o=>{var u;return n.jsxs("div",{onClick:()=>$(`/user/restaurant/detail/${o.restaurantId}`),children:[n.jsxs(Q,{children:[n.jsx("span",{children:o.restaurantName}),n.jsxs("span",{style:{fontSize:10},onClick:()=>console.log(o.restaurantAddress),children:["식사시간 : ",o.avgRestaurant,"분"]})]}),n.jsxs(Q,{children:[n.jsx(ye,{style:{width:10,height:10,color:"E1FF00"}}),n.jsx("span",{style:{fontWeight:700,fontSize:8},children:"4.8"}),n.jsxs("span",{style:{fontSize:8,color:"#BABABA"},children:[o==null?void 0:o.restaurantAddress.match(/^(?:대구광역시|대구)\s*(.+)/)[1]," ","· 한식"]})]}),n.jsx(Q,{className:"scrollbar-hide",style:{overflowX:"scroll",marginBottom:20},children:(u=o.restaurantArroundPicList)==null?void 0:u.map((g,w)=>g?n.jsx("img",{src:`${ve}/pic/restaurant/${o.restaurantId}/${g==null?void 0:g.filePath}`,style:{minWidth:140,width:140,height:140,objectFit:"cover"}},w):n.jsx("img",{src:"/restaurant_default.png",style:{minWidth:140,width:140,height:140,objectFit:"cover"}},w))})]},o.restaurantId)})})]})]}):n.jsx("div",{children:"지도를 불러오는 중입니다..."})}export{Oe as default};
