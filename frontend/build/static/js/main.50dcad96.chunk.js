(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{123:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(15),c=t.n(i),l=t(11),o=t(1),s=t(5),u=t(6),d=t(8),m=t(7),p=t(2),f=t(9),h=t(18),g=t.n(h),v=t(50),E=t.n(v);function x(){var n=Object(o.a)(["\n  z-index: 100;\n  position: relative;\n  margin: auto;\n  height: 10vh;\n"]);return x=function(){return n},n}var b=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(E.a,{name:"ball-scale-ripple-multiple",color:"steelblue"}))}}]),t}(r.a.Component),O=p.a.div(x());function j(){var n=Object(o.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n\n  a {\n    margin: 5px;\n    color: ",";\n\n    :hover {\n      color: ",";\n    }\n  }\n"]);return j=function(){return n},n}var w,y,k,N,S,C=[{link:"https://www.linkedin.com/in/andrewfang21/",icon:"fa fa-linkedin fa-2x"},{link:"https://github.com/Andrewfang21/",icon:"fa fa-github fa-2x"},{link:"https://www.facebook.com/Andrewfanggara21/",icon:"fa fa-facebook fa-2x"},{link:"https://www.instagram.com/andrew_fanggara/",icon:"fa fa-instagram fa-2x"},{link:"mailto:Andrewfanggara21@gmail.com",icon:"fa fa-envelope fa-2x"}],I=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(D,null,Object.values(C).map((function(n){return r.a.createElement("span",{key:n.icon},r.a.createElement("a",{href:n.link,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:n.icon})))})))}}]),t}(r.a.Component),D=p.a.div(j(),"#D6D5EC","#45A9C4"),L=t(4),_=t.n(L),A=t(10);!function(n){n.SET_EXPERIENCES="SET_EXPERIENCES",n.LOADING_EXPERIENCES="LOADING_EXPERIENCES"}(w||(w={})),function(n){n.SET_PROJECTS="SET_PROJECTS",n.LOADING_PROJECTS="LOADING_PROJECTS"}(y||(y={})),function(n){n.SET_ACHIEVEMENTS="SET_ACHIEVEMENTS",n.LOADING_ACHIEVEMENTS="LOADING_ACHIEVEMENTS"}(k||(k={})),function(n){n.SET_SKILLS="SET_SKILLS",n.LOADING_SKILLS="LOADING_SKILLS"}(N||(N={})),function(n){n.SET_PROFILE="SET_PROFILE",n.LOADING_PROFILE="LOADING_PROFILE",n.GET_PROFILE="GET_PROFILE"}(S||(S={}));var P=t(54),T=t.n(P).a.create({baseURL:"https://andrewfang-api.herokuapp.com/"});function R(){return G.apply(this,arguments)}function G(){return(G=Object(A.a)(_.a.mark((function n(){var e;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.get("/experience");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function z(){return M.apply(this,arguments)}function M(){return(M=Object(A.a)(_.a.mark((function n(){var e;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.get("/project");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function X(){return H.apply(this,arguments)}function H(){return(H=Object(A.a)(_.a.mark((function n(){var e;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.get("/achievement");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function F(){return J.apply(this,arguments)}function J(){return(J=Object(A.a)(_.a.mark((function n(){var e;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.get("/skill");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function U(){return V.apply(this,arguments)}function V(){return(V=Object(A.a)(_.a.mark((function n(){var e;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.get("/profile");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function K(){var n=Object(o.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 85%;\n  margin: auto;\n\n  .name {\n    font-weight: bold;\n    font-size: 50px;\n    margin-bottom: 10px;\n    text-align: center;\n  }\n\n  .description {\n    font-size: 20px;\n    margin-bottom: 10px;\n    text-align: center;\n  }\n\n  .cursor {\n    color: ",";\n  }\n"]);return K=function(){return n},n}function B(){var n=Object(o.a)(["\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  color: ",";\n"]);return B=function(){return n},n}var W=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.profile.loaded||this.props.fetchProfile()}},{key:"render",value:function(){var n=this.props.profile,e=n.profile,t=n.loading;return r.a.createElement(Q,{name:"/"},t&&r.a.createElement(b,null),!t&&r.a.createElement(Y,null,r.a.createElement(g.a,{cursorClassName:"cursor",loop:!0},r.a.createElement(g.a.Delay,{ms:1e3}),r.a.createElement("span",{className:"name"},e.name),r.a.createElement(g.a.Delay,{ms:1e3}),r.a.createElement(g.a.Backspace,{count:e.name.length})),r.a.createElement("div",{className:"description"},e.message),r.a.createElement(I,null)))}}]),t}(r.a.Component),q=Object(l.b)((function(n){return{profile:n.profile}}),{fetchProfile:function(){return function(){var n=Object(A.a)(_.a.mark((function n(e){var t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:S.LOADING_PROFILE}),n.next=3,U();case 3:t=n.sent,e((a=t,{type:S.SET_PROFILE,payload:a}));case 5:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()}})(W),Q=Object(p.a)(f.Element)(B(),"#2C3E50","#D6D5EC"),Y=p.a.div(K(),"#D6D5EC");function Z(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n\n  @media screen and (max-width: 900px) {\n    flex-direction: column;\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(o.a)(["\n  .image {\n    position: relative;\n    display: block;\n    margin: 50px 50px 50px 0px;\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n\n    @media screen and (max-width: 900px) {\n      margin-left: auto;\n      margin-right: auto;\n      margin-bottom: 30px;\n      display: block;\n    }\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(o.a)(["\n  width: 100%;\n\n  .title {\n    padding: 50px 0px 20px 0px;\n    font-weight: bold;\n    font-size: 40px;\n\n    @media screen and (max-width: 900px) {\n      text-align: center;\n      padding-top: 0px;\n    }\n  }\n\n  .description {\n    padding-left: 20px;\n    margin-bottom: 30px;\n    text-align: justify;\n    color: ",";\n\n    @media screen and (max-width: 900px) {\n      padding-left: 0px;\n    }\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(o.a)(["\n  width: 85%;\n\n  .loading {\n    margin-top: 10vh;\n    margin-left: 42vw;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(o.a)(["\n  width: 100%;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: ",";\n  color: ",";\n"]);return tn=function(){return n},n}var an=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.profile.loaded&&this.props.getProfile()}},{key:"render",value:function(){var n=this.props.profile,e=n.profile,t=n.loading;return r.a.createElement(cn,{name:"/profile"},r.a.createElement(ln,null,t&&r.a.createElement("div",{className:"loading"},r.a.createElement(b,null)),!t&&r.a.createElement(un,null,r.a.createElement(sn,null,r.a.createElement("img",{className:"image",src:e.imageUrl,alt:e.name})),r.a.createElement(on,null,r.a.createElement("div",{className:"title"},"About Me"),Object.values(e.descriptions).map((function(n){return r.a.createElement("div",{key:n.id,className:"description"},n.content)}))))))}}]),t}(r.a.Component),rn=Object(l.b)((function(n){return{profile:n.profile}}),{getProfile:function(){return{type:S.GET_PROFILE}}})(an),cn=Object(p.a)(f.Element)(tn(),"#2C3E50","#D6D5EC"),ln=p.a.div(en()),on=p.a.div(nn(),"#D6D5EC"),sn=p.a.div($()),un=p.a.div(Z());function dn(){var n=Object(o.a)(["\n  display: flex;\n\n  .time-and-place {\n    display: flex;\n    width: 15%;\n    text-align: left;\n    flex-direction: column;\n\n    @media screen and (max-width: 900px) {\n      width: 100%;\n      flex-direction: row;\n      justify-content: space-between;\n      padding-bottom: 10px;\n\n      .time {\n        text-align: right;\n      }\n    }\n  }\n\n  .role,\n  .institution {\n    font-weight: bold;\n    font-size: 20px;\n    margin-bottom: 5px;\n\n    a {\n      color: ",";\n    }\n\n    @media screen and (max-width: 900px) {\n      margin-top: 10px;\n      text-align: center;\n    }\n  }\n\n  .image {\n    width: 15%;\n\n    img {\n      height: 80px;\n      margin-left: auto;\n      margin-right: auto;\n      display: block;\n    }\n\n    @media screen and (max-width: 900px) {\n      width: 100%;\n      height: 70px;\n\n      img {\n        height: 70px;\n      }\n    }\n  }\n\n  .panel {\n    flex: 1;\n    ul {\n      padding-left: 10px;\n    }\n  }\n\n  .description {\n    margin-bottom: 5px;\n    text-align: justify;\n  }\n\n  .grade {\n    font-size: 15px;\n    font-weight: bold;\n    margin-bottom: 5px;\n    margin-left: 10px;\n  }\n\n  @media screen and (max-width: 900px) {\n    margin: 0;\n    padding: 0;\n    flex-direction: column;\n  }\n"]);return dn=function(){return n},n}function mn(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .header {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    font-size: 40px;\n    font-weight: bold;\n  }\n"]);return mn=function(){return n},n}function pn(){var n=Object(o.a)(["\n  width: 85%;\n\n  .loading {\n    margin-top: 10vh;\n    margin-left: 42vw;\n  }\n"]);return pn=function(){return n},n}function fn(){var n=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: ",";\n  color: ",";\n"]);return fn=function(){return n},n}var hn=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.experiences.loaded||this.props.fetchExperiences()}},{key:"render",value:function(){var n=this.props.experiences,e=n.educations,t=n.works,a=n.loading;return r.a.createElement(vn,{name:"/experiences"},r.a.createElement(En,null,r.a.createElement(xn,null,r.a.createElement("div",{className:"header"},"Educations"),a&&r.a.createElement("div",{className:"loading"},r.a.createElement(b,null)),!a&&r.a.createElement("div",null,Object.values(e).map((function(n){return r.a.createElement(bn,{key:n.id},r.a.createElement("div",{className:"time-and-place"},r.a.createElement("div",{className:"place"},n.place),r.a.createElement("div",{className:"time"},n.time)),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:n.imageUrl,alt:n.institution})),r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"role"},n.role),r.a.createElement("div",{className:"institution"},r.a.createElement("a",{href:n.institutionUrl,rel:"noopener noreferrer",target:"_blank"},n.institution)),r.a.createElement("div",{className:"grade"},n.grade),r.a.createElement("ul",null,Object.values(n.descriptions).map((function(n){return r.a.createElement("li",{key:n.id,className:"description"},n.content)})))))}))),r.a.createElement("div",{className:"header"},"Work and Voluntary Experiences"),a&&r.a.createElement("div",{className:"loading"},r.a.createElement(b,null)),!a&&r.a.createElement("div",null,Object.values(t).map((function(n){return r.a.createElement(bn,{key:n.id},r.a.createElement("div",{className:"time-and-place"},r.a.createElement("div",{className:"place"},n.place),r.a.createElement("div",{className:"time"},n.time)),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:n.imageUrl,alt:n.company})),r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"role"},n.role),r.a.createElement("div",{className:"institution"},r.a.createElement("a",{href:n.companyUrl,rel:"noopener noreferrer",target:"_blank"},n.company)),r.a.createElement("ul",null,Object.values(n.descriptions).map((function(n){return r.a.createElement("li",{key:n.id,className:"description"},n.content)})))))}))))))}}]),t}(r.a.Component),gn=Object(l.b)((function(n){return{experiences:n.experiences}}),{fetchExperiences:function(){return function(){var n=Object(A.a)(_.a.mark((function n(e){var t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:w.LOADING_EXPERIENCES}),n.next=3,R();case 3:t=n.sent,e((a=t,{type:w.SET_EXPERIENCES,payload:a}));case 5:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()}})(hn),vn=Object(p.a)(f.Element)(fn(),"#2C3E50","#D6D5EC"),En=p.a.div(pn()),xn=p.a.div(mn()),bn=p.a.ul(dn(),"#45A9C4");function On(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n\n  .title {\n    font-weight: bold;\n    font-size: 30px;\n    margin: 0.5em 0;\n    align-self: center;\n\n    .github {\n      vertical-align: middle;\n      margin-left: 10px;\n\n      a {\n        color: ",";\n\n        :hover {\n          color: ",";\n        }\n      }\n    }\n  }\n\n  .image {\n    display: flex;\n    justify-content: center;\n\n    img {\n      height: 200px;\n      margin: 0 1em;\n\n      @media screen and (max-width: 900px) {\n        height: 100px;\n      }\n    }\n  }\n\n  .descriptions {\n    display: flex;\n    flex-direction: column;\n    text-align: justify;\n\n    .tech-stack {\n      font-weight: bold;\n      font-size: 1em;\n    }\n\n    @media screen and (max-width: 900px) {\n      padding-left: 10px;\n    }\n\n    @media screen and (min-width: 900px) {\n      align-items: center;\n\n      li {\n        width: 75%;\n        margin: 3px;\n      }\n    }\n  }\n"]);return On=function(){return n},n}function jn(){var n=Object(o.a)(["\n  width: 85%;\n\n  .header {\n    margin: 3vh 0;\n    width: 85%;\n    font-size: 40px;\n    font-weight: bold;\n  }\n\n  .loading {\n    margin-top: 10vh;\n    margin-left: 42vw;\n  }\n"]);return jn=function(){return n},n}function wn(){var n=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: ",";\n  color: ",";\n"]);return wn=function(){return n},n}var yn=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.projects.loaded||this.props.fetchProjects()}},{key:"render",value:function(){var n=this.props.projects,e=n.projects,t=n.loading;return r.a.createElement(Nn,{name:"/projects"},r.a.createElement(Sn,null,r.a.createElement("div",{className:"header"},"Projects"),t&&r.a.createElement("div",{className:"loading"},r.a.createElement(b,null)),!t&&r.a.createElement("div",null,Object.values(e).map((function(n){return r.a.createElement(Cn,{key:n.id},r.a.createElement("div",{className:"title"},n.title,r.a.createElement("span",{className:"github"},r.a.createElement("a",{href:n.link,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github"})))),r.a.createElement("div",{className:"image"},Object.values(n.imageUrls).map((function(n){return r.a.createElement("img",{key:n.id,src:n.url,alt:"{project.title}-1"})}))),r.a.createElement("ul",{className:"descriptions"},Object.values(n.descriptions).map((function(n){return r.a.createElement("li",{key:n.id},n.content)})),r.a.createElement("li",{className:"tech-stack"},r.a.createElement("span",null,"Tech Stacks: ",n.techStack))))})))))}}]),t}(r.a.Component),kn=Object(l.b)((function(n){return{projects:n.projects}}),{fetchProjects:function(){return function(){var n=Object(A.a)(_.a.mark((function n(e){var t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:y.LOADING_PROJECTS}),n.next=3,z();case 3:t=n.sent,e((a=t,{type:y.SET_PROJECTS,payload:a}));case 5:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()}})(yn),Nn=Object(p.a)(f.Element)(wn(),"#2C3E50","#D6D5EC"),Sn=p.a.div(jn()),Cn=p.a.div(On(),"#D6D5EC","#45A9C4");function In(){var n=Object(o.a)(["\n  width: 85%;\n  display: flex;\n  flex-direction: column;\n\n  .header {\n    margin: 30px 0;\n    font-size: 40px;\n    font-weight: bold;\n  }\n\n  .loading {\n    margin-top: 10vh;\n    margin-left: 42vw;\n  }\n\n  .achievement {\n    display: flex;\n    flex-direction: row;\n\n    .detail {\n      width: 100%;\n      flex-direction: column;\n      margin-bottom: 20px;\n      text-align: justify;\n    }\n\n    .organizer {\n      margin-top: 5px;\n      font-weight: bold;\n\n      @media screen and (max-width: 900px) {\n        text-align: center;\n      }\n    }\n\n    .mobile-time {\n      display: none;\n      margin-bottom: 10px;\n    }\n\n    @media screen and (max-width: 900px) {\n      flex-direction: column;\n\n      .descriptions {\n        padding-left: 10px;\n      }\n\n      .description {\n        margin: 5px 0;\n      }\n\n      .mobile-time {\n        display: flex;\n        margin-top: 5px;\n        justify-content: center;\n      }\n    }\n  }\n\n  .image {\n    margin: 0 20px 0 20px;\n    img {\n      width: 150px;\n    }\n\n    @media screen and (max-width: 900px) {\n      margin: auto;\n      margin-bottom: 20px;\n    }\n  }\n\n  .title-and-time {\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    justify-content: space-between;\n\n    .title {\n      font-weight: bold;\n      font-size: 1.5em;\n      text-align: center;\n    }\n\n    @media screen and (max-width: 900px) {\n      justify-content: center;\n      .desktop-time {\n        display: none;\n      }\n    }\n  }\n"]);return In=function(){return n},n}function Dn(){var n=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  background-color: ",";\n  color: ",";\n"]);return Dn=function(){return n},n}var Ln=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.achievements.loaded||this.props.fetchAchievements()}},{key:"render",value:function(){var n=this.props.achievements,e=n.achievements,t=n.loading;return r.a.createElement(An,{name:"/achievements"},r.a.createElement(Pn,null,r.a.createElement("div",{className:"header"},"Achievements"),t&&r.a.createElement("div",{className:"loading"},r.a.createElement(b,null)),!t&&r.a.createElement("div",null,Object.values(e).map((function(n){return r.a.createElement("div",{key:n.id,className:"achievement"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:n.imageUrl,alt:n.time})),r.a.createElement("div",{className:"detail"},r.a.createElement("div",{className:"title-and-time"},r.a.createElement("span",{className:"title"},n.title),r.a.createElement("span",{className:"desktop-time"},n.time)),r.a.createElement("div",{className:"organizer"},n.organizer),r.a.createElement("div",{className:"mobile-time"},n.time),r.a.createElement("ul",{className:"descriptions"},Object.values(n.descriptions).map((function(n){return r.a.createElement("li",{key:n.id,className:"description"},n.content)})))))})))))}}]),t}(r.a.Component),_n=Object(l.b)((function(n){return{achievements:n.achievements}}),{fetchAchievements:function(){return function(){var n=Object(A.a)(_.a.mark((function n(e){var t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:k.LOADING_ACHIEVEMENTS}),n.next=3,X();case 3:t=n.sent,e((a=t,{type:k.SET_ACHIEVEMENTS,payload:a}));case 5:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()}})(Ln),An=Object(p.a)(f.Element)(Dn(),"#2C3E50","#D6D5EC"),Pn=p.a.div(In());function Tn(){var n=Object(o.a)(["\n  margin: 0 30px 5vh 30px;\n  padding: 0;\n\n  li {\n    display: block;\n    position: relative;\n    background-color: #888;\n    color: #fff;\n    margin: 10px 0;\n    transition: width 300ms ease-in-out;\n\n    background-color: ",";\n\n    .collapsed & {\n      width: 0 !important;\n    }\n\n    p {\n      padding: 10px;\n      margin: 0;\n      font-weight: bold;\n    }\n    span {\n      position: absolute;\n      right: 10px;\n      display: inline-block;\n      width: 30px;\n      top: 11px;\n      text-align: right;\n      font-weight: normal;\n      color: #fff;\n      font-size: 11px;\n    }\n  }\n"]);return Tn=function(){return n},n}function Rn(){var n=Object(o.a)(["\n  width: 85%;\n\n  .header {\n    margin: 30px 0;\n    width: 85%;\n    font-size: 40px;\n    font-weight: bold;\n  }\n\n  .loading {\n    margin-top: 10vh;\n    margin-left: 42vw;\n  }\n"]);return Rn=function(){return n},n}function Gn(){var n=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: ",";\n  color: ",";\n"]);return Gn=function(){return n},n}var zn=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var a;return Object(s.a)(this,t),(a=e.call(this,n)).state={collapsed:!0},a}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var n=this;this.props.skills.loaded||this.props.fetchSkills(),setTimeout((function(){n.setState({collapsed:!1})}),1e3)}},{key:"render",value:function(){var n=this.state.collapsed,e=this.props.skills,t=e.skills,a=e.loading;return r.a.createElement(Xn,{name:"/skills"},r.a.createElement(Hn,{className:"container ".concat(n?"collapsed":""," ")},r.a.createElement("div",{className:"header"},"Skills"),a&&r.a.createElement("div",{className:"loading"},r.a.createElement(b,null)),!a&&r.a.createElement(Fn,null,Object.values(t).map((function(n){return r.a.createElement("li",{key:n.name,style:{width:"".concat(n.level,"%")}},r.a.createElement("p",null,n.name),r.a.createElement("span",null,n.level))})))))}}]),t}(r.a.Component),Mn=Object(l.b)((function(n){return{skills:n.skills}}),{fetchSkills:function(){return function(){var n=Object(A.a)(_.a.mark((function n(e){var t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:N.LOADING_SKILLS}),n.next=3,F();case 3:t=n.sent,e((a=t,{type:N.SET_SKILLS,payload:a}));case 5:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()}})(zn),Xn=Object(p.a)(f.Element)(Gn(),"#2C3E50","#D6D5EC"),Hn=p.a.div(Rn()),Fn=p.a.ul(Tn(),"#45A9C4"),Jn=t(23),Un={Home:{to:"/",text:"Home"},Profile:{to:"/profile",text:"Profile"},Experience:{to:"/experiences",text:"Experiences"},Project:{to:"/projects",text:"Projects"},Achievement:{to:"/achievements",text:"Achievements"},Skill:{to:"/skills",text:"Skills"}};function Vn(){var n=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  color: white;\n\n  .link {\n    margin: 0 10px;\n    transform: translateX(-30px);\n    -webkit-transform: translateX(-30px);\n  }\n\n  .link:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"]);return Vn=function(){return n},n}function Kn(){var n=Object(o.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  margin: 0 auto;\n  height: 70px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: bolder;\n  background-color: rgb(55, 56, 59, 0.5);\n  z-index: 1000;\n"]);return Kn=function(){return n},n}function Bn(){var n=Object(o.a)(["\n  @media screen and (max-width: 900px) {\n    display: none;\n  }\n\n  .active {\n    visibility: visible;\n    transition: all 500ms ease-out;\n  }\n  .hidden {\n    visibility: hidden;\n    transition: all 500ms ease-in;\n    transform: translate(0, -100%);\n  }\n"]);return Bn=function(){return n},n}var Wn=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var a;return Object(s.a)(this,t),(a=e.call(this,n)).state={show:!0,scrollPos:0},a.handleScroll=a.handleScroll.bind(Object(Jn.a)(a)),a}return Object(u.a)(t,[{key:"handleScroll",value:function(){var n=this.state.scrollPos;this.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>n})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return r.a.createElement(qn,null,r.a.createElement(Qn,{className:this.state.show?"active":"hidden"},r.a.createElement(Yn,null,Object.values(Un).map((function(n){return r.a.createElement(f.Link,{className:"link",key:n.to,to:n.to,spy:!0,smooth:!0,duration:500},n.text)})))))}}]),t}(r.a.Component),qn=p.a.div(Bn()),Qn=p.a.div(Kn()),Yn=p.a.div(Vn(),"#45A9C4");function Zn(){var n=Object(o.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  margin-block-start: 0;\n\n  @media (max-width: 900px) {\n    flex-flow: column nowrap;\n    background-color: #0d2538;\n    position: fixed;\n    transform: ",";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 200px;\n    padding-top: 4.5rem;\n    transition: transform 0.3s ease-in-out;\n\n    .link {\n      color: ",";\n      padding: 18px 30px;\n      text-align: right;\n      font-weight: bold;\n      font-size: 20px;\n    }\n  }\n"]);return Zn=function(){return n},n}function $n(){var n=Object(o.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n\n  @media (max-width: 900px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return $n=function(){return n},n}function ne(){var n=Object(o.a)(["\n  height: 70px;\n  width: 100%;\n  background-color: rgb(55, 56, 59, 0.5);\n  position: fixed;\n  z-index: 1000;\n\n  @media screen and (min-width: 901px) {\n    display: none;\n  }\n"]);return ne=function(){return n},n}var ee=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(n){var a;return Object(s.a)(this,t),(a=e.call(this,n)).state={open:!1},a}return Object(u.a)(t,[{key:"toggleHamburger",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var n=this;return r.a.createElement(te,null,r.a.createElement(ae,{open:this.state.open,onClick:function(){return n.toggleHamburger()}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(re,{open:this.state.open},Object.values(Un).map((function(e){return r.a.createElement(f.Link,{className:"link",key:e.to,to:e.to,spy:!0,smooth:!0,duration:500,onClick:function(){return n.toggleHamburger()}},e.text)}))))}}]),t}(r.a.Component),te=p.a.div(ne()),ae=p.a.div($n(),"#D6D5EC",(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"translateX(100%)":"translateX(0)"}),(function(n){return n.open?0:1}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),re=p.a.ul(Zn(),(function(n){return n.open?"translateX(0)":"translateX(100%)"}),"#D6D5EC");function ie(){var n=Object(o.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n  font-family: "Expletus Sans";\n']);return ie=function(){return n},n}var ce=function(n){Object(d.a)(t,n);var e=Object(m.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(le,null,r.a.createElement(Wn,null),r.a.createElement(ee,null),r.a.createElement(q,null),r.a.createElement(rn,null),r.a.createElement(gn,null),r.a.createElement(kn,null),r.a.createElement(_n,null),r.a.createElement(Mn,null))}}]),t}(r.a.Component),le=p.a.div(ie()),oe=t(13),se=t(31),ue=(t(55),t(3)),de={educations:[],works:[],loading:!1,loaded:!1},me={projects:[],loading:!1,loaded:!1},pe={achievements:[],loading:!1,loaded:!1},fe={skills:[],loading:!1,loaded:!1},he={profile:{name:"",message:"",email:"",imageUrl:"",descriptions:[]},loading:!1,loaded:!1},ge=Object(oe.c)({profile:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S.SET_PROFILE:return Object(ue.a)(Object(ue.a)({},n),{},{profile:e.payload,loading:!1,loaded:!0});case S.LOADING_PROFILE:return Object(ue.a)(Object(ue.a)({},n),{},{loading:!0});case S.GET_PROFILE:return Object(ue.a)(Object(ue.a)({},n),{},{profile:n.profile});default:return n}},experiences:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w.SET_EXPERIENCES:return Object(ue.a)(Object(ue.a)(Object(ue.a)({},n),e.payload),{},{loading:!1,loaded:!0});case w.LOADING_EXPERIENCES:return Object(ue.a)(Object(ue.a)({},n),{},{loading:!0});default:return n}},projects:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y.SET_PROJECTS:return Object(ue.a)(Object(ue.a)({},n),{},{projects:e.payload,loading:!1,loaded:!0});case y.LOADING_PROJECTS:return Object(ue.a)(Object(ue.a)({},n),{},{loading:!0});default:return n}},achievements:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k.SET_ACHIEVEMENTS:return Object(ue.a)(Object(ue.a)({},n),{},{achievements:e.payload,loading:!1,loaded:!0});case k.LOADING_ACHIEVEMENTS:return Object(ue.a)(Object(ue.a)({},n),{},{loading:!0});default:return n}},skills:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N.SET_SKILLS:return Object(ue.a)(Object(ue.a)({},n),{},{skills:e.payload,loading:!1,loaded:!0});case N.LOADING_SKILLS:return Object(ue.a)(Object(ue.a)({},n),{},{loading:!0});default:return n}}}),ve=Object(oe.d)(ge,Object(oe.a)(se.a));c.a.render(r.a.createElement(l.a,{store:ve},r.a.createElement(ce,null)),document.querySelector("#root"))},56:function(n,e,t){n.exports=t(123)}},[[56,1,2]]]);
//# sourceMappingURL=main.50dcad96.chunk.js.map