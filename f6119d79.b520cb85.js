(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{163:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return r})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return d}));var n=i(1),a=i(9),o=(i(0),i(170)),l={id:"module_2",title:"Encryption as a Service",sidebar_label:"Encryption as a Service"},r={id:"module_2",title:"Encryption as a Service",description:"In this section the attendee will be introduced to the Vault API and the Transit secret engine.",source:"@site/docs/module_2.md",permalink:"/vault-app-dev-training/docs/module_2",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/module_2.md",sidebar_label:"Encryption as a Service",sidebar:"Modules",previous:{title:"Providing static secrets to applications",permalink:"/vault-app-dev-training/docs/module_1"},next:{title:"Vault and Kubernetes",permalink:"/vault-app-dev-training/docs/module_3"}},c=[{value:"Outcomes",id:"outcomes",children:[]},{value:"Objectives",id:"objectives",children:[]}],s={rightToc:c};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section the attendee will be introduced to the Vault API and the Transit secret engine."),Object(o.b)("p",null,"The attendee follows a scenario where they will modify an existing application which stores personally identifiable data in a PostgreSQL database. Currently the data is stored in plain text, the attendee will modify the application so that data is  encrypted with the transit secrets engine before being stored in the database. (Application examples will be provided for the Go and Java programming languages)"),Object(o.b)("h2",{id:"outcomes"},"Outcomes"),Object(o.b)("p",null,"By the end of the module you will be able to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Modify an existing application which stores personally identifiable data in Kafka."),Object(o.b)("li",{parentName:"ol"},"Encrypt the data to be stored in Kafka with the transit secrets engine before being stored in Kafka. ")),Object(o.b)("h2",{id:"objectives"},"Objectives"),Object(o.b)("p",null,"In order to accomplish the Outcomes, you\u2019ll do the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Review using the Vault API"),Object(o.b)("li",{parentName:"ol"},"Learning to encrypt and decrypt data using the Transit secrets engine"),Object(o.b)("li",{parentName:"ol"},"Interacting with the Vault API through application code")))}d.isMDXComponent=!0}}]);