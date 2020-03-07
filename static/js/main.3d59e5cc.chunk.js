(this["webpackJsonpclass-todo"]=this["webpackJsonpclass-todo"]||[]).push([[0],{23:function(t,e,n){t.exports=n(40)},30:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),i=n(7),s=n.n(i),c=(n(28),n(29),n(9)),l=n(10),r=n(12),m=n(13),d=n(15),u=n(14),b=n(16),p=(n(30),n(46)),f=n(42),h=n(43),v=n(44),g=n(45),C=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).deleteButtonClick=function(){n.props.onSuccess()},n.cancelButtonClick=function(){n.props.onCancel()},n}return Object(b.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props,e=t.name,n=t.onCancel;return o.a.createElement("div",null,o.a.createElement(p.a,{isOpen:Boolean(e),toggle:n},o.a.createElement(f.a,null,"Delete confirmation"),o.a.createElement(h.a,null,"The ",o.a.createElement("strong",null,e)," task will be deleted"),o.a.createElement(v.a,null,o.a.createElement(g.a,{color:"danger",onClick:this.deleteButtonClick},"Delete")," ",o.a.createElement(g.a,{color:"secondary",onClick:this.cancelButtonClick},"Cancel"))))}}]),e}(a.Component),D=function(t){var e=t.item,n=t.todoListItemUp;return o.a.createElement("div",{className:"btn-group-vertical"},o.a.createElement("button",{onClick:function(){n(e)},disabled:e.isDisabledUp,type:"button",className:"btn btn-primary btn-sm mb-1 align-content-center"},"Up"),o.a.createElement("button",{disabled:e.isDisabledDown,type:"button",className:"btn  btn-dark btn-sm mb-1 align-content-center align"},"Down"))},E=function(t){var e=t.item,n=t.remove,a=t.todoListItemUp;return o.a.createElement("li",{key:e.id,className:"list-group-item"},o.a.createElement(D,{item:e,todoListItemUp:a}),e.name,o.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm",onClick:function(){n(e)}},"Delete"))},w=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={list:[{id:1,name:"First todo",isDisabledUp:!0,isDisabledDown:!1},{id:2,name:"Second todo",isDisabledUp:!1,isDisabledDown:!1},{id:3,name:"Third todo",isDisabledUp:!1,isDisabledDown:!0}],todo:" ",confirmCounter:{}},n.addTodo=function(){console.log("state=",n.state),n.setState((function(t){return{list:[].concat(Object(l.a)(t.list.slice(0,t.list.length-1)),[Object(c.a)({},t.list[t.list.length-1],{isDisabledDown:!1}),{id:Math.floor(1e3*Math.random()),name:n.state.todo,isDisabledUp:!1,isDisabledDown:!0}]),todo:" "}}))},n.inputTodoChange=function(t){return n.setState({todo:t.target.value})},n.confirmRemove=function(t){n.setState({confirmCounter:t})},n.removeConfirmedListItem=function(){var t=n.state.list.filter((function(t){return t.id!==n.state.confirmCounter.id}));n.setState({list:t,confirmCounter:{}})},n.confirmRemoveCancel=function(){n.setState({confirmCounter:{}})},n.todoListItemUp=function(t){var e,a=n.state.list.findIndex((function(e){return e.id===t.id})),o=n.state.list.length;return console.log("index= ",a),e=1===a?[Object(c.a)({},n.state.list[1],{isDisabledUp:!0}),Object(c.a)({},n.state.list[0],{isDisabledUp:!1})].concat(Object(l.a)(n.state.list.slice(2))):a===o-1?[].concat(Object(l.a)(n.state.list.slice(0,a-1)),[Object(c.a)({},n.state.list[o-1],{isDisabledDown:!1}),Object(c.a)({},n.state.list[o-2],{isDisabledDown:!0})]):[].concat(Object(l.a)(n.state.list.slice(0,a-1)),[n.state.list[a],n.state.list[a-1]],Object(l.a)(n.state.list.slice(a+1))),n.setState({list:e})},n}return Object(b.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this;return console.log("Render"),o.a.createElement("div",null,o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row align-items-center"},o.a.createElement("input",{className:"col- border-info",type:"text",value:this.state.todo,onChange:this.inputTodoChange,placeholder:"Todo name"}),o.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:this.addTodo}," Add todo"))),o.a.createElement("ul",{className:"list-group "},this.state.list.map((function(e){return o.a.createElement(E,{key:e.id,item:e,remove:t.confirmRemove,todoListItemUp:t.todoListItemUp})}))),o.a.createElement(C,{name:this.state.confirmCounter.name,onSuccess:this.removeConfirmedListItem,onCancel:this.confirmRemoveCancel}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.3d59e5cc.chunk.js.map