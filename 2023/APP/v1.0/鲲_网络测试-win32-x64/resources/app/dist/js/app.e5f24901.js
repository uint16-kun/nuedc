(function(){"use strict";var e={6936:function(e,t,s){var n=s(9242),o=s(3396);const c={class:"connectWebSocket"},r={id:"connectWebSocket-item"},i={style:{position:"relative",top:"10px"}};function a(e,t,s,n,a,l){const u=(0,o.up)("connectWebSocket"),d=(0,o.up)("get_and_send");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",c,[(0,o._)("div",r,[(0,o._)("div",i,[(0,o.Wm)(u)])])]),(0,o._)("div",null,[(0,o.Wm)(d)])],64)}const l={class:"container mt-3"},u={class:"mb-3 mt-3"},d={for:"comment"},m={for:"comment"};function _(e,t,s,c,r,i){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",l,[(0,o.wy)((0,o._)("h3",null,"发送模式",512),[[n.F8,r.transfer_status]]),(0,o.wy)((0,o._)("h3",null,"接收模式",512),[[n.F8,!r.transfer_status]]),(0,o._)("button",{type:"submit",class:"btn btn-primary",onClick:t[0]||(t[0]=e=>r.transfer_status=!r.transfer_status)},"切换"),(0,o._)("div",u,[(0,o.wy)((0,o._)("label",d,"请输入发送内容：",512),[[n.F8,r.transfer_status]]),(0,o.wy)((0,o._)("label",m,"接收到的内容：",512),[[n.F8,!r.transfer_status]]),(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.send_message=e),class:"form-control",rows:"7"},null,512),[[n.F8,r.transfer_status],[n.nr,r.send_message]]),(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>this.$store.state.receive_message=e),class:"form-control",rows:"7"},null,512),[[n.F8,!r.transfer_status],[n.nr,this.$store.state.receive_message]])]),(0,o.wy)((0,o._)("button",{class:"btn btn-primary",onClick:t[3]||(t[3]=(...e)=>i.socket_send&&i.socket_send(...e))},"提交",512),[[n.F8,r.transfer_status]]),(0,o.wy)((0,o._)("button",{class:"btn btn-primary",onClick:t[4]||(t[4]=(...e)=>i.clear_receive_message&&i.clear_receive_message(...e))},"清除",512),[[n.F8,!r.transfer_status]])])])}var p=s(65),f={data(){return{send_message:"{p:,i:,d:}",receive_message_temp:"",transfer_status:!0}},computed:{...(0,p.rn)(["socket","receive_message"])},methods:{...(0,p.nv)(["updateSocket","updateReceive_message"]),socket_send(){1==this.socket.readyState?(console.log("发送连接建立"),this.socket.send(this.send_message)):console.log("发送连接未建立")},clear_receive_message(){this.receive_message_temp="",this.updateReceive_message(this.receive_message_temp)}}},v=s(89);const g=(0,v.Z)(f,[["render",_]]);var h=g;const k={class:"container"},b={class:"mb-3 mt-3"},y={class:"mb-3 mt-3"},w={class:"mb-3 mt-3"},S={key:0},O=(0,o._)("strong",null,"已连接",-1),C=[O],W={key:1},F=(0,o._)("strong",null,"未连接",-1),j=[F];function x(e,t,s,c,r,i){return(0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("div",b,[(0,o.wy)((0,o._)("input",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>r.ip=e),placeholder:"IP地址"},null,512),[[n.nr,r.ip]])]),(0,o._)("div",y,[(0,o.wy)((0,o._)("input",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>r.port=e),placeholder:"端口号"},null,512),[[n.nr,r.port]])]),(0,o._)("div",w,[r.isConnected?((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",class:"btn btn-danger",onClick:t[2]||(t[2]=(...e)=>i.webclose&&i.webclose(...e))},"断开")):((0,o.wg)(),(0,o.iD)("button",{key:1,type:"button",class:"btn btn-success",onClick:t[3]||(t[3]=(...e)=>i.connectWebSocket&&i.connectWebSocket(...e))},"连接"))]),r.isConnected?((0,o.wg)(),(0,o.iD)("p",S,C)):((0,o.wg)(),(0,o.iD)("p",W,j))])}var D={data(){return{ip:"192.168.31.235",port:"1234",isConnected:!1,socket:null,receive_message_temp:""}},methods:{...(0,p.nv)(["updateSocket","updateReceive_message"]),connectWebSocket(){if(""!=this.ip&&""!=this.port){const e=`ws://${this.ip}:${this.port}`;this.socket=new WebSocket(e),this.updateSocket(this.socket),this.socket.onopen=()=>{this.updateSocket(this.socket),console.log("open OK"),this.isConnected=!0},this.socket.onclose=()=>{this.updateSocket(this.socket),console.log("close OK"),this.isConnected=!1},this.socket.onmessage=e=>{this.receive_message_tem=e.data,this.updateReceive_message(this.receive_message_tem),console.log("onmessage ok"),console.log(this.$store.state.receive_message),this.updateSocket(this.socket)}}},webclose(){this.socket.close(),this.socket=null,console.log("close is ok!"),this.updateSocket(this.socket),this.isConnected=!1}}};const R=(0,v.Z)(D,[["render",x]]);var P=R,T={components:{connectWebSocket:P,get_and_send:h}};const $=(0,v.Z)(T,[["render",a]]);var M=$,U=(s(4405),(0,p.MT)({state:{socket:null,receive_message:""},mutations:{setSocket(e,t){e.socket=t},setReceive_message(e,t){e.receive_message=t}},actions:{updateSocket(e,t){e.commit("setSocket",t)},updateReceive_message({commit:e},t){e("setReceive_message",t)}}}));(0,n.ri)(M).use(U).mount("#app")}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n].call(c.exports,c,c.exports,s),c.exports}s.m=e,function(){var e=[];s.O=function(t,n,o,c){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],c=e[u][2];for(var i=!0,a=0;a<n.length;a++)(!1&c||r>=c)&&Object.keys(s.O).every((function(e){return s.O[e](n[a])}))?n.splice(a--,1):(i=!1,c<r&&(r=c));if(i){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[n,o,c]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,c,r=n[0],i=n[1],a=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(a)var u=a(s)}for(t&&t(n);l<r.length;l++)c=r[l],s.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return s.O(u)},n=self["webpackChunktest"]=self["webpackChunktest"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(6936)}));n=s.O(n)})();
//# sourceMappingURL=app.e5f24901.js.map