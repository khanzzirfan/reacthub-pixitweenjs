import{j as e}from"./jsx-runtime-4ca860c5.js";import{P as r}from"./PixiImageSprite-acbaa42a.js";import{A as o}from"./AppStateProvider-7cff70a9.js";import{E as i,A as g,O as x}from"./withFiltersHook-489645a6.js";import{A as G}from"./AppWrapper-b2060894.js";import{P as s,a}from"./PixiSeqenceWrapper-a5cc775b.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./PixiStage-ce27c430.js";import"./_getTag-2d69c746.js";import"./extends-a5793c18.js";import"./index-8d47fad6.js";import"./chunk-AY7I2SME-c7b6cf8a.js";import"./_baseIsEqual-648889f3.js";const re={title:"Components/ImageSprite",component:r,decorators:[t=>e.jsx("div",{style:{width:"100%",height:"100%"},children:e.jsx(G,{children:t({appState:"x"})})})],tags:["autodocs"],argTypes:{uniqueId:{control:"text",description:"uniqueId of the sprite"},src:{control:"text",description:"source of the image"},transformation:{control:"object",description:"transformation of the sprite",x:{control:"number",description:"x position of the sprite"},y:{control:"number",description:"y position of the sprite"},width:{control:"number",description:"width of the sprite"},height:{control:"number",description:"height of the sprite"},anchor:{control:"number",description:"anchor of the sprite"},rotation:{control:"number",description:"rotation of the sprite"},alpha:{control:"number",min:0,max:1,description:"alpha of the sprite"},scale:{control:"number",description:"scale of the sprite"},tint:{control:"number",description:"tint of the sprite"},blendMode:{control:"number",description:"blendMode of the sprite"},effects:{type:"string",options:Object.values(i),description:"filter effects of the sprite"},colorCorrection:{control:"object",description:"colorCorrection of the sprite",enabled:{control:"boolean",description:"enabled of the sprite  with color filter mode applied."},brightness:{control:"number",description:"brightness of the sprite"},contrast:{control:"number",description:"contrast of the sprite"},saturation:{control:"number",description:"saturation of the sprite"},alpha:{control:"number",description:"alpha of the sprite"}}},applyTransformer:{control:"boolean",description:"applyTransformer"},startAt:{control:"number",description:"startAt"},endAt:{control:"number",description:"endAt"},visible:{control:"boolean",description:"visible"},onAnchorTransformationEnd:{action:"onAnchorTransformationEnd",description:"on transforamtion end the event is fire callback with latest sprite transformation properties."},pointerdown:{action:"pointerdown",description:"pointerdown event"},pointerout:{action:"pointerout",description:"pointerout event"},pointerover:{action:"pointerover",description:"pointerover event"}}},p={render:t=>e.jsx(o,{...t,children:e.jsx(s,{startAt:0,endAt:16,children:e.jsx(a,{startAt:t.startAt,endAt:t.endAt,children:e.jsx(r,{...t})})})}),args:{uniqueId:"surya001",src:"https://assets.codepen.io/693612/surya.svg",applyTransformer:!1,startAt:0,endAt:5,transformation:{x:200,y:200,width:150,height:150,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,effect:i.None,colorCorrection:{enabled:!1,contrast:1,saturation:1,exposure:1,blurRadius:0}},visible:!0}},c={render:t=>e.jsx(o,{...t,children:e.jsx(s,{startAt:0,endAt:16,children:e.jsx(a,{startAt:t.startAt,endAt:t.endAt,children:e.jsx(r,{...t})})})}),args:{uniqueId:"surya002",src:"https://assets.codepen.io/693612/surya.svg",applyTransformer:!1,startAt:0,endAt:5,transformation:{x:100,y:100,width:150,height:150,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,effect:i.None,animation:g.FADE_IN,colorCorrection:{}},visible:!0}},l={render:t=>{const n={uniqueId:"image-filters001",src:"http://i.imgur.com/wehQ1GV.jpg",applyTransformer:!1,startAt:0,endAt:5,transformation:{x:200,y:200,width:300,height:300,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,effect:i.None,colorCorrection:{enabled:!0,temperature:0,hue:0,brightness:1,contrast:1,saturation:2,exposure:1,blurRadius:0,alpha:1,gamma:1,red:1,green:1,blue:1,vignette:0,noise:0,outline:0,...t}},visible:!0};return e.jsx(o,{...n,children:e.jsx(s,{startAt:0,endAt:16,children:e.jsx(a,{startAt:n.startAt,endAt:n.endAt,children:e.jsx(r,{...n})})})})},args:{alpha:1,gamma:1,red:1,green:1,blue:1,temperature:0,hue:0,sharpness:0,brightness:1,contrast:1,saturation:1,exposure:1,blurRadius:0,vignette:0,noise:0,outline:0},argTypes:{alpha:{control:{type:"range",min:0,max:1,step:.2},description:"alpha of the sprite"},hue:{control:{type:"range",min:1,max:360,step:50},description:"hue of the sprite filter supplied to transformation property in the props."},sharpness:{control:{type:"range",min:0,max:10,step:1},description:"sharpness of the sprite filter supplied to transformation property in the props."},brightness:{control:{type:"range",min:0,max:10,step:1},description:"brightness of the sprite filter supplied to transformation property in the props."},contrast:{control:{type:"range",min:0,max:10,step:1},description:"contrast of the sprite filter supplied to transformation property in the props."},saturation:{control:{type:"range",min:0,max:10,step:1},description:"saturation of the sprite filter supplied to transformation property in the props."},exposure:{control:{type:"range",min:0,max:10,step:1},description:"exposure of the sprite filter supplied to transformation property in the props."},blurRadius:{control:{type:"range",min:0,max:10,step:1},description:"blurRadius of the sprite filter supplied to transformation property in the props."},red:{control:{type:"range",min:1,max:255,step:10},description:"red of the sprite filter supplied to transformation property in the props."},green:{control:{type:"range",min:1,max:255,step:10},description:"green of the sprite filter supplied to transformation property in the props."},blue:{control:{type:"range",min:1,max:255,step:10},description:"blue of the sprite filter supplied to transformation property in the props."},gamma:{control:{type:"range",min:0,max:10,step:.5},description:"gamma of the sprite filter supplied to transformation property in the props."},vignette:{control:{type:"range",min:0,max:1,step:.1},description:"vignette of the sprite filter supplied to transformation property in the props."},noise:{control:{type:"range",min:0,max:1,step:.1},description:"noise of the sprite filter supplied to transformation property in the props."},outline:{control:{type:"range",min:0,max:5,step:.5},description:"outline of the sprite filter supplied to transformation property in the props."}},parameters:{controls:{include:["startAt","endAt","alpha","gamma","red","green","blue","brightness","contrast","saturation","hue","temperature","sharpness","blurRadius","vignette","noise","outline"]}}},d={render:t=>{const n={uniqueId:"image-filters001",src:"http://i.imgur.com/wehQ1GV.jpg",applyTransformer:!1,startAt:0,endAt:5,transformation:{x:200,y:200,width:300,height:300,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,effect:t.effect},visible:!0};return e.jsx(o,{...n,children:e.jsx(s,{startAt:0,endAt:16,children:e.jsx(a,{startAt:n.startAt,endAt:n.endAt,children:e.jsx(r,{...n})})})})},args:{uniqueId:"image-filtereffects001",src:"https://assets.codepen.io/693612/surya.svg",applyTransformer:!1,startAt:0,endAt:5,transformation:{x:200,y:200,width:150,height:150,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,effect:i.BlackAndWhite},visible:!0},argTypes:{effect:{control:"select",options:Object.values(i),description:"filter effects of the sprite. it is enum type supplied as prop to the transformation property in the props."}},parameters:{controls:{include:["effect"]}}},f={render:t=>{const n={uniqueId:"image-overlay-filters001",src:"https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Ff4gWXRxDXf%2FAnimChar.jpeg",applyTransformer:!1,startAt:0,endAt:5,transformation:{x:200,y:200,width:300,height:300,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,overlay:t.overlay},visible:!0};return e.jsx(o,{...n,children:e.jsx(s,{startAt:0,endAt:16,children:e.jsx(a,{startAt:n.startAt,endAt:n.endAt,children:e.jsx(r,{...n})})})})},args:{uniqueId:"image-filtereffects001",src:"https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Ff4gWXRxDXf%2FAnimChar.jpeg",applyTransformer:!1,startAt:0,endAt:5,transformation:{x:200,y:200,width:150,height:150,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,overlay:x.LENSFLARE},visible:!0},argTypes:{overlay:{control:"select",options:Object.values(x),description:"overlay effects of the sprite. it is enum type supplied as prop to the transformation property in the props."}},parameters:{controls:{include:["overlay"]}}},u={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(o,{...t,children:e.jsx(s,{startAt:0,endAt:16,children:e.jsx(a,{startAt:t.startAt,endAt:t.endAt,children:e.jsx(r,{...t})})})}),e.jsx(o,{...t,x:10,y:300,children:e.jsx(r,{...t,x:10,y:100})}),e.jsx(o,{...t,children:e.jsx(r,{...t})}),e.jsx(o,{...t,children:e.jsx(r,{...t})})]}),args:{uniqueId:"surya001",src:"https://assets.codepen.io/693612/surya.svg",applyTransformer:!0,startAt:0,endAt:5,transformation:{x:200,y:200,width:150,height:150,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,effect:i.None,colorCorrection:{enabled:!1,contrast:1,saturation:1,exposure:1,blurRadius:0}},visible:!0}},h={render:t=>{const n={uniqueId:"surya002",src:"https://assets.codepen.io/693612/surya.svg",applyTransformer:!0,startAt:0,endAt:5,transformation:{x:200,y:250,width:150,height:150,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,effect:i.None,animation:t.animation,colorCorrection:{}},visible:!0};return e.jsx(o,{...n,children:e.jsx(s,{startAt:0,endAt:16,children:e.jsx(a,{startAt:n.startAt,endAt:n.endAt,children:e.jsx(r,{...n})})})})},args:{uniqueId:"surya002",src:"https://assets.codepen.io/693612/surya.svg",applyTransformer:!1,startAt:0,endAt:5,transformation:{x:100,y:100,width:150,height:150,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,effect:i.None,animation:g.BOUNCE_IN,colorCorrection:{}},visible:!0},argTypes:{animation:{control:"select",options:Object.values(g),description:"Animations effects of the sprite. it is enum type supplied as prop to the transformation property in the props."}},parameters:{controls:{include:["animation"]}}},m={render:t=>e.jsxs(e.Fragment,{children:[e.jsx(o,{...t,children:e.jsx(s,{startAt:0,endAt:16,children:e.jsx(a,{startAt:t.startAt,endAt:t.endAt,children:e.jsx(r,{...t})})})}),e.jsx(o,{...t,children:e.jsx(r,{...t})})]}),args:{uniqueId:"surya001",src:"https://assets.codepen.io/693612/surya.svg",applyTransformer:!0,startAt:0,endAt:5,transformation:{x:200,y:200,width:150,height:150,anchor:.5,rotation:0,alpha:1,scale:1,tint:16777215,blendMode:0,effect:i.None,animation:g.NONE,colorCorrection:{enabled:!1,contrast:1,saturation:1,exposure:1,blurRadius:0}},visible:!0}};var A,y,b;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args: any) => <AppStateContextProvider {...args}>\r
      <PixiSequenceWrapper startAt={0} endAt={16}>\r
        <PixiSequence startAt={args.startAt} endAt={args.endAt}>\r
          <PixiImageSprite {...args} />\r
        </PixiSequence>\r
      </PixiSequenceWrapper>\r
    </AppStateContextProvider>,
  args: {
    uniqueId: "surya001",
    // uniqueId of the sprite
    src: "https://assets.codepen.io/693612/surya.svg",
    applyTransformer: false,
    startAt: 0,
    endAt: 5,
    transformation: {
      x: 200,
      y: 200,
      width: 150,
      height: 150,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      effect: Effects.None,
      colorCorrection: {
        enabled: false,
        contrast: 1,
        saturation: 1,
        exposure: 1,
        blurRadius: 0
      }
    },
    visible: true
  }
}`,...(b=(y=p.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,P,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => <AppStateContextProvider {...args}>\r
      <PixiSequenceWrapper startAt={0} endAt={16}>\r
        <PixiSequence startAt={args.startAt} endAt={args.endAt}>\r
          <PixiImageSprite {...args} />\r
        </PixiSequence>\r
      </PixiSequenceWrapper>\r
    </AppStateContextProvider>,
  args: {
    uniqueId: "surya002",
    // uniqueId of the sprite
    src: "https://assets.codepen.io/693612/surya.svg",
    applyTransformer: false,
    startAt: 0,
    endAt: 5,
    transformation: {
      x: 100,
      y: 100,
      width: 150,
      height: 150,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      effect: Effects.None,
      animation: Animations.FADE_IN,
      colorCorrection: {}
    },
    visible: true
  }
}`,...(S=(P=c.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var q,j,I;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: (args: any) => {
    const initialProps = {
      uniqueId: "image-filters001",
      // uniqueId of the sprite
      src: "http://i.imgur.com/wehQ1GV.jpg",
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
        effect: Effects.None,
        colorCorrection: {
          enabled: true,
          temperature: 0,
          hue: 0,
          brightness: 1,
          contrast: 1,
          saturation: 2,
          exposure: 1,
          blurRadius: 0,
          alpha: 1,
          gamma: 1,
          red: 1,
          green: 1,
          blue: 1,
          vignette: 0,
          noise: 0,
          outline: 0,
          ...args
        }
      },
      visible: true
    };
    return <AppStateContextProvider {...initialProps}>\r
        <PixiSequenceWrapper startAt={0} endAt={16}>\r
          <PixiSequence startAt={initialProps.startAt} endAt={initialProps.endAt}>\r
            <PixiImageSprite {...initialProps} />\r
          </PixiSequence>\r
        </PixiSequenceWrapper>\r
      </AppStateContextProvider>;
  },
  args: {
    // @ts-ignore
    alpha: 1,
    gamma: 1,
    red: 1,
    green: 1,
    blue: 1,
    temperature: 0,
    hue: 0,
    sharpness: 0,
    brightness: 1,
    contrast: 1,
    saturation: 1,
    exposure: 1,
    blurRadius: 0,
    vignette: 0,
    noise: 0,
    outline: 0
  },
  argTypes: {
    // @ts-ignore
    alpha: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.2
      },
      description: "alpha of the sprite"
    },
    hue: {
      control: {
        type: "range",
        min: 1,
        max: 360,
        step: 50
      },
      description: "hue of the sprite filter supplied to transformation property in the props."
    },
    sharpness: {
      control: {
        type: "range",
        min: 0,
        max: 10,
        step: 1
      },
      description: "sharpness of the sprite filter supplied to transformation property in the props."
    },
    brightness: {
      control: {
        type: "range",
        min: 0,
        max: 10,
        step: 1
      },
      description: "brightness of the sprite filter supplied to transformation property in the props."
    },
    contrast: {
      control: {
        type: "range",
        min: 0,
        max: 10,
        step: 1
      },
      description: "contrast of the sprite filter supplied to transformation property in the props."
    },
    saturation: {
      control: {
        type: "range",
        min: 0,
        max: 10,
        step: 1
      },
      description: "saturation of the sprite filter supplied to transformation property in the props."
    },
    exposure: {
      control: {
        type: "range",
        min: 0,
        max: 10,
        step: 1
      },
      description: "exposure of the sprite filter supplied to transformation property in the props."
    },
    blurRadius: {
      control: {
        type: "range",
        min: 0,
        max: 10,
        step: 1
      },
      description: "blurRadius of the sprite filter supplied to transformation property in the props."
    },
    red: {
      control: {
        type: "range",
        min: 1,
        max: 255,
        step: 10
      },
      description: "red of the sprite filter supplied to transformation property in the props."
    },
    green: {
      control: {
        type: "range",
        min: 1,
        max: 255,
        step: 10
      },
      description: "green of the sprite filter supplied to transformation property in the props."
    },
    blue: {
      control: {
        type: "range",
        min: 1,
        max: 255,
        step: 10
      },
      description: "blue of the sprite filter supplied to transformation property in the props."
    },
    gamma: {
      control: {
        type: "range",
        min: 0,
        max: 10,
        step: 0.5
      },
      description: "gamma of the sprite filter supplied to transformation property in the props."
    },
    vignette: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.1
      },
      description: "vignette of the sprite filter supplied to transformation property in the props."
    },
    noise: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.1
      },
      description: "noise of the sprite filter supplied to transformation property in the props."
    },
    outline: {
      control: {
        type: "range",
        min: 0,
        max: 5,
        step: 0.5
      },
      description: "outline of the sprite filter supplied to transformation property in the props."
    }
  },
  parameters: {
    controls: {
      include: ["startAt", "endAt", "alpha", "gamma", "red", "green", "blue", "brightness", "contrast", "saturation", "hue", "temperature", "sharpness", "blurRadius", "vignette", "noise", "outline"]
    }
  }
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var C,T,w;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: any) => {
    const initialProps = {
      uniqueId: "image-filters001",
      // uniqueId of the sprite
      src: "http://i.imgur.com/wehQ1GV.jpg",
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
        effect: args.effect
      },
      visible: true
    };
    return <AppStateContextProvider {...initialProps}>\r
        <PixiSequenceWrapper startAt={0} endAt={16}>\r
          <PixiSequence startAt={initialProps.startAt} endAt={initialProps.endAt}>\r
            <PixiImageSprite {...initialProps} />\r
          </PixiSequence>\r
        </PixiSequenceWrapper>\r
      </AppStateContextProvider>;
  },
  args: {
    uniqueId: "image-filtereffects001",
    // uniqueId of the sprite
    src: "https://assets.codepen.io/693612/surya.svg",
    applyTransformer: false,
    startAt: 0,
    endAt: 5,
    transformation: {
      x: 200,
      y: 200,
      width: 150,
      height: 150,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      effect: Effects.BlackAndWhite
    },
    visible: true
  },
  argTypes: {
    // @ts-ignore
    effect: {
      control: "select",
      options: Object.values(Effects),
      description: "filter effects of the sprite. it is enum type supplied as prop to the transformation property in the props."
    }
  },
  parameters: {
    controls: {
      include: ["effect"]
    }
  }
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var F,N,E;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    return <AppStateContextProvider {...initialProps}>\r
        <PixiSequenceWrapper startAt={0} endAt={16}>\r
          <PixiSequence startAt={initialProps.startAt} endAt={initialProps.endAt}>\r
            <PixiImageSprite {...initialProps} />\r
          </PixiSequence>\r
        </PixiSequenceWrapper>\r
      </AppStateContextProvider>;
  },
  args: {
    uniqueId: "image-filtereffects001",
    // uniqueId of the sprite
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2Ff4gWXRxDXf%2FAnimChar.jpeg",
    applyTransformer: false,
    startAt: 0,
    endAt: 5,
    transformation: {
      x: 200,
      y: 200,
      width: 150,
      height: 150,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      overlay: OverlayTypes.LENSFLARE
    },
    visible: true
  },
  argTypes: {
    // @ts-ignore
    overlay: {
      control: "select",
      options: Object.values(OverlayTypes),
      description: "overlay effects of the sprite. it is enum type supplied as prop to the transformation property in the props."
    }
  },
  parameters: {
    controls: {
      include: ["overlay"]
    }
  }
}`,...(E=(N=f.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var M,W,R;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: any) => <>\r
      <AppStateContextProvider {...args}>\r
        <PixiSequenceWrapper startAt={0} endAt={16}>\r
          <PixiSequence startAt={args.startAt} endAt={args.endAt}>\r
            <PixiImageSprite {...args} />\r
          </PixiSequence>\r
        </PixiSequenceWrapper>\r
      </AppStateContextProvider>\r
      <AppStateContextProvider {...args} x={10} y={300}>\r
        <PixiImageSprite {...args} x={10} y={100} />\r
      </AppStateContextProvider>\r
      <AppStateContextProvider {...args}>\r
        <PixiImageSprite {...args} />\r
      </AppStateContextProvider>\r
      <AppStateContextProvider {...args}>\r
        <PixiImageSprite {...args} />\r
      </AppStateContextProvider>\r
    </>,
  args: {
    uniqueId: "surya001",
    // uniqueId of the sprite
    src: "https://assets.codepen.io/693612/surya.svg",
    applyTransformer: true,
    startAt: 0,
    endAt: 5,
    transformation: {
      x: 200,
      y: 200,
      width: 150,
      height: 150,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      effect: Effects.None,
      colorCorrection: {
        enabled: false,
        contrast: 1,
        saturation: 1,
        exposure: 1,
        blurRadius: 0
      }
    },
    visible: true
  }
}`,...(R=(W=u.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var O,X,D;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (inArgs: any) => {
    const args = {
      uniqueId: "surya002",
      // uniqueId of the sprite
      src: "https://assets.codepen.io/693612/surya.svg",
      applyTransformer: true,
      startAt: 0,
      endAt: 5,
      transformation: {
        x: 200,
        y: 250,
        width: 150,
        height: 150,
        anchor: 0.5,
        rotation: 0,
        alpha: 1,
        scale: 1,
        tint: 0xffffff,
        blendMode: 0,
        effect: Effects.None,
        animation: inArgs.animation,
        colorCorrection: {}
      },
      visible: true
    };
    return <AppStateContextProvider {...args}>\r
        <PixiSequenceWrapper startAt={0} endAt={16}>\r
          <PixiSequence startAt={args.startAt} endAt={args.endAt}>\r
            <PixiImageSprite {...args} />\r
          </PixiSequence>\r
        </PixiSequenceWrapper>\r
      </AppStateContextProvider>;
  },
  args: {
    uniqueId: "surya002",
    // uniqueId of the sprite
    src: "https://assets.codepen.io/693612/surya.svg",
    applyTransformer: false,
    startAt: 0,
    endAt: 5,
    transformation: {
      x: 100,
      y: 100,
      width: 150,
      height: 150,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      effect: Effects.None,
      animation: Animations.BOUNCE_IN,
      colorCorrection: {}
    },
    visible: true
  },
  argTypes: {
    // @ts-ignore
    animation: {
      control: "select",
      options: Object.values(Animations),
      description: "Animations effects of the sprite. it is enum type supplied as prop to the transformation property in the props."
    }
  },
  parameters: {
    controls: {
      include: ["animation"]
    }
  }
}`,...(D=(X=h.parameters)==null?void 0:X.docs)==null?void 0:D.source}}};var _,z,B;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: any) => <>\r
      <AppStateContextProvider {...args}>\r
        <PixiSequenceWrapper startAt={0} endAt={16}>\r
          <PixiSequence startAt={args.startAt} endAt={args.endAt}>\r
            <PixiImageSprite {...args} />\r
          </PixiSequence>\r
        </PixiSequenceWrapper>\r
      </AppStateContextProvider>\r
      <AppStateContextProvider {...args}>\r
        <PixiImageSprite {...args} />\r
      </AppStateContextProvider>\r
    </>,
  args: {
    uniqueId: "surya001",
    // uniqueId of the sprite
    src: "https://assets.codepen.io/693612/surya.svg",
    applyTransformer: true,
    startAt: 0,
    endAt: 5,
    transformation: {
      x: 200,
      y: 200,
      width: 150,
      height: 150,
      anchor: 0.5,
      rotation: 0,
      alpha: 1,
      scale: 1,
      tint: 0xffffff,
      blendMode: 0,
      effect: Effects.None,
      animation: Animations.NONE,
      colorCorrection: {
        enabled: false,
        contrast: 1,
        saturation: 1,
        exposure: 1,
        blurRadius: 0
      }
    },
    visible: true
  }
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const oe=["Normal","FadeIn","Filters","FilterEffects","Overlays","PointerTests","Animation","PointerAnimation"];export{h as Animation,c as FadeIn,d as FilterEffects,l as Filters,p as Normal,f as Overlays,m as PointerAnimation,u as PointerTests,oe as __namedExportsOrder,re as default};
//# sourceMappingURL=PixiImageSprite.stories-120b1d9b.js.map
