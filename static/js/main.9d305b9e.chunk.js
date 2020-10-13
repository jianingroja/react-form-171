(this["webpackJsonpreact-form-171"]=this["webpackJsonpreact-form-171"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),s=a.n(r),i=(a(14),a(2)),o=a(3),c=a(1),h=a(5),u=a(4),m=a(6),d=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",password:"",confirmPassword:""},n.handleInputChange=n.handleInputChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.checkPass=n.checkPass.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(m.a)({},a,n))}},{key:"checkPass",value:function(e){var t=0;return e.length<6&&t++,e.match(/([a-z])+/)&&t++,e.match(/([0-9])+/)&&t++,e.match(/([A-Z])+/)&&t++,e.match(/[^a-zA-Z0-9]+/)&&t++,t}},{key:"handleSubmit",value:function(e){(e.preventDefault(),this.state.name&&this.state.email&&this.state.password&&this.state.confirmPassword)?null!==localStorage.getItem(this.state.name)?alert("User already exits!"):this.checkPass(this.state.password)<5?(alert("\u5bc6\u7801\u4e0d\u80fd\u5c11\u4e8e 6 \u4f4d\uff0c\u5fc5\u987b\u662f\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7279\u6b8a\u5b57\u7b26\u7684\u7ec4\u5408\uff0c\u5fc5\u987b\u5305\u542b\u5c0f\u5199\u548c\u8005\u5927\u5199\u5b57\u6bcd"),this.setState({password:"",confirmPassword:""})):this.state.password!==this.state.confirmPassword?(alert("Please confirm password!"),this.setState({password:"",confirmPassword:""})):this.props.handleRegister(this.state.name,this.state.password):alert("Please complete information!")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Create An Account"),l.a.createElement("h3",null,"Velkommen!"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Your Name:",l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Your Email:",l.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Your Password:",l.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Confirm Password:",l.a.createElement("input",{type:"password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.handleInputChange})),l.a.createElement("button",null,"Register")))}}]),a}(l.a.Component),p=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={name:"",password:""},n.handleInputChange=n.handleInputChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(m.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.name&&this.state.password?(this.props.handleLogIn(this.state.name,this.state.password),this.setState({name:"",password:""})):alert("Please enter username and password!")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Log In"),l.a.createElement("h3",null,"Become part of our community!"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Username:",l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Password:",l.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChange})),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox"}),"Remember Me"),l.a.createElement("br",null),l.a.createElement("button",null,"Log In")))}}]),a}(l.a.Component),b=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleButton=n.handleButton.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleButton",value:function(e){e.preventDefault(),this.props.handleSwitch()}},{key:"render",value:function(){var e=l.a.createElement("div",null,l.a.createElement("span",null,"Already A Member?"),l.a.createElement("button",{onClick:this.handleButton},"To Log In")),t=l.a.createElement("div",null,l.a.createElement("span",null,"Not Yet A Member?"),l.a.createElement("button",{onClick:this.handleButton},"To Register"));return l.a.createElement("div",null,this.props.isMember?e:t)}}]),a}(l.a.Component),g=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={forRegister:!0},n.handleRegister=n.handleRegister.bind(Object(c.a)(n)),n.handleLogIn=n.handleLogIn.bind(Object(c.a)(n)),n.handleSwitch=n.handleSwitch.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleRegister",value:function(e,t){localStorage.setItem(e,t),alert("You have registered successfully!"),this.setState({forRegister:!1})}},{key:"handleLogIn",value:function(e,t){localStorage.getItem(e)===t?alert("Welcome to the real world!"):alert("Invalid Username or Password.")}},{key:"handleSwitch",value:function(){this.setState({forRegister:!this.state.forRegister})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,this.state.forRegister?l.a.createElement(d,{handleRegister:this.handleRegister}):l.a.createElement(p,{handleLogIn:this.handleLogIn})),l.a.createElement(b,{isMember:this.state.forRegister,handleSwitch:this.handleSwitch}))}}]),a}(l.a.Component);s.a.render(l.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.9d305b9e.chunk.js.map