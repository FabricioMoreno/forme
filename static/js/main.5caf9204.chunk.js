(this.webpackJsonpforme=this.webpackJsonpforme||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(2),o=a.n(i),r=a(3),c=a(4),l=a(7),u=a(6),d=a(0),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{children:Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h1",{children:"Motivation for me"})})})}}]),a}(s.a.Component),g=a(5),m=[{id:1,message:"The same boiling water that softens the potato hardens the egg. It\u2019s what you\u2019re made of. Not the circumstances."},{id:2,message:"Whatever you are, be a good one."},{id:3,message:"Whatever you are, be a good one."},{id:4,message:"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers."},{id:5,message:"nvest in your dreams. Grind now. Shine later."},{id:6,message:"You can waste your lives drawing lines. Or you can live your life crossing them."},{id:7,message:"We can do anything we want to if we stick to it long enough."},{id:8,message:"Make each day your masterpiece. "},{id:9,message:"H.O.P.E. = Hold On. Pain Ends."},{id:10,message:"Don\u2019t limit your challenges. Challenge your limits."},{id:11,message:"Sometimes when you\u2019re in a dark place you think you\u2019ve been buried but you\u2019ve actually been planted."},{id:12,message:"Never stop doing your best just because someone doesn\u2019t give you credit."},{id:13,message:"f you hear a voice within you say \u2018you cannot paint,\u2019 then by all means paint and that voice will be silenced."}];function b(e){var t=""===e.message?"Not Found":e.message;return Object(d.jsx)("div",{className:"motivationMessage",children:Object(d.jsx)("p",{children:t})})}var j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"getRandomQuotes",value:function(e){var t=e.length;return e[Math.floor(Math.random()*t)]}},{key:"generateNewMotivationMessage",value:function(){return this.getRandomQuotes(m).message}},{key:"handleClick",value:function(){(0,this.props.onChangeMessage)(this.generateNewMotivationMessage())}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"BtnGetMotivation",children:Object(d.jsx)("button",{onClick:this.handleClick,children:"A new Motivation"})})}}]),a}(s.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={message:"Good Day !!"},n.handleChangeMessage=n.handleChangeMessage.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"handleChangeMessage",value:function(e){this.setState({message:e})}},{key:"render",value:function(){var e=this.state.message;return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(b,{message:e}),Object(d.jsx)(j,{onChangeMessage:this.handleChangeMessage})]})}}]),a}(s.a.Component);a(14),a(15),a(16);function y(){return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(h,{}),Object(d.jsx)(v,{})]})}o.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5caf9204.chunk.js.map