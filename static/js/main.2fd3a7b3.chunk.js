(this["webpackJsonpmy-cart"]=this["webpackJsonpmy-cart"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/laptop.02ed288f.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),i=a.n(r),l=(a(13),a(1)),s=a(2),o=a(5),u=a(4),m=a(3),p=(a(14),c.a.Component,function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={items:[{name:"item 1",price:{actual:319,display:900},discount:64},{name:"item 2",price:{actual:319,display:900},discount:64},{name:"item 3",price:{actual:319,display:900},discount:64},{name:"item 4",price:{actual:319,display:900},discount:64},{name:"item 5",price:{actual:319,display:900},discount:64},{name:"item 6",price:{actual:319,display:900},discount:64},{name:"item 7",price:{actual:319,display:900},discount:64},{name:"item 8",price:{actual:319,display:900},discount:64},{name:"item 9",price:{actual:319,display:900},discount:64},{name:"item 10",price:{actual:319,display:900},discount:64},{name:"item 11",price:{actual:319,display:900},discount:64},{name:"item 12",price:{actual:319,display:900},discount:64},{name:"item 13",price:{actual:319,display:900},discount:64},{name:"item 14",price:{actual:319,display:900},discount:64}],cart:0},n.updateCart=n.updateCart.bind(Object(o.a)(n)),n.changeFilter=n.changeFilter.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"updateCart",value:function(e){this.setState({cart:this.state.cart+1})}},{key:"changeFilter",value:function(){alert("123")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"flex-container"},c.a.createElement(d,{cartprop:this.state.cart}),c.a.createElement("div",{className:"innerWrap"},c.a.createElement(h,{filterProp:this.changeFilter}),c.a.createElement("div",{className:"RootCart"},c.a.createElement(y,null),this.state.items.map((function(t,a){return c.a.createElement(f,{key:a,componentData:t,updateCart:e.updateCart})})))),c.a.createElement(E,null))}}]),a}(c.a.Component)),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-search"})),c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-shopping-cart"}),"\xa0",c.a.createElement("b",null,this.props.cartprop)))}}]),a}(c.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"filters"},c.a.createElement("h3",null,"Filters"),c.a.createElement("input",{type:"range",min:"1",max:"100",value:"50",className:"slider",id:"myRange"}),c.a.createElement("p",null,"Value: ",c.a.createElement("span",{id:"demo"})),c.a.createElement("button",{className:"btn_a"},"Apply"))}}]),a}(c.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"Cart_content"},c.a.createElement("div",{className:"item_img"},c.a.createElement("img",{src:a(15),alt:"Item"})),c.a.createElement("div",null,this.props.componentData.name),c.a.createElement("div",null,c.a.createElement("b",null,"\u20b9 ",this.props.componentData.price.display),"\xa0",c.a.createElement("strike",null,this.props.componentData.price.actual),"\xa0",c.a.createElement("span",null,this.props.componentData.discount,"% off")),c.a.createElement("button",{className:"btn",onClick:this.props.updateCart},"Add to cart"))}}]),n}(c.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"sorting"},c.a.createElement("h4",null,"Sort By"),c.a.createElement("ul",null,c.a.createElement("li",null,"Price--High Low"),c.a.createElement("li",null,"Price--Low High"),c.a.createElement("li",null,"Discount")))}}]),a}(c.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},"\xa9Copyright")}}]),a}(c.a.Component),b=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.2fd3a7b3.chunk.js.map