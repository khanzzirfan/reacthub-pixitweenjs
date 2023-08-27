import * as React from "react";
import { Container, withFilters } from "@pixi/react";
import { AdjustmentFilter } from "@pixi/filter-adjustment";
import * as PIXI from "pixi.js";
import { Effects } from "../types/Effects";
// import pixiTransfomer from "../utils/PixiTransformer";
import PixiTransformer from "../utils/PixiTransformer";
import { PixiBaseSpriteProps } from "../types/BaseProps";
import { TransformationEnd } from "../types/transformation";

const Filters = withFilters(Container, {
  blur: PIXI.filters.BlurFilter,
  adjust: AdjustmentFilter,
  matrix: PIXI.filters.ColorMatrixFilter,
});

/** CYAN Filters */
const CYAN = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

const withFilterContainer = <P extends object>(
  WrappedComponent: React.ComponentType<P & PixiBaseSpriteProps>
) => {
  return class WithPixi extends React.Component<P & PixiBaseSpriteProps> {
    imageRef: React.RefObject<PIXI.Sprite>;
    containerRef: React.RefObject<PIXI.Container<PIXI.DisplayObject>>;
    parentNode: React.RefObject<PIXI.Container<PIXI.DisplayObject>>;
    imgGroupRef: React.RefObject<PIXI.Container<PIXI.DisplayObject>>;
    transformerRef: React.RefObject<PIXI.Container<PIXI.DisplayObject>>;
    isMounted: React.RefObject<boolean>;

    constructor(props: P & PixiBaseSpriteProps) {
      super(props);
      // create refs
      this.imageRef = React.createRef<PIXI.Sprite>();
      this.containerRef = React.createRef<PIXI.Container>();
      this.parentNode = React.createRef<PIXI.Container>();
      this.imgGroupRef = React.createRef<PIXI.Container>();
      this.transformerRef = React.createRef<PIXI.Container>();
      this.isMounted = React.createRef<boolean>();
      // implement ismounted state
      this.state = {
        isMounted: false,
        isTransformerDragging: false,
        isMouseOverTransformer: false,
      };
    }

    componentDidMount() {
      /// this.app.stage.addChild(new PIXI.Sprite(PIXI.Texture.WHITE));
      // console.log("this.app.stage", this.app.stage);
      // set isMounted to true
      // @ts-ignore
      this.isMounted.current = true;
    }

    componentWillUnmount() {
      // set isMounted to false
      // @ts-ignore
      this.isMounted.current = false;
    }

    /** handle on tranformer onchange */
    handleOnTransformChange = () => {
      this.setState({ isTransformerDragging: true });
    };

    // transformer to handle sprite transformation
    handleOnTransformEnd = (endData: TransformationEnd) => {
      console.log("changeEnd", endData);
      const { onAnchorTransformationEnd } = this.props;
      if (onAnchorTransformationEnd) {
        console.log("running onAnchorTransformationEnd");
        onAnchorTransformationEnd(endData);
      }
    };

    // handle mouse over transformer state
    setIsMouseOverTransformer = (isMouseOverTransformer: boolean) => {
      this.setState({ isMouseOverTransformer });
    };

    render() {
      const {
        uniqueId,
        initialAlpha,
        transformation: { x, y, width, height, colorCorrection, effect },
        applyTransformer,
      } = this.props;

      // color corrections
      const {
        contrast = 1,
        saturation = 1,
        exposure = 1,
        alpha = 1,
        blurRadius = 0,
      } = colorCorrection || {};

      /** adjustment filter */
      const adjustments = {
        brightness: exposure,
        contrast,
        saturation,
        alpha,
      };
      return (
        <Container ref={this.parentNode}>
          <Container
            ref={this.containerRef}
            alpha={initialAlpha}
            position={[x, y]}
            pivot={[x, y]}
            width={width}
            height={height}
          >
            <Filters
              scale={1}
              blur={{ blur: blurRadius, quality: 4 }}
              adjust={adjustments}
              apply={({ matrix }: { matrix: any }) => {
                if (effect === Effects.BlackAndWhite) {
                  matrix.desaturate();
                } else if (effect === Effects.Sepia) {
                  matrix.sepia();
                } else if (effect === Effects.RetroVintage) {
                  matrix.negative();
                } else if (effect === Effects.NightVision) {
                  matrix.negative();
                } else if (effect === Effects.Normal) {
                  matrix.reset();
                }
              }}
              matrix={{
                enabled: true,
                // @ts-ignore
                matrix: CYAN,
              }}
            >
              <WrappedComponent {...this.props} />
            </Filters>
          </Container>
          {applyTransformer && (
            <PixiTransformer
              pixiTransformerRef={this.transformerRef}
              imageRef={this.containerRef}
              isMounted={this.isMounted.current || false}
              transformCommit={this.handleOnTransformEnd}
              transformChange={this.handleOnTransformChange}
              mouseoverEvent={this.setIsMouseOverTransformer}
              uniqueId={uniqueId}
            />
          )}
        </Container>
      );
    }
  };
};

export default withFilterContainer;
