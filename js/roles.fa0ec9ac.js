(window.webpackJsonp=window.webpackJsonp||[]).push([["roles"],{e7e7:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return o}));r("7869"),r("1b18"),r("1e1b"),r("43c5"),r("9ee9"),r("5611"),r("08fc");r("9e79"),r("9113");function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},f50e:function(e,t,r){"use strict";r.r(t);var n=r("e7e7"),o=r("4833"),a=(r("74e1"),r("7f0d"),r("5cb1"),r("a573"),r("6a61"),{data:function(){return{breadcrumbs:[{title:"首页",name:"Home"},{title:"权限管理"},{title:"角色列表"}],rolesData:[],roleDialog:!1,allRights:[],defaultProps:{children:"children",label:"authName"},rolesRights:[],roleId:0}},methods:{getRoles:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$apis.getRoles();case 2:r=t.sent,e.rolesData=r;case 4:case"end":return t.stop()}}),t)})))()},handleClose:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$apis.delRights(e);case 2:n=r.sent,console.log(n),t.delRight(e.obj.children,e.rightId),t.$parent.$parent.$parent.$parent.getMenus();case 6:case"end":return r.stop()}}),r)})))()},delRight:function(e,t){for(var r=0;r<e.length;r++)e[r].id===t?e.splice(r,1):e[r].hasOwnProperty("children")&&this.delRight(e[r].children,t)},handleRoleDialog:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,a,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.children,o=e.id,r.next=3,t.$apis.getAllRights();case 3:a=r.sent,t.allRights=a,t.rolesRights=n,t.roleId=o,t.roleDialog=!0,l=[],t.handleRoleRights(t.rolesRights,l),t.$nextTick((function(){t.$refs.tree.setCheckedNodes(l)}));case 11:case"end":return r.stop()}}),r)})))()},handleRoleRights:function(e,t){var r=this;e.map((function(e){e.hasOwnProperty("children")?r.handleRoleRights(e.children,t):t.push(e)}))},handleRights:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$apis.setRights({roleId:e.roleId,rids:[].concat(Object(n.a)(e.$refs.tree.getCheckedKeys()),Object(n.a)(e.$refs.tree.getHalfCheckedKeys())).join(",")});case 2:e.roleDialog=!1,e.getRoles();case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.getRoles()}}),l=r("4ac2"),s=Object(l.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"roles"},[r("AdminBreadcrumb",{attrs:{breadcrumbs:e.breadcrumbs}}),r("el-table",{staticStyle:{width:"100%","margin-top":"15px"},attrs:{border:"",data:e.rolesData}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(n){return r("el-row",{key:n.id},[r("el-col",{attrs:{span:4}},[r("el-tag",{attrs:{type:"success",closable:""},on:{close:function(r){return e.handleClose({roleId:t.row.id,rightId:n.id,obj:t.row})}}},[e._v(e._s(n.authName))]),e._v(" > ")],1),r("el-col",{attrs:{span:20}},e._l(n.children,(function(n){return r("el-row",{key:n.id},[r("el-col",{attrs:{span:8}},[r("el-tag",{attrs:{type:"success",closable:""},on:{close:function(r){return e.handleClose({roleId:t.row.id,rightId:n.id,obj:t.row})}}},[e._v(e._s(n.authName))]),e._v(" > ")],1),r("el-col",{attrs:{span:16}},e._l(n.children,(function(n){return r("el-tag",{key:n.id,attrs:{type:"success",closable:""},on:{close:function(r){return e.handleClose({roleId:t.row.id,rightId:n.id,obj:t.row})}}},[e._v(e._s(n.authName))])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),r("el-table-column",{attrs:{label:"角色描述",prop:"roleDesc"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"success",icon:"el-icon-check",circle:"",size:"small"},on:{click:function(r){return e.handleRoleDialog(t.row)}}})]}}])})],1),r("el-dialog",{attrs:{title:"角色授权",visible:e.roleDialog},on:{"update:visible":function(t){e.roleDialog=t}}},[r("el-tree",{ref:"tree",attrs:{data:e.allRights,"show-checkbox":"","node-key":"id","default-expand-all":!0,props:e.defaultProps}}),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.roleDialog=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.handleRights}},[e._v("确 定")])],1)],1)],1)}),[],!1,null,"5bbc386e",null);t.default=s.exports}}]);