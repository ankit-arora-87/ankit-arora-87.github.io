(this.webpackJsonpankitarorapro=this.webpackJsonpankitarorapro||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t(1),i=t.n(n),c=t(7),r=t.n(c),o=(t(15),t(2)),l=t(3),d=t(5),h=t(4),j=(t(16),t(8)),m=t(9);var p=function(){var e=Object(n.useState)("home"),a=Object(m.a)(e,2),t=a[0],i=a[1];return Object(s.jsxs)("nav",{id:"nav-wrap",children:[Object(s.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(s.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(s.jsxs)("ul",{id:"nav",className:"nav",children:[Object(s.jsx)("li",{className:"home"===t?"current":"",children:Object(s.jsx)("a",{className:"smoothscroll",onClick:function(){return i("home")},href:"#home",children:"Home"})}),Object(s.jsx)("li",{className:"about"===t?"current":"",children:Object(s.jsx)("a",{className:"smoothscroll",onClick:function(){return i("about")},href:"#about",children:"About Me"})}),Object(s.jsx)("li",{className:"resume"===t?"current":"",children:Object(s.jsx)("a",{className:"smoothscroll",onClick:function(){return i("resume")},href:"#resume",children:"Experience"})}),Object(s.jsx)("li",{className:"contact"===t?"current":"",children:Object(s.jsx)("a",{className:"smoothscroll",onClick:function(){return i("contact")},href:"mailto:annkit87@gmail.com",children:"Connect With Me"})}),Object(s.jsx)("li",{style:{float:"right"},children:Object(s.jsx)("a",{className:"smoothscroll nav-name",onClick:function(){return i("home")},href:"#home",children:"Ankit Arora"})})]})]})},b=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,i=this.props.data.social.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:e.url,target:"blank",children:Object(s.jsx)("i",{className:e.className})})},e.name)}));return Object(s.jsxs)("header",{id:"home",children:[Object(s.jsx)("div",{className:"row banner",children:Object(s.jsxs)("div",{className:"banner-text",children:[Object(s.jsx)("h1",{className:"responsive-headline",children:e}),Object(s.jsxs)("h3",{children:["I'm a ",n," based ",Object(s.jsx)("span",{children:a}),". ",t,"."]}),Object(s.jsx)("hr",{}),Object(s.jsx)("ul",{className:"social",children:i})]})}),Object(s.jsx)("p",{className:"scrolldown",children:Object(s.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(s.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(n.Component),u=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:e.url,target:"blank",children:Object(s.jsx)("i",{className:e.className})})},e.name)}));return Object(s.jsx)("footer",{children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"twelve columns",children:[Object(s.jsx)("ul",{className:"social-links",children:e}),Object(s.jsx)("ul",{className:"copyright",children:Object(s.jsx)("li",{children:"\xa9 Copyright Ankit Arora 2020. All Rights Reserved. "})})]}),Object(s.jsx)("div",{id:"go-top",children:Object(s.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(s.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(n.Component),O=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.phone,i=this.props.data.email;return Object(s.jsx)("section",{id:"about",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"three columns",children:Object(s.jsx)("img",{className:"profile-pic",src:a,alt:"Tim Baker Profile Pic"})}),Object(s.jsxs)("div",{className:"nine columns main-col",children:[Object(s.jsx)("h2",{children:"About Me"}),Object(s.jsx)("p",{children:t}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"columns contact-details",children:[Object(s.jsx)("h2",{children:"Contact Details"}),Object(s.jsxs)("p",{className:"address",children:[Object(s.jsx)("span",{children:e}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{children:[Object(s.jsx)("i",{className:"fa fa-phone"})," ",n]}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{children:[Object(s.jsx)("i",{className:"fa fa-envelope"})," ",i]})]})]}),Object(s.jsx)("div",{className:"columns download"})]})]})]})})}}]),t}(n.Component),x=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.school}),Object(s.jsxs)("p",{className:"info",children:[e.degree," ",Object(s.jsx)("span",{children:"\u2022"}),Object(s.jsx)("em",{className:"date",children:e.graduated})]}),Object(s.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e,a){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.company}),Object(s.jsxs)("p",{className:"info",children:[e.title,Object(s.jsx)("span",{children:"\u2022"})," ",Object(s.jsx)("em",{className:"date",children:e.years})]}),Object(s.jsx)("p",{children:e.description})]},e.company+"_"+a)})),n=this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{style:{width:e.level},className:a}),Object(s.jsx)("em",{children:e.name})]},e.name)}));return Object(s.jsxs)("section",{id:"resume",children:[Object(s.jsxs)("div",{className:"row education",children:[Object(s.jsx)("div",{className:"three columns header-col",children:Object(s.jsx)("h1",{children:Object(s.jsx)("span",{children:"Education"})})}),Object(s.jsx)("div",{className:"nine columns main-col",children:Object(s.jsx)("div",{className:"row item",children:Object(s.jsx)("div",{className:"twelve columns",children:a})})})]}),Object(s.jsxs)("div",{className:"row work",children:[Object(s.jsx)("div",{className:"three columns header-col",children:Object(s.jsx)("h1",{children:Object(s.jsx)("span",{children:"Work"})})}),Object(s.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(s.jsxs)("div",{className:"row skill",children:[Object(s.jsx)("div",{className:"three columns header-col",children:Object(s.jsx)("h1",{children:Object(s.jsx)("span",{children:"Skills"})})}),Object(s.jsxs)("div",{className:"nine columns main-col",children:[Object(s.jsx)("p",{children:e}),Object(s.jsx)("div",{className:"bars",children:Object(s.jsx)("ul",{className:"skills",children:n})})]})]})]})}}]),t}(n.Component),f=(n.Component,n.Component,function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(e){var s;return Object(o.a)(this,t),(s=a.call(this,e)).state={portfolio:{}},s}return Object(l.a)(t,[{key:"getportfolio",value:function(){this.setState({portfolio:j})}},{key:"componentDidMount",value:function(){this.getportfolio()}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(p,{data:this.state.portfolio.main}),Object(s.jsx)(b,{data:this.state.portfolio.main}),Object(s.jsx)(O,{data:this.state.portfolio.main}),Object(s.jsx)(x,{data:this.state.portfolio.resume}),Object(s.jsx)(u,{data:this.state.portfolio.main})]})}}]),t}(n.Component));r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"main":{"name":"Ankit Arora","occupation":"Senior Software Engineer @ Industrial Electronics Pte Ltd","description":"I am an IT Solutions Architect having about 9 years of industry experience","image":"ankit_arora.jpeg","bio":"I am an IT professional with strong analytical & technical skills. Experience of about 9 yrs in various IT phases such as web development, mobile application development, system architecture designing, team management & project management. Believe in lead by example practice & progressive SWOT analysis for professional growth.","contactmessage":"Get in touch with me to receive further details, get coached or anything else.","email":"annkit87@gmail.com","phone":"+65 8247 2187","address":{"street":"Yishun Ave 11","city":"Singapore","state":"Singapore","zip":"762347"},"website":"http://ankitarora.pro/","resumedownload":"http://ankitarora.pro/","social":[{"name":"facebook","url":"https://www.facebook.com/ankitarora87","className":"fa fa-facebook"},{"name":"linkedin","url":"https://www.linkedin.com/in/ankit-arora-38234729/","className":"fa fa-linkedin"},{"name":"instagram","url":"#","className":"fa fa-instagram"},{"name":"github","url":"https://github.com/ankit-arora-87","className":"fa fa-github"}]},"resume":{"skillmessage":"Below are the skills on which I have hands-on expertise on the scale of 1-10:","education":[{"school":"Rajasthan Technical University, Kota, Rajasthan, India","degree":"Bachelor of Technology","graduated":"June 2010","description":"Graduated"}],"work":[{"company":"Industrial Electronics Pte Ltd, Singapore","title":"Senior Software Engineer","years":"Sep 2019 - Present","description":"Managed multiple websites using domain access records & their content publishing workflow from Drupal 8 portal to multiple Wordpress/ Drupal 8 websites. Design workflow class diagrams for developing reusable & pluggable services to be used in deliverables. Perform code reviews & ensure to maintain quality of work as per industry standards."},{"company":"Ranosys Technologies Pvt Ltd, Jaipur, Rajasthan, India","title":"System Analyst","years":"May 2016 - Sep 2019","description":"Designed system architecture including database design as well as technology project architecture for multiple projects & developed various modules (like HR, ERP, CRM, CMS, Accounts, IT) in the running systems to enhance their productivity."},{"company":"Ranosys Technologies Pvt Ltd, Jaipur, Rajasthan, India","title":"Tech Lead","years":"Mar 2013 - Apr 2016","description":"Managed the team & projects in terms growth of every individual team member as well as the organisation. I actively participated in the project management activities, from the initial lead assessments to the successful launch of the projects. Groomed team with technical as well as professional skill sets."},{"company":"Ranosys Technologies Pvt Ltd, Jaipur, Rajasthan, India","title":"Software Engineer","years":"Jan 2011 - Feb 2013","description":"Learned professional ethics with trending web technologies like HTML, CSS, PHP, MySQL, Ajax, JQuery, etc. Working with team always helped me a lot to make my decisions & correct them if anyone goes wrong. Communicating directly with clients on business requirements always considered as interesting opportunity for me."}],"skills":[{"name":"PHP","level":"90%"},{"name":"Laravel","level":"80%"},{"name":"Drupal 7,8","level":"80%"},{"name":"HTML","level":"80%"},{"name":"CSS","level":"70%"},{"name":"JS","level":"70%"},{"name":"jQuery","level":"70%"},{"name":"React","level":"70%"},{"name":"MySQL","level":"80%"},{"name":"Oracle 11g","level":"70%"},{"name":"MongoDB","level":"70%"},{"name":"AWS","level":"75%"}]},"portfolio":{"projects":[]},"testimonials":{"testimonials":[]}}')}},[[17,1,2]]]);
//# sourceMappingURL=main.f2ed8dec.chunk.js.map