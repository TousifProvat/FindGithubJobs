(this["webpackJsonpgithub-jobs-react"]=this["webpackJsonpgithub-jobs-react"]||[]).push([[0],{167:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),r=a(20),s=a.n(r),o=a(27),i=a(9),j=a(16),l=a(17),b=a.n(l),u="make-request",d="get-data",h="error",O="update-has-next-page",x="https://jobs.github.com/positions.json";function m(e,t){switch(t.type){case u:return{loading:!0,jobs:[]};case d:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,jobs:t.payload.jobs});case h:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,error:t.payload.error,jobs:[]});case O:return Object(i.a)(Object(i.a)({},e),{},{hasNextPage:t.payload.hasNextPage});default:return e}}var p=a(171),g=a(174),f=a(169),y=a(170),v=a(172),k=a(39),N=a.n(k);function C(e){var t=e.job,a=Object(n.useState)(!1),r=Object(j.a)(a,2),s=r[0],o=r[1];return Object(c.jsx)(g.a,{className:"mb-3",children:Object(c.jsxs)(g.a.Body,{style:{position:"relative"},children:[Object(c.jsxs)("div",{className:"d-felx  justify-content-between",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)(g.a.Title,{children:[t.title," -"," ",Object(c.jsx)("span",{className:"text-muted font-weight-light",children:t.company})]}),Object(c.jsx)(g.a.Subtitle,{className:"text-muted mb-2",children:new Date(t.created_at).toLocaleDateString()}),Object(c.jsx)(f.a,{variant:"secondary",className:"mr-2",children:t.type}),Object(c.jsx)(f.a,{variant:"secondary",children:t.location}),Object(c.jsx)("div",{className:"mt-2",style:{wordBreak:"break-all"},children:Object(c.jsx)(N.a,{source:t.how_to_apply})})]}),Object(c.jsx)("img",{className:"d-none d-md-block",height:"50",alt:t.company,src:t.company_logo,style:{position:"absolute",right:"9px",top:"15px"}})]}),Object(c.jsx)(g.a.Text,{children:Object(c.jsx)(y.a,{onClick:function(){return o((function(e){return!e}))},variant:"primary",children:s?" Hide Details ":" View Details"})}),Object(c.jsx)(v.a,{in:s,children:Object(c.jsx)("div",{className:"mt-4",children:Object(c.jsx)(N.a,{source:t.description})})})]})})}var w=a(175);function P(e){var t=e.page,a=e.setPage,n=e.hasNextPage;function r(e){a((function(t){return t+e}))}return Object(c.jsxs)(w.a,{children:[1!==t&&Object(c.jsx)(w.a.Prev,{onClick:function(){return r(-1)}}),1!==t&&Object(c.jsx)(w.a.Item,{onClick:function(){return a(1)},children:" 1 "}),t>2&&Object(c.jsx)(w.a.Ellipsis,{}),t>2&&Object(c.jsx)(w.a.Item,{onClick:function(){return r(-1)},children:t-1}),Object(c.jsx)(w.a.Item,{active:!0,children:t}),n&&Object(c.jsx)(w.a.Item,{onClick:function(){return a(1)},children:t+1}),n&&Object(c.jsx)(w.a.Next,{onClick:function(){return r(1)}})]})}var T=a(173),_=a(65);function D(e){var t=e.params,a=e.onParamChange;return Object(c.jsx)(T.a,{className:"mb-4",children:Object(c.jsxs)(T.a.Row,{className:"align-items-end",children:[Object(c.jsxs)(T.a.Group,{as:_.a,children:[Object(c.jsx)(T.a.Label,{children:"Description"}),Object(c.jsx)(T.a.Control,{onChange:a,value:t.description,name:"description",type:"text"})]}),Object(c.jsxs)(T.a.Group,{as:_.a,children:[Object(c.jsx)(T.a.Label,{children:"Location"}),Object(c.jsx)(T.a.Control,{onChange:a,value:t.location,name:"location",type:"text"})]}),Object(c.jsx)(T.a.Group,{as:_.a,xs:"auto",className:"ml-2",children:Object(c.jsx)(T.a.Check,{onChange:a,value:t.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox",className:"mb-2"})})]})})}var I=function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(1),l=Object(j.a)(s,2),g=l[0],f=l[1],y=function(e,t){var a=Object(n.useReducer)(m,{jobs:[],loading:!0}),c=Object(j.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var a=b.a.CancelToken.source();s({type:u}),b.a.get(x,{cancelToken:a.token,params:Object(i.a)({markdown:!0,page:t},e)}).then((function(e){s({type:d,payload:{jobs:e.data}})})).catch((function(e){b.a.isCancel(e)||s({type:h,payload:{error:e}})}));var c=b.a.CancelToken.source();return b.a.get(x,{cancelToken:c.token,params:Object(i.a)({markdown:!0,page:t+1},e)}).then((function(e){s({type:O,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){b.a.isCancel(e)||s({type:h,payload:{error:e}})})),function(){a.cancel(),c.cancel()}}),[e,t]),r}(a,g),v=y.jobs,k=y.loading,N=y.error,w=y.hasNextPage;return Object(c.jsxs)(p.a,{className:"my-4",children:[Object(c.jsx)("h1",{className:"mb-4",children:"Github Jobs"}),Object(c.jsx)(D,{params:a,onParamChange:function(e){var t=e.target.name,a=e.target.value;f(1),r((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},t,a))}))}}),Object(c.jsx)(P,{page:g,setPage:f,hasNextPage:w}),k&&Object(c.jsx)("h1",{children:"Loading..."}),N&&Object(c.jsx)("h1",{children:"Error. Try Refreshing..."}),v.map((function(e){return Object(c.jsx)(C,{job:e},e.id)}))]})};s.a.render(Object(c.jsx)(I,{}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.148a08f6.chunk.js.map