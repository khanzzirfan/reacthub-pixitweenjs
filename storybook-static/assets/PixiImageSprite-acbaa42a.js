import{j as i}from"./jsx-runtime-4ca860c5.js";import{r}from"./index-61bf1805.js";import{F as l,m as s}from"./PixiStage-ce27c430.js";import{w as I,a as R,E as A}from"./withFiltersHook-489645a6.js";const N=()=>{const e=new l(null,`
  precision mediump float;
  uniform mat3 uNightVisionMatrix;
  varying vec2 vTextureCoord;
  uniform sampler2D uSampler;
  
  void main(void) {
      vec4 texColor = texture2D(uSampler, vTextureCoord);
      vec3 color = texColor.rgb;
      gl_FragColor = vec4(uNightVisionMatrix * vec3(color), texColor.a);
  }
`),n=[.393,.769,.189,.349,.686,.168,.272,.534,.131];e.uniforms.uNightVisionMatrix=n;const t=new l(null,`
    precision mediump float;
    varying vec2 vTextureCoord;
    uniform sampler2D uSampler;
    uniform vec4 vignetteColor;
    uniform float vignetteSize;
    uniform float vignetteStrength;

    void main(void) {
      vec4 texColor = texture2D(uSampler, vTextureCoord);
      vec2 delta = vTextureCoord - vec2(0.5);
      float vignette = 1.0 - smoothstep(vignetteSize, 0.5, length(delta));
      gl_FragColor = texColor * vignetteColor * vignetteStrength * vignette;
    }
    `);return t.uniforms.vignetteColor=[0,0,0,1],t.uniforms.vignetteSize=.7,t.uniforms.vignetteStrength=.6,{nightVisionFilter:e,vignetteFilter:t}},o=r.forwardRef((e,n)=>{const t=r.useRef(null),d=r.useRef(null),{src:m,visible:a,disabled:p,transformation:{x:f,y:c,width:g,height:v,anchor:y,colorCorrection:u={},effect:h},pointerdown:x}=e,{blurRadius:V=0,vignette:b=0,noise:q=0}=u,{temperatureFilter:C,sharpnessFilter:S,hueFilter:F,blurFilter:w,adjustmentFilter:T,vignetteFilter:_,noiseFilter:D}=I(u),{nightVisionFilter:E}=N();return r.useEffect(()=>()=>{console.log("PixiImageSprite unmounting")},[]),i.jsx(R,{...e,ref:n,children:i.jsx(s.Container,{ref:d,children:i.jsx(s.Sprite,{image:m,width:g,height:v,anchor:y,ref:t,alpha:a?1:0,x:f,y:c,...!p&&a&&{interactive:!0,pointerdown:x},filters:[C,S,F,T,...V>0?[w]:[],...h===A.NightVision?[E]:[],...b>0?[_]:[],...q>0?[D]:[]]})})})});o.whyDidYouRender={logOnDifferentValues:!0,customName:"ImageSprite"};try{o.displayName="PixiImageSprite",o.__docgenInfo={description:"",displayName:"PixiImageSprite",props:{uniqueId:{defaultValue:null,description:"",name:"uniqueId",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},path:{defaultValue:null,description:"",name:"path",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},startAt:{defaultValue:null,description:"",name:"startAt",required:!0,type:{name:"number"}},endAt:{defaultValue:null,description:"",name:"endAt",required:!0,type:{name:"number"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isDragging:{defaultValue:null,description:"",name:"isDragging",required:!1,type:{name:"boolean"}},transformation:{defaultValue:null,description:"",name:"transformation",required:!0,type:{name:"{ x: number; y: number; width: number; height: number; anchor: number; rotation?: number | undefined; alpha?: number | undefined; scale?: number | [number, number] | undefined; tint?: number | undefined; ... 4 more ...; overlay?: OverlayTypes | undefined; }"}},pointerdown:{defaultValue:null,description:"",name:"pointerdown",required:!1,type:{name:"(() => void)"}},pointerup:{defaultValue:null,description:"",name:"pointerup",required:!1,type:{name:"(() => void)"}},pointerout:{defaultValue:null,description:"",name:"pointerout",required:!1,type:{name:"(() => void)"}},mousedown:{defaultValue:null,description:"",name:"mousedown",required:!1,type:{name:"(() => void)"}},mouseup:{defaultValue:null,description:"",name:"mouseup",required:!1,type:{name:"(() => void)"}},pointerover:{defaultValue:null,description:"",name:"pointerover",required:!1,type:{name:"(() => void)"}},mouseover:{defaultValue:null,description:"",name:"mouseover",required:!1,type:{name:"(() => void)"}},mouseout:{defaultValue:null,description:"",name:"mouseout",required:!1,type:{name:"(() => void)"}},applyTransformer:{defaultValue:null,description:"",name:"applyTransformer",required:!1,type:{name:"boolean"}},onAnchorTransformationEnd:{defaultValue:null,description:"",name:"onAnchorTransformationEnd",required:!1,type:{name:"((endData: any) => void)"}},fps:{defaultValue:null,description:"",name:"fps",required:!1,type:{name:"number"}}}}}catch{}export{o as P};
//# sourceMappingURL=PixiImageSprite-acbaa42a.js.map
