import{j as m}from"./jsx-runtime-4ca860c5.js";import{r as t}from"./index-61bf1805.js";import{u as k}from"./AppWrapper-b2060894.js";import{a}from"./chunk-AY7I2SME-c7b6cf8a.js";const d=({children:l,...n})=>{console.log("AppStateContextProvider",n);const[f,c]=t.useState(0),e=t.useRef(n);k(()=>{console.log("useDeepEffect",n),e.current=n,c(o=>o+1)},[n]);const x=t.useCallback(o=>{var s;console.log("onAnchorTransformationEnd",o);const{transformation:i}=o,r={...e.current,transformation:{...(s=e.current)==null?void 0:s.transformation,...i}};console.log("saving state",r),e.current=r,c(g=>g+1)},[]),u=t.useCallback(()=>{a("onMouseOverSprite")()},[]),S=t.useCallback(()=>{a("onMouseOutSprite")()},[]),p=t.useCallback(()=>{a("onClickSprite")()},[]),C=t.useCallback(o=>{var r;a("onTextUpdate")(o),console.log("onTextUpdate",o);const i={...e.current,text:o.text,transformation:{...(r=e.current)==null?void 0:r.transformation}};e.current=i,c(s=>s+1)},[]),E=t.useCallback(()=>{a("onExitQuillEditor")(),console.log("onExitQuillEditor")},[]);return m.jsx(m.Fragment,{children:t.cloneElement(l,{...e.current,onAnchorTransformationEnd:x,onMouseOverSprite:u,onClickSprite:p,pointerdown:p,pointerover:u,pointerout:S,onTextUpdate:C,onExitQuillEditor:E,datatestid:f})})};try{d.displayName="AppStateContextProvider",d.__docgenInfo={description:"",displayName:"AppStateContextProvider",props:{transformation:{defaultValue:null,description:"",name:"transformation",required:!0,type:{name:"{ [key: string]: unknown; }"}}}}}catch{}export{d as A};
//# sourceMappingURL=AppStateProvider-7cff70a9.js.map
