(this["webpackJsonpreact-test-frontend"]=this["webpackJsonpreact-test-frontend"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={modal:"Notification_modal__1I6TU","modal-content":"Notification_modal-content__2a_Pe",close:"Notification_close__39hvN"}},,,,function(e,t,n){e.exports={error:"QuestionItem_error__3bulw",question:"QuestionItem_question__38NQz"}},function(e,t,n){e.exports={card:"Card_card__1m44e",survey:"Card_survey__3zBFw","modal-content":"Card_modal-content__3XEku"}},function(e,t,n){e.exports={survey:"AvailableQuestions_survey__VIXK6"}},function(e,t,n){e.exports={button:"SubmitButton_button__3fSV5",icon:"SubmitButton_icon__3eIGK",badge:"SubmitButton_badge__24xlR",bump:"SubmitButton_bump__yLLQr"}},,,,,,,function(e,t,n){e.exports={answer:"QuestionItemForm_answer__2wIw4"}},function(e,t,n){},function(e,t,n){e.exports={modal:"Submit_modal__UWq3o",close:"Submit_close__1HIv7"}},function(e,t,n){e.exports={answer:"AnswerItem_answer__2KqwP"}},,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var s=n(17),c=n.n(s),a=n(2),r=n(4),i=Object(r.b)({name:"answers",initialState:{answers:[],numberOfQuestions:0},reducers:{addEmptyAnswer:function(e,t){e.answers.push({questionId:t.payload.questionId,value:t.payload.value}),e.numberOfQuestions++},addAnswer:function(e,t){e.answers[t.payload.questionNumber-1].value=t.payload.value}}}),o=(i.actions,i),u=Object(r.b)({name:"ui",initialState:{answersIsVisible:!1,notification:{show:!1,title:"",message:""}},reducers:{toggle:function(e){e.answersIsVisible=!e.answersIsVisible},showNotification:function(e,t){e.notification={title:t.payload.title,message:t.payload.message,show:t.payload.show}}}}),l=u.actions,d=u,j=Object(r.a)({reducer:{ui:d.reducer,answers:o.reducer}}),b=(n(37),n(1)),m=n(15),O=n(20),f=n(3),h=n(11),x=n.n(h),p=n(21),w=n.n(p),_=n(0),v=function(e){var t=Object(a.b)();return Object(_.jsxs)("ul",{className:w.a.answer,onChange:function(n){t(o.actions.addAnswer({questionNumber:+e.id.charAt(e.id.length-1),value:+n.target.value})),console.log(j.getState().answers.answers)},children:[Object(_.jsxs)("li",{children:[Object(_.jsx)("input",{type:"radio",name:e.id,value:"1"}),Object(_.jsx)("label",{children:"completely untrue "})]}),Object(_.jsx)("li",{children:Object(_.jsx)("input",{type:"radio",name:e.id,value:"2"})}),Object(_.jsx)("li",{children:Object(_.jsx)("input",{type:"radio",name:e.id,value:"3"})}),Object(_.jsx)("li",{children:Object(_.jsx)("input",{type:"radio",name:e.id,value:"4"})}),Object(_.jsx)("li",{children:Object(_.jsx)("input",{type:"radio",name:e.id,value:"5"})}),Object(_.jsxs)("li",{children:[Object(_.jsx)("input",{type:"radio",name:e.id,value:"6"}),Object(_.jsx)("label",{children:"completely true"})]})]})},g=function(e){var t=Object(a.c)((function(e){return e.answers.answers})),n="".concat(0===t[+e.id.charAt(e.id.length-1)-1].value&&e.submitted&&x.a.error," ").concat(e.id);return Object(_.jsxs)("div",{className:n,children:[Object(_.jsx)("p",{className:x.a.question,children:e.text}),Object(_.jsx)(v,{id:e.id})]})},y=n(12),N=n.n(y),I=function(e){console.log(e.class);var t="".concat(N.a.card," ").concat(e.class?N.a[e.class.toString()]:"");return Object(_.jsx)("div",{className:t,children:e.children})},S=n(13),q=n.n(S),k=n(14),E=n.n(k),Q=function(e){var t=Object(a.c)((function(e){return e.answers.numberOfQuestions})),n=Object(a.c)((function(e){return e.answers.answers})),s=0;return n.forEach((function(e){0!==e.value&&s++})),Object(_.jsxs)("button",{className:E.a.button,onClick:e.onClick,children:[Object(_.jsx)("span",{children:"Submit"}),Object(_.jsx)("span",{className:E.a.badge,children:s+"/"+t})]})},C=function(){var e=Object(a.b)(),t=Object(b.useState)([]),n=Object(f.a)(t,2),s=n[0],c=n[1],r=Object(b.useState)(!1),i=Object(f.a)(r,2),u=i[0],d=i[1],j=Object(b.useState)(),h=Object(f.a)(j,2),x=h[0],p=h[1],w=Object(b.useState)(!1),v=Object(f.a)(w,2),y=v[0],N=v[1],S=Object(a.c)((function(e){return e.answers.answers}));if(Object(b.useEffect)((function(){var t=function(){var t=Object(O.a)(Object(m.a)().mark((function t(){var n,s,a,r,i;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.next=3,fetch("https://reacttypescript-8e3d3-default-rtdb.europe-west1.firebasedatabase.app/questions.json");case 3:if((n=t.sent).ok){t.next=6;break}throw new Error("Something went wrong");case 6:return t.next=8,n.json();case 8:for(i in s=t.sent,a=[],r=[],s)e(o.actions.addEmptyAnswer({questionId:i,value:0})),a.push({id:i,text:s[i]}),r.push(0);c(a),d(!1);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().catch((function(e){d(!1),p(e.message)}))}),[e]),x)return Object(_.jsx)("section",{className:q.a.QuestionsError,children:Object(_.jsx)("p",{children:x})});if(u)return Object(_.jsx)("section",{className:q.a.QuestionsLoading,children:Object(_.jsx)("p",{children:"loading..."})});var k=S.reduce((function(e,t){return e*t.value}),1),E=s.map((function(e){return Object(_.jsx)(g,{id:e.id,text:e.text,submitted:y},e.id)}));return Object(_.jsxs)(I,{class:"survey",children:[Object(_.jsx)("ul",{className:"answer",children:E}),Object(_.jsx)(Q,{onClick:function(){N(!0),e(0===k?l.showNotification({show:!0,title:"Error",message:"Please complete all the questions.."}):l.toggle())}})]})},A=n(7),B=n.n(A),V=function(e){var t=Object(a.b)(),n="".concat(B.a["modal-content"]," "),s=function(){t(l.showNotification({show:!1,title:"",message:""}))};return Object(_.jsx)("div",{id:"myModalError",className:B.a.modal,onClick:s,children:Object(_.jsxs)("section",{className:n,children:[Object(_.jsx)("span",{className:B.a.close,onClick:s,children:"\xd7"}),Object(_.jsx)("h2",{children:e.title}),Object(_.jsx)("p",{children:e.message})]})})},F=n(22),K=n.n(F),L=function(){return Object(_.jsx)(b.Fragment,{children:Object(_.jsx)("header",{className:K.a.header,children:Object(_.jsx)("h1",{children:"Hogrefe Frontend task"})})})},P=n(23),z=n.n(P),H=n(24),J=n.n(H),M=function(e){var t=e.id,n=e.value;return Object(_.jsx)("li",{className:J.a.answer,children:Object(_.jsxs)("p",{children:[t," - ",n]})},t)},R=function(){var e=Object(a.c)((function(e){return e.answers.answers})),t=Object(a.b)();return Object(_.jsx)("div",{id:"myModalError",className:z.a.modal,onClick:function(){t(l.toggle())},children:Object(_.jsxs)(I,{class:"modal-content",children:[Object(_.jsx)("h2",{children:"Your Answers:"}),Object(_.jsx)("ul",{children:e.map((function(e){return console.log(e.questionId),Object(_.jsx)(M,{id:e.questionId,value:e.value},e.questionId)}))})]})})};var U=function(){var e=Object(a.c)((function(e){return e.ui.notification})),t=Object(a.c)((function(e){return e.ui.answersIsVisible}));return Object(_.jsxs)(b.Fragment,{children:[e.show&&Object(_.jsx)(V,{title:e.title,message:e.message}),t&&Object(_.jsx)(R,{}),Object(_.jsx)(L,{}),Object(_.jsx)(C,{})]})};c.a.createRoot(document.getElementById("root")).render(Object(_.jsx)(a.a,{store:j,children:Object(_.jsx)(U,{})}))}],[[39,1,2]]]);
//# sourceMappingURL=main.37e351c8.chunk.js.map