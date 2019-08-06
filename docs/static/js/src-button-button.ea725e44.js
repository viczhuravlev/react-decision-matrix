(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/Button/Button.mdx":function(t,e,n){"use strict";n.r(e);var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/react/index.js"),c=n.n(i),r=n("./node_modules/@mdx-js/react/dist/index.es.js"),u=n("./node_modules/docz/dist/index.esm.js"),s=(n("./src/Button/Button.types.tsx"),n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),a={small:"\n    padding: 5px 10px;\n    font-size: 14px;\n  ",normal:"\n    padding: 10px 20px;\n    font-size: 16px;\n  ",big:"\n    padding: 20px 30px;\n    font-size: 18px;\n  "};function d(t){var e=t.scale;return a[void 0===e?"normal":e]}function l(t){var e=t.kind,n=void 0===e?"primary":e,o=t.outline;return function(t){var e=function(t){return function(e,n){var o=t?e:"transparent";return"\n    background: ".concat(t?"transparent":e,";\n    box-shadow: inset 0 0 0 1px ").concat(o,";\n    color: ").concat(t?e:n,";\n    transition: all .3s;\n    &:hover {\n      box-shadow: inset 0 0 0 1000px ").concat(o,";\n      color: ").concat(n,";\n    }\n  ")}}(t);return{primary:e("#1FB6FF","white"),secondary:e("#5352ED","white"),cancel:e("#FF4949","white"),dark:e("#273444","white"),gray:e("#8492A6","white")}}(void 0!==o&&o)[n]}var b=Object(s.a)("button",{target:"e10o1hul0"})(l,";",d,";cursor:pointer;margin:3px 5px;border:none;border-radius:3px;");function p(t){var e=t.children,n=Object(o.a)(t,["children"]);return c.a.createElement(b,n,e)}"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/Button/Button.styles.ts"}}),p.defaultProps={scale:"normal",kind:"primary",outline:!1},p.displayName="Button";var m=p;p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/Button/Button.tsx"}}),"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/Button/index.ts"}}),"undefined"!==typeof Button&&Button&&Button===Object(Button)&&Object.isExtensible(Button)&&Object.defineProperty(Button,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/Button/index.ts"}}),n.d(e,"default",function(){return f});var B={},y="wrapper";function f(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(r.b)(y,Object.assign({},B,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"button"},"Button"),Object(r.b)("p",null,"Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them."),Object(r.b)("h3",{id:"best-practices"},"Best practices"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Group buttons logically into sets based on usage and importance."),Object(r.b)("li",{parentName:"ul"},"Ensure that button actions are clear and consistent."),Object(r.b)("li",{parentName:"ul"},"The main action of a group set can be a primary button."),Object(r.b)("li",{parentName:"ul"},"Select a single button variation and do not mix them.")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(u.d,{of:m,mdxType:"Props"}),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)(u.c,{__position:1,__code:"<Button>Click me</Button>",__scope:{props:this?this.props:n,Playground:u.c,Props:u.d,Button:m},mdxType:"Playground"},Object(r.b)(m,{mdxType:"Button"},"Click me")),Object(r.b)("h2",{id:"with-different-sizes"},"With different sizes"),Object(r.b)(u.c,{__position:2,__code:'<Button scale="small">Click me</Button>\n<Button scale="normal">Click me</Button>\n<Button scale="big">Click me</Button>',__scope:{props:this?this.props:n,Playground:u.c,Props:u.d,Button:m},mdxType:"Playground"},Object(r.b)(m,{scale:"small",mdxType:"Button"},"Click me"),Object(r.b)(m,{scale:"normal",mdxType:"Button"},"Click me"),Object(r.b)(m,{scale:"big",mdxType:"Button"},"Click me")),Object(r.b)("h2",{id:"with-different-colors"},"With different colors"),Object(r.b)(u.c,{__position:3,__code:'<Button kind="primary">Click me</Button>\n<Button kind="secondary">Click me</Button>\n<Button kind="cancel">Click me</Button>\n<Button kind="dark">Click me</Button>\n<Button kind="gray">Click me</Button>',__scope:{props:this?this.props:n,Playground:u.c,Props:u.d,Button:m},mdxType:"Playground"},Object(r.b)(m,{kind:"primary",mdxType:"Button"},"Click me"),Object(r.b)(m,{kind:"secondary",mdxType:"Button"},"Click me"),Object(r.b)(m,{kind:"cancel",mdxType:"Button"},"Click me"),Object(r.b)(m,{kind:"dark",mdxType:"Button"},"Click me"),Object(r.b)(m,{kind:"gray",mdxType:"Button"},"Click me")),Object(r.b)("h2",{id:"outlined"},"Outlined"),Object(r.b)(u.c,{__position:4,__code:'<Button kind="primary" outline>\n  Click me\n</Button>\n<Button kind="secondary" outline>\n  Click me\n</Button>\n<Button kind="cancel" outline>\n  Click me\n</Button>\n<Button kind="dark" outline>\n  Click me\n</Button>\n<Button kind="gray" outline>\n  Click me\n</Button>',__scope:{props:this?this.props:n,Playground:u.c,Props:u.d,Button:m},mdxType:"Playground"},Object(r.b)(m,{kind:"primary",outline:!0,mdxType:"Button"},"Click me"),Object(r.b)(m,{kind:"secondary",outline:!0,mdxType:"Button"},"Click me"),Object(r.b)(m,{kind:"cancel",outline:!0,mdxType:"Button"},"Click me"),Object(r.b)(m,{kind:"dark",outline:!0,mdxType:"Button"},"Click me"),Object(r.b)(m,{kind:"gray",outline:!0,mdxType:"Button"},"Click me")))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Button/Button.mdx"}}),f.isMDXComponent=!0},"./src/Button/Button.types.tsx":function(t,e){"undefined"!==typeof Kind&&Kind&&Kind===Object(Kind)&&Object.isExtensible(Kind)&&Object.defineProperty(Kind,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Kind",filename:"src/Button/Button.types.tsx"}}),"undefined"!==typeof Kinds&&Kinds&&Kinds===Object(Kinds)&&Object.isExtensible(Kinds)&&Object.defineProperty(Kinds,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Kinds",filename:"src/Button/Button.types.tsx"}}),"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/Button/Button.types.tsx"}})}}]);
//# sourceMappingURL=src-button-button.48341bc36e45e6afe906.js.map