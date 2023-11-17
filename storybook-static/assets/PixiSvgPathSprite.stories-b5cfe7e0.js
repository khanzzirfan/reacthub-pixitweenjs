import{j as r}from"./jsx-runtime-4ca860c5.js";import{P as i}from"./PixiSvgPathSprite-b47da63d.js";import{A as a}from"./AppStateProvider-7cff70a9.js";import{A as b}from"./AppWrapper-b2060894.js";import{A as x}from"./withFiltersHook-489645a6.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./PixiStage-ce27c430.js";import"./_getTag-2d69c746.js";import"./extends-a5793c18.js";import"./index-8d47fad6.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./_baseIsEqual-648889f3.js";const T={title:"Components/SvgSprite",component:i,decorators:[t=>r.jsx("div",{style:{width:"100%",height:"100%"},children:r.jsx(b,{children:t({appState:"x"})})})],tags:["autodocs"],argTypes:{uniqueId:{control:"text",description:"uniqueId of the sprite"},path:{control:"text",description:"source of the svg path"},transformation:{control:"object",description:"transformation of the sprite",x:{control:"number",description:"x position of the sprite"},y:{control:"number",description:"y position of the sprite"},width:{control:"number",description:"width of the sprite"},height:{control:"number",description:"height of the sprite"},anchor:{control:"number",description:"anchor of the sprite"},rotation:{control:"number",description:"rotation of the sprite"},alpha:{control:"number",min:0,max:1,description:"alpha of the sprite"},scale:{control:"number",description:"scale of the sprite"},tint:{control:"number",description:"tint of the sprite"},blendMode:{control:"number",description:"blendMode of the sprite"},colorCorrection:{control:"object",description:"colorCorrection of the sprite",brightness:{control:"number",description:"brightness of the sprite"},contrast:{control:"number",description:"contrast of the sprite"},saturation:{control:"number",description:"saturation of the sprite"},alpha:{control:"number",description:"alpha of the sprite"}}},applyTransformer:{control:"boolean",description:"applyTransformer"},startAt:{control:"number",description:"startAt"},endAt:{control:"number",description:"endAt"},visible:{control:"boolean",description:"visible"},onAnchorTransformationEnd:{action:"onAnchorTransformationEnd",description:"on transforamtion end the event is fire callback with latest sprite transformation properties."},pointerdown:{action:"pointerdown",description:"pointerdown event"},pointerout:{action:"pointerout",description:"pointerout event"},pointerover:{action:"pointerover",description:"pointerover event"}}},n={render:t=>r.jsx(a,{...t,children:r.jsx(i,{...t})}),args:{uniqueId:"svg001",path:"M 100 100 L 300 100 L 200 300 z",applyTransformer:!1,startAt:0,endAt:10,transformation:{x:200,y:200,width:200,height:200,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,colorCorrection:{},fill:"#FFC0CB"},visible:!0}},e={render:t=>r.jsx(a,{...t,children:r.jsx(i,{...t})}),args:{uniqueId:"surya002",path:"M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0",applyTransformer:!1,startAt:0,endAt:10,transformation:{x:200,y:200,width:200,height:200,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,animation:x.FADE_IN,colorCorrection:{},fill:"#fe2c54"},visible:!0}},o={render:t=>r.jsx(a,{...t,children:r.jsx(i,{...t})}),args:{uniqueId:"svgfilters001",path:"M 100 100 L 300 100 L 200 300 z",applyTransformer:!1,startAt:0,endAt:10,transformation:{x:200,y:200,width:200,height:200,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,colorCorrection:{enabled:!0,contrast:1,saturation:2,exposure:1,blurRadius:3},fill:"#FFC0CB"},visible:!0}};var s,p,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => <AppStateContextProvider {...args}>\r
      <PixiSvgPathSprite {...args} />\r
    </AppStateContextProvider>,
  args: {
    uniqueId: "svg001",
    // uniqueId of the sprite
    path: "M 100 100 L 300 100 L 200 300 z",
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
    transformation: {
      x: 200,
      y: 200,
      width: 200,
      height: 200,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      colorCorrection: {},
      fill: "#FFC0CB"
    },
    visible: true
  }
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,d,h;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => <AppStateContextProvider {...args}>\r
      <PixiSvgPathSprite {...args} />\r
    </AppStateContextProvider>,
  args: {
    uniqueId: "surya002",
    // uniqueId of the sprite
    path: "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0",
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
    transformation: {
      x: 200,
      y: 200,
      width: 200,
      height: 200,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      animation: Animations.FADE_IN,
      colorCorrection: {},
      fill: "#fe2c54"
    },
    visible: true
  }
}`,...(h=(d=e.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var f,m,u;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: any) => <AppStateContextProvider {...args}>\r
      <PixiSvgPathSprite {...args} />\r
    </AppStateContextProvider>,
  args: {
    uniqueId: "svgfilters001",
    // uniqueId of the sprite
    path: "M 100 100 L 300 100 L 200 300 z",
    applyTransformer: false,
    startAt: 0,
    endAt: 10,
    transformation: {
      x: 200,
      y: 200,
      width: 200,
      height: 200,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      colorCorrection: {
        enabled: true,
        contrast: 1,
        saturation: 2,
        exposure: 1,
        blurRadius: 3
      },
      fill: "#FFC0CB"
    },
    visible: true
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const L=["Normal","FadeIn","Filters"];export{e as FadeIn,o as Filters,n as Normal,L as __namedExportsOrder,T as default};
//# sourceMappingURL=PixiSvgPathSprite.stories-b5cfe7e0.js.map
