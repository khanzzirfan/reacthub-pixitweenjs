import{j as e}from"./jsx-runtime-4ca860c5.js";import{a as f}from"./PixiSeqenceWrapper-a5cc775b.js";import{G as I,g as _,m as h}from"./PixiStage-ce27c430.js";import{P as V}from"./PixiImageSprite-acbaa42a.js";import{P as z}from"./PixiGifGsapSync-10c2dc73.js";import{P as G}from"./PixiVideoCanvasSync-7a47deea.js";import{r as t}from"./index-61bf1805.js";import{u as N,A as O}from"./AppWrapper-b2060894.js";import"./_getTag-2d69c746.js";import"./_commonjsHelpers-de833af9.js";import"./extends-a5793c18.js";import"./index-8d47fad6.js";import"./withFiltersHook-489645a6.js";import"./_baseIsEqual-648889f3.js";import"./_baseForOwn-ca29a81b.js";import"./isSymbol-bb84bf8b.js";import"./debounce-9a7f49c6.js";const s=({children:n,...r})=>{console.log("AppStateContextProvider",r);const[o,S]=t.useState(!1),i=t.useRef(r),{tl:x}=t.useContext(I);N(()=>{i.current=r;const{startAt:a,endAt:m}=r,c=m-a;console.log("AppStateContextProvider useDeepEffect",r);const l=_.context(()=>{x.current&&x.current.to(i.current,{duration:c},0)});return()=>l.revert()},[r]);const T=t.useCallback(a=>{var l;console.log("onAnchorTransformationEnd",a);const{transformation:m}=a,c={...i.current,transformation:{...(l=i.current)==null?void 0:l.transformation,...m}};console.log("saving state",c),i.current=c},[]),g=t.useCallback(()=>{S(!0)},[]),k=t.useCallback(()=>{S(!1)},[]),P=t.useCallback(()=>{},[]),M=t.useCallback(a=>{console.log("onTextUpdate",a)},[]),w=t.useCallback(()=>{console.log("onExitQuillEditor")},[]);return e.jsx(e.Fragment,{children:t.cloneElement(n,{...i.current,onAnchorTransformationEnd:T,onMouseOverSprite:g,onClickSprite:P,pointerdown:P,pointerover:g,pointerout:k,mouseOverSprite:o,onTextUpdate:M,onExitQuillEditor:w})})};try{s.displayName="AppStateSequenceProvider",s.__docgenInfo={description:"",displayName:"AppStateSequenceProvider",props:{transformation:{defaultValue:null,description:"",name:"transformation",required:!0,type:{name:"{ [key: string]: unknown; }"}}}}}catch{}const te={title:"Components/PixiSequence",component:f,decorators:[n=>e.jsx("div",{style:{width:"100%",height:"100%"},children:e.jsx(O,{children:n({appState:"x"})})})],tags:["autodocs"],argTypes:{children:{description:"The content of the component.",control:{type:"text"}},startAt:{description:"The content of the component.",control:{type:"number"}},endAt:{description:"The content of the component.",control:{type:"number"}}}},p={render:n=>{const r={uniqueId:"image-overlay-filters001",src:"https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Ff4gWXRxDXf%2FAnimChar.jpeg",applyTransformer:!1,startAt:0,endAt:5,transformation:{x:200,y:200,width:300,height:300,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,overlay:n.overlay},visible:!0};return e.jsx(s,{...r,children:e.jsx(h.Container,{children:e.jsx(f,{...n,children:e.jsx(V,{...r})})})})},args:{children:"PixiSequence",startAt:2,endAt:5}},d={render:n=>{const o={...{uniqueId:"image-overlay-filters001",src:"https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif",applyTransformer:!1,startAt:2,endAt:5,frameStartAt:0,frameEndAt:2.5,transformation:{x:200,y:200,width:300,height:300,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,overlay:n.overlay},visible:!0,locked:!1,loop:!1},...n};return e.jsx(s,{...o,children:e.jsx(h.Container,{children:e.jsx(f,{...n,children:e.jsx(z,{...o})})})})},args:{children:"PixiSequence",startAt:2,endAt:5}},u={render:n=>{const o={...{uniqueId:"biggerforblazers",src:"https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Fyd2M9NnQHL%2FForBiggerBlazes.mp4",transformation:{x:290,y:250,width:550,height:400,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,colorCorrection:{}},applyTransformer:!0,startAt:0,endAt:10,frameStartAt:0,frameEndAt:10,visible:!0,mute:!1,locked:!1},...n};return e.jsx(s,{...o,children:e.jsx(h.Container,{children:e.jsx(f,{...n,children:e.jsx(G,{...o})})})})},args:{children:"PixiSequence",startAt:2,endAt:5}};var A,y,q;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args: any) => {
    const initialProps = {
      uniqueId: "image-overlay-filters001",
      // uniqueId of the sprite
      src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Ff4gWXRxDXf%2FAnimChar.jpeg",
      applyTransformer: false,
      startAt: 0,
      endAt: 5,
      transformation: {
        x: 200,
        y: 200,
        width: 300,
        height: 300,
        anchor: 0.5,
        rotation: 0,
        alpha: 1,
        scale: 1,
        tint: 0xffffff,
        blendMode: 0,
        overlay: args.overlay
      },
      visible: true
    };
    return <AppStateSequenceProvider {...initialProps}>\r
        <Container>\r
          <PixiSequence {...args}>\r
            <PixiImageSprite {...initialProps} />\r
          </PixiSequence>\r
        </Container>\r
      </AppStateSequenceProvider>;
  },
  args: {
    children: "PixiSequence",
    startAt: 2,
    endAt: 5
  }
}`,...(q=(y=p.parameters)==null?void 0:y.docs)==null?void 0:q.source}}};var v,b,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => {
    const initialProps = {
      uniqueId: "image-overlay-filters001",
      // uniqueId of the sprite
      src: "https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif",
      applyTransformer: false,
      startAt: 2,
      endAt: 5,
      frameStartAt: 0,
      frameEndAt: 2.5,
      transformation: {
        x: 200,
        y: 200,
        width: 300,
        height: 300,
        anchor: 0.5,
        rotation: 0,
        alpha: 1,
        scale: 1,
        tint: 0xffffff,
        blendMode: 0,
        overlay: args.overlay
      },
      visible: true,
      locked: false,
      loop: false
    };
    const allSequenceProps = {
      ...initialProps,
      ...args
    };
    return <AppStateSequenceProvider {...allSequenceProps}>\r
        <Container>\r
          <PixiSequence {...args}>\r
            <PixiGifSprite {...allSequenceProps} />\r
          </PixiSequence>\r
        </Container>\r
      </AppStateSequenceProvider>;
  },
  args: {
    children: "PixiSequence",
    startAt: 2,
    endAt: 5
  }
}`,...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var F,j,E;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: any) => {
    const initialProps = {
      uniqueId: "biggerforblazers",
      // uniqueId of the sprite
      src: "https://d1r0cf5836ptgd.cloudfront.net/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Fyd2M9NnQHL%2FForBiggerBlazes.mp4",
      transformation: {
        x: 290,
        y: 250,
        width: 550,
        height: 400,
        anchor: 0.5,
        rotation: 0,
        alpha: 1,
        scale: 1,
        tint: 0xffffff,
        blendMode: 0,
        colorCorrection: {}
      },
      applyTransformer: true,
      startAt: 0,
      endAt: 10,
      frameStartAt: 0,
      frameEndAt: 10,
      visible: true,
      mute: false,
      locked: false
    };
    const allSequenceProps = {
      ...initialProps,
      ...args
    };
    return <AppStateSequenceProvider {...allSequenceProps}>\r
        <Container>\r
          <PixiSequence {...args}>\r
            <PixiVideoSprite {...allSequenceProps} />\r
          </PixiSequence>\r
        </Container>\r
      </AppStateSequenceProvider>;
  },
  args: {
    children: "PixiSequence",
    startAt: 2,
    endAt: 5
  }
}`,...(E=(j=u.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const oe=["Normal","GifSequence","VideoSequence"];export{d as GifSequence,p as Normal,u as VideoSequence,oe as __namedExportsOrder,te as default};
//# sourceMappingURL=PixiSequence.stories-5d856e97.js.map
