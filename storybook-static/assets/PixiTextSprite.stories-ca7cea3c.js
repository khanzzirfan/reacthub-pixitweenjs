import{j as t}from"./jsx-runtime-4ca860c5.js";import{P as n}from"./PixiTextSprite-d8bce14d.js";import{A as r}from"./AppStateProvider-7cff70a9.js";import{A as T}from"./AppWrapper-b2060894.js";import{P as b,a as w}from"./PixiSeqenceWrapper-a5cc775b.js";import{A as W}from"./withFiltersHook-489645a6.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./PixiStage-ce27c430.js";import"./_getTag-2d69c746.js";import"./extends-a5793c18.js";import"./index-8d47fad6.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./_baseIsEqual-648889f3.js";const E={title:"Components/TextSprite",component:n,decorators:[e=>t.jsx("div",{style:{width:"100%",height:"100%"},children:t.jsx(T,{children:e({appState:"x"})})})],tags:["autodocs"],argTypes:{uniqueId:{control:"text",description:"uniqueId of the sprite"},text:{control:"text",description:"Text to be displayed"},transformation:{control:"object",description:"transformation of the sprite",x:{control:"number",description:"x position of the sprite"},y:{control:"number",description:"y position of the sprite"},width:{control:"number",description:"width of the sprite"},height:{control:"number",description:"height of the sprite"},anchor:{control:"number",description:"anchor of the sprite"},rotation:{control:"number",description:"rotation of the sprite"},alpha:{control:"number",min:0,max:1,description:"alpha of the sprite"},scale:{control:"number",description:"scale of the sprite"},tint:{control:"number",description:"tint of the sprite"},blendMode:{control:"number",description:"blendMode of the sprite"},colorCorrection:{control:"object",description:"colorCorrection of the sprite",brightness:{control:"number",description:"brightness of the sprite"},contrast:{control:"number",description:"contrast of the sprite"},saturation:{control:"number",description:"saturation of the sprite"},alpha:{control:"number",description:"alpha of the sprite"}}},applyTransformer:{control:"boolean",description:"applyTransformer"},startAt:{control:"number",description:"startAt"},endAt:{control:"number",description:"endAt"},visible:{control:"boolean",description:"visible"},onAnchorTransformationEnd:{action:"onAnchorTransformationEnd",description:"on transforamtion end the event is fire callback with latest sprite transformation properties."},pointerup:{action:"pointerup",description:"pointerup event"},onTextUpdate:{action:"onTextUpdate",description:"onTextUpdate event"},pointerdown:{action:"pointerdown",description:"pointerdown event"},pointerout:{action:"pointerout",description:"pointerout event"},pointerover:{action:"pointerover",description:"pointerover event"}}},o={render:e=>t.jsx(r,{...e,children:t.jsx(n,{...e})}),args:{uniqueId:"TextSpritexx001",text:"Welcome to PixiJS",disabled:!1,applyTransformer:!1,transformation:{x:300,y:200,width:200,height:200,anchor:.5,rotation:0,alpha:1,scale:1,blendMode:0,colorCorrection:{},fill:"#00ff99",fontSize:50,fontFamily:"Arial",fontStyle:"italic",fontWeight:"bold",fontVariant:"normal",align:"center",stroke:"#522d2d",strokeThickness:0,letterSpacing:0,lineHeight:0,dropShadow:!1,dropShadowColor:"#522d2d",dropShadowBlur:0,wordWrap:!1,wordWrapWidth:5e6,padding:10,textBaseline:"alphabetic",trim:!1},startAt:0,endAt:10,visible:!0}},i={render:e=>t.jsx(r,{...e,children:t.jsx(b,{startAt:0,endAt:5,children:t.jsx(w,{startAt:e.startAt,endAt:e.endAt,children:t.jsx(n,{...e})})})}),args:{uniqueId:"TextSprite001",text:"Hello Welcome to PixiJS",disabled:!1,applyTransformer:!1,transformation:{x:200,y:200,width:200,height:200,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,colorCorrection:{},fill:"#00ff99",fontSize:20,fontFamily:"Arial",align:"center",stroke:0,strokeThickness:0,letterSpacing:0,lineHeight:0,dropShadow:!1,dropShadowColor:0,dropShadowBlur:0,wordWrap:!1,wordWrapWidth:100,padding:0,textBaseline:"alphabetic",trim:!1},startAt:0,endAt:10,visible:!0}},a={render:e=>t.jsx(r,{...e,children:t.jsx(n,{...e})}),args:{uniqueId:"TextSpritexx001",text:"Hello Welcome to PixiJS",disabled:!1,applyTransformer:!1,transformation:{x:200,y:200,width:200,height:200,anchor:.5,rotation:0,alpha:1,scale:1,blendMode:0,colorCorrection:{enabled:!0,contrast:2,saturation:2,exposure:2,blurRadius:1},fill:"#00ff99",fontSize:80,fontFamily:"Arial",align:"center",stroke:"#522d2d",strokeThickness:0,letterSpacing:0,lineHeight:0,dropShadow:!1,dropShadowColor:"#522d2d",dropShadowBlur:0,wordWrap:!1,wordWrapWidth:5e6,padding:10,textBaseline:"alphabetic",trim:!1},startAt:0,endAt:10,visible:!0}},s={render:e=>t.jsxs(t.Fragment,{children:[t.jsx(r,{...e,children:t.jsx(b,{startAt:0,endAt:5,children:t.jsx(w,{startAt:e.startAt,endAt:e.endAt,children:t.jsx(n,{...e})})})}),t.jsx(r,{...e,children:t.jsx(n,{...e})})]}),args:{uniqueId:"TextSprite001",text:"Hello Welcome to PixiJS",disabled:!1,applyTransformer:!0,transformation:{x:200,y:200,width:200,height:200,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,colorCorrection:{},fill:"#00ff99",fontSize:20,fontFamily:"Arial",align:"center",stroke:0,strokeThickness:0,letterSpacing:0,lineHeight:0,dropShadow:!1,dropShadowColor:0,dropShadowBlur:0,wordWrap:!1,wordWrapWidth:100,padding:0,textBaseline:"alphabetic",trim:!1,animation:W.FADE_IN},startAt:0,endAt:5,visible:!0}};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: any) => <AppStateContextProvider {...args}>\r
      <PixiTextSprite {...args} />\r
    </AppStateContextProvider>,
  args: {
    uniqueId: "TextSpritexx001",
    // uniqueId of the sprite
    text: "Welcome to PixiJS",
    disabled: false,
    applyTransformer: false,
    transformation: {
      x: 300,
      y: 200,
      width: 200,
      height: 200,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      blendMode: 0,
      colorCorrection: {},
      fill: "#00ff99",
      fontSize: 50,
      fontFamily: "Arial",
      fontStyle: "italic",
      fontWeight: "bold",
      fontVariant: "normal",
      align: "center",
      stroke: "#522d2d",
      strokeThickness: 0,
      letterSpacing: 0,
      lineHeight: 0,
      dropShadow: false,
      dropShadowColor: "#522d2d",
      dropShadowBlur: 0,
      wordWrap: false,
      wordWrapWidth: 5000000,
      padding: 10,
      textBaseline: "alphabetic",
      trim: false
    },
    startAt: 0,
    endAt: 10,
    visible: true
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,h,f;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: any) => <AppStateContextProvider {...args}>\r
      <PixiSequenceWrapper startAt={0} endAt={5}>\r
        <PixiSequence startAt={args.startAt} endAt={args.endAt}>\r
          <PixiTextSprite {...args} />\r
        </PixiSequence>\r
      </PixiSequenceWrapper>\r
    </AppStateContextProvider>,
  args: {
    uniqueId: "TextSprite001",
    // uniqueId of the sprite
    text: "Hello Welcome to PixiJS",
    disabled: false,
    applyTransformer: false,
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
      fill: "#00ff99",
      fontSize: 20,
      fontFamily: "Arial",
      align: "center",
      stroke: 0x000000,
      strokeThickness: 0,
      letterSpacing: 0,
      lineHeight: 0,
      dropShadow: false,
      dropShadowColor: 0x000000,
      dropShadowBlur: 0,
      wordWrap: false,
      wordWrapWidth: 100,
      padding: 0,
      textBaseline: "alphabetic",
      trim: false
    },
    startAt: 0,
    endAt: 10,
    visible: true
  }
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,m,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: any) => <AppStateContextProvider {...args}>\r
      <PixiTextSprite {...args} />\r
    </AppStateContextProvider>,
  args: {
    uniqueId: "TextSpritexx001",
    // uniqueId of the sprite
    text: "Hello Welcome to PixiJS",
    disabled: false,
    applyTransformer: false,
    transformation: {
      x: 200,
      y: 200,
      width: 200,
      height: 200,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      blendMode: 0,
      colorCorrection: {
        enabled: true,
        contrast: 2,
        saturation: 2,
        exposure: 2,
        blurRadius: 1
      },
      fill: "#00ff99",
      fontSize: 80,
      fontFamily: "Arial",
      align: "center",
      stroke: "#522d2d",
      strokeThickness: 0,
      letterSpacing: 0,
      lineHeight: 0,
      dropShadow: false,
      dropShadowColor: "#522d2d",
      dropShadowBlur: 0,
      wordWrap: false,
      wordWrapWidth: 5000000,
      padding: 10,
      textBaseline: "alphabetic",
      trim: false
    },
    startAt: 0,
    endAt: 10,
    visible: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var S,g,A;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: any) => <>\r
      <AppStateContextProvider {...args}>\r
        <PixiSequenceWrapper startAt={0} endAt={5}>\r
          <PixiSequence startAt={args.startAt} endAt={args.endAt}>\r
            <PixiTextSprite {...args} />\r
          </PixiSequence>\r
        </PixiSequenceWrapper>\r
      </AppStateContextProvider>\r
      <AppStateContextProvider {...args}>\r
        <PixiTextSprite {...args} />\r
      </AppStateContextProvider>\r
    </>,
  args: {
    uniqueId: "TextSprite001",
    // uniqueId of the sprite
    text: "Hello Welcome to PixiJS",
    disabled: false,
    applyTransformer: true,
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
      fill: "#00ff99",
      fontSize: 20,
      fontFamily: "Arial",
      align: "center",
      stroke: 0x000000,
      strokeThickness: 0,
      letterSpacing: 0,
      lineHeight: 0,
      dropShadow: false,
      dropShadowColor: 0x000000,
      dropShadowBlur: 0,
      wordWrap: false,
      wordWrapWidth: 100,
      padding: 0,
      textBaseline: "alphabetic",
      trim: false,
      animation: Animations.FADE_IN
    },
    startAt: 0,
    endAt: 5,
    visible: true
  }
}`,...(A=(g=s.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};const D=["Normal","FadeIn","Filters","Draggable"];export{s as Draggable,i as FadeIn,a as Filters,o as Normal,D as __namedExportsOrder,E as default};
//# sourceMappingURL=PixiTextSprite.stories-ca7cea3c.js.map
