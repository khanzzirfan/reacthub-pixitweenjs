import type { Meta, StoryObj } from "@storybook/react";
import { PixiImageSprite } from ".";
import { AppStateContextProvider } from "../../utils/AppStateProvider";
import { Effects } from "../../types/Effects";
import { OverlayTypes } from "../../hocs/OverlayTilingSprite";
import { AppWrapper } from "../../utils/AppWrapper";
import { PixiSequenceWrapper } from "../../components/PixiSequence/PixiSeqenceWrapper";
import { PixiSequence } from "../../components/PixiSequence";
import { Animations } from "../../types";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/ImageSprite",
  component: PixiImageSprite,
  decorators: [
    (Story: any) => (
      <div style={{ width: "100%", height: "100%" }}>
        <AppWrapper>{Story({ appState: "x" })}</AppWrapper>
      </div>
    ),
  ],

  tags: ["autodocs"],
  argTypes: {
    uniqueId: {
      control: "text",
      description: "uniqueId of the sprite",
    },
    src: {
      control: "text",
      description: "source of the image",
    },
    transformation: {
      control: "object",
      description: "transformation of the sprite",
      x: { control: "number", description: "x position of the sprite" },
      y: { control: "number", description: "y position of the sprite" },
      width: { control: "number", description: "width of the sprite" },
      height: { control: "number", description: "height of the sprite" },
      anchor: { control: "number", description: "anchor of the sprite" },
      rotation: { control: "number", description: "rotation of the sprite" },
      alpha: {
        control: "number",
        min: 0,
        max: 1,
        description: "alpha of the sprite",
      },
      scale: { control: "number", description: "scale of the sprite" },
      tint: { control: "number", description: "tint of the sprite" },
      blendMode: { control: "number", description: "blendMode of the sprite" },
      effects: {
        type: "string",
        options: Object.values(Effects),
        description: "filter effects of the sprite",
      },
      colorCorrection: {
        control: "object",
        description: "colorCorrection of the sprite",
        enabled: {
          control: "boolean",
          description: "enabled of the sprite  with color filter mode applied.",
        },
        brightness: {
          control: "number",
          description: "brightness of the sprite",
        },
        contrast: { control: "number", description: "contrast of the sprite" },
        saturation: {
          control: "number",
          description: "saturation of the sprite",
        },
        alpha: { control: "number", description: "alpha of the sprite" },
      },
    },
    applyTransformer: { control: "boolean", description: "applyTransformer" },
    startAt: { control: "number", description: "startAt" },
    endAt: { control: "number", description: "endAt" },
    visible: { control: "boolean", description: "visible" },
    onAnchorTransformationEnd: {
      action: "onAnchorTransformationEnd",
      description:
        "on transforamtion end the event is fire callback with latest sprite transformation properties.",
    },
    pointerdown: {
      action: "pointerdown",
      description: "pointerdown event",
    },
    pointerout: {
      action: "pointerout",
      description: "pointerout event",
    },
    pointerover: {
      action: "pointerover",
      description: "pointerover event",
    },
  },
} satisfies Meta<typeof PixiImageSprite>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiSequenceWrapper startAt={0} endAt={16}>
        <PixiSequence startAt={args.startAt} endAt={args.endAt}>
          <PixiImageSprite {...args} />
        </PixiSequence>
      </PixiSequenceWrapper>
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "surya001", // uniqueId of the sprite
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
        blurRadius: 0,
      },
    },
    visible: true,
  },
};

