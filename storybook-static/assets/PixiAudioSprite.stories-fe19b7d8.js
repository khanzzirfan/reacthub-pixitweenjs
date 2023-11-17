import{j as t}from"./jsx-runtime-4ca860c5.js";import{P as o}from"./PixiAudioSprite-e173c059.js";import{A as n}from"./AppStateProvider-7cff70a9.js";import{A as b}from"./AppWrapper-b2060894.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./PixiStage-ce27c430.js";import"./_getTag-2d69c746.js";import"./extends-a5793c18.js";import"./index-8d47fad6.js";import"./chunk-AY7I2SME-c7b6cf8a.js";const z={title:"Components/AudioSprite",component:o,decorators:[e=>t.jsx("div",{style:{width:"100%",height:"100%"},children:t.jsx(b,{children:e({appState:"x"})})})],tags:["autodocs"],argTypes:{uniqueId:{control:"text",description:"uniqueId of the sprite"},src:{control:"text",description:"source of the image"},startAt:{control:"number",description:"startAt"},endAt:{control:"number",description:"endAt"},audioStartAt:{control:"number",description:"audio start at seconds if different from the sequence play startAt time"},audioEndAt:{control:"number",description:"audio ends at seconds if different from the sequence play endAt time"},mute:{control:"boolean",description:"mute"},speed:{control:"number",description:"speed"},visible:{control:"boolean",description:"element to be visible on pixi stage and interactive"}}},r={render:e=>t.jsx(n,{...e,children:t.jsx(o,{...e})}),args:{uniqueId:"audio001",src:"https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F8Qq3DKrGnQ%2Fpiano2-CoolEdit.mp3",startAt:0,endAt:5,audioStartAt:0,audioEndAt:5,mute:!1,speed:1,visible:!0}},i={render:e=>t.jsx(n,{...e,children:t.jsx(o,{...e})}),args:{uniqueId:"audio001",src:"https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F7M7ixuYvwQ%2Fsingle-speaker-speech-audio.mp3",startAt:0,endAt:5,audioStartAt:0,audioEndAt:5,mute:!1,speed:1,visible:!0}},s={render:e=>t.jsx(n,{...e,children:t.jsx(o,{...e})}),args:{uniqueId:"audio002",src:"https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F8Qq3DKrGnQ%2Fpiano2-CoolEdit.mp3",startAt:0,endAt:5,audioStartAt:3,audioEndAt:5,mute:!0,speed:1,visible:!0}},a={render:e=>t.jsx(n,{...e,children:t.jsx(o,{...e})}),args:{uniqueId:"audio001",src:"https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F7M7ixuYvwQ%2Fsingle-speaker-speech-audio.mp3",startAt:0,endAt:9,audioStartAt:4,audioEndAt:8,mute:!1,speed:1,visible:!0}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: any) => <AppStateContextProvider {...args}>\r
      <PixiAudioSprite {...args} />\r
    </AppStateContextProvider>,
  args: {
    uniqueId: "audio001",
    // uniqueId of the sprite
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F8Qq3DKrGnQ%2Fpiano2-CoolEdit.mp3",
    startAt: 0,
    endAt: 5,
    audioStartAt: 0,
    audioEndAt: 5,
    mute: false,
    speed: 1,
    visible: true
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,l;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: any) => <AppStateContextProvider {...args}>\r
      <PixiAudioSprite {...args} />\r
    </AppStateContextProvider>,
  args: {
    uniqueId: "audio001",
    // uniqueId of the sprite
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F7M7ixuYvwQ%2Fsingle-speaker-speech-audio.mp3",
    startAt: 0,
    endAt: 5,
    audioStartAt: 0,
    audioEndAt: 5,
    mute: false,
    speed: 1,
    visible: true
  }
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var A,f,v;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args: any) => <AppStateContextProvider {...args}>\r
      <PixiAudioSprite {...args} />\r
    </AppStateContextProvider>,
  args: {
    uniqueId: "audio002",
    // uniqueId of the sprite
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F8Qq3DKrGnQ%2Fpiano2-CoolEdit.mp3",
    startAt: 0,
    endAt: 5,
    audioStartAt: 3,
    audioEndAt: 5,
    mute: true,
    speed: 1,
    visible: true
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var F,h,x;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: any) => <AppStateContextProvider {...args}>\r
      <PixiAudioSprite {...args} />\r
    </AppStateContextProvider>,
  args: {
    uniqueId: "audio001",
    // uniqueId of the sprite
    src: "https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/public%2Firfan%40trolio.com%2F6472d56e805c3bffc3cded33%2Fvideos%2F7M7ixuYvwQ%2Fsingle-speaker-speech-audio.mp3",
    startAt: 0,
    endAt: 9,
    audioStartAt: 4,
    audioEndAt: 8,
    mute: false,
    speed: 1,
    visible: true
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const k=["Normal","Speech","Customized","SplitPosition"];export{s as Customized,r as Normal,i as Speech,a as SplitPosition,k as __namedExportsOrder,z as default};
//# sourceMappingURL=PixiAudioSprite.stories-fe19b7d8.js.map
