(this.webpackJsonpEtsy=this.webpackJsonpEtsy||[]).push([[0],{111:function(e,t){},121:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(48),r=a.n(i),c=a(137),o=a(135),s=a(12),u=a(92),l=a(134),d=a(82),b=a(70),g=Object(u.a)({layout:{headerHeight:80,contentWidth:1140,footerWidth:1400},palette:{brown:Object(s.a)({},{main:"#c77e33",B100:"#f6d510"}),primary:{main:"#183765",footer:"#055da6"},secondary:{main:"#ec2027"},common:{},warning:{light:"rgba(255, 246, 32, .3)",main:"#ffc107",dark:"rgba(255, 246, 32, .7)"},tonalOffset:.2,background:{default:"#fff",gray:"#f1f1f170"},spacing:8},border:{borderColor:"#2e6da4",borderWidth:1},overrides:{},typography:{useNextVariants:!0}},d[b.a]),p=Object(l.a)(g),j=a(66),O=a(45),h=a(18),m={stockList:[],treeViewType:null},S={selectedMenuItem:"screen_result",status:null,resultViewHeight:37,isBeginResize:!1,beginStartPoint:0,beginStartHeight:37,changeData:null,screenResultData:null,stockCount:null},y={customizeColumnHeader:"",customizeColumnData:""},f={expandedItem:1};var R={tempData:""},w={formData:null,insertFormData:null},D=Object(O.c)({screen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.a.GetScreenListData:return console.log(t.payload),Object(s.a)(Object(s.a)({},e),{},{stockList:t.payload});case h.a.SetTreeViewType:return console.log(t.payload),Object(s.a)(Object(s.a)({},e),{},{treeViewType:t.payload});default:return e}},result:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.a.SelectResultMenuItem:return Object(s.a)(Object(s.a)({},e),{},{selectedMenuItem:t.payload});case h.a.SetResultViewStatus:return Object(s.a)(Object(s.a)({},e),{},{status:t.payload});case h.a.UpdateResultViewHeight:return Object(s.a)(Object(s.a)({},e),{},{resultViewHeight:e.beginStartHeight+t.payload});case h.a.BeginResultViewResize:return Object(s.a)(Object(s.a)({},e),{},{isBeginResize:!0});case h.a.FinishResultViewResize:return Object(s.a)(Object(s.a)({},e),{},{isBeginResize:!1,beginStartHeight:e.resultViewHeight});case h.a.StoreBeginValues:return console.log(t.payload.beginStartHeight,t.payload.beginStartPoint),Object(s.a)(Object(s.a)({},e),{},{beginStartHeight:t.payload.beginStartHeight,beginStartPoint:t.payload.beginStartPoint});case h.a.InitialResultViewPoint:return Object(s.a)(Object(s.a)({},e),{},{beginStartHeight:t.payload,resultViewHeight:t.payload});case h.a.SetChangeDataResult:return Object(s.a)(Object(s.a)({},e),{},{changeData:t.payload});case h.a.GetScreenResultData:return Object(s.a)(Object(s.a)({},e),{},{screenResultData:t.payload});case h.a.GetStockCount:return Object(s.a)(Object(s.a)({},e),{},{stockCount:t.payload});default:return e}},accordions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===h.a.ExpandedItem?Object(s.a)(Object(s.a)({},e),{},{expandedItem:t.payload}):e},column:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.a.CustomizeColumnHeader:return console.log(t.payload),Object(s.a)(Object(s.a)({},e),{},{customizeColumnHeader:t.payload});case h.a.CustomizeColumnData:return Object(s.a)(Object(s.a)({},e),{},{customizeColumnData:t.payload});default:return e}},temp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return t.type===h.a.GetTempData?Object(s.a)(Object(s.a)({},e),{},{tempData:t.payload}):e},screenOption:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.a.GetScreenOptionData:return Object(s.a)(Object(s.a)({},e),{},{formData:t.payload});case h.a.InsertScreenOptionData:return Object(s.a)(Object(s.a)({},e),{},{insertFormData:t.payload});default:return e}}}),V=a(84),C=Object(O.e)(D,{},Object(O.a)(V.a)),v=a(68),z=a(9),H=a(16),I=Object(n.lazy)((function(){return Promise.all([a.e(2),a.e(4)]).then(a.bind(null,404))})),x=function(){return Object(H.jsx)(v.a,{children:Object(H.jsx)(j.a,{store:C,children:Object(H.jsxs)(c.a,{theme:p,children:[Object(H.jsx)(o.a,{}),Object(H.jsx)(n.Suspense,{fallback:Object(H.jsx)(n.Fragment,{}),children:Object(H.jsx)(z.e,{children:Object(H.jsx)(z.c,{path:"*",element:Object(H.jsx)(I,{})})})})]})})})};a(94);r.a.render(Object(H.jsx)(x,{}),document.getElementById("root"))},18:function(e,t,a){"use strict";t.a={AddNewStock:"AddNewStock",SelectResultMenuItem:"SelectResultMenuItem",SetResultViewStatus:"SetResultViewStatus",ExpandedItem:"ExpandedItem",InitialResultViewPoint:"InitialResultViewPoint",UpdateResultViewHeight:"UpdateResultViewHeight",BeginResultViewResize:"BeginResultViewResize",FinishResultViewResize:"FinishResultViewResize",StoreBeginValues:"StoreBeginValues",CustomizeColumnHeader:"CustomizeColumnHeader",CustomizeColumnData:"CustomizeColumnData",GetScreenListData:"GetScreenListData",SetTreeViewType:"SetTreeViewType",GetScreenOptionData:"GetScreenOptionData",InsertScreenOptionData:"InsertScreenOptionData",SetChangeDataResult:"SetChangeDataResult",GetScreenResultData:"GetScreenResultData",GetStockCount:"GetStockCount"}},70:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n="EN",i="http://164.92.114.205:8080/api/"},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(91);var n=function(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var i=a[n];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null},i=function(){return!!n("access_token")}}},[[121,1,3]]]);
//# sourceMappingURL=main.bf16963f.chunk.js.map