export const FadeIn: Story = {
  render: (args: any) => (
    <AppStateContextProvider {...args}>
      <PixiSequenceWrapper startAt={0} endAt={16}>
        <PixiSequence startAt={args.startAt} endAt={args.endAt}>
          <PixiImageSprite {...args} />
        </PixiSequence>
      </PixiSequenceWrapper>
    </AppStateContextProvider>
  ),
  args: {
    uniqueId: "surya002", // uniqueId of the sprite
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
      colorCorrection: {},
    },
    visible: true,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Filters: Story = {
  render: (args: any) => {
    const initialProps = {
      uniqueId: "image-filters001", // uniqueId of the sprite
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
          ...args,
        },
      },
      visible: true,
    };
    return (
      <AppStateContextProvider {...initialProps}>
        <PixiSequenceWrapper startAt={0} endAt={16}>
          <PixiSequence
            startAt={initialProps.startAt}
            endAt={initialProps.endAt}
          >
            <PixiImageSprite {...initialProps} />
          </PixiSequence>
        </PixiSequenceWrapper>
      </AppStateContextProvider>
    );
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
    outline: 0,
  },
  argTypes: {
    // @ts-ignore
    alpha: {
      control: { type: "range", min: 0, max: 1, step: 0.2 },
      description: "alpha of the sprite",
    },
    hue: {
      control: { type: "range", min: 1, max: 360, step: 50 },
      description:
        "hue of the sprite filter supplied to transformation property in the props.",
    },
    sharpness: {
      control: { type: "range", min: 0, max: 10, step: 1 },
      description:
        "sharpness of the sprite filter supplied to transformation property in the props.",
    },
    brightness: {
      control: { type: "range", min: 0, max: 10, step: 1 },
      description:
        "brightness of the sprite filter supplied to transformation property in the props.",
    },
    contrast: {
      control: { type: "range", min: 0, max: 10, step: 1 },
      description:
        "contrast of the sprite filter supplied to transformation property in the props.",
    },
    saturation: {
      control: { type: "range", min: 0, max: 10, step: 1 },
      description:
        "saturation of the sprite filter supplied to transformation property in the props.",
    },
    exposure: {
      control: { type: "range", min: 0, max: 10, step: 1 },
      description:
        "exposure of the sprite filter supplied to transformation property in the props.",
    },
    blurRadius: {
      control: { type: "range", min: 0, max: 10, step: 1 },
      description:
        "blurRadius of the sprite filter supplied to transformation property in the props.",
    },
    red: {
      control: { type: "range", min: 1, max: 255, step: 10 },
      description:
        "red of the sprite filter supplied to transformation property in the props.",
    },
    green: {
      control: { type: "range", min: 1, max: 255, step: 10 },
      description:
        "green of the sprite filter supplied to transformation property in the props.",
    },
    blue: {
      control: { type: "range", min: 1, max: 255, step: 10 },
      description:
        "blue of the sprite filter supplied to transformation property in the props.",
    },
    gamma: {
      control: { type: "range", min: 0, max: 10, step: 0.5 },
      description:
        "gamma of the sprite filter supplied to transformation property in the props.",
    },
    vignette: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description:
        "vignette of the sprite filter supplied to transformation property in the props.",
    },
    noise: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description:
        "noise of the sprite filter supplied to transformation property in the props.",
    },
    outline: {
      control: { type: "range", min: 0, max: 5, step: 0.5 },
      description:
        "outline of the sprite filter supplied to transformation property in the props.",
    },
  },
  parameters: {
    controls: {
      include: [
        "startAt",
        "endAt",
        "alpha",
        "gamma",
        "red",
        "green",
        "blue",
        "brightness",
        "contrast",
        "saturation",
        "hue",
        "temperature",
        "sharpness",
        "blurRadius",
        "vignette",
        "noise",
        "outline",
      ],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FilterEffects: Story = {
  render: (args: any) => {
    const initialProps = {
      uniqueId: "image-filters001", // uniqueId of the sprite
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
        effect: args.effect,
      },
      visible: true,
    };
    return (
      <AppStateContextProvider {...initialProps}>
        <PixiSequenceWrapper startAt={0} endAt={16}>
          <PixiSequence
            startAt={initialProps.startAt}
            endAt={initialProps.endAt}
          >
            <PixiImageSprite {...initialProps} />
          </PixiSequence>
        </PixiSequenceWrapper>
      </AppStateContextProvider>
    );
  },
  args: {
    uniqueId: "image-filtereffects001", // uniqueId of the sprite
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
      effect: Effects.BlackAndWhite,
    },
    visible: true,
  },
  argTypes: {
    // @ts-ignore
    effect: {
      control: "select",
      options: Object.values(Effects),
      description:
        "filter effects of the sprite. it is enum type supplied as prop to the transformation property in the props.",
    },
  },
  parameters: {
    controls: {
      include: ["effect"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Overlays: Story = {
  render: (args: any) => {
    const initialProps = {
      uniqueId: "image-overlay-filters001", // uniqueId of the sprite
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
        overlay: args.overlay,
      },
      visible: true,
    };
    return (
      <AppStateContextProvider {...initialProps}>
        <PixiSequenceWrapper startAt={0} endAt={16}>
          <PixiSequence
            startAt={initialProps.startAt}
            endAt={initialProps.endAt}
          >
            <PixiImageSprite {...initialProps} />
          </PixiSequence>
        </PixiSequenceWrapper>
      </AppStateContextProvider>
    );
  },
  args: {
    uniqueId: "image-filtereffects001", // uniqueId of the sprite
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
      overlay: OverlayTypes.LENSFLARE,
    },
    visible: true,
  },
  argTypes: {
    // @ts-ignore
    overlay: {
      control: "select",
      options: Object.values(OverlayTypes),
      description:
        "overlay effects of the sprite. it is enum type supplied as prop to the transformation property in the props.",
    },
  },
  parameters: {
    controls: {
      include: ["overlay"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PointerTests: Story = {
  render: (args: any) => (
    <>
      <AppStateContextProvider {...args}>
        <PixiSequenceWrapper startAt={0} endAt={16}>
          <PixiSequence startAt={args.startAt} endAt={args.endAt}>
            <PixiImageSprite {...args} />
          </PixiSequence>
        </PixiSequenceWrapper>
      </AppStateContextProvider>
      <AppStateContextProvider {...args} x={10} y={300}>
        <PixiImageSprite {...args} x={10} y={100} />
      </AppStateContextProvider>
      <AppStateContextProvider {...args}>
        <PixiImageSprite {...args} />
      </AppStateContextProvider>
      <AppStateContextProvider {...args}>
        <PixiImageSprite {...args} />
      </AppStateContextProvider>
    </>
  ),
  args: {
    uniqueId: "surya001", // uniqueId of the sprite
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
        blurRadius: 0,
      },
    },
    visible: true,
  },
};

export const Animation: Story = {
  render: (inArgs: any) => {
    const args = {
      uniqueId: "surya002", // uniqueId of the sprite
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
        colorCorrection: {},
      },
      visible: true,
    };
    return (
      <AppStateContextProvider {...args}>
        <PixiSequenceWrapper startAt={0} endAt={16}>
          <PixiSequence startAt={args.startAt} endAt={args.endAt}>
            <PixiImageSprite {...args} />
          </PixiSequence>
        </PixiSequenceWrapper>
      </AppStateContextProvider>
    );
  },
  args: {
    uniqueId: "surya002", // uniqueId of the sprite
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
      colorCorrection: {},
    },
    visible: true,
  },
  argTypes: {
    // @ts-ignore
    animation: {
      control: "select",
      options: Object.values(Animations),
      description:
        "Animations effects of the sprite. it is enum type supplied as prop to the transformation property in the props.",
    },
  },
  parameters: {
    controls: {
      include: ["animation"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PointerAnimation: Story = {
  render: (args: any) => (
    <>
      <AppStateContextProvider {...args}>
        <PixiSequenceWrapper startAt={0} endAt={16}>
          <PixiSequence startAt={args.startAt} endAt={args.endAt}>
            <PixiImageSprite {...args} />
          </PixiSequence>
        </PixiSequenceWrapper>
      </AppStateContextProvider>
      <AppStateContextProvider {...args}>
        <PixiImageSprite {...args} />
      </AppStateContextProvider>
    </>
  ),
  args: {
    uniqueId: "surya001", // uniqueId of the sprite
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
        blurRadius: 0,
      },
    },
    visible: true,
  },
};
