(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{228:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(225),s=a(226),o=a(29),d=a(229),l=a.n(d),c=a(46),u=a(53),g=a(232),A=a.n(g),f=o.default.div.withConfig({displayName:"style__Container",componentId:"sc-1atd21p-0"})(["position:relative;min-width:320px;"]),p=Object(o.default)(l.a).withConfig({displayName:"style__BackgroundImage",componentId:"sc-1atd21p-1"})([""," user-select:none;position:absolute !important;"],Object(c.absoluteCover)()),I=o.default.div.withConfig({displayName:"style__ImageOverlay",componentId:"sc-1atd21p-2"})([""," background-color:black;opacity:0.6;"],Object(c.absoluteCover)()),M=o.default.div.withConfig({displayName:"style__Data",componentId:"sc-1atd21p-3"})([""," "," padding:2rem 1rem;position:relative;"],Object(c.central)(),Object(u.c)({md:"height: 100vh; overflow-y: hidden;",lg:"height: 100vh; overflow-y: hidden;"})),m=o.default.div.withConfig({displayName:"style__Arrow",componentId:"sc-1atd21p-4"})(["position:absolute;left:calc(50% - ",");cursor:pointer;bottom:2.5rem;"," "," animation-name:",";animation-duration:1s;animation-iteration-count:infinite;animation-direction:alternate;animation-timing-function:ease-in;display:none;",""],Object(c.op)("2rem",(function(e){return.7*e/2})),Object(c.rectangle)("72px","53px",.7),Object(c.backgroundCover)(A.a),c.bouncedAnimation,Object(u.c)({lg:"display: block;",md:"display: block;"})),j=o.default.div.withConfig({displayName:"style__Title",componentId:"sc-1atd21p-5"})(["font-size:2rem;color:white;text-align:center;"]),y=a(233),h=a(145),D=function(e){var t=e.children;return r.a.createElement(h.a,{query:"4087963872",render:function(e){return t(e)},data:y})},N=function(){return r.a.createElement(D,null,(function(e){return r.a.createElement(f,null,r.a.createElement(p,{sizes:e.backgroundImage.childImageSharp.sizes}),r.a.createElement(I,null),r.a.createElement(M,null,r.a.createElement(j,null,"Every day millions of trees get killed around the globe")),r.a.createElement(m,null))}))};t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(s.a,{title:"Welcome!",keywords:[""]}),r.a.createElement(N,null))}},229:function(e,t,a){"use strict";a(12),a(13),a(4),a(112),a(158),a(230);var i=a(24);t.__esModule=!0,t.default=void 0;var r,n=i(a(85)),s=i(a(86)),o=i(a(159)),d=i(a(160)),l=i(a(0)),c=i(a(48)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},g=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),f=function(e){var t=u(e),a=g(t);return A[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,I="undefined"!=typeof window,M=I&&window.IntersectionObserver,m=new WeakMap;function j(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function h(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function D(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function N(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var E=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=l.default.createElement(C,(0,d.default)({src:t},r));return a.length>1?l.default.createElement("picture",null,i(a),n):n},C=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,g=e.draggable,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:i,src:r},A,{onLoad:s,onError:c,ref:t,loading:u,draggable:g,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var w=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=I&&f(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&M&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||I&&(p||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,g=void 0===c?{}:c,A=e.placeholderClassName,f=e.fluid,p=e.fixed,I=e.backgroundColor,M=e.durationFadeIn,m=e.Tag,y=e.itemProp,N=e.loading,E=e.draggable,w=!1===this.state.fadeIn||this.state.imgLoaded,S=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,d.default)({opacity:w?1:0,transition:S?"opacity "+M+"ms":"none"},o),z="boolean"==typeof I?"lightgray":I,v={transitionDelay:M+"ms"},B=(0,d.default)({opacity:this.state.imgLoaded?0:1},S&&v,{},o,{},g),x={title:t,alt:this.state.isVisible?"":a,style:B,className:A};if(f){var T=f,Q=T[0];return l.default.createElement(m,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(Q.srcSet)},l.default.createElement(m,{style:{width:"100%",paddingBottom:100/Q.aspectRatio+"%"}}),z&&l.default.createElement(m,{title:t,style:(0,d.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},S&&v)}),Q.base64&&l.default.createElement(b,{src:Q.base64,spreadProps:x,imageVariants:T,generateSources:D}),Q.tracedSVG&&l.default.createElement(b,{src:Q.tracedSVG,spreadProps:x,imageVariants:T,generateSources:h}),this.state.isVisible&&l.default.createElement("picture",null,j(T),l.default.createElement(C,{alt:a,title:t,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:N},Q,{imageVariants:T}))}}))}if(p){var Y=p,k=Y[0],R=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete R.display,l.default.createElement(m,{className:(i||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},z&&l.default.createElement(m,{title:t,style:(0,d.default)({backgroundColor:z,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},S&&v)}),k.base64&&l.default.createElement(b,{src:k.base64,spreadProps:x,imageVariants:Y,generateSources:D}),k.tracedSVG&&l.default.createElement(b,{src:k.tracedSVG,spreadProps:x,imageVariants:Y,generateSources:h}),this.state.isVisible&&l.default.createElement("picture",null,j(Y),l.default.createElement(C,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:N},k,{imageVariants:Y}))}}))}return null},t}(l.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});w.propTypes={resolutions:S,sizes:L,fixed:c.default.oneOfType([S,c.default.arrayOf(S)]),fluid:c.default.oneOfType([L,c.default.arrayOf(L)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=w;t.default=z},230:function(e,t,a){"use strict";a(231)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},231:function(e,t,a){var i=a(1),r=a(9),n=a(47),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},232:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhLS0gR2VuZXJhdG9yOiBHcmF2aXQuaW8gLS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iaXNvbGF0aW9uOmlzb2xhdGUiIHZpZXdCb3g9IjAgMCA1MyA3MiIgd2lkdGg9IjUzIiBoZWlnaHQ9IjcyIj48ZGVmcz48Y2xpcFBhdGggaWQ9Il9jbGlwUGF0aF9MMWozYUx5OW43Wk5Ha3Y3QW0waWxqdmcySXRGSGZwZSI+PHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjcyIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI19jbGlwUGF0aF9MMWozYUx5OW43Wk5Ha3Y3QW0waWxqdmcySXRGSGZwZSkiPjxnIHN0eWxlPSJpc29sYXRpb246aXNvbGF0ZSIvPjxnIHN0eWxlPSJpc29sYXRpb246aXNvbGF0ZSIvPjxnIHN0eWxlPSJpc29sYXRpb246aXNvbGF0ZSI+PHBhdGggZD0iIE0gMjkuODI4IDYxLjc1OCBMIDI5LjgyOCA2NS4yNTggTCAyMi44MjggNjUuMjU4IEwgMjIuODI4IDYxLjc1OCBMIDIyLjgyOCA0MC44NzggTCAzMC4zNzggMzMuMzI4IEwgMTIuNDM4IDE1LjM4OCBDIDExLjg1MyAxNC44MDMgMTEuODUzIDEzLjg1MyAxMi40MzkgMTMuMjY4IEwgMjMuODU4IDEuODU4IEwgMjUuMjY5IDAuNDQxIEMgMjUuODUzIC0wLjE0NiAyNi44MDMgLTAuMTQ3IDI3LjM4OCAwLjQzOCBMIDMxLjI3OCA0LjMyOCBMIDI4Ljc5OCA2Ljc5OCBMIDIxLjI3OCAxNC4zMjggTCAzNS42NzggMjguNzI4IEMgMzUuNjc4IDI4LjcyOCAzNS42NzggMjguNzI4IDM1LjY3OCAyOC43MjggQyAzNi44OTggMjkuOTQ4IDM3LjU4OCAzMS42MDggMzcuNTg4IDMzLjMyOCBDIDM3LjU4OCAzNS4wNDggMzYuODk4IDM2LjcwOCAzNS42NzggMzcuOTI4IEMgMzUuNjc4IDM3LjkyOCAzNS42NzggMzcuOTI4IDM1LjY3OCAzNy45MjggTCAyOS44MjggNDMuNzc4IEwgMjkuODI4IDYxLjc1OCBaICIgZmlsbD0icmdiKDI1NSwyNTUsMjU1KSIvPjxwYXRoIGQ9IiBNIDQ1Ljg1OCA0Mi44NTggTCA0Ny4yNjkgNDEuNDQxIEMgNDcuODUzIDQwLjg1NCA0OC44MDMgNDAuODUzIDQ5LjM4OCA0MS40MzggTCA1Mi4yMTcgNDQuMjY3IEMgNTIuODAyIDQ0Ljg1MiA1Mi44MDIgNDUuODAyIDUyLjIxNSA0Ni4zODYgTCA1MC43OTggNDcuNzk4IEwgMjcuMzg4IDcxLjIxNyBDIDI2LjgwMyA3MS44MDIgMjUuODUzIDcxLjgwMiAyNS4yNjcgNzEuMjE3IEwgMS44NTggNDcuNzk4IEwgMC40NDEgNDYuMzg2IEMgLTAuMTQ2IDQ1LjgwMiAtMC4xNDcgNDQuODUyIDAuNDM4IDQ0LjI2NyBMIDMuMjY3IDQxLjQzOCBDIDMuODUyIDQwLjg1MyA0LjgwMiA0MC44NTQgNS4zODYgNDEuNDQxIEwgNi43OTggNDIuODU4IEwgMjYuMzI4IDYyLjM3OCBMIDQ1Ljg1OCA0Mi44NTggWiAiIGZpbGw9InJnYigyNTUsMjU1LDI1NSkiLz48cGF0aCBkPSIgTSAyNy43OTggMzguODU4IEwgMzAuMjc4IDQxLjMyOCBMIDI1LjMyOCA0Ni4yNzggTCAyMi44NTggNDMuNzk4IEwgMTYuOTc4IDM3LjkyOCBDIDE2Ljk3OCAzNy45MjggMTYuOTc4IDM3LjkyOCAxNi45NzggMzcuOTI4IEMgMTUuNzU4IDM2LjcwOCAxNS4wNjggMzUuMDQ4IDE1LjA2OCAzMy4zMjggQyAxNS4wNjggMzEuNjA4IDE1Ljc1OCAyOS45NDggMTYuOTc4IDI4LjcyOCBDIDE2Ljk3OCAyOC43MjggMTYuOTc4IDI4LjcyOCAxNi45NzggMjguNzI4IEwgMzEuMzc4IDE0LjMyOCBMIDI0Ljg1OCA3Ljc5OCBMIDIyLjM3OCA1LjMyOCBMIDI3LjMyOCAwLjM3OCBMIDI5Ljc5OCAyLjg1OCBMIDQwLjIxNyAxMy4yNjggQyA0MC44MDIgMTMuODUzIDQwLjgwMiAxNC44MDMgNDAuMjE3IDE1LjM4OCBMIDIyLjI3OCAzMy4zMjggTCAyNy43OTggMzguODU4IFogIiBmaWxsPSJyZ2IoMjU1LDI1NSwyNTUpIi8+PC9nPjwvZz48L3N2Zz4="},233:function(e){e.exports=JSON.parse('{"data":{"backgroundImage":{"childImageSharp":{"sizes":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABaN0zNQzCj//EABoQAAMBAAMAAAAAAAAAAAAAAAECAwAREhP/2gAIAQEAAQUCYvwtKLlPdRfGgOSvmv8A/8QAFhEBAQEAAAAAAAAAAAAAAAAAABES/9oACAEDAQE/AYy//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAECE//aAAgBAgEBPwGbtH//xAAdEAADAAEFAQAAAAAAAAAAAAAAARECEiEiMkFR/9oACAEBAAY/ApiovpbqXtFkodEPgtyLE//EABsQAQEBAAIDAAAAAAAAAAAAAAERACFhcYGh/9oACAEBAAE/IRpA4/CCQsViHrVOU95UMPjGB553/9oADAMBAAIAAwAAABAUD//EABYRAQEBAAAAAAAAAAAAAAAAAAEREP/aAAgBAwEBPxAkmP/EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAgEBPxAFt07/xAAeEAEAAwABBQEAAAAAAAAAAAABABEhMUFRYXGRsf/aAAgBAQABPxDnEGMXO/Qjesy2ofxlRJ3lq8TE9wo2PQBfMHT7NSsqqtWf/9k=","aspectRatio":1.5,"src":"/dark-present/static/795583560e2474ba8e7dacd59d1b9e23/5840c/header.jpg","srcSet":"/dark-present/static/795583560e2474ba8e7dacd59d1b9e23/f0257/header.jpg 310w,\\n/dark-present/static/795583560e2474ba8e7dacd59d1b9e23/82978/header.jpg 620w,\\n/dark-present/static/795583560e2474ba8e7dacd59d1b9e23/5840c/header.jpg 1200w","sizes":"(max-width: 1200px) 100vw, 1200px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-de82703b8943d413cabf.js.map