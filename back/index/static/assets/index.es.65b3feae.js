import{d as v,e as a,v as g,j as b,k as x,S as L,f as p,F as B,i as H,D as w,y as E,C as A,x as j,H as M}from"./index.17c08fe6.js";(function(){try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".vue-notification-group{display:block;position:fixed;z-index:5000}.vue-notification-wrapper{display:block;overflow:hidden;width:100%;margin:0;padding:0}.notification-title{font-weight:600}.vue-notification-template{display:block;box-sizing:border-box;background:white;text-align:left}.vue-notification{display:block;box-sizing:border-box;text-align:left;font-size:12px;padding:10px;margin:0 5px 5px;color:#fff;background:#44A4FC;border-left:5px solid #187FE7}.vue-notification.warn{background:#ffb648;border-left-color:#f48a06}.vue-notification.error{background:#E54D42;border-left-color:#b82e24}.vue-notification.success{background:#68CD86;border-left-color:#42a85f}.vn-fade-enter-active,.vn-fade-leave-active,.vn-fade-move{transition:all .5s}.vn-fade-enter-from,.vn-fade-leave-to{opacity:0}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();var V=Object.defineProperty,z=(e,t,i)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d=(e,t,i)=>(z(e,typeof t!="symbol"?t+"":t,i),i);function R(e){return{all:e=e||new Map,on:function(t,i){var n=e.get(t);n?n.push(i):e.set(t,[i])},off:function(t,i){var n=e.get(t);n&&(i?n.splice(n.indexOf(i)>>>0,1):e.set(t,[]))},emit:function(t,i){var n=e.get(t);n&&n.slice().map(function(o){o(i)}),(n=e.get("*"))&&n.slice().map(function(o){o(t,i)})}}}const m=R(),O=new Map,C={x:["left","center","right"],y:["top","bottom"]},F=(e=>()=>e++)(0),W=e=>typeof e!="string"?[]:e.split(/\s+/gi).filter(t=>t),_=e=>{typeof e=="string"&&(e=W(e));let t=null,i=null;return e.forEach(n=>{C.y.indexOf(n)!==-1&&(i=n),C.x.indexOf(n)!==-1&&(t=n)}),{x:t,y:i}};class Y{constructor(t,i,n){d(this,"start"),d(this,"remaining"),d(this,"notifyItem"),d(this,"callback"),this.remaining=i,this.callback=t,this.notifyItem=n,this.resume()}pause(){clearTimeout(this.notifyItem.timer),this.remaining-=Date.now()-this.start}resume(){this.start=Date.now(),clearTimeout(this.notifyItem.timer),this.notifyItem.timer=setTimeout(this.callback,this.remaining)}}const h={position:["top","right"],cssAnimation:"vn-fade",velocityAnimation:{enter:e=>({height:[e.clientHeight,0],opacity:[1,0]}),leave:{height:0,opacity:[0,1]}}},G=v({name:"velocity-group",emits:["after-leave","leave","enter"],methods:{enter(e,t){this.$emit("enter",e,t)},leave(e,t){this.$emit("leave",e,t)},afterLeave(){this.$emit("after-leave")}}}),T=(e,t)=>{const i=e.__vccOpts||e;for(const[n,o]of t)i[n]=o;return i};function P(e,t,i,n,o,c){return a(),g(L,{tag:"span",css:!1,onEnter:e.enter,onLeave:e.leave,onAfterLeave:e.afterLeave},{default:b(()=>[x(e.$slots,"default")]),_:3},8,["onEnter","onLeave","onAfterLeave"])}const q=T(G,[["render",P]]),J=v({name:"css-group",inheritAttrs:!1,props:{name:{type:String,required:!0}}});function K(e,t,i,n,o,c){return a(),g(L,{tag:"span",name:e.name},{default:b(()=>[x(e.$slots,"default")]),_:3},8,["name"])}const Q=T(J,[["render",K]]),y="[-+]?[0-9]*.?[0-9]+",D=[{name:"px",regexp:new RegExp(`^${y}px$`)},{name:"%",regexp:new RegExp(`^${y}%$`)},{name:"px",regexp:new RegExp(`^${y}$`)}],U=e=>{if(e==="auto")return{type:e,value:0};for(let t=0;t<D.length;t++){const i=D[t];if(i.regexp.test(e))return{type:i.name,value:parseFloat(e)}}return{type:"",value:e}},X=e=>{switch(typeof e){case"number":return{type:"px",value:e};case"string":return U(e);default:return{type:"",value:e}}},f={IDLE:0,DESTROYED:2},Z=v({name:"notifications",components:{VelocityGroup:q,CssGroup:Q},props:{group:{type:String,default:""},width:{type:[Number,String],default:300},reverse:{type:Boolean,default:!1},position:{type:[String,Array],default:h.position},classes:{type:String,default:"vue-notification"},animationType:{type:String,default:"css"},animation:{type:Object,default:h.velocityAnimation},animationName:{type:String,default:h.cssAnimation},speed:{type:Number,default:300},cooldown:{type:Number,default:0},duration:{type:Number,default:3e3},delay:{type:Number,default:0},max:{type:Number,default:1/0},ignoreDuplicates:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1}},emits:["click","destroy"],data(){return{list:[],velocity:O.get("velocity"),timerControl:null}},computed:{actualWidth(){return X(this.width)},isVA(){return this.animationType==="velocity"},componentName(){return this.isVA?"velocity-group":"css-group"},styles(){const{x:e,y:t}=_(this.position),i=this.actualWidth.value,n=this.actualWidth.type,o={width:i+n};return t&&(o[t]="0px"),e&&(e==="center"?o.left=`calc(50% - ${+i/2}${n})`:o[e]="0px"),o},active(){return this.list.filter(e=>e.state!==f.DESTROYED)},botToTop(){return this.styles.hasOwnProperty("bottom")}},mounted(){m.on("add",this.addItem),m.on("close",this.closeItem)},methods:{destroyIfNecessary(e){this.$emit("click",e),this.closeOnClick&&this.destroy(e)},pauseTimeout(){var e;this.pauseOnHover&&((e=this.timerControl)==null||e.pause())},resumeTimeout(){var e;this.pauseOnHover&&((e=this.timerControl)==null||e.resume())},addItem(e={}){if(e.group||(e.group=""),e.data||(e.data={}),this.group!==e.group)return;if(e.clean||e.clear){this.destroyAll();return}const t=typeof e.duration=="number"?e.duration:this.duration,i=typeof e.speed=="number"?e.speed:this.speed,n=typeof e.ignoreDuplicates=="boolean"?e.ignoreDuplicates:this.ignoreDuplicates,{title:o,text:c,type:s,data:r,id:N}=e,l={id:N||F(),title:o,text:c,type:s,state:f.IDLE,speed:i,length:t+2*i,data:r};t>=0&&(this.timerControl=new Y(()=>this.destroy(l),l.length,l));const S=this.reverse?!this.botToTop:this.botToTop;let u=-1;const I=this.active.some(k=>k.title===e.title&&k.text===e.text);(!n||!I)&&(S?(this.list.push(l),this.active.length>this.max&&(u=0)):(this.list.unshift(l),this.active.length>this.max&&(u=this.active.length-1)),u!==-1&&this.destroy(this.active[u]))},closeItem(e){this.destroyById(e)},notifyClass(e){var t;return["vue-notification-template",this.classes,(t=e.type)!=null?t:""]},notifyWrapperStyle(e){return this.isVA?void 0:{transition:`all ${e.speed}ms`}},destroy(e){clearTimeout(e.timer),e.state=f.DESTROYED,this.clean(),this.$emit("destroy",e)},destroyById(e){const t=this.list.find(i=>i.id===e);t&&this.destroy(t)},destroyAll(){this.active.forEach(this.destroy)},getAnimation(e,t){var i;const n=(i=this.animation)==null?void 0:i[e];return typeof n=="function"?n.call(this,t):n},enter(e,t){if(!this.isVA)return;const i=this.getAnimation("enter",e);this.velocity(e,i,{duration:this.speed,complete:t})},leave(e,t){if(!this.isVA)return;const i=this.getAnimation("leave",e);this.velocity(e,i,{duration:this.speed,complete:t})},clean(){this.list=this.list.filter(e=>e.state!==f.DESTROYED)}}}),ee=["data-id"],te=["onClick"],ie=["innerHTML"],ne=["innerHTML"];function oe(e,t,i,n,o,c){return a(),p("div",{class:"vue-notification-group",style:w(e.styles)},[(a(),g(M(e.componentName),{name:e.animationName,onEnter:e.enter,onLeave:e.leave,onAfterLeave:e.clean},{default:b(()=>[(a(!0),p(B,null,H(e.active,s=>(a(),p("div",{key:s.id,class:"vue-notification-wrapper",style:w(e.notifyWrapperStyle(s)),"data-id":s.id,onMouseenter:t[0]||(t[0]=(...r)=>e.pauseTimeout&&e.pauseTimeout(...r)),onMouseleave:t[1]||(t[1]=(...r)=>e.resumeTimeout&&e.resumeTimeout(...r))},[x(e.$slots,"body",{class:E([e.classes,s.type]),item:s,close:()=>e.destroy(s)},()=>[A("div",{class:E(e.notifyClass(s)),onClick:r=>e.destroyIfNecessary(s)},[s.title?(a(),p("div",{key:0,class:"notification-title",innerHTML:s.title},null,8,ie)):j("",!0),A("div",{class:"notification-content",innerHTML:s.text},null,8,ne)],10,te)])],44,ee))),128))]),_:3},40,["name","onEnter","onLeave","onAfterLeave"]))],4)}const se=T(Z,[["render",oe]]),$=e=>{typeof e=="string"&&(e={title:"",text:e}),typeof e=="object"&&m.emit("add",e)};$.close=e=>{m.emit("close",e)};function ae(e,t={}){Object.entries(t).forEach(n=>O.set(...n));const i=t.name||"notify";e.config.globalProperties["$"+i]=$,e.component(t.componentName||"Notifications",se)}const le={install:ae};export{$ as A,le as p};