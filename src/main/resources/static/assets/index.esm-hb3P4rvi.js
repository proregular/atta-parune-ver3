import{az as m,b as f}from"./index-BGt-xJRX.js";var d=function(o,n){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])},d(o,n)},s=function(){return s=Object.assign||function(o){for(var n,t=1,r=arguments.length;t<r;t++)for(var e in n=arguments[t])Object.prototype.hasOwnProperty.call(n,e)&&(o[e]=n[e]);return o},s.apply(this,arguments)};function b(o,n){var t={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&n.indexOf(r)<0&&(t[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function"){var e=0;for(r=Object.getOwnPropertySymbols(o);e<r.length;e++)n.indexOf(r[e])<0&&Object.prototype.propertyIsEnumerable.call(o,r[e])&&(t[r[e]]=o[r[e]])}return t}var l,h="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",O=(l=null,function(o){return o===void 0&&(o=h),l||(l=new Promise(function(n,t){var r=document.createElement("script");r.src=o,r.onload=function(){var e;if(!((e=window==null?void 0:window.daum)===null||e===void 0)&&e.Postcode)return n(window.daum.Postcode);t(new Error("Script is loaded successfully, but cannot find Postcode module. Check your scriptURL property."))},r.onerror=function(e){return t(e)},r.id="daum_postcode_script",document.body.appendChild(r)}))}),g=m.createElement("p",null,"현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요."),C={width:"100%",height:400},E={scriptUrl:h,errorMessage:g,autoClose:!0},j=function(o){function n(){var t=o!==null&&o.apply(this,arguments)||this;return t.mounted=!1,t.wrap=f.createRef(),t.state={hasError:!1,completed:!1},t.initiate=function(r){if(t.wrap.current){var e=t.props;e.scriptUrl,e.className,e.style;var c=e.defaultQuery,i=e.autoClose;e.errorMessage;var a=e.onComplete,u=e.onClose,p=e.onResize,y=e.onSearch,v=b(e,["scriptUrl","className","style","defaultQuery","autoClose","errorMessage","onComplete","onClose","onResize","onSearch"]);new r(s(s({},v),{oncomplete:function(w){a&&a(w),t.setState({completed:!0})},onsearch:y,onresize:p,onclose:u,width:"100%",height:"100%"})).embed(t.wrap.current,{q:c,autoClose:i})}},t.onError=function(r){console.error(r),t.setState({hasError:!0})},t}return function(t,r){function e(){this.constructor=t}d(t,r),t.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}(n,o),n.prototype.componentDidMount=function(){var t=this.initiate,r=this.onError,e=this.props.scriptUrl;e&&(this.mounted||(O(e).then(t).catch(r),this.mounted=!0))},n.prototype.render=function(){var t=this.props,r=t.className,e=t.style,c=t.errorMessage,i=t.autoClose,a=this.state,u=a.hasError,p=a.completed;return i===!0&&p===!0?null:m.createElement("div",{ref:this.wrap,className:r,style:s(s({},C),e)},u&&c)},n.defaultProps=E,n}(f.Component);export{j as h};
