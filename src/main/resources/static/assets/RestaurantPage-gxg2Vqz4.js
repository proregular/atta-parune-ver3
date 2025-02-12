var he=Object.defineProperty;var fe=(n,e,t)=>e in n?he(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var B=(n,e,t)=>fe(n,typeof e!="symbol"?e+"":e,t);import{r as l,d as F,j as r,e as se,R as ge,f as ke,u as me,b as W,n as T}from"./index-XkiSkCIq.js";import{F as xe}from"./index-0rdTubEZ.js";import{I as be,c as ve}from"./index-Cu020-X3.js";import"./iconBase-DXw1Gjh5.js";const Z=typeof window<"u"&&typeof document<"u"?l.useLayoutEffect:l.useEffect,b=(n,e,t)=>{Z(()=>{if(!n||!t)return;const s=function(){for(var a=arguments.length,x=new Array(a),d=0;d<a;d++)x[d]=arguments[d];return x===void 0?t(n):t(n,...x)};return kakao.maps.event.addListener(n,e,s),()=>{kakao.maps.event.removeListener(n,e,s)}},[n,e,t])},ne="__react-kakao-maps-sdk__";let H=function(n){return n[n.INITIALIZED=0]="INITIALIZED",n[n.LOADING=1]="LOADING",n[n.SUCCESS=2]="SUCCESS",n[n.FAILURE=3]="FAILURE",n}({});const ye=`${ne}_Loader`,k=class k{constructor(e){B(this,"callbacks",[]);B(this,"done",!1);B(this,"loading",!1);B(this,"errors",[]);let{appkey:t,id:s=ye,libraries:a=[],nonce:x,retries:d=3,url:y="//dapi.kakao.com/v2/maps/sdk.js"}=e;if(this.id=s,this.appkey=t,this.libraries=a,this.nonce=x,this.retries=d,this.url=y,k.instance&&!k.equalOptions(this.options,k.instance.options)&&!k.equalOptions(this.options,k.instance.options))switch(k.instance.status){case H.FAILURE:throw new Error(`Loader must not be called again with different options. 
${JSON.stringify(this.options,null,2)}
!==
${JSON.stringify(k.instance.options,null,2)}`);default:k.instance.reset(),k.instance=this;break}return k.instance||(k.instance=this),k.instance}get options(){return{appkey:this.appkey,id:this.id,libraries:this.libraries,nonce:this.nonce,retries:this.retries,url:this.url}}static addLoadEventLisnter(e){return window.kakao&&window.kakao.maps&&window.kakao.maps.load(e),k.loadEventCallback.add(e),e}static removeLoadEventLisnter(e){return k.loadEventCallback.delete(e)}load(){return new Promise((e,t)=>{this.loadCallback(s=>{s?t(s):e(window.kakao)})})}get status(){return this.onEvent?H.FAILURE:this.done?H.SUCCESS:this.loading?H.LOADING:H.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}loadCallback(e){this.callbacks.push(e),this.execute()}resetIfRetryingFailed(){this.failed&&this.reset()}reset(){this.deleteScript(),this.done=!0,this.loading=!1,this.errors=[],this.onEvent=void 0}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.kakao&&window.kakao.maps){console.warn("Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다.설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다."),window.kakao.maps.load(this.callback);return}this.loading||(this.loading=!0,this.setScript())}}setScript(){document.getElementById(this.id)&&this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.onload=this.callback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*2**this.errors.length;console.log(`Failed to load Kakao Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.done=!0,this.loading=!1,this.onEvent=this.errors[this.errors.length-1],this.callbacks.forEach(t=>{t(this.onEvent)}),this.callbacks=[],k.loadEventCallback.forEach(t=>{t(this.onEvent)})}createUrl(){let e=this.url;return e+=`?appkey=${this.appkey}`,this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),e+="&autoload=false",e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}callback(){kakao.maps.load(()=>{k.instance.done=!0,k.instance.loading=!1,k.instance.callbacks.forEach(e=>{e(k.instance.onEvent)}),k.instance.callbacks=[],k.loadEventCallback.forEach(e=>{e(k.instance.onEvent)})})}static equalOptions(e,t){if(e.appkey!==t.appkey||e.id!==t.id||e.libraries.length!==t.libraries.length)return!1;for(let s=0;s<e.libraries.length;++s)if(e.libraries[s]!==t.libraries[s])return!1;return!(e.nonce!==t.nonce||e.retries!==t.retries||e.url!==t.url)}};B(k,"loadEventCallback",new Set);let q=k;const m=function(n,e){for(var t=arguments.length,s=new Array(t>2?t-2:0),a=2;a<t;a++)s[a-2]=arguments[a];Z(()=>{!n||s.every(x=>typeof x>"u")||n[e].call(n,...s)},[n,e,...s])},re=F.createContext(void 0),we=F.forwardRef(function(e,t){let{id:s,as:a,children:x,center:d,isPanto:y=!1,padding:w=32,disableDoubleClick:h,disableDoubleClickZoom:f,draggable:v,zoomable:L,keyboardShortcuts:i,level:M,maxLevel:I,minLevel:D,mapTypeId:E,projectionId:j,scrollwheel:R,tileAnimation:$,onBoundsChanged:O,onCenterChanged:P,onClick:p,onDoubleClick:N,onDrag:o,onDragEnd:u,onDragStart:g,onIdle:C,onMaptypeidChanged:z,onMouseMove:U,onRightClick:G,onTileLoaded:J,onZoomChanged:X,onZoomStart:Y,onCreate:K,...le}=e;const de=a||"div",[V,ce]=l.useState(!1),[c,ue]=l.useState(),_=l.useRef(null);return Z(()=>{const S=q.addLoadEventLisnter(A=>ce(!A));return()=>{q.removeLoadEventLisnter(S)}},[]),Z(()=>{if(!V)return;const S=_.current;if(!S)return;const A="lat"in d?new kakao.maps.LatLng(d.lat,d.lng):new kakao.maps.Coords(d.x,d.y),pe=new kakao.maps.Map(S,{center:A,disableDoubleClick:h,disableDoubleClickZoom:f,draggable:v,keyboardShortcuts:i,level:M,mapTypeId:typeof E=="string"?kakao.maps.MapTypeId[E]:E,projectionId:j,scrollwheel:R,tileAnimation:$});return ue(pe),()=>{S.innerHTML=""}},[V,h,f,$]),l.useImperativeHandle(t,()=>c,[c]),Z(()=>{!c||!K||K(c)},[c,K]),Z(()=>{if(!c)return;let S=c.getCenter();S instanceof kakao.maps.Coords&&(S=S.toLatLng());const A="lat"in d?new kakao.maps.LatLng(d.lat,d.lng):new kakao.maps.Coords(d.x,d.y);A instanceof kakao.maps.LatLng&&A.equals(S)||A instanceof kakao.maps.Coords&&A.toLatLng().equals(S)||(y?c.panTo(A,w):c.setCenter(A))},[c,d.lat,d.lng,d.x,d.y]),m(c,"setDraggable",v),m(c,"setZoomable",L),m(c,"setKeyboardShortcuts",i),m(c,"setLevel",M),m(c,"setMapTypeId",V?typeof E=="string"?kakao.maps.MapTypeId[E]:E:void 0),m(c,"setProjectionId",j),m(c,"setMinLevel",I),m(c,"setMaxLevel",D),b(c,"bounds_changed",O),b(c,"center_changed",P),b(c,"click",p),b(c,"dblclick",N),b(c,"drag",o),b(c,"dragstart",g),b(c,"dragend",u),b(c,"idle",C),b(c,"maptypeid_changed",z),b(c,"mousemove",U),b(c,"rightclick",G),b(c,"tilesloaded",J),b(c,"zoom_changed",X),b(c,"zoom_start",Y),r.jsxs(r.Fragment,{children:[r.jsx(de,{id:s||`${ne}_Map`,...le,ref:_}),c&&r.jsx(re.Provider,{value:c,children:x})]})}),oe=n=>{const e=l.useContext(re);if(!e)throw new Error(`${n?n+" Component":"useMap"} must exist inside Map Component!`);return e},Ce=F.forwardRef(function(e,t){let{map:s,position:a,marker:x,children:d,altitude:y,disableAutoPan:w,range:h,removable:f,zIndex:v,onCreate:L}=e;const i=l.useMemo(()=>{const I=document.createElement("div");return I.style.display="none",new kakao.maps.InfoWindow({altitude:y,disableAutoPan:w,range:h,removable:f,zIndex:v,content:I,position:a})},[w,f]),M=l.useMemo(()=>i.getContent(),[i]);return l.useImperativeHandle(t,()=>i,[i]),l.useLayoutEffect(()=>(i.open(s,x),()=>{i.close()}),[s,x]),l.useLayoutEffect(()=>{L&&L(i)},[i,L]),m(i,"setPosition",a),m(i,"setAltitude",y),m(i,"setRange",h),m(i,"setZIndex",v),se.createPortal(d,M.parentElement??M)}),ie=F.createContext(void 0),Le=F.forwardRef(function(e,t){let{map:s,position:a,children:x,altitude:d,clickable:y,draggable:w,image:h,infoWindowOptions:f,onCreate:v,onClick:L,onDragEnd:i,onDragStart:M,onMouseOut:I,onMouseOver:D,opacity:E,range:j,title:R,zIndex:$}=e;const O=l.useContext(ie),P=l.useMemo(()=>{var N,o,u,g,C,z,U,G,J,X,Y,K;return h&&new kakao.maps.MarkerImage(h.src,new kakao.maps.Size(h.size.width,h.size.height),{alt:(N=h.options)==null?void 0:N.alt,coords:(o=h.options)==null?void 0:o.coords,offset:((u=h.options)==null?void 0:u.offset)&&new kakao.maps.Point((g=h.options)==null?void 0:g.offset.x,(C=h.options)==null?void 0:C.offset.y),shape:(z=h.options)==null?void 0:z.shape,spriteOrigin:((U=h.options)==null?void 0:U.spriteOrigin)&&new kakao.maps.Point((G=h.options)==null?void 0:G.spriteOrigin.x,(J=h.options)==null?void 0:J.spriteOrigin.y),spriteSize:((X=h.options)==null?void 0:X.spriteSize)&&new kakao.maps.Size((Y=h.options)==null?void 0:Y.spriteSize.width,(K=h.options)==null?void 0:K.spriteSize.height)})},[JSON.stringify(h)]),p=l.useMemo(()=>new kakao.maps.Marker({altitude:d,clickable:y,draggable:w,image:P,opacity:E,range:j,title:R,zIndex:$,position:a}),[]);return l.useImperativeHandle(t,()=>p,[p]),l.useLayoutEffect(()=>O?(O.addMarker(p,!0),()=>O.removeMarker(p,!0)):(p.setMap(s),()=>p.setMap(null)),[s,O,p]),l.useLayoutEffect(()=>{v&&v(p)},[p,v]),m(p,"setPosition",a),m(p,"setImage",P),m(p,"setAltitude",d),m(p,"setClickable",y),m(p,"setDraggable",w),m(p,"setOpacity",E),m(p,"setRange",j),m(p,"setRange",j),m(p,"setTitle",R),m(p,"setTitle",R),m(p,"setZIndex",$),b(p,"click",L),b(p,"dragstart",M),b(p,"dragend",i),b(p,"mouseout",I),b(p,"mouseover",D),x?r.jsx(Ce,{position:a,map:s,marker:p,altitude:f==null?void 0:f.altitude,disableAutoPan:f==null?void 0:f.disableAutoPan,range:f==null?void 0:f.range,removable:f==null?void 0:f.removable,zIndex:f==null?void 0:f.zIndex,children:x}):null}),ee=F.forwardRef(function(e,t){let{position:s,...a}=e;const x=oe("MapMarker"),d=l.useMemo(()=>"lat"in s?new kakao.maps.LatLng(s.lat,s.lng):new kakao.maps.Coords(s.x,s.y).toLatLng(),[s.lat,s.lng,s.x,s.y]);return r.jsx(Le,{map:x,position:d,...a,ref:t})}),te=F.forwardRef(function(e,t){let{position:s,children:a,clickable:x,xAnchor:d,yAnchor:y,zIndex:w,onCreate:h}=e;const f=l.useContext(ie),v=oe("CustomOverlayMap"),L=l.useMemo(()=>new kakao.maps.LatLng(s.lat,s.lng),[s.lat,s.lng]),i=l.useMemo(()=>{const I=document.createElement("div");return I.style.display="none",new kakao.maps.CustomOverlay({clickable:x,xAnchor:d,yAnchor:y,zIndex:w,position:L,content:I})},[x,d,y]),M=l.useMemo(()=>i.getContent(),[i]);return l.useImperativeHandle(t,()=>i,[i]),l.useLayoutEffect(()=>{if(v)return f?f.addMarker(i,!0):i.setMap(v),()=>{f?f.removeMarker(i,!0):i.setMap(null)}},[v,f,i]),l.useLayoutEffect(()=>{h&&h(i)},[i,h]),m(i,"setPosition",L),m(i,"setZIndex",w),M.parentElement&&se.createPortal(a,M.parentElement)}),Me=n=>{const[e,t]=l.useState([!0,void 0]);return l.useEffect(()=>{new q({...n}).load().then(()=>t([!1,void 0])).catch(s=>{t([!1,s])})},[JSON.stringify(n)]),e},Ie=T.div`
  position: absolute;
  width: 100%;
  height: ${n=>`${n.height}px`};
  bottom: 0px;
  z-index: 1;
  background-color: #fff;
  border-radius: 5px 5px 0 0;
  padding-left: 20px;
  overflow-y: auto;
  transition: height 0.3s ease-in-out;
  z-index: 10;
`,Ee=T.div`
  width: 100px;
  height: 5px;
  margin-top: 10px;
  background-color: #eee;
  border-radius: 2px;
  margin-bottom: 20px;
  cursor: pointer;
`,ae=T.div`
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
`,je=T.div`
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
`,Se=T.div`
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
`,Ae=T.div`
  background-color: #6f4cdb;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  font-size: 10px;
  position: absolute;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  left: 10px;
  bottom: -10px;
`;function Pe(){Me({appkey:"223f69f1eff1187f853d5ddbe870fde4",libraries:["clusterer","drawing","services"]});const[n,e]=l.useState(!1),[t,s]=l.useState(!1),[a,x]=ge(ke),[d,y]=l.useState(null),[w,h]=l.useState(250),[f,v]=l.useState([]),[L,i]=l.useState([]),[M,I]=l.useState({}),[D,E]=l.useState(),[j,R]=l.useState(0),$=me(),O=async()=>{i([]);try{const o=await W.get(`/api/restaurant/around?orderFilter=${j}&userLat=${a==null?void 0:a.latitude}&userLng=${a==null?void 0:a.longitude}`);console.log(o);const u=o.data.resultData;v([...u]),u.map(g=>{i(C=>[...C,{title:g.restaurantName,address:g.restaurantAddress,position:{lat:g.lat,lng:g.lng}}])})}catch(o){console.log(o)}},P=async(o,u)=>{i([]);try{const g=await W.get(`/api/restaurant/around?orderFilter=${j}&userLat=${o}&userLng=${u}`);console.log(g);const C=g.data.resultData;v([...C]),C.map(z=>{i(U=>[...U,{title:z.restaurantName,address:z.restaurantAddress,position:{lat:z.lat,lng:z.lng}}])})}catch(g){console.log(g)}},p=async()=>{i([]);try{const u=(await W.get(`/api/restaurant/around?searchFilter=${D}&userLat=${a.latitude}&userLng=${a.longitude}`)).data.resultData;v(u),u.map(g=>{i(C=>[...C,{title:g.restaurantName,address:g.restaurantAddress,position:{lat:g.lat,lng:g.lng}}])}),console.log(u)}catch(o){console.log(o)}};l.useEffect(()=>{i([]),O()},[j,a]),l.useEffect(()=>{(()=>{var g;if((g=window.kakao)!=null&&g.maps){e(!0);return}const u=document.createElement("script");return u.async=!0,u.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=223f69f1eff1187f853d5ddbe870fde4&autoload=false&libraries=services",u.addEventListener("load",()=>{window.kakao.maps.load(()=>e(!0))}),document.head.appendChild(u),()=>document.head.removeChild(u)})()},[]);const N=()=>{s(o=>!o),h(o=>{if(o!==250){const u=document.querySelector(".scrollable-content");u&&(u.scrollTop=0)}return o===250?window.innerHeight:250})};return n?r.jsxs("div",{className:"w-full h-dvh overflow-hidden overflow-y-scroll scrollbar-hide relative",children:[r.jsxs(we,{center:{lat:a==null?void 0:a.latitude,lng:a==null?void 0:a.longitude},style:{width:"100%",height:"100%"},level:3,onCenterChanged:o=>{const u=o.getCenter();y({latitude:u.getLat(),longitude:u.getLng()})},onTouchEnd:()=>{d&&x(d),P(a.latitude,a.longitude)},onMouseUp:()=>{d&&x(d),P(a.latitude,a.longitude)},children:[r.jsxs("div",{style:{position:"relative"},children:[r.jsx(ee,{position:{lat:a==null?void 0:a.latitude,lng:a==null?void 0:a.longitude}}),r.jsx(te,{position:{lat:a==null?void 0:a.latitude,lng:a==null?void 0:a.longitude},children:r.jsx(Ae,{children:"내 위치"})})]}),(L??[]).map((o,u)=>r.jsxs("div",{children:[r.jsx(ee,{position:o.position,image:{src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",size:{width:24,height:35}},clickable:!0,onClick:()=>I(u)}),M===u&&r.jsx(te,{position:o.position,children:r.jsxs(Se,{children:[r.jsx("button",{onClick:()=>I(null),children:"❌"}),r.jsx("h3",{children:o.title}),r.jsx("p",{children:o.address})]})})]},u))]}),r.jsx(je,{children:r.jsxs("div",{children:[r.jsx(be,{style:{width:24,height:24,cursor:"pointer"},onClick:()=>$(-1)}),r.jsx("input",{type:"text",placeholder:"검색어를 입력해 주세요",value:D,onChange:o=>E(o.target.value)}),r.jsx(ve,{style:{width:24,height:24,cursor:"pointer"},onClick:()=>{p(),E("")}})]})}),r.jsxs(Ie,{className:"scrollbar-hide",isOpen:t,height:w,children:[r.jsx("div",{style:{display:"flex",justifyContent:"center",paddingRight:20},onClick:N,children:r.jsx(Ee,{})}),r.jsxs(Q,{style:{gap:10,marginBottom:10},children:[r.jsx(ae,{style:{backgroundColor:j===0&&"#6f4cdb"},onClick:()=>R(0),children:"전체"}),r.jsx(ae,{style:{backgroundColor:j!==0&&"#6f4cdb"},onClick:()=>R(1),children:"거리순"})]}),r.jsx("div",{className:"scrollable-content scrollbar-hide",style:{maxHeight:w===250?180:840,overflowY:"scroll",overflowX:"hidden"},children:f.map(o=>{var u;return r.jsxs("div",{onClick:()=>$(`/user/restaurant/detail/${o.restaurantId}`),children:[r.jsxs(Q,{children:[r.jsx("span",{children:o.restaurantName}),r.jsxs("span",{style:{fontSize:10},onClick:()=>console.log(o.restaurantAddress),children:["식사시간 : ",o.avgRestaurant,"분"]})]}),r.jsxs(Q,{children:[r.jsx(xe,{style:{width:10,height:10,color:"E1FF00"}}),r.jsx("span",{style:{fontWeight:700,fontSize:8},children:"4.8"}),r.jsxs("span",{style:{fontSize:8,color:"#BABABA"},children:[o==null?void 0:o.restaurantAddress.match(/^(?:대구광역시|대구)\s*(.+)/)[1]," ","· 한식"]})]}),r.jsx(Q,{className:"scrollbar-hide",style:{overflowX:"scroll",marginBottom:20},children:(u=o.restaurantArroundPicList)==null?void 0:u.map((g,C)=>r.jsx("img",{src:`http://112.222.157.156:5222/pic/restaurant/${o.restaurantId}/${g==null?void 0:g.filePath}`,style:{minWidth:140,width:140,height:140,objectFit:"cover"}},C))})]},o.restaurantId)})})]})]}):r.jsx("div",{children:"지도를 불러오는 중입니다..."})}export{Pe as default};
