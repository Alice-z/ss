webpackJsonp([3],{JCyz:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("文章管理页面 ")]),t._v(" "),t._l(t.list,function(e,i){return r("div",{staticClass:"row"},[r("span",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),r("button",{staticClass:"btn",on:{click:function(r){t.remove(e._id,i)}}},[t._v("删除")])])})],2)},o=[],n={render:i,staticRenderFns:o};e.a=n},ORbM:function(t,e,r){var i=r("P4r/");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("8bSs")("c7a490ba",i,!0)},"P4r/":function(t,e,r){e=t.exports=r("BkJT")(!1),e.push([t.i,"span[data-v-114619bf]{color:#999;font-size:1.5rem}h1[data-v-114619bf]{margin-bottom:2rem}button[data-v-114619bf]{float:right;position:relative;vertical-align:middle;top:-.3rem}.row[data-v-114619bf]{margin-bottom:2rem;border:1px solid #d1dbe5;border-radius:4px;background-color:#fff;overflow:hidden;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);height:2rem;line-height:2rem;padding:1rem;width:50%}",""])},ShNJ:function(t,e,r){"use strict";var i=r("py6b"),o=r.n(i);e.a={data:function(){return{list:o.a}},methods:{remove:function(t,e){this.fetch("/blog/remove",{_id:t}),this.list.splice(e,1)}}}},py6b:function(t,e){t.exports=[{_id:"59fef7fdce847c730690f9ac",title:"1",info:"<p>1</p>",sort:"1",time:"1509870031915",__v:0}]},v0qq:function(t,e,r){"use strict";function i(t){r("ORbM")}Object.defineProperty(e,"__esModule",{value:!0});var o=r("ShNJ"),n=r("JCyz"),a=r("46Yf"),s=i,c=a(o.a,n.a,!1,s,"data-v-114619bf",null);e.default=c.exports}});