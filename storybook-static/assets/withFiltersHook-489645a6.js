import{j as ee}from"./jsx-runtime-4ca860c5.js";import{r as S}from"./index-61bf1805.js";import{n as me,o as Jt,q as Gr,r as Hr,t as qr,v as $r,P as Xr,w as Yr,x as Wr,y as Kr,z as Qr,A as Zr,D as Jr,H as ei,I as ti,J as ri,K as Te,L as ii,M as er,N as oi,O as si,Q as ni,R as ai,p as li,W as ui,X as ci,Y as hi,Z as fi,_ as di,$ as He,a0 as mi,s as tt,a1 as pi,a2 as gi,a3 as xi,a4 as tr,a5 as vi,a6 as yi,a7 as _i,a8 as bi,a9 as Ti,aa as Ci,ab as wi,ac as Si,ad as Ei,ae as Ri,af as Mi,ag as Ai,ah as Pi,ai as Fi,aj as Di,ak as Oi,al as Ii,am as ki,an as Li,ao as Ni,ap as zi,aq as Bi,ar as Ui,as as Vi,at as ji,au as Gi,av as Hi,aw as qi,ax as $i,ay as Xi,az as Yi,aA as Wi,aB as Ki,aC as Qi,aD as Zi,aE as Ji,aF as eo,aG as to,aH as ro,aI as io,aJ as oo,aK as so,aL as no,aM as ao,aN as lo,aO as uo,aP as co,aQ as ho,aR as fo,aS as mo,aT as po,aU as go,aV as xo,aW as vo,aX as yo,aY as rr,aZ as _o,a_ as bo,a$ as To,b0 as _e,b1 as Co,b2 as wo,b3 as So,b4 as Eo,b5 as Ro,b6 as Mo,b7 as Ao,k as Po,b8 as Fo,b9 as Do,ba as Oo,bb as Io,bc as ko,bd as Lo,be as No,bf as zo,bg as Bo,bh as Uo,F as P,bi as Vo,bj as jo,bk as Go,bl as Ho,bm as qo,bn as $o,bo as Xo,bp as Yo,bq as Wo,br as Ko,bs as Qo,bt as Zo,d as ae,bu as Jo,bv as es,bw as ts,bx as rs,by as is,bz as os,bA as ss,bB as ns,bC as as,bD as ls,bE as us,bF as cs,bG as hs,bH as fs,bI as ds,bJ as ms,bK as ps,bL as gs,bM as xs,bN as Z,bO as vs,bP as ys,bQ as _s,bR as bs,bS as Ts,bT as Cs,bU as ws,bV as Ss,bW as Es,bX as ft,bY as Rs,bZ as Ms,b_ as As,b$ as Ps,c0 as Fs,c1 as Ds,c2 as _,c3 as Os,c4 as Is,c5 as ks,c6 as Ls,c7 as Ns,c8 as zs,c9 as Bs,ca as Us,cb as ir,cc as Vs,cd as js,ce as Gs,cf as Hs,cg as qs,ch as $s,ci as Xs,cj as Ys,ck as Ws,e as or,cl as Ks,cm as Qs,cn as Zs,co as Js,cp as en,cq as tn,cr as rn,cs as on,f as sn,ct as nn,cu as an,cv as ln,cw as un,cx as cn,cy as hn,cz as fn,cA as dn,cB as mn,cC as pn,cD as gn,cE as xn,cF as vn,cG as yn,cH as _n,cI as bn,T as Tn,a as sr,cJ as Cn,cK as wn,cL as Sn,cM as En,h as rt,cN as Rn,cO as Mn,cP as An,cQ as nr,cR as Pn,U as ar,cS as Fn,cT as Dn,cU as On,cV as In,cW as kn,cX as Ln,cY as Nn,cZ as zn,c_ as Bn,c$ as Un,d0 as Vn,d1 as jn,d2 as Gn,d3 as Hn,d4 as qn,d5 as $n,d6 as Xn,d7 as Yn,d8 as Wn,d9 as Kn,da as Qn,db as Zn,dc as Jn,dd as ea,de as ta,df as ra,dg as ia,l as oa,dh as Be,di as sa,dj as na,dk as aa,dl as la,dm as ua,dn as ca,dp as ha,dq as fa,dr as da,ds as ma,dt as pa,du as ga,dv as xa,dw as va,dx as ya,dy as _a,dz as ba,dA as Ta,dB as Ca,dC as wa,j as Ce,dD as Sa,dE as Ea,dF as Ra,m as Q,dG as pt,E as it,g as T,G as Ma,u as Aa,i as Pa}from"./PixiStage-ce27c430.js";import{g as Fa}from"./_commonjsHelpers-de833af9.js";import{a as Da}from"./_baseIsEqual-648889f3.js";function Oa(){me("7.0.0","skipHello is deprecated, please use settings.RENDER_OPTIONS.hello")}function Ia(){me("7.0.0",`sayHello is deprecated, please use Renderer's "hello" option`)}const lr=/^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i,ka={Float32Array,Uint32Array,Int32Array,Uint8Array};function La(i,e){let t=0,r=0;const s={};for(let l=0;l<i.length;l++)r+=e[l],t+=i[l].length;const o=new ArrayBuffer(t*4);let n=null,a=0;for(let l=0;l<i.length;l++){const u=e[l],h=i[l],c=Jt(h);s[c]||(s[c]=new ka[c](o)),n=s[c];for(let f=0;f<h.length;f++){const d=(f/u|0)*r+a,m=f%u;n[d+m]=h[f]}a+=u}return new Float32Array(o)}function Na(i){const e=lr.exec(i);if(e)return{mediaType:e[1]?e[1].toLowerCase():void 0,subType:e[2]?e[2].toLowerCase():void 0,charset:e[3]?e[3].toLowerCase():void 0,encoding:e[4]?e[4].toLowerCase():void 0,data:e[5]}}const za=Object.freeze(Object.defineProperty({__proto__:null,BaseTextureCache:Gr,BoundingBox:Hr,CanvasRenderTarget:qr,DATA_URI:lr,EventEmitter:$r,ProgramCache:Xr,TextureCache:Yr,clearTextureCache:Wr,correctBlendMode:Kr,createIndicesForQuads:Qr,decomposeDataUri:Na,deprecation:me,destroyTextureCache:Zr,determineCrossOrigin:Jr,earcut:ei,getBufferType:Jt,getCanvasBoundingBox:ti,getResolutionOfUrl:ri,hex2rgb:Te,hex2string:ii,interleaveTypedArrays:La,isMobile:er,isPow2:oi,isWebGLSupported:si,log2:ni,nextPow2:ai,path:li,premultiplyBlendMode:ui,premultiplyRgba:ci,premultiplyTint:hi,premultiplyTintToRgba:fi,removeItems:di,rgb2hex:He,sayHello:Ia,sign:mi,skipHello:Oa,string2hex:tt,trimCanvas:pi,uid:gi,url:xi},Symbol.toStringTag,{value:"Module"}));class Ba{constructor(){this._glTransformFeedbacks={},this.buffers=[],this.disposeRunner=new tr("disposeTransformFeedback")}bindBuffer(e,t){this.buffers[e]=t}destroy(){this.disposeRunner.emit(this,!1)}}const Ua="7.2.3",Va={buildPoly:vi,buildCircle:yi,buildRectangle:_i,buildRoundedRectangle:bi,buildLine:Ti,ArcUtils:Ci,BezierUtils:wi,QuadraticUtils:Si,BatchPart:Ei,FILL_COMMANDS:Ri,BATCH_POOL:Mi,DRAW_CALL_POOL:Ai};class ja{constructor(e){this.maxMilliseconds=e,this.frameStart=0}beginFrame(){this.frameStart=Date.now()}allowedToUpload(){return Date.now()-this.frameStart<this.maxMilliseconds}}const Ga=Object.freeze(Object.defineProperty({__proto__:null,ALPHA_MODES:Pi,AbstractMultiResource:Fi,AccessibilityManager:Di,AlphaFilter:Oi,AnimatedSprite:Ii,Application:ki,ArrayResource:Li,Assets:Ni,AssetsClass:zi,Attribute:Bi,BLEND_MODES:Ui,BUFFER_BITS:Vi,BUFFER_TYPE:ji,BackgroundSystem:Gi,BaseImageResource:Hi,BasePrepare:qi,BaseRenderTexture:$i,BaseTexture:Xi,BatchDrawCall:Yi,BatchGeometry:Wi,BatchRenderer:Ki,BatchShaderGenerator:Qi,BatchSystem:Zi,BatchTextureArray:Ji,BitmapFont:eo,BitmapFontData:to,BitmapText:ro,BlobResource:io,BlurFilter:oo,BlurFilterPass:so,Bounds:no,BrowserAdapter:ao,Buffer:lo,BufferResource:uo,BufferSystem:co,CLEAR_MODES:ho,COLOR_MASK_BITS:fo,Cache:mo,CanvasResource:po,Circle:go,Color:xo,ColorMatrixFilter:vo,CompressedTextureResource:yo,Container:rr,ContextSystem:_o,CountLimiter:bo,CubeResource:To,DEG_TO_RAD:_e,DRAW_MODES:Co,DisplacementFilter:wo,DisplayObject:So,ENV:Eo,Ellipse:Ro,EventBoundary:Mo,EventSystem:Ao,ExtensionType:Po,Extract:Fo,FORMATS:Do,FORMATS_TO_COMPONENTS:Oo,FXAAFilter:Io,FederatedDisplayObject:ko,FederatedEvent:Lo,FederatedMouseEvent:No,FederatedPointerEvent:zo,FederatedWheelEvent:Bo,FillStyle:Uo,Filter:P,FilterState:Vo,FilterSystem:jo,Framebuffer:Go,FramebufferSystem:Ho,GC_MODES:qo,GLFramebuffer:$o,GLProgram:Xo,GLTexture:Yo,GRAPHICS_CURVES:Wo,GenerateTextureSystem:Ko,Geometry:Qo,GeometrySystem:Zo,Graphics:ae,GraphicsData:Jo,GraphicsGeometry:es,HTMLText:ts,HTMLTextStyle:rs,IGLUniformData:is,INSTALLED:os,INTERNAL_FORMATS:ss,INTERNAL_FORMAT_TO_BYTES_PER_PIXEL:ns,ImageBitmapResource:as,ImageResource:ls,LINE_CAP:us,LINE_JOIN:cs,LineStyle:hs,LoaderParserPriority:fs,MASK_TYPES:ds,MIPMAP_MODES:ms,MSAA_QUALITY:ps,MaskData:gs,MaskSystem:xs,Matrix:Z,Mesh:vs,MeshBatchUvs:ys,MeshGeometry:_s,MeshMaterial:bs,MultisampleSystem:Ts,NineSlicePlane:Cs,NoiseFilter:ws,ObjectRenderer:Ss,ObjectRendererSystem:Es,ObservablePoint:ft,PI_2:Rs,PRECISION:Ms,ParticleContainer:As,ParticleRenderer:Ps,PlaneGeometry:Fs,PluginSystem:Ds,Point:_,Polygon:Os,Prepare:Is,Program:ks,ProjectionSystem:Ls,Quad:Ns,QuadUv:zs,RAD_TO_DEG:Bs,RENDERER_TYPE:Us,Rectangle:ir,RenderTexture:Vs,RenderTexturePool:js,RenderTextureSystem:Gs,Renderer:Hs,ResizePlugin:qs,Resource:$s,RopeGeometry:Xs,RoundedRectangle:Ys,Runner:tr,SAMPLER_TYPES:Ws,SCALE_MODES:or,SHAPES:Ks,SVGResource:Qs,ScissorSystem:Zs,Shader:Js,ShaderSystem:en,SimpleMesh:tn,SimplePlane:rn,SimpleRope:on,Sprite:sn,SpriteMaskFilter:nn,Spritesheet:an,StartupSystem:ln,State:un,StateSystem:cn,StencilSystem:hn,SystemManager:fn,TARGETS:dn,TEXT_GRADIENT:mn,TYPES:pn,TYPES_TO_BYTES_PER_COMPONENT:gn,TYPES_TO_BYTES_PER_PIXEL:xn,TemporaryDisplayObject:vn,Text:yn,TextFormat:_n,TextMetrics:bn,TextStyle:Tn,Texture:sr,TextureGCSystem:Cn,TextureMatrix:wn,TextureSystem:Sn,TextureUvs:En,Ticker:rt,TickerPlugin:Rn,TilingSprite:Mn,TilingSpriteRenderer:An,TimeLimiter:ja,Transform:nr,TransformFeedback:Ba,TransformFeedbackSystem:Pn,UPDATE_PRIORITY:ar,UniformGroup:Fn,VERSION:Ua,VideoResource:Dn,ViewSystem:On,ViewableBuffer:In,WRAP_MODES:kn,XMLFormat:Ln,XMLStringFormat:Nn,accessibleTarget:zn,autoDetectFormat:Bn,autoDetectRenderer:Un,autoDetectResource:Vn,cacheTextureArray:jn,checkDataUrl:Gn,checkExtension:Hn,checkMaxIfStatementsInShader:qn,convertToList:$n,copySearchParams:Xn,createStringVariations:Yn,createTexture:Wn,createUBOElements:Kn,curves:Qn,defaultFilterVertex:Zn,defaultVertex:Jn,detectAvif:ea,detectCompressedTextures:ta,detectDefaults:ra,detectWebp:ia,extensions:oa,filters:Be,generateProgram:sa,generateUniformBufferSync:na,getFontFamilyName:aa,getTestContext:la,getUBOData:ua,graphicsUtils:Va,groupD8:ca,isMobile:er,isSingleItem:ha,loadBitmapFont:fa,loadDDS:da,loadImageBitmap:ma,loadJson:pa,loadKTX:ga,loadSVG:xa,loadTextures:va,loadTxt:ya,loadWebFont:_a,parseDDS:ba,parseKTX:Ta,resolveCompressedTextureUrl:Ca,resolveTextureUrl:wa,settings:Ce,spritesheetAsset:Sa,uniformParsers:Ea,unsafeEvalSupported:Ra,utils:za},Symbol.toStringTag,{value:"Module"}));var oe=(i=>(i.BlackAndWhite="BlackAndWhite",i.Sepia="Sepia",i.RetroVintage="RetroVintage",i.NightVision="NightVision",i.Normal="Normal",i.Vignette="Vignette",i.None="Normal",i))(oe||{});try{oe.displayName="Effects",oe.__docgenInfo={description:"Effects enum",displayName:"Effects",props:{}}}catch{}class Ue{constructor(e=0,t=0,r=0,s=0){this._x=Number(e),this._y=Number(t),this._width=Number(r),this._height=Number(s),this._hull=[new _,new _,new _,new _],this.currentID=-1,this.dirtyID=0}get x(){return this._x}set x(e){this._x=e,this.dirtyID++}get y(){return this._y}set y(e){this._y=e,this.dirtyID++}get width(){return this._width}set width(e){this._width=e,this.dirtyID++}get height(){return this._height}set height(e){this._height=e,this.dirtyID++}get hull(){return this.isDirty()&&this.update(),this._hull}get topLeft(){return this.isDirty()&&this.update(),this._hull[0]}get topRight(){return this.isDirty()&&this.update(),this._hull[1]}get bottomRight(){return this.isDirty()&&this.update(),this._hull[2]}get bottomLeft(){return this.isDirty()&&this.update(),this._hull[3]}isDirty(){return this.currentID!==this.dirtyID}update(){const[e,t,r,s]=this._hull;e.set(this._x,this._y),t.set(this._x+this._width,this._y),r.set(this._x+this._width,this._y+this._height),s.set(this._x,this._y+this._height)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}clone(){return new Ue(this.x,this.y,this.width,this.height)}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e}contains(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height}equals(e){return e?e.x===this.x&&e.y===this.y&&e.width===this.width&&e.height===this.height:!1}pad(e=0,t=e){return this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this}fit(e){const t=Math.max(this.x,e.x),r=Math.min(this.x+this.width,e.x+e.width),s=Math.max(this.y,e.y),o=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(r-t,0),this.y=s,this.height=Math.max(o-s,0),this}ceil(e=1,t=.001){const r=Math.ceil((this.x+this.width-t)*e)/e,s=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=r-this.x,this.height=s-this.y,this}enlarge(e){const t=Math.min(this.x,e.x),r=Math.max(this.x+this.width,e.x+e.width),s=Math.min(this.y,e.y),o=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=r-t,this.y=s,this.height=o-s,this}}const gt=new _;class Le{constructor(e=0,t=0,r=0,s=0,o=0){e instanceof Ue&&(o=t||0,t=e.y,r=e.width,s=e.height,e=e.x),this.innerBounds=new Ue(e,t,r,s),this._rotation=o,this._center=new ft(this.updateCenter,this),this._hull=[new _,new _,new _,new _],this._matrix=new Z,this.currentID=-1,this.dirtyID=0}get rotation(){return this._rotation}set rotation(e){this._rotation=e,this.dirtyID++}get center(){return this.isDirty()&&this.update(),this._center}set center(e){this.center.copyFrom(e)}get hull(){return this.isDirty()&&this.update(),this._hull}get topLeft(){return this.isDirty()&&this.update(),this._hull[0]}get topRight(){return this.isDirty()&&this.update(),this._hull[1]}get bottomRight(){return this.isDirty()&&this.update(),this._hull[2]}get bottomLeft(){return this.isDirty()&&this.update(),this._hull[3]}equals(e){return e?this.innerBounds.equals(e.innerBounds)&&this.rotation===e.rotation:!1}contains(e,t){typeof e=="number"&&(e=gt.set(e,t));const r=this._matrix.applyInverse(e,gt);return this.innerBounds.contains(r.x,r.y)}copyFrom(e){return this.innerBounds.copyFrom(e.innerBounds),this.rotation=e.rotation,this.dirtyID++,this}isDirty(){return this.currentID!==this.dirtyID+this.innerBounds.dirtyID}update(){const e=this.innerBounds,t=this._rotation,r=this._center,[s,o,n,a]=this._hull,l=this._matrix;r._x=e.x+e.width/2,r._y=e.y+e.height/2,l.identity().translate(-r.x,-r.y).rotate(t).translate(r.x,r.y),l.apply(e.topLeft,s),l.apply(e.topRight,o),l.apply(e.bottomRight,n),l.apply(e.bottomLeft,a),this.currentID=this.dirtyID+this.innerBounds.dirtyID}updateCenter(){const e=this.center,t=this.innerBounds;t.x=e.x-t.width/2,t.y=e.y-t.height/2}}class xt{constructor(e,t){this._history=new Array(e),this._decayRatio=t,this._currentIndex=0;for(let r=0;r<e;r++)this._history[r]=0}next(e){const{_history:t,_decayRatio:r}=this,s=t.length;this._currentIndex=this._currentIndex<s-1?this._currentIndex+1:0,t[this._currentIndex]=e;let o=0,n=0;for(let a=this._currentIndex+1;a<s;a++)o=(o+t[a])*r,n=(n+1)*r;for(let a=0;a<=this._currentIndex;a++)o=(o+t[a])*r,n=(n+1)*r;return this._average=o/n,this._average}absDev(){let e=0;for(let t=0,r=this._history.length;t<r;t++)e+=Math.abs(this._history[t]-this._average);return e/this._history.length}}class Ve{constructor(e={}){Ve.prototype.__init.call(this),this._freeList=[],this._freeCount=0,this._borrowRate=0,this._returnRate=0,this._flowRate=0,this._borrowRateAverage=0,this._reserveCount=e.reserve||0,this._capacityRatio=e.capacityRatio||1.2,this._decayRatio=e.decayRatio||.67,this._marginAverage=0,this._borrowRateAverageProvider=new xt(128,this._decayRatio),this._marginAverageProvider=new xt(128,this._decayRatio)}get capacity(){return this._freeList.length}set capacity(e){this._freeList.length=Math.ceil(e)}allocate(){return++this._borrowRate,++this._flowRate,this._freeCount>0?this._freeList[--this._freeCount]:this.create()}allocateArray(e){let t,r;Array.isArray(e)?(t=e,r=e.length):(r=e,t=new Array(r)),this._borrowRate+=r,this._flowRate+=r;let s=0;if(this._freeCount>0){const o=this._freeList,n=Math.min(this._freeCount,r);let a=this._freeCount;for(let l=0;l<n;l++)t[s]=o[a-1],++s,--a;this._freeCount=a}for(;s<r;)t[s]=this.create(),++s;return t}release(e){++this._returnRate,--this._flowRate,this._freeCount===this.capacity&&(this.capacity*=this._capacityRatio),this._freeList[this._freeCount]=e,++this._freeCount}releaseArray(e){this._returnRate+=e.length,this._flowRate-=e.length,this._freeCount+e.length>this.capacity&&(this.capacity=Math.max(this.capacity*this._capacityRatio,this._freeCount+e.length));for(let t=0,r=e.length;t<r;t++)this._freeList[this._freeCount]=e[t],++this._freeCount}reserve(e){if(this._reserveCount=e,this._freeCount<e){const t=this._freeCount-e;for(let r=0;r<t;r++)this._freeList[this._freeCount]=this.create(),++this._freeCount}}limit(e){if(this._freeCount>e){this.capacity>e*this._capacityRatio&&(this.capacity=e*this._capacityRatio);const r=Math.min(this._freeCount,this.capacity);for(let s=e;s<r;s++)this._freeList[s]=null}}startGC(e=rt.shared){e.add(this._gcTick,null,ar.UTILITY)}stopGC(e=rt.shared){e.remove(this._gcTick)}__init(){this._gcTick=()=>{this._borrowRateAverage=this._borrowRateAverageProvider.next(this._borrowRate),this._marginAverage=this._marginAverageProvider.next(this._freeCount-this._borrowRate);const e=this._borrowRateAverageProvider.absDev();this._flowRate=0,this._borrowRate=0,this._returnRate=0;const t=this._freeCount,r=this._freeList.length;if(t<128&&this._borrowRateAverage<128&&r<128)return;const s=Math.max(this._borrowRateAverage*(this._capacityRatio-1),this._reserveCount);if(this._freeCount>s+e){const o=s+e;this.capacity=Math.min(this._freeList.length,Math.ceil(o)),this._freeCount=this._freeList.length}}}}var Ke;const vt=new Map;class ur{static build(e){let t=vt.get(e);return t||(t=new class extends Ve{create(){return new e}},vt.set(e,t),t)}static buildFunctional(e){return new(Ke=class extends Ve{constructor(...r){super(...r),Ke.prototype.__init.call(this)}__init(){this.create=e}},Ke)}}const yt={color:16777215,outlineColor:0,outlineThickness:1,radius:8,shape:"tooth"},Ha=ae;class qa extends Ha{constructor(e,t,r={},s,o,n){super(),this.transformer=e;const a=Object.assign({},yt,r);this._handle=t,this._style=a,this.onHandleDelta=s,this.onHandleCommit=o,this._dirty=!0,this.interactive=!0,this.cursor=n||"move",this._pointerDown=!1,this._pointerDragging=!1,this._pointerPosition=new _,this._pointerMoveTarget=null,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onpointerdown=this.onPointerDown,this.onpointermove=this.onPointerMove,this.onpointerup=this.onPointerUp,this.onpointerupoutside=this.onPointerUp}get handle(){return this._handle}set handle(e){this._handle=e,this._dirty=!0}get style(){return this._style}set style(e){this._style=Object.assign({},yt,e),this._dirty=!0}render(e){this._dirty&&(this.draw(),this._dirty=!1),super.render(e)}draw(){const e=this._handle,t=this._style,r=t.radius;if(this.clear().lineStyle(t.outlineThickness,t.outlineColor).beginFill(t.color),t.shape==="square")this.drawRect(-r/2,-r/2,r,r);else if(t.shape==="tooth")switch(e){case"middleLeft":this.drawPolygon([-r/2,-r/2,-r/2,r/2,r/2,r/2,r*1.1,0,r/2,-r/2]);break;case"topCenter":this.drawPolygon([-r/2,-r/2,r/2,-r/2,r/2,r/2,0,r*1.1,-r/2,r/2]);break;case"middleRight":this.drawPolygon([-r/2,r/2,-r*1.1,0,-r/2,-r/2,r/2,-r/2,r/2,r/2]);break;case"bottomCenter":this.drawPolygon([0,-r*1.1,r/2,-r/2,r/2,r/2,-r/2,r/2,-r/2,-r/2]);break;case"rotator":this.drawCircle(0,0,r/Math.sqrt(2));break;default:this.drawRect(-r/2,-r/2,r,r);break}else this.drawCircle(0,0,r);this.endFill()}onPointerDown(e){this._pointerDown=!0,this._pointerDragging=!1,e.stopPropagation(),this._pointerMoveTarget&&(this._pointerMoveTarget.removeEventListener("globalpointermove",this.onPointerMove),this._pointerMoveTarget=null),this._pointerMoveTarget=this.transformer.stage||this,this._pointerMoveTarget.addEventListener("globalpointermove",this.onPointerMove)}onPointerMove(e){this._pointerDown&&(this._pointerDragging?this.onDrag(e):this.onDragStart(e),e.stopPropagation())}onPointerUp(e){this._pointerDragging&&this.onDragEnd(e),this._pointerDown=!1,this._pointerMoveTarget&&(this._pointerMoveTarget.removeEventListener("globalpointermove",this.onPointerMove),this._pointerMoveTarget=null)}onDragStart(e){this._pointerPosition.copyFrom(e.data.global),this._pointerDragging=!0}onDrag(e){const t=e.data.global;this.onHandleDelta&&this.onHandleDelta(t),this._pointerPosition.copyFrom(t)}onDragEnd(e){this._pointerDragging=!1,this.onHandleCommit&&this.onHandleCommit()}}function Ee(i,e,t,r){const{x:s,y:o}=t,{x:n,y:a}=r;if(Math.abs(n-s)<.01)return Math.abs(i-s);if(Math.abs(a-o)<.01)return Math.abs(e-o);const l=(a-o)/(n-s);return Math.abs((l*i-e+(a-l*n))/Math.sqrt(l*l+1))}const _t=ur.build(_),$a=[new _,new _,new _,new _],Xa=new Z,ce=new _,Ya=[0,0,0,1,-1,1,-1,-1,1,-1,1,0],Wa=[0,0,-1,0,-1,-1,1,-1,1,1,0,1],Ka=[0,0,1,0,1,1,-1,1,-1,-1,0,-1],Qa=[0,0,0,-1,1,-1,1,1,-1,1,-1,0],Qe=new Array(12),Za=[Ya,Wa,Ka,Qa],Ja=ae;class el extends Ja{constructor(e){super(),this.transformer=e,this.boxScalingHandles=[this.addChild(new ae),this.addChild(new ae),this.addChild(new ae),this.addChild(new ae)],this.boxScalingHandles.forEach(t=>{t.interactive=!0}),this.boxScalingHandles[0].cursor=xe.topCenter,this.boxScalingHandles[1].cursor=xe.middleRight,this.boxScalingHandles[2].cursor=xe.bottomCenter,this.boxScalingHandles[3].cursor=xe.middleLeft}hitHandleType(e,t,r){const{boxRotationEnabled:s,boxRotationTolerance:o,boxScalingEnabled:n,boxScalingTolerance:a}=this.transformer,[l,u,h,c]=e.hull,{x:f,y:d}=t.applyInverse(r,ce);if(n){const m=Ee(f,d,l,u)*t.d,p=Ee(f,d,l,c)*t.a,v=Ee(f,d,u,h)*t.a,x=Ee(f,d,c,h)*t.d,g=Math.min(m,p,v,x);if(g<a)switch(g){case m:return"topCenter";case p:return"middleLeft";case v:return"middleRight";case x:return"bottomCenter"}}if(s&&!e.contains(f,d)){const m=Math.sqrt((l.x-f)**2+(l.y-d)**2),p=Math.sqrt((u.x-f)**2+(u.y-d)**2),v=Math.sqrt((c.x-f)**2+(c.y-d)**2),x=Math.sqrt((h.x-f)**2+(h.y-d)**2),g=Math.min(m,p,v,x);if(g<o*1.45)switch(g){case m:return"boxRotateTopLeft";case p:return"boxRotateTopRight";case v:return"boxRotateBottomLeft";case x:return"boxRotateBottomRight"}}return null}drawBounds(e){const t=$a;for(let r=0;r<4;r++)this.transformer.projectToLocal(e.hull[r],t[r]);this.drawPolygon(t)}drawBoxScalingTolerance(e,t=this.transformer.boxScalingTolerance){e.innerBounds.pad(-t);const r=_t.allocateArray(4);r.forEach((o,n)=>{this.projectToLocal(e.hull[n],o)}),e.innerBounds.pad(2.5*t);const s=_t.allocateArray(4);s.forEach((o,n)=>{this.projectToLocal(e.hull[n],o)}),e.innerBounds.pad(-1.5*this.transformer.boxScalingTolerance);for(let o=0;o<4;o++){const n=r[o],a=r[(o+1)%4],l=s[o],u=s[(o+1)%4];this.boxScalingHandles[o].clear().beginFill(16777215,1e-4).drawPolygon(n,l,u,a).endFill()}}drawBoxRotationTolerance(){const{boxRotateTopLeft:e,boxRotateTopRight:t,boxRotateBottomLeft:r,boxRotateBottomRight:s}=this.transformer.handleAnchors,o=this.transformer.boxRotationTolerance*2,n=Xa.identity().scale(o,o).rotate(this.transformer.getGroupBounds().rotation);for(let a=0;a<4;a++){const l=Za[a];let u;switch(a){case 0:u=e;break;case 1:u=t;break;case 2:u=r;break;case 3:u=s;break}for(let h=0;h<l.length;h+=2){const c=l[h],f=l[h+1];ce.set(c,f),n.apply(ce,ce),Qe[h]=ce.x+u.x,Qe[h+1]=ce.y+u.y}this.drawPolygon(Qe.slice())}}projectToLocal(e,t){return this.transformer.projectToLocal(e,t)}}const cr=new Z;function bt(i){const e=cr.identity();return e.c=Math.tan(i),e}function Tt(i){const e=cr.identity();return e.b=Math.tan(i),e}function hr(i,e,t,r=i.pivot){const s=e.a,o=e.b,n=e.c,a=e.d,l=-Math.atan2(-n,a),u=Math.atan2(o,s);return t=t??u,i.pivot.set(r.x,r.y),i.rotation=t,i.skew.x=t+l,i.skew.y=-t+u,i.scale.x=Math.sqrt(s*s+o*o),i.scale.y=Math.sqrt(n*n+a*a),i.position.x=e.tx+(r.x*e.a+r.y*e.c),i.position.y=e.ty+(r.x*e.b+r.y*e.d),i}const Re=new Z,tl=new Z;function rl(i,e,t){if(!t){const o=i.parent?i.parent:i.enableTempParent();i.updateTransform(),i.disableTempParent(o)}const r=i.worldTransform,s=i.parent?tl.copyFrom(i.parent.worldTransform):Z.IDENTITY;Re.copyFrom(r),Re.prepend(e),Re.prepend(s.invert()),hr(i.transform,Re)}const Me=new nr,il=[new _,new _,new _,new _],he=new Z,fe=new _,Ze=new Le,ol=new ir,Ct=[new _,new _,new _,new _],wt=new _,St=new Z,Ae=ur.build(_),xe={topLeft:"nw-resize",topCenter:"n-resize",topRight:"ne-resize",middleLeft:"w-resize",middleRight:"e-resize",bottomLeft:"sw-resize",bottomCenter:"s-resize",bottomRight:"se-resize"},Ne=["topLeft","topCenter","topRight","middleLeft","middleCenter","middleRight","bottomLeft","bottomCenter","bottomRight"],Et={topLeft:{x:-1,y:-1},topCenter:{x:0,y:-1},topRight:{x:1,y:-1},middleLeft:{x:-1,y:0},middleCenter:{x:0,y:0},middleRight:{x:1,y:0},bottomLeft:{x:-1,y:1},bottomCenter:{x:0,y:1},bottomRight:{x:1,y:1}},sl=[...Ne,"rotator","skewHorizontal","skewVertical"],nl=4,al=16,ll=[Math.PI/4,Math.PI/2,Math.PI*3/4,Math.PI,0,-Math.PI/4,-Math.PI/2,-Math.PI*3/4,-Math.PI],ul=Math.PI/90,cl=[Math.PI/4,-Math.PI/4],hl=Math.PI/90,Rt={color:0,thickness:2},fl=rr;let dl=class q extends fl{constructor(e={}){super(),q.prototype.__init.call(this),q.prototype.__init2.call(this),q.prototype.__init3.call(this),q.prototype.__init4.call(this),q.prototype.__init5.call(this),this.interactive=!0,this.cursors=Object.assign({default:"move"},e.cursors),this.cursor=this.cursors.default,this.boundingBoxes=e.boundingBoxes||"all",this.group=e.group||[],this.boxRotationTolerance=e.boxRotationTolerance||al,this.boxScalingTolerance=e.boxScalingTolerance||nl,this.centeredScaling=!!e.centeredScaling,this.projectionTransform=new Z,this.lockAspectRatio=e.lockAspectRatio===!0,this.rotationSnaps=e.rotationSnaps||ll,this.rotationSnapTolerance=e.rotationSnapTolerance!==void 0?e.rotationSnapTolerance:ul,this.skewRadius=e.skewRadius||64,this.skewSnaps=e.skewSnaps||cl,this.skewSnapTolerance=e.skewSnapTolerance!==void 0?e.skewSnapTolerance:hl,this.boxRotationEnabled=e.boxRotationEnabled===!0,this.boxScalingEnabled=e.boxScalingEnabled===!0,this._rotateEnabled=e.rotateEnabled!==!1,this._scaleEnabled=e.scaleEnabled!==!1,this._skewEnabled=e.skewEnabled===!0,this.translateEnabled=e.translateEnabled!==!1,this.transientGroupTilt=e.transientGroupTilt!==void 0?e.transientGroupTilt:!0,this.wireframe=this.addChild(new el(this)),this.wireframe.cursor="none",this.stage=e.stage||null,this._skewX=0,this._skewY=0,this._transformType="none",this._wireframeStyle=Object.assign({},Rt,e.wireframeStyle||{});const t=e.handleConstructor||qa,r=e.handleStyle||{};this._handleStyle=r;const s={rotator:this.addChild(new t(this,"rotator",r,a=>{this.rotateGroup("rotator",a)},this.commitGroup))},o=Ne.reduce((a,l)=>{const u=new t(this,l,r,null,this.commitGroup,xe[l]);return u.onHandleDelta=h=>{this.scaleGroup(u.handle,h)},u.visible=this._scaleEnabled,a[l]=u,this.addChild(a[l]),a},{}),n={skewHorizontal:this.addChild(new t(this,"skewHorizontal",r,a=>{this.skewGroup("skewHorizontal",a)},this.commitGroup,"pointer")),skewVertical:this.addChild(new t(this,"skewVertical",r,a=>{this.skewGroup("skewVertical",a)},this.commitGroup,"pointer"))};this.handles=Object.assign({},o,s,n),this.handles.middleCenter.visible=!1,this.handles.skewHorizontal.visible=this._skewEnabled,this.handles.skewVertical.visible=this._skewEnabled,this.handleAnchors={rotator:new _,boxRotateTopLeft:new _,boxRotateTopRight:new _,boxRotateBottomLeft:new _,boxRotateBottomRight:new _,topLeft:new _,topCenter:new _,topRight:new _,middleLeft:new _,middleCenter:new _,middleRight:new _,bottomLeft:new _,bottomCenter:new _,bottomRight:new _,skewHorizontal:new _,skewVertical:new _},this.groupBounds=new Le,this.updateGroupBounds(),this._pointerDown=!1,this._pointerDragging=!1,this._pointerPosition=new _,this._pointerMoveTarget=null,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.addEventListener("pointerdown",this.onPointerDown),this.addEventListener("pointerup",this.onPointerUp),this.addEventListener("pointerupoutside",this.onPointerUp)}get enabledHandles(){return this._enabledHandles}set enabledHandles(e){!this._enabledHandles&&!e||(this._enabledHandles=e,sl.forEach(t=>{this.handles[t].visible=!1}),e?e.forEach(t=>{this.handles[t].visible=!0}):(this.handles.rotator.visible=this._rotateEnabled,this.handles.skewHorizontal.visible=this._skewEnabled,this.handles.skewVertical.visible=this._skewEnabled,Ne.forEach(t=>{t!=="middleCenter"&&(this.handles[t].visible=this._scaleEnabled)})))}get handleStyle(){return this._handleStyle}set handleStyle(e){const t=this.handles;for(const r in t)t[r].style=e;this._handleStyle=e}get rotateEnabled(){return this._rotateEnabled}set rotateEnabled(e){if(this._rotateEnabled!==e){if(this._rotateEnabled=e,this._enabledHandles)return;this.handles.rotator.visible=e}}get scaleEnabled(){return this._scaleEnabled}set scaleEnabled(e){if(this._scaleEnabled!==e){if(this._scaleEnabled=e,this._enabledHandles)return;Ne.forEach(t=>{t!=="middleCenter"&&(this.handles[t].visible=e)})}}get skewEnabled(){return this._skewEnabled}set skewEnabled(e){if(this._skewEnabled!==e){if(this._skewEnabled=e,this._enabledHandles)return;this.handles.skewHorizontal.visible=e,this.handles.skewVertical.visible=e}}get transformType(){return this._transformType}get wireframeStyle(){return this._wireframeStyle}set wireframeStyle(e){this._wireframeStyle=Object.assign({},Rt,e)}getGroupBounds(e=!1){return e&&this.updateGroupBounds(),this.groupBounds}__init(){this.translateGroup=e=>{this._transformHandle=null,this._transformType="translate";const t=he.identity().translate(e.x,e.y);this.prependTransform(t)}}__init2(){this.rotateGroup=(e,t)=>{this._transformHandle=e,this._transformType="rotate";const r=this.groupBounds,s=this.worldTransform.apply(this.handleAnchors[e],fe);this.projectionTransform.applyInverse(s,s),t=this.projectionTransform.applyInverse(t,wt);const o=r.center,n=Math.atan2(s.y-o.y,s.x-o.x);let l=Math.atan2(t.y-o.y,t.x-o.x)-n,u=this.groupBounds.rotation+l;u=this.snapAngle(u,this.rotationSnapTolerance,this.rotationSnaps),l=u-this.groupBounds.rotation;const h=he.identity().translate(-o.x,-o.y).rotate(l).translate(o.x,o.y);this.prependTransform(h,!0),this.updateGroupBounds(u),this._skewX+=l,this._skewY+=l}}__init3(){this.scaleGroup=(e,t)=>{this._transformHandle=e,this._transformType="scale";const r=Et[e].x,s=Et[e].y,o=this.handles,n=this.groupBounds,a=n.rotation,l=n.innerBounds,u=this.worldTransform.apply(this.handleAnchors[e],fe);this.projectionTransform.applyInverse(u,u),t=this.projectionTransform.applyInverse(t,wt);const h=t.x-u.x,c=t.y-u.y,f=(n.topRight.x-n.topLeft.x)/l.width,d=(n.topRight.y-n.topLeft.y)/l.width,m=(n.bottomLeft.x-n.topLeft.x)/l.height,p=(n.bottomLeft.y-n.topLeft.y)/l.height,v=h*f+c*d,x=h*m+c*p;let g=1+v*r/l.width,y=1+x*s/l.height;this.lockAspectRatio&&(e==="topLeft"||e==="topRight"||e==="bottomLeft"||e==="bottomRight")&&(g>y?y=g:g=y);const E=he.identity();if(r!==0&&g!==0){const w=this.centeredScaling?n.center:r===1?n.topLeft:n.topRight;E.translate(-w.x,-w.y).rotate(-a).scale(g,1).rotate(a).translate(w.x,w.y)}if(s!==0&&y!==0){const w=this.centeredScaling?n.center:s===1?n.topLeft:n.bottomLeft;E.translate(-w.x,-w.y).rotate(-a).scale(1,y).rotate(a).translate(w.x,w.y)}if((y<0||g<0)&&!(y<0&&g<0))switch(e){case"topLeft":case"bottomLeft":this.swapHandles(o.topLeft,o.bottomLeft);break;case"topCenter":case"bottomCenter":this.swapHandles(o.topCenter,o.bottomCenter);break;case"topRight":case"bottomRight":this.swapHandles(o.topRight,o.bottomRight);break}this.prependTransform(E)}}__init4(){this.skewGroup=(e,t)=>{this._transformHandle=e,this._transformType="skew";const r=this.groupBounds,s=fe.copyFrom(t);this.projectionTransform.applyInverse(s,s);const o=r.center,n=he.identity().translate(-o.x,-o.y);let a=this.groupBounds.rotation;if(e==="skewHorizontal"){const l=this._skewX;this._skewX=Math.atan2(s.y-o.y,s.x-o.x),this._skewX=this.snapAngle(this._skewX,this.skewSnapTolerance,this.skewSnaps),n.prepend(Tt(-l)),n.prepend(Tt(this._skewX))}else{const l=this._skewY,u=Math.atan2(s.y-o.y,s.x-o.x)-Math.PI/2;this._skewY=u,this._skewY=this.snapAngle(this._skewY,this.skewSnapTolerance,this.skewSnaps),n.prepend(bt(l)),n.prepend(bt(-this._skewY)),a-=this._skewY-l}n.translate(o.x,o.y),this.prependTransform(n,!0),this.updateGroupBounds(a)}}__init5(){this.commitGroup=()=>{this._transformHandle=null,this._transformType="none",this.transientGroupTilt!==!1&&this.group.length>1&&this.updateGroupBounds(0),this.emit("transformcommit")}}render(e){this.renderable&&this.visible&&(!this.lazyMode||this.lazyDirty)&&this.draw(),super.render(e)}draw(){const e=this.group,{color:t,thickness:r}=this._wireframeStyle;this.wireframe.clear(),this.boundingBoxes!=="none"&&this.wireframe.lineStyle(r,t),this.translateEnabled&&this.wireframe.beginFill(16777215,1e-4);for(let o=0,n=e.length;o<n&&this.boundingBoxes==="all";o++)this.wireframe.drawBounds(q.calculateOrientedBounds(e[o],Ze));const s=e.length!==1?q.calculateGroupOrientedBounds(e,this.groupBounds.rotation,Ze,!0):q.calculateOrientedBounds(e[0],Ze);this.wireframe.drawBounds(s),this.drawHandles(s),this.groupBounds.copyFrom(s),this.boxRotationEnabled&&(this.wireframe.closePath().beginFill(16777215,1e-4).lineStyle(),this.wireframe.drawBoxRotationTolerance()),this.boxScalingEnabled&&(this.wireframe.closePath().beginFill(16773375,1e-4).lineStyle(),this.wireframe.drawBoxScalingTolerance(s)),this.lazyDirty=!1}drawHandles(e){const t=this.handles,r=this.handleAnchors,{topLeft:s,topRight:o,bottomLeft:n,bottomRight:a,center:l}=e,[u,h,c,f]=Ct,d=fe;if(this.projectToLocal(s,u),this.projectToLocal(o,h),this.projectToLocal(n,c),this.projectToLocal(a,f),this.projectToLocal(l,d),r.topLeft.copyFrom(u),r.topCenter.set((u.x+h.x)/2,(u.y+h.y)/2),r.topRight.copyFrom(h),r.middleLeft.set((u.x+c.x)/2,(u.y+c.y)/2),r.middleCenter.set((u.x+f.x)/2,(u.y+f.y)/2),r.middleRight.set((h.x+f.x)/2,(h.y+f.y)/2),r.bottomLeft.copyFrom(c),r.bottomCenter.set((c.x+f.x)/2,(c.y+f.y)/2),r.bottomRight.copyFrom(f),this.boxRotationEnabled&&(r.boxRotateTopLeft.copyFrom(r.topLeft),r.boxRotateTopRight.copyFrom(r.topRight),r.boxRotateBottomLeft.copyFrom(r.bottomLeft),r.boxRotateBottomRight.copyFrom(r.bottomRight)),this._rotateEnabled){const m=(u.x+h.x)/2,p=(u.y+h.y)/2;let v=-(u.y-h.y),x=u.x-h.x;const g=Math.sqrt(v*v+x*x);v*=32/g,x*=32/g,t.rotator.position.x=m+v,t.rotator.position.y=p+x,this.wireframe.moveTo(m,p).lineTo(t.rotator.position.x,t.rotator.position.y),this.handleAnchors.rotator.copyFrom(t.rotator.position)}if(this._skewEnabled){const m=d.x,p=d.y;this.worldTransform.apply(d,d),r.skewHorizontal.set(d.x+Math.cos(this._skewX)*this.skewRadius,d.y+Math.sin(this._skewX)*this.skewRadius),r.skewVertical.set(d.x+-Math.sin(this._skewY)*this.skewRadius,d.y+Math.cos(this._skewY)*this.skewRadius),this.worldTransform.applyInverse(r.skewHorizontal,r.skewHorizontal),this.worldTransform.applyInverse(r.skewVertical,r.skewVertical),d.set(m,p),this.wireframe.beginFill(this.wireframeStyle.color).drawCircle(d.x,d.y,this.wireframeStyle.thickness*2).endFill(),this.wireframe.moveTo(d.x,d.y).lineTo(t.skewHorizontal.x,t.skewHorizontal.y).moveTo(d.x,d.y).lineTo(t.skewVertical.x,t.skewVertical.y)}for(const m in t){let p=this.groupBounds.rotation;m==="skewHorizontal"?p=this._skewX:m==="skewVertical"&&(p=this._skewY);const v=t[m];v.rotation=p,v.position.copyFrom(r[m]),v.getBounds(!1,ol)}}onPointerDown(e){this._pointerDown=!0,this._pointerDragging=!1,e.stopPropagation(),this._pointerMoveTarget&&(this._pointerMoveTarget.removeEventListener("globalpointermove",this.onPointerMove),this._pointerMoveTarget=null),this._pointerMoveTarget=this.stage||this,this._pointerMoveTarget.addEventListener("globalpointermove",this.onPointerMove)}onPointerMove(e){const t=this._pointerPosition,r=Ae.allocate().copyFrom(e.data.global),s=this.wireframe.hitHandleType(this.groupBounds,this.projectionTransform,r);if(!this._pointerDown)this.setCursorFromHoveredHandle(s);else{const o=r.x,n=r.y;if(this._pointerDragging)switch(this._transformHandle){case"boxRotateTopLeft":case"boxRotateTopRight":case"boxRotateBottomLeft":case"boxRotateBottomRight":this.rotateGroup(this._transformHandle,r);break;case"topCenter":case"middleLeft":case"middleRight":case"bottomCenter":this.scaleGroup(this._transformHandle,r);break;default:if(this.translateEnabled){const[a,l,u]=Ct;a.set(0,0),l.set(r.x-t.x,r.y-t.y),this.projectionTransform.applyInverse(a,a),this.projectionTransform.applyInverse(l,l),u.set(l.x-a.x,l.y-a.y),this.translateGroup(u)}}else this._transformHandle=this.wireframe.hitHandleType(this.groupBounds,this.projectionTransform,r),this.setCursorFromHoveredHandle(s);this._pointerPosition.x=o,this._pointerPosition.y=n,this._pointerDragging=!0,e.stopPropagation()}Ae.release(r)}onPointerUp(e){this._pointerDragging=!1,this._pointerDown=!1,this.commitGroup(),e.stopPropagation(),this._pointerMoveTarget&&(this._pointerMoveTarget.removeEventListener("globalpointermove",this.onPointerMove),this._pointerMoveTarget=null)}prependTransform(e,t=!1){const r=this.group;for(let s=0,o=r.length;s<o;s++)rl(r[s],e,!1);St.copyFrom(e),t||this.updateGroupBounds(),this.emit("transformchange",St)}updateGroupBounds(e=this.groupBounds.rotation){q.calculateGroupOrientedBounds(this.group,e,this.groupBounds),this.drawHandles(this.groupBounds),this.lazyDirty=!0}snapAngle(e,t,r){if(e=e%(Math.PI*2),!r||r.length===1||!t)return e;for(let s=0,o=r.length;s<o;s++)if(Math.abs(e-r[s])<=t)return r[s];return e}swapHandles(e,t){const r=e.handle,s=t.handle,o=e.cursor,n=t.cursor,a=e.x,l=t.x,u=e.y,h=t.y;e.handle=s,t.handle=r,e.position.set(l,h),t.position.set(a,u),e.cursor=n,t.cursor=o,this.handles[r]=t,this.handles[s]=e,this._transformHandle===r?this._transformHandle=s:this._transformHandle===s&&(this._transformHandle=r)}setCursorFromHoveredHandle(e){if(e&&e.startsWith("boxRotate"))this.cursor=this.cursors.boxRotate||this.cursors.default;else if(e)switch(e){case"topCenter":this.cursor=this.cursors.boxScaleTop||this.cursors.default;break;case"middleLeft":this.cursor=this.cursors.boxScaleLeft||this.cursors.default;break;case"middleRight":this.cursor=this.cursors.boxScaleRight||this.cursors.default;break;case"bottomCenter":this.cursor=this.cursors.boxScaleBottom||this.cursors.default;break}else this.cursor=this.cursors.translate||this.cursors.default}projectToLocal(e,t){return t||(t=new _),this.projectionTransform.apply(e,t),this.worldTransform.applyInverse(t,t),t}static calculateTransformedCorners(e,t=e.worldTransform,r,s=0){const o=e.getLocalBounds();return e.getBounds(),r=r||[new _,new _,new _,new _],r[s].set(o.x,o.y),r[s+1].set(o.x+o.width,o.y),r[s+2].set(o.x+o.width,o.y+o.height),r[s+3].set(o.x,o.y+o.height),t.apply(r[s],r[s]),t.apply(r[s+1],r[s+1]),t.apply(r[s+2],r[s+2]),t.apply(r[s+3],r[s+3]),r}static calculateOrientedBounds(e,t){const r=e.parent?e.parent:e.enableTempParent();e.updateTransform(),e.disableTempParent(r),hr(Me,e.worldTransform),Me.updateLocalTransform();const s=Me.rotation,o=q.calculateTransformedCorners(e,e.worldTransform,il),n=(o[0].x+o[1].x+o[2].x+o[3].x)/4,a=(o[0].y+o[1].y+o[2].y+o[3].y)/4,l=he.identity().translate(-n,-a).rotate(-Me.rotation).translate(n,a);return l.apply(o[0],o[0]),l.apply(o[1],o[1]),l.apply(o[2],o[2]),l.apply(o[3],o[3]),t=t||new Le,t.rotation=s,t.innerBounds.x=Math.min(o[0].x,o[1].x,o[2].x,o[3].x),t.innerBounds.y=Math.min(o[0].y,o[1].y,o[2].y,o[3].y),t.innerBounds.width=Math.max(o[0].x,o[1].x,o[2].x,o[3].x)-t.innerBounds.x,t.innerBounds.height=Math.max(o[0].y,o[1].y,o[2].y,o[3].y)-t.innerBounds.y,t}static calculateGroupOrientedBounds(e,t,r,s=!1){const o=e.length,n=Ae.allocateArray(o*4);for(let f=0;f<o;f++){const d=e[f];if(!s){const m=d.parent?d.parent:d.enableTempParent();d.updateTransform(),d.disableTempParent(m)}q.calculateTransformedCorners(d,d.worldTransform,n,f*4)}const a=he.identity().rotate(-t);let l=Number.MAX_VALUE,u=Number.MAX_VALUE,h=-Number.MAX_VALUE,c=-Number.MAX_VALUE;for(let f=0,d=n.length;f<d;f++){const m=n[f];a.apply(m,m);const p=m.x,v=m.y;l=p<l?p:l,u=v<u?v:u,h=p>h?p:h,c=v>c?v:c}return Ae.releaseArray(n),r=r||new Le,r.innerBounds.x=l,r.innerBounds.y=u,r.innerBounds.width=h-l,r.innerBounds.height=c-u,r.rotation=t,a.applyInverse(r.center,fe),r.center.copyFrom(fe),r}};function ml(i,e,t,r){for(const s in e){const o=t[s],n=r[s],a=e[s];o!==n&&(o&&i.off(a,o),n&&i.on(a,n))}}const Pe={},pl=Z.IDENTITY,gl={transformchange:"transformchange",transformcommit:"transformcommit"},xl=Q.PixiComponent("Transformer",{create:i=>new dl(i),applyProps(i,e,t){if(Q.applyDefaultProps(i,e,t),ml(i,gl,e,t),t.cursors&&Object.assign(i.cursors,t.cursors),i.group=t.group||[],i.boundingBoxes=t.boundingBoxes||"all",i.boxScalingEnabled=t.boxScalingEnabled===!0,i.boxScalingTolerance=t.boxScalingTolerance!==void 0?t.boxScalingTolerance:i.boxScalingTolerance,i.boxRotationEnabled=t.boxRotationEnabled===!0,i.boxRotationTolerance=t.boxRotationTolerance!==void 0?t.boxRotationTolerance:i.boxRotationTolerance,i.centeredScaling=t.centeredScaling,i.enabledHandles=t.enabledHandles,i.lockAspectRatio=t.lockAspectRatio,i.projectionTransform.copyFrom(t.projectionTransform||pl),i.skewRadius=t.skewRadius||i.skewRadius,i.rotateEnabled=t.rotateEnabled!==!1,i.scaleEnabled=t.scaleEnabled!==!1,i.skewEnabled=t.skewEnabled===!0,i.translateEnabled=t.translateEnabled!==!1,i.transientGroupTilt=t.transientGroupTilt,e.handleConstructor!==t.handleConstructor)throw new Error("Transformer does not support changing the TransformerHandleConstructor!");e.rotationSnaps!==t.rotationSnaps&&(i.rotationSnaps=t.rotationSnaps),e.rotationSnapTolerance!==t.rotationSnapTolerance&&(i.rotationSnapTolerance=t.rotationSnapTolerance),e.skewSnaps!==t.skewSnaps&&(i.skewSnaps=t.skewSnaps),e.skewSnapTolerance!==t.skewSnapTolerance&&(i.skewSnapTolerance=t.skewSnapTolerance);const r=e.handleStyle||Pe,s=t.handleStyle||Pe;(r.color!==s.color||r.outlineColor!==s.outlineColor||r.outlineThickness!==s.outlineThickness||r.radius!==s.radius||r.shape!==s.shape)&&(i.handleStyle=s);const o=e.wireframeStyle||Pe,n=t.wireframeStyle||Pe;(o.color!==n.color||o.thickness!==n.thickness)&&(i.wireframeStyle=n)}}),ot=({pixiTransformerRef:i,imageRef:e,isMounted:t,transformCommit:r,transformChange:s,mouseoverEvent:o,onDoubleClick:n,uniqueId:a="",isText:l=!1})=>{const u=tt("#F3C409"),h=tt("#F3C409"),c=S.useRef({isDragging:!1}),f=300,d=S.useRef(0),m=S.useCallback(()=>{o&&!c.current.isDragging&&o(!0)},[o]),p=S.useCallback(()=>{o&&!c.current.isDragging&&o(!1)},[o]),v=S.useCallback(()=>{c.current.isDragging=!0;const y=new Date().getTime();y-d.current<f&&n&&n(),d.current=y},[]),x=S.useCallback(y=>{c.current.isDragging=!0,s&&s(y),pt(it.TRANSFORMER_DRAG_START,{uniqueId:"timeline"})},[s]),g=S.useCallback(()=>{if(e.current===null)return;const y=e.current.x,R=e.current.y,E=e.current.width,w=e.current.height,I=e.current.rotation,F=[e.current.scale.x,e.current.scale.y],O=F[0]<0?-1:1,A=F[1]<0?-1:1;r&&(r({uniqueId:a,transformation:{x:Math.round(y),y:Math.round(R),width:Math.round(Math.max(5,E)),height:Math.round(Math.max(5,w)),rotation:I,scale:l?F:[O,A]}}),pt(it.TRANSFORMER_DRAG_END,{uniqueId:"timeline"})),c.current.isDragging=!1},[r]);return S.useEffect(()=>(i.current&&(i.current.on("mouseover",m),i.current.on("mouseout",p),i.current.on("mousedown",v)),()=>{i.current&&(i.current.off("mouseover",m),i.current.off("mouseout",p),i.current.off("mousedown",v))}),[]),ee.jsx(xl,{ref:i,group:t?[e.current]:[],rotateEnabled:!0,boxRotationEnabled:!0,centeredScaling:!0,boxScalingEnabled:!0,wireframeStyle:{thickness:2,color:h},lockAspectRatio:!0,scaleEnabled:!0,handleStyle:{outlineColor:u,shape:"circle",radius:10},transformchange:x,transformcommit:g})};try{ot.displayName="PixiTransformer",ot.__docgenInfo={description:"Initialize PixiTransformer to transform the image",displayName:"PixiTransformer",props:{pixiTransformerRef:{defaultValue:null,description:"",name:"pixiTransformerRef",required:!0,type:{name:"MutableRefObject<any>"}},imageRef:{defaultValue:null,description:"",name:"imageRef",required:!0,type:{name:"MutableRefObject<any>"}},isMounted:{defaultValue:null,description:"",name:"isMounted",required:!0,type:{name:"boolean"}},transformCommit:{defaultValue:null,description:"",name:"transformCommit",required:!1,type:{name:"((data: any) => void)"}},transformChange:{defaultValue:null,description:"",name:"transformChange",required:!1,type:{name:"((data: any) => void)"}},mouseoverEvent:{defaultValue:null,description:"",name:"mouseoverEvent",required:!1,type:{name:"((flag: boolean) => void)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"(() => void)"}},uniqueId:{defaultValue:{value:""},description:"",name:"uniqueId",required:!1,type:{name:"string"}},isText:{defaultValue:{value:"false"},description:"",name:"isText",required:!1,type:{name:"boolean"}}}}}catch{}var vl=Da;function yl(i,e){return vl(i,e)}var _l=yl;const bl=Fa(_l),Tl=(i,e)=>{const t=S.useRef(!0),r=S.useRef(e);S.useEffect(()=>{const s=r.current.every((o,n)=>bl(o,e[n]));(t.current||!s)&&i(),t.current=!1,r.current=e},e)};function Cl(i,e=700){const[t,r]=S.useState(i);return Tl(()=>{const s=setTimeout(()=>{r(i)},e);return()=>{clearTimeout(s)}},[i,e]),t}var st=(i=>(i.NONE="none",i.NORMAL="normal",i.LENSFLARE="lensflare",i.FILMSTRIP="filmstrip",i.GRUNGE="grunge",i.BRICKS="bricks",i))(st||{});const Mt={normal:{src:"https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/assets/overlays/eyecast_lensflare_overlay_50.jpg",blendmode:"ADD",alpha:0},lensflare:{src:"https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/assets/overlays/eyecast_lensflare_overlay_50.jpg",blendmode:"ADD",alpha:1},filmstrip:{src:"https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/assets/overlays/frames_filmstrip_5.png",blendmode:"ADD",alpha:1},grunge:{src:"https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/assets/overlays/pixi_overlay_grunge_60.jpg",blendmode:"ADD",alpha:1},bricks:{src:"https://eyecastvideoeditorfiles.s3.ap-southeast-2.amazonaws.com/assets/overlays/bricks_Overlay_100.jpg",blendmode:"MULTIPLY",alpha:1}},nt=i=>{const{overlay:e,width:t,height:r,x:s,y:o}=i,{src:n,blendmode:a}=Mt[e]||Mt.normal;return ee.jsx(Q.TilingSprite,{image:n,width:t,height:r,x:s,y:o,tilePosition:{x:0,y:0},tileScale:.5,alpha:.5,anchor:.5})};try{nt.displayName="PixiOverlayTilingSprite",nt.__docgenInfo={description:"",displayName:"PixiOverlayTilingSprite",props:{overlay:{defaultValue:null,description:"",name:"overlay",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"normal"'},{value:'"lensflare"'},{value:'"filmstrip"'},{value:'"grunge"'},{value:'"bricks"'}]}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"number"}}}}}catch{}/*!
 * paths 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wl=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Sl=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,El=Math.PI/180,Fe=Math.sin,De=Math.cos,ve=Math.abs,pe=Math.sqrt,Rl=function(e){return typeof e=="number"},At=1e5,ie=function(e){return Math.round(e*At)/At||0};function Ml(i,e,t,r,s,o,n){for(var a=i.length,l,u,h,c,f;--a>-1;)for(l=i[a],u=l.length,h=0;h<u;h+=2)c=l[h],f=l[h+1],l[h]=c*e+f*r+o,l[h+1]=c*t+f*s+n;return i._dirty=1,i}function Al(i,e,t,r,s,o,n,a,l){if(!(i===a&&e===l)){t=ve(t),r=ve(r);var u=s%360*El,h=De(u),c=Fe(u),f=Math.PI,d=f*2,m=(i-a)/2,p=(e-l)/2,v=h*m+c*p,x=-c*m+h*p,g=v*v,y=x*x,R=g/(t*t)+y/(r*r);R>1&&(t=pe(R)*t,r=pe(R)*r);var E=t*t,w=r*r,I=(E*w-E*y-w*g)/(E*y+w*g);I<0&&(I=0);var F=(o===n?-1:1)*pe(I),O=F*(t*x/r),A=F*-(r*v/t),N=(i+a)/2,H=(e+l)/2,J=N+(h*O-c*A),k=H+(c*O+h*A),D=(v-O)/t,B=(x-A)/r,b=(-v-O)/t,C=(-x-A)/r,M=D*D+B*B,j=(B<0?-1:1)*Math.acos(D/pe(M)),z=(D*C-B*b<0?-1:1)*Math.acos((D*b+B*C)/pe(M*(b*b+C*C)));isNaN(z)&&(z=f),!n&&z>0?z-=d:n&&z<0&&(z+=d),j%=d,z%=d;var Se=Math.ceil(ve(z)/(d/4)),K=[],ne=z/Se,ue=4/3*Fe(ne/2)/(1+De(ne/2)),$e=h*t,Xe=c*t,Ye=c*-r,We=h*r,U;for(U=0;U<Se;U++)s=j+U*ne,v=De(s),x=Fe(s),D=De(s+=ne),B=Fe(s),K.push(v-ue*x,x+ue*v,D+ue*B,B-ue*D,D,B);for(U=0;U<K.length;U+=2)v=K[U],x=K[U+1],K[U]=v*$e+x*Ye+J,K[U+1]=v*Xe+x*We+k;return K[U-2]=a,K[U-1]=l,K}}function Pl(i){var e=(i+"").replace(Sl,function(O){var A=+O;return A<1e-4&&A>-1e-4?0:A}).match(wl)||[],t=[],r=0,s=0,o=2/3,n=e.length,a=0,l="ERROR: malformed path: "+i,u,h,c,f,d,m,p,v,x,g,y,R,E,w,I,F=function(A,N,H,J){g=(H-A)/3,y=(J-N)/3,p.push(A+g,N+y,H-g,J-y,H,J)};if(!i||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(u=0;u<n;u++)if(E=d,isNaN(e[u])?(d=e[u].toUpperCase(),m=d!==e[u]):u--,c=+e[u+1],f=+e[u+2],m&&(c+=r,f+=s),u||(v=c,x=f),d==="M")p&&(p.length<8?t.length-=1:a+=p.length),r=v=c,s=x=f,p=[c,f],t.push(p),u+=2,d="L";else if(d==="C")p||(p=[0,0]),m||(r=s=0),p.push(c,f,r+e[u+3]*1,s+e[u+4]*1,r+=e[u+5]*1,s+=e[u+6]*1),u+=6;else if(d==="S")g=r,y=s,(E==="C"||E==="S")&&(g+=r-p[p.length-4],y+=s-p[p.length-3]),m||(r=s=0),p.push(g,y,c,f,r+=e[u+3]*1,s+=e[u+4]*1),u+=4;else if(d==="Q")g=r+(c-r)*o,y=s+(f-s)*o,m||(r=s=0),r+=e[u+3]*1,s+=e[u+4]*1,p.push(g,y,r+(c-r)*o,s+(f-s)*o,r,s),u+=4;else if(d==="T")g=r-p[p.length-4],y=s-p[p.length-3],p.push(r+g,s+y,c+(r+g*1.5-c)*o,f+(s+y*1.5-f)*o,r=c,s=f),u+=2;else if(d==="H")F(r,s,r=c,s),u+=1;else if(d==="V")F(r,s,r,s=c+(m?s-r:0)),u+=1;else if(d==="L"||d==="Z")d==="Z"&&(c=v,f=x,p.closed=!0),(d==="L"||ve(r-c)>.5||ve(s-f)>.5)&&(F(r,s,c,f),d==="L"&&(u+=2)),r=c,s=f;else if(d==="A"){if(w=e[u+4],I=e[u+5],g=e[u+6],y=e[u+7],h=7,w.length>1&&(w.length<3?(y=g,g=I,h--):(y=I,g=w.substr(2),h-=2),I=w.charAt(1),w=w.charAt(0)),R=Al(r,s,+e[u+1],+e[u+2],+e[u+3],+w,+I,(m?r:0)+g*1,(m?s:0)+y*1),u+=h,R)for(h=0;h<R.length;h++)p.push(R[h]);r=p[p.length-2],s=p[p.length-1]}else console.log(l);return u=p.length,u<6?(t.pop(),u=0):p[0]===p[u-2]&&p[1]===p[u-1]&&(p.closed=!0),t.totalPoints=a+u,t}function Fl(i){Rl(i[0])&&(i=[i]);var e="",t=i.length,r,s,o,n;for(s=0;s<t;s++){for(n=i[s],e+="M"+ie(n[0])+","+ie(n[1])+" C",r=n.length,o=2;o<r;o++)e+=ie(n[o++])+","+ie(n[o++])+" "+ie(n[o++])+","+ie(n[o++])+" "+ie(n[o++])+","+ie(n[o])+" ";n.closed&&(e+="z")}return e}/*!
 * CustomEase 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var V,fr,dr=function(){return V||typeof window<"u"&&(V=window.gsap)&&V.registerPlugin&&V},Pt=function(){V=dr(),V?(V.registerEase("_CE",we.create),fr=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Dl=1e20,Oe=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},Ol=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,Il=/[cLlsSaAhHvVtTqQ]/g,kl=function(e){var t=e.length,r=Dl,s;for(s=1;s<t;s+=6)+e[s]<r&&(r=+e[s]);return r},Ll=function(e,t,r){!r&&r!==0&&(r=Math.max(+e[e.length-1],+e[1]));var s=+e[0]*-1,o=-r,n=e.length,a=1/(+e[n-2]+s),l=-t||(Math.abs(+e[n-1]-+e[1])<.01*(+e[n-2]-+e[0])?kl(e)+o:+e[n-1]+o),u;for(l?l=1/l:l=-a,u=0;u<n;u+=2)e[u]=(+e[u]+s)*a,e[u+1]=(+e[u+1]+o)*l},Nl=function i(e,t,r,s,o,n,a,l,u,h,c){var f=(e+r)/2,d=(t+s)/2,m=(r+o)/2,p=(s+n)/2,v=(o+a)/2,x=(n+l)/2,g=(f+m)/2,y=(d+p)/2,R=(m+v)/2,E=(p+x)/2,w=(g+R)/2,I=(y+E)/2,F=a-e,O=l-t,A=Math.abs((r-a)*O-(s-l)*F),N=Math.abs((o-a)*O-(n-l)*F),H;return h||(h=[{x:e,y:t},{x:a,y:l}],c=1),h.splice(c||h.length-1,0,{x:w,y:I}),(A+N)*(A+N)>u*(F*F+O*O)&&(H=h.length,i(e,t,f,d,g,y,w,I,u,h,c),i(w,I,R,E,v,x,a,l,u,h,c+1+(h.length-H))),h},we=function(){function i(t,r,s){fr||Pt(),this.id=t,this.setData(r,s)}var e=i.prototype;return e.setData=function(r,s){s=s||{},r=r||"0,0,1,1";var o=r.match(Ol),n=1,a=[],l=[],u=s.precision||1,h=u<=1,c,f,d,m,p,v,x,g,y;if(this.data=r,(Il.test(r)||~r.indexOf("M")&&r.indexOf("C")<0)&&(o=Pl(r)[0]),c=o.length,c===4)o.unshift(0,0),o.push(1,1),c=8;else if((c-2)%6)throw"Invalid CustomEase";for((+o[0]!=0||+o[c-2]!=1)&&Ll(o,s.height,s.originY),this.segment=o,m=2;m<c;m+=6)f={x:+o[m-2],y:+o[m-1]},d={x:+o[m+4],y:+o[m+5]},a.push(f,d),Nl(f.x,f.y,+o[m],+o[m+1],+o[m+2],+o[m+3],d.x,d.y,1/(u*2e5),a,a.length-1);for(c=a.length,m=0;m<c;m++)x=a[m],g=a[m-1]||x,(x.x>g.x||g.y!==x.y&&g.x===x.x||x===g)&&x.x<=1?(g.cx=x.x-g.x,g.cy=x.y-g.y,g.n=x,g.nx=x.x,h&&m>1&&Math.abs(g.cy/g.cx-a[m-2].cy/a[m-2].cx)>2&&(h=0),g.cx<n&&(g.cx?n=g.cx:(g.cx=.001,m===c-1&&(g.x-=.001,n=Math.min(n,.001),h=0)))):(a.splice(m--,1),c--);if(c=1/n+1|0,p=1/c,v=0,x=a[0],h){for(m=0;m<c;m++)y=m*p,x.nx<y&&(x=a[++v]),f=x.y+(y-x.x)/x.cx*x.cy,l[m]={x:y,cx:p,y:f,cy:0,nx:9},m&&(l[m-1].cy=f-l[m-1].y);l[c-1].cy=a[a.length-1].y-f}else{for(m=0;m<c;m++)x.nx<m*p&&(x=a[++v]),l[m]=x;v<a.length-1&&(l[m-1]=a[a.length-2])}return this.ease=function(R){var E=l[R*c|0]||l[c-1];return E.nx<R&&(E=E.n),E.y+(R-E.x)/E.cx*E.cy},this.ease.custom=this,this.id&&V&&V.registerEase(this.id,this.ease),this},e.getSVGData=function(r){return i.getSVGData(this,r)},i.create=function(r,s,o){return new i(r,s,o).ease},i.register=function(r){V=r,Pt()},i.get=function(r){return V.parseEase(r)},i.getSVGData=function(r,s){s=s||{};var o=s.width||100,n=s.height||100,a=s.x||0,l=(s.y||0)+n,u=V.utils.toArray(s.path)[0],h,c,f,d,m,p,v,x,g,y;if(s.invert&&(n=-n,l=0),typeof r=="string"&&(r=V.parseEase(r)),r.custom&&(r=r.custom),r instanceof i)h=Fl(Ml([r.segment],o,0,0,-n,a,l));else{for(h=[a,l],v=Math.max(5,(s.precision||1)*200),d=1/v,v+=2,x=5/v,g=Oe(a+d*o),y=Oe(l+r(d)*-n),c=(y-l)/(g-a),f=2;f<v;f++)m=Oe(a+f*d*o),p=Oe(l+r(f*d)*-n),(Math.abs((p-y)/(m-g)-c)>x||f===v-1)&&(h.push(g,y),c=(p-y)/(m-g)),g=m,y=p;h="M"+h.join(",")}return u&&u.setAttribute("d",h),h},i}();dr()&&V.registerPlugin(we);we.version="3.11.5";/*!
 * PixiPlugin 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var se,Ft,je,W,ye,mr,at,pr=function(){return typeof window<"u"},gr=function(){return se||pr()&&(se=window.gsap)&&se.registerPlugin&&se},Dt=function(e){return typeof e=="function"},zl=function(e){return console.warn(e)},Bl=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],$=.212671,X=.71516,Y=.072169,qe=function(e,t){var r=[],s=0,o=0,n,a;for(n=0;n<4;n++){for(a=0;a<5;a++)o=a===4?e[s+4]:0,r[s+a]=e[s]*t[a]+e[s+1]*t[a+5]+e[s+2]*t[a+10]+e[s+3]*t[a+15]+o;s+=5}return r},Ot=function(e,t){var r=1-t,s=r*$,o=r*X,n=r*Y;return qe([s+t,o,n,0,0,s,o+t,n,0,0,s,o,n+t,0,0,0,0,0,1,0],e)},It=function(e,t,r){var s=je(t),o=s[0]/255,n=s[1]/255,a=s[2]/255,l=1-r;return qe([l+r*o*$,r*o*X,r*o*Y,0,0,r*n*$,l+r*n*X,r*n*Y,0,0,r*a*$,r*a*X,l+r*a*Y,0,0,0,0,0,1,0],e)},kt=function(e,t){t*=Math.PI/180;var r=Math.cos(t),s=Math.sin(t);return qe([$+r*(1-$)+s*-$,X+r*-X+s*-X,Y+r*-Y+s*(1-Y),0,0,$+r*-$+s*.143,X+r*(1-X)+s*.14,Y+r*-Y+s*-.283,0,0,$+r*-$+s*-(1-$),X+r*-X+s*X,Y+r*(1-Y)+s*Y,0,0,0,0,0,1,0,0,0,0,0,1],e)},Lt=function(e,t){return qe([t,0,0,0,.5*(1-t),0,t,0,0,.5*(1-t),0,0,t,0,.5*(1-t),0,0,0,1,0],e)},xr=function(e,t){var r=W.filters[t],s=e.filters||[],o=s.length,n;for(r||zl(t+" not found. PixiPlugin.registerPIXI(PIXI)");--o>-1;)if(s[o]instanceof r)return s[o];return n=new r,t==="BlurFilter"&&(n.blur=0),s.push(n),e.filters=s,n},L=function(e,t,r,s){t.add(r,e,r[e],s[e]),t._props.push(e)},Nt=function(e,t){var r=new W.filters.ColorMatrixFilter;return r.matrix=t,r.brightness(e,!0),r.matrix},Ul=function(e){var t={},r;for(r in e)t[r]=e[r];return t},G={contrast:1,saturation:1,colorizeAmount:0,colorize:"rgb(255,255,255)",hue:0,brightness:1},Vl=function(e,t,r){var s=xr(e,"ColorMatrixFilter"),o=e._gsColorMatrixFilter=e._gsColorMatrixFilter||Ul(G),n=t.combineCMF&&!("colorMatrixFilter"in t&&!t.colorMatrixFilter),a,l,u;for(u=s.matrix,t.resolution&&(s.resolution=t.resolution),t.matrix&&t.matrix.length===u.length?(l=t.matrix,o.contrast!==1&&L("contrast",r,o,G),o.hue&&L("hue",r,o,G),o.brightness!==1&&L("brightness",r,o,G),o.colorizeAmount&&(L("colorize",r,o,G),L("colorizeAmount",r,o,G)),o.saturation!==1&&L("saturation",r,o,G)):(l=Bl.slice(),t.contrast!=null?(l=Lt(l,+t.contrast),L("contrast",r,o,t)):o.contrast!==1&&(n?l=Lt(l,o.contrast):L("contrast",r,o,G)),t.hue!=null?(l=kt(l,+t.hue),L("hue",r,o,t)):o.hue&&(n?l=kt(l,o.hue):L("hue",r,o,G)),t.brightness!=null?(l=Nt(+t.brightness,l),L("brightness",r,o,t)):o.brightness!==1&&(n?l=Nt(o.brightness,l):L("brightness",r,o,G)),t.colorize!=null?(t.colorizeAmount="colorizeAmount"in t?+t.colorizeAmount:1,l=It(l,t.colorize,t.colorizeAmount),L("colorize",r,o,t),L("colorizeAmount",r,o,t)):o.colorizeAmount&&(n?l=It(l,o.colorize,o.colorizeAmount):(L("colorize",r,o,G),L("colorizeAmount",r,o,G))),t.saturation!=null?(l=Ot(l,+t.saturation),L("saturation",r,o,t)):o.saturation!==1&&(n?l=Ot(l,o.saturation):L("saturation",r,o,G))),a=l.length;--a>-1;)l[a]!==u[a]&&r.add(u,a,u[a],l[a],"colorMatrixFilter");r._props.push("colorMatrixFilter")},jl=function(e,t){var r=t.t,s=t.p,o=t.color,n=t.set;n(r,s,o[0]<<16|o[1]<<8|o[2])},Gl=function(e,t){var r=t.g;r&&(r.dirty++,r.clearDirty++)},Hl=function(e,t){t.t.visible=!!t.t.alpha},zt=function(e,t,r,s){var o=e[t],n=je(Dt(o)?e[t.indexOf("set")||!Dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)]():o),a=je(r);s._pt=new ye(s._pt,e,t,0,0,jl,{t:e,p:t,color:n,set:mr(e,t)}),s.add(n,0,n[0],a[0]),s.add(n,1,n[1],a[1]),s.add(n,2,n[2],a[2])},ql={tint:1,lineColor:1,fillColor:1},Bt="position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","),lt={x:"position",y:"position",tileX:"tilePosition",tileY:"tilePosition"},$l={colorMatrixFilter:1,saturation:1,contrast:1,hue:1,colorize:1,colorizeAmount:1,brightness:1,combineCMF:1},Ge=Math.PI/180,vr=function(e){return typeof e=="string"},Xl=function(e){return vr(e)&&e.charAt(1)==="="?e.substr(0,2)+parseFloat(e.substr(2))*Ge:e*Ge},Yl=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e5)/1e5,t)},Wl=function(e,t,r,s,o,n){var a=360*(n?Ge:1),l=vr(o),u=l&&o.charAt(1)==="="?+(o.charAt(0)+"1"):0,h=parseFloat(u?o.substr(2):o)*(n?Ge:1),c=u?h*u:h-s,f=s+c,d,m;return l&&(d=o.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*1e10)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*1e10)%a-~~(c/a)*a)),e._pt=m=new ye(e._pt,t,r,s,c,Yl),m.e=f,m},Ut=function(){pr()&&(Ft=window,se=gr(),W=W||Ft.PIXI,at=W&&W.VERSION&&W.VERSION.charAt(0)==="4",je=function(t){return se.utils.splitColor((t+"").substr(0,2)==="0x"?"#"+t.substr(2):t)})},Ie,ge;for(Ie=0;Ie<Bt.length;Ie++)ge=Bt[Ie],lt[ge+"X"]=ge,lt[ge+"Y"]=ge;var dt={version:"3.11.5",name:"pixi",register:function(e,t,r){se=e,ye=r,mr=t.getSetter,Ut()},registerPIXI:function(e){W=e},init:function(e,t,r,s,o){if(W||Ut(),!W||!(e instanceof W.DisplayObject))return console.warn(e,"is not a DisplayObject or PIXI was not found. PixiPlugin.registerPIXI(PIXI);"),!1;var n,a,l,u,h,c,f,d,m;for(c in t){if(n=lt[c],l=t[c],n)a=~c.charAt(c.length-1).toLowerCase().indexOf("x")?"x":"y",this.add(e[n],a,e[n][a],n==="skew"?Xl(l):l,0,0,0,0,0,1);else if(c==="scale"||c==="anchor"||c==="pivot"||c==="tileScale")this.add(e[c],"x",e[c].x,l),this.add(e[c],"y",e[c].y,l);else if(c==="rotation"||c==="angle")Wl(this,e,c,e[c],l,c==="rotation");else if($l[c])u||(Vl(e,t.colorMatrixFilter||t,this),u=!0);else if(c==="blur"||c==="blurX"||c==="blurY"||c==="blurPadding"){if(h=xr(e,"BlurFilter"),this.add(h,c,h[c],l),t.blurPadding!==0)for(f=t.blurPadding||Math.max(h[c],l)*2,d=e.filters.length;--d>-1;)e.filters[d].padding=Math.max(e.filters[d].padding,f)}else if(ql[c])if((c==="lineColor"||c==="fillColor")&&e instanceof W.Graphics)for(m=(e.geometry||e).graphicsData,this._pt=new ye(this._pt,e,c,0,0,Gl,{g:e.geometry||e}),d=m.length;--d>-1;)zt(at?m[d]:m[d][c.substr(0,4)+"Style"],at?c:"color",l,this);else zt(e,c,l,this);else c==="autoAlpha"?(this._pt=new ye(this._pt,e,"visible",0,0,Hl),this.add(e,"alpha",e.alpha,l),this._props.push("alpha","visible")):c!=="resolution"&&this.add(e,c,"get",l);this._props.push(c)}}};gr()&&se.registerPlugin(dt);T.registerPlugin(dt);dt.registerPIXI(Ga);T.registerPlugin(we);we.create("springBounce","0.32, 1.06, 0.61, 0.93");T.registerEffect({name:"PULSE",effect(i,e){return T.timeline().fromTo(i,{pixi:{scaleX:.9,scaleY:.9}},{pixi:{scaleX:1.2,scaleY:1.2},duration:.5,ease:"slow"}).to(i,{pixi:{scaleX:1,scaleY:1,...e},duration:.5})}});T.registerEffect({name:"SHAKE",effect(i,e){return T.timeline().to(i,{duration:.1,pixi:{x:"+=5"}}).to(i,{duration:.1,pixi:{x:"-=10"}}).to(i,{duration:.1,pixi:{x:"+=10"}}).to(i,{duration:.1,pixi:{x:"-=10"}}).to(i,{duration:.1,pixi:{x:"+=5"}}).to(i,{pixi:{...e},duration:.5})}});T.registerEffect({name:"SWING",effect(i,e){return T.timeline().to(i,{duration:.5,pixi:{rotation:1}}).to(i,{duration:.5,pixi:{rotation:-1.5}}).to(i,{pixi:{rotation:0,...e},duration:.5})}});T.registerEffect({name:"JELLO",effect(i,e){return T.timeline().to(i,{duration:.3,pixi:{scaleX:.5,rotation:-1}}).to(i,{duration:.4,pixi:{scaleX:1.5,rotation:1}}).to(i,{duration:.3,pixi:{scaleX:1,rotation:0}}).to(i,{pixi:{rotation:0,...e},duration:.5})}});T.registerEffect({name:"WOOBLE",effect(i,e){return T.timeline().to(i,{duration:.3,pixi:{scaleX:.5,x:e.x*-.5}}).to(i,{duration:.3,pixi:{scaleX:1.5,x:e.x*1.5}}).to(i,{duration:.3,pixi:{scaleX:.5,x:e.x*-.01}}).to(i,{duration:.3,pixi:{scaleX:1,x:e.x}}).to(i,{rotation:0,pixi:{...e,rotation:0},duration:.5})}});T.registerEffect({name:"NONE",effect(i,e){return T.timeline().to(i,{duration:0})}});T.registerEffect({name:"FLASH",effect(i,e){return T.timeline().to(i,{duration:.2,alpha:0}).to(i,{duration:.2,alpha:1}).to(i,{duration:.2,alpha:0}).to(i,{duration:.2,alpha:1}).to(i,{duration:.2,alpha:0}).to(i,{duration:.2,alpha:1,...e})}});T.registerEffect({name:"BOUNCE_IN",effect(i,e){return T.timeline().fromTo(i,{pixi:{scaleX:1.5,scaleY:1.5}},{...e,pixi:{x:e==null?void 0:e.x,y:e==null?void 0:e.y,scaleX:1,scaleY:1},duration:2,ease:"bounce.out"})}});T.registerEffect({name:"BOUNCE_IN_DOWN",effect(i,e){return T.timeline().from(i,{duration:2,ease:"bounce.out",immediateRender:!0,pixi:{...e,x:e==null?void 0:e.x,y:-2500,alpha:0}})}});T.registerEffect({name:"BOUNCE_IN_LEFT",effect(i,e){return T.timeline().from(i,{ease:"bounce.out",duration:2,pixi:{...e,x:-1500,alpha:0}})}});T.registerEffect({name:"BOUNCE_IN_RIGHT",effect(i,e){const t=Math.max(1e3,(e==null?void 0:e.maxX)+500);return T.timeline().from(i,{ease:"bounce.out",duration:2,pixi:{...e,x:t}})}});T.registerEffect({name:"BOUNCE_IN_UP",effect(i,e){return T.timeline().from(i,{ease:"bounce.out",pixi:{...e,y:2e3},duration:2})}});T.registerEffect({name:"BOUNCE_OUT",effect(i,e){return T.timeline().from(i,{...e,ease:"bounce.in",pixi:{y:2e3},duration:1.5})}});T.registerEffect({name:"FADE_IN",effect(i){return T.timeline().fromTo(i,{alpha:0},{ease:"power4.in",alpha:1,duration:1})}});T.registerEffect({name:"FADE_IN_DOWN",effect(i,e){return T.timeline().fromTo(i,{pixi:{y:-1500,alpha:0}},{duration:1,ease:"power4.in",pixi:{y:0,alpha:1,...e}})}});T.registerEffect({name:"FADE_IN_LEFT",effect(i,e){return T.timeline().fromTo(i,{pixi:{alpha:0,x:-2e3}},{ease:"power4.in",pixi:{x:0,alpha:1,...e},duration:1})}});T.registerEffect({name:"FADE_IN_RIGHT",effect(i,e){return T.fromTo(i,{pixi:{x:2e3,alpha:0}},{duration:1,ease:"power4.in",pixi:{x:0,alpha:1,...e}})}});T.registerEffect({name:"FADE_IN_UP",effect(i,e){return T.fromTo(i,{pixi:{y:2e3,alpha:0}},{duration:.8,ease:"power4.in",pixi:{y:0,alpha:1,...e}})}});T.registerEffect({name:"SPIN",effect(i){return T.to(i,{rotation:(e,t)=>T.utils.snap(360,Number(T.getProperty(t,"rotation"))+360)})}});function Kl(){return{updateEffect:S.useCallback((e,t,r)=>T.effects[t]&&e?T.effects[t](e,r):T.effects.NONE(e,r),[])}}var yr=(i=>(i.NONE="NONE",i.FLASH="FLASH",i.PULSE="PULSE",i.SHAKE="SHAKE",i.SWING="SWING",i.JELLO="JELLO",i.WOOBLE="WOOBLE",i.FADE_IN="FADE_IN",i.FADE_OUT="FADE_OUT",i.FADE_IN_OUT="FADE_IN_OUT",i.SLIDE_IN_LEFT="SLIDE_IN_LEFT",i.SLIDE_IN_RIGHT="SLIDE_IN_RIGHT",i.SLIDE_IN_TOP="SLIDE_IN_TOP",i.SLIDE_IN_BOTTOM="SLIDE_IN_BOTTOM",i.SLIDE_OUT_LEFT="SLIDE_OUT_LEFT",i.SLIDE_OUT_RIGHT="SLIDE_OUT_RIGHT",i.SLIDE_OUT_TOP="SLIDE_OUT_TOP",i.SLIDE_OUT_BOTTOM="SLIDE_OUT_BOTTOM",i.ZOOM_IN="ZOOM_IN",i.ZOOM_OUT="ZOOM_OUT",i.ZOOM_IN_OUT="ZOOM_IN_OUT",i.BOUNCE_IN="BOUNCE_IN",i.BOUNCE_OUT="BOUNCE_OUT",i.BOUNCE_IN_OUT="BOUNCE_IN_OUT",i.BOUNCE_IN_DOWN="BOUNCE_IN_DOWN",i.BOUNCE_IN_LEFT="BOUNCE_IN_LEFT",i.BOUNCE_IN_RIGHT="BOUNCE_IN_RIGHT",i.BOUNCE_IN_UP="BOUNCE_IN_UP",i.BOUNCE_OUT_DOWN="BOUNCE_OUT_DOWN",i.BOUNCE_OUT_LEFT="BOUNCE_OUT_LEFT",i.BOUNCE_OUT_RIGHT="BOUNCE_OUT_RIGHT",i.BOUNCE_OUT_UP="BOUNCE_OUT_UP",i.FADE_IN_DOWN="FADE_IN_DOWN",i.FADE_IN_LEFT="FADE_IN_LEFT",i.FADE_IN_RIGHT="FADE_IN_RIGHT",i.FADE_IN_UP="FADE_IN_UP",i.FADE_OUT_DOWN="FADE_OUT_DOWN",i.FADE_OUT_LEFT="FADE_OUT_LEFT",i.FADE_OUT_RIGHT="FADE_OUT_RIGHT",i.FADE_OUT_UP="FADE_OUT_UP",i.ELASTIC_IN="ELASTIC_IN",i.ELASTIC_OUT="ELASTIC_OUT",i.ELASTIC_IN_OUT="ELASTIC_IN_OUT",i.BACK_IN="BACK_IN",i.BACK_OUT="BACK_OUT",i.BACK_IN_OUT="BACK_IN_OUT",i.CIRCULAR_IN="CIRCULAR_IN",i.CIRCULAR_OUT="CIRCULAR_OUT",i.CIRCULAR_IN_OUT="CIRCULAR_IN_OUT",i.EXPO_IN="EXPO_IN",i.EXPO_OUT="EXPO_OUT",i.EXPO_IN_OUT="EXPO_IN_OUT",i.SINE_IN="SINE_IN",i.SINE_OUT="SINE_OUT",i.SINE_IN_OUT="SINE_IN_OUT",i.BOUNCE="BOUNCE",i.ELASTIC="ELASTIC",i.BACK="BACK",i.CIRCULAR="CIRCULAR",i.EXPO="EXPO",i.SINE="SINE",i))(yr||{});const Ql=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],Vt=S.forwardRef((i,e)=>{const[t,r]=S.useState(!1),[s,o]=S.useState(!1),[n,a]=S.useState(!1),[l,u]=S.useState(),h=Cl(l,300),c=S.useRef(null),f=S.useRef(null),d=S.useRef(null),m=S.useRef(null),p=S.useRef(null),v=S.useRef(null),{tl:x}=S.useContext(Ma),g=Q.useApp(),y=g.screen.width,R=g.screen.height,{uniqueId:E,visible:w,startAt:I,transformation:{x:F,y:O,width:A,height:N,scale:H=[1,1],rotation:J=0,effect:k,overlay:D,animation:B=yr.NONE},applyTransformer:b,disabled:C,pointerdown:M,pointerout:j,pointerover:z,isText:Se,isDragging:K,isGif:ne,onDoubleClick:ue,isTextEditMode:$e}=i,Xe=Kl();Aa(it.COMPLETE,()=>{c.current}),S.useImperativeHandle(e,()=>({getIsTransformerDragging:()=>s,getIsMouseOverTransformer:()=>n}),[s,n]),S.useEffect(()=>{c.current&&r(!0)},[]),S.useEffect(()=>{u({x:F,y:O,width:A,height:N,animation:B,maxX:y,maxY:R})},[B,F,O,A,N,y,R]),S.useEffect(()=>{if(!f.current)return;const te=T.context(()=>{if(x.current&&h){const{x:Nr,y:zr,animation:Br,maxX:Ur,maxY:Vr}=h||{},jr=x.current.progress(),re=Xe.updateEffect(c.current,Br,{immediateRender:!1,x:Nr,y:zr,overwrite:!0,maxX:Ur,maxY:Vr});p.current&&(x.current.remove(p.current),p.current.progress(0).kill()),jr>.1?(re.eventCallback("onComplete",()=>{re.remove("onComplete"),x.current.add(re,I),p.current=re}),re.play()):(re.progress(1),x.current.add(re,I),p.current=re)}else p.current&&p.current.progress(0).kill()},f.current);return()=>{te.revert()}},[I,h]);const Ye=S.useCallback(()=>{a(!0),z&&z()},[]),We=S.useCallback(()=>{o(!0)},[]),U=S.useCallback(te=>{i.onAnchorTransformationEnd&&i.onAnchorTransformationEnd(te),o(!1)},[]),Lr=Q.withFilters(Q.Container,{matrix:Be.ColorMatrixFilter});return ee.jsxs(Q.Container,{ref:f,children:[ee.jsx(Q.Container,{ref:c,position:[F,O],pivot:[F,O],width:A,height:N,scale:H,rotation:J,...!C&&w&&!s&&!K&&{interactive:!0,buttonMode:!0,pointerdown:M,pointerover:z,pointerout:j},children:ee.jsxs(Q.Container,{ref:v,children:[!ne&&ee.jsx(Lr,{scale:1,apply:({matrix:te})=>{k===oe.BlackAndWhite?te.desaturate():k===oe.Sepia?te.sepia():k===oe.RetroVintage||k===oe.NightVision?te.negative():k===oe.Normal&&te.reset()},matrix:{enabled:!0,matrix:Ql},children:ee.jsx(Q.Container,{ref:d,children:i.children})}),ne&&ee.jsx(Q.Container,{ref:d,children:i.children}),!Pa(D)&&D!==st.NONE&&D!==st.NORMAL&&ee.jsx(nt,{overlay:D,width:A,height:N,x:F,y:O})]})}),b&&w&&!$e&&ee.jsx(ot,{pixiTransformerRef:m,imageRef:c,isMounted:t,transformCommit:U,transformChange:We,mouseoverEvent:Ye,uniqueId:E,isText:Se,onDoubleClick:ue})]})});try{Vt.displayName="AbstractContainer",Vt.__docgenInfo={description:"",displayName:"AbstractContainer",props:{ignoreTlForVideo:{defaultValue:null,description:"",name:"ignoreTlForVideo",required:!1,type:{name:"boolean"}},isText:{defaultValue:null,description:"",name:"isText",required:!1,type:{name:"boolean"}},isDragging:{defaultValue:null,description:"",name:"isDragging",required:!1,type:{name:"boolean"}},isGif:{defaultValue:null,description:"",name:"isGif",required:!1,type:{name:"boolean"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"(() => void)"}},isTextEditMode:{defaultValue:null,description:"",name:"isTextEditMode",required:!1,type:{name:"boolean"}},uniqueId:{defaultValue:null,description:"",name:"uniqueId",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},path:{defaultValue:null,description:"",name:"path",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},startAt:{defaultValue:null,description:"",name:"startAt",required:!0,type:{name:"number"}},endAt:{defaultValue:null,description:"",name:"endAt",required:!0,type:{name:"number"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},transformation:{defaultValue:null,description:"",name:"transformation",required:!0,type:{name:"{ x: number; y: number; width: number; height: number; anchor: number; rotation?: number | undefined; alpha?: number | undefined; scale?: number | [number, number] | undefined; tint?: number | undefined; ... 4 more ...; overlay?: OverlayTypes | undefined; }"}},pointerdown:{defaultValue:null,description:"",name:"pointerdown",required:!1,type:{name:"(() => void)"}},pointerup:{defaultValue:null,description:"",name:"pointerup",required:!1,type:{name:"(() => void)"}},pointerout:{defaultValue:null,description:"",name:"pointerout",required:!1,type:{name:"(() => void)"}},mousedown:{defaultValue:null,description:"",name:"mousedown",required:!1,type:{name:"(() => void)"}},mouseup:{defaultValue:null,description:"",name:"mouseup",required:!1,type:{name:"(() => void)"}},pointerover:{defaultValue:null,description:"",name:"pointerover",required:!1,type:{name:"(() => void)"}},mouseover:{defaultValue:null,description:"",name:"mouseover",required:!1,type:{name:"(() => void)"}},mouseout:{defaultValue:null,description:"",name:"mouseout",required:!1,type:{name:"(() => void)"}},applyTransformer:{defaultValue:null,description:"",name:"applyTransformer",required:!1,type:{name:"boolean"}},onAnchorTransformationEnd:{defaultValue:null,description:"",name:"onAnchorTransformationEnd",required:!1,type:{name:"((endData: any) => void)"}},fps:{defaultValue:null,description:"",name:"fps",required:!1,type:{name:"number"}}}}}catch{}var Zl=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Jl=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float gamma;
uniform float contrast;
uniform float saturation;
uniform float brightness;
uniform float red;
uniform float green;
uniform float blue;
uniform float alpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / gamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);
        rgb.r *= red;
        rgb.g *= green;
        rgb.b *= blue;
        c.rgb = rgb * brightness;

        c.rgb *= c.a;
    }

    gl_FragColor = c * alpha;
}
`;let eu=class extends P{constructor(e){super(Zl,Jl),this.gamma=1,this.saturation=1,this.contrast=1,this.brightness=1,this.red=1,this.green=1,this.blue=1,this.alpha=1,Object.assign(this,e)}apply(e,t,r,s){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,r,s)}};var tu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ru=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,iu=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`;let be=class extends P{constructor(e=4,t=3,r=!1){super(tu,r?iu:ru),this._kernels=[],this._blur=4,this._quality=3,this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new _,this.pixelSize=1,this._clamp=r,Array.isArray(e)?this.kernels=e:(this._blur=e,this.quality=t)}apply(e,t,r,s){const o=this._pixelSize.x/t._frame.width,n=this._pixelSize.y/t._frame.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*o,this.uniforms.uOffset[1]=a*n,e.applyFilter(this,t,r,s);else{const l=e.getFilterTexture();let u=t,h=l,c;const f=this._quality-1;for(let d=0;d<f;d++)a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*o,this.uniforms.uOffset[1]=a*n,e.applyFilter(this,u,h,1),c=u,u=h,h=c;a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*o,this.uniforms.uOffset[1]=a*n,e.applyFilter(this,u,r,s),e.returnFilterTexture(l)}}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((e,t)=>e+t+.5,0))}_generateKernels(){const e=this._blur,t=this._quality,r=[e];if(e>0){let s=e;const o=e/t;for(let n=1;n<t;n++)s-=o,r.push(s)}this._kernels=r,this._updatePadding()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get clamp(){return this._clamp}set pixelSize(e){typeof e=="number"?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof _?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)}get pixelSize(){return this._pixelSize}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get blur(){return this._blur}set blur(e){this._blur=e,this._generateKernels()}};var _r=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ou=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`;let su=class extends P{constructor(e=.5){super(_r,ou),this.threshold=e}get threshold(){return this.uniforms.threshold}set threshold(e){this.uniforms.threshold=e}};var nu=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;const br=class extends P{constructor(e){super(_r,nu),this.bloomScale=1,this.brightness=1,this._resolution=Ce.FILTER_RESOLUTION,typeof e=="number"&&(e={threshold:e});const t=Object.assign(br.defaults,e);this.bloomScale=t.bloomScale,this.brightness=t.brightness;const{kernels:r,blur:s,quality:o,pixelSize:n,resolution:a}=t;this._extractFilter=new su(t.threshold),this._extractFilter.resolution=a,this._blurFilter=r?new be(r):new be(s,o),this.pixelSize=n,this.resolution=a}apply(e,t,r,s,o){const n=e.getFilterTexture();this._extractFilter.apply(e,t,n,1,o);const a=e.getFilterTexture();this._blurFilter.apply(e,n,a,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=a,e.applyFilter(this,t,r,s),e.returnFilterTexture(a),e.returnFilterTexture(n)}get resolution(){return this._resolution}set resolution(e){this._resolution=e,this._extractFilter&&(this._extractFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)}get threshold(){return this._extractFilter.threshold}set threshold(e){this._extractFilter.threshold=e}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.blur}set blur(e){this._blurFilter.blur=e}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){this._blurFilter.pixelSize=e}};let au=br;au.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:Ce.FILTER_RESOLUTION};var lu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,uu=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;const Tr=class extends P{constructor(e){super(lu,uu),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,Tr.defaults,e)}apply(e,t,r,s){const{width:o,height:n}=t.filterFrame;this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=n,e.applyFilter(this,t,r,s)}get radius(){return this.uniforms.radius}set radius(e){this.uniforms.radius=e}get strength(){return this.uniforms.strength}set strength(e){this.uniforms.strength=e}get center(){return this.uniforms.center}set center(e){this.uniforms.center=e}};let cu=Tr;cu.defaults={center:[.5,.5],radius:100,strength:1};var hu=`const float PI = 3.1415926538;
const float PI_2 = PI*2.;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;
uniform sampler2D uSampler;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform int uNumStops;
uniform float uAlphas[3*MAX_STOPS];
uniform vec3 uColors[MAX_STOPS];
uniform float uOffsets[MAX_STOPS];
uniform int uType;
uniform float uAngle;
uniform float uAlpha;
uniform int uMaxColors;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(vFilterCoord, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    // current/original color
    vec4 currentColor = texture2D(uSampler, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        gl_FragColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, uType, radians(uAngle));

    // check gradient bounds
    float offsetMin = uOffsets[0];
    float offsetMax = 0.0;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == uNumStops-1){ // last index
            offsetMax = uOffsets[i];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        gl_FragColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0) {
        float stepSize = 1./float(uMaxColors);
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uOffsets[i]) {
            from = ColorStop(uOffsets[i], uColors[i], uAlphas[i]);
            to = ColorStop(uOffsets[i+1], uColors[i+1], uAlphas[i+1]);
        }

        if (i == uNumStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    // mix resulting color with current color
    gl_FragColor = gradientColor + currentColor*(1.-gradientColor.a);
}
`,fu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform vec4 inputSize;
uniform vec4 outputFrame;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
    vFilterCoord = vTextureCoord * inputSize.xy / outputFrame.zw;
}
`,le=le||{};le.stringify=function(){var i={"visit_linear-gradient":function(e){return i.visit_gradient(e)},"visit_repeating-linear-gradient":function(e){return i.visit_gradient(e)},"visit_radial-gradient":function(e){return i.visit_gradient(e)},"visit_repeating-radial-gradient":function(e){return i.visit_gradient(e)},visit_gradient:function(e){var t=i.visit(e.orientation);return t&&(t+=", "),e.type+"("+t+i.visit(e.colorStops)+")"},visit_shape:function(e){var t=e.value,r=i.visit(e.at),s=i.visit(e.style);return s&&(t+=" "+s),r&&(t+=" at "+r),t},"visit_default-radial":function(e){var t="",r=i.visit(e.at);return r&&(t+=r),t},"visit_extent-keyword":function(e){var t=e.value,r=i.visit(e.at);return r&&(t+=" at "+r),t},"visit_position-keyword":function(e){return e.value},visit_position:function(e){return i.visit(e.value.x)+" "+i.visit(e.value.y)},"visit_%":function(e){return e.value+"%"},visit_em:function(e){return e.value+"em"},visit_px:function(e){return e.value+"px"},visit_literal:function(e){return i.visit_color(e.value,e)},visit_hex:function(e){return i.visit_color("#"+e.value,e)},visit_rgb:function(e){return i.visit_color("rgb("+e.value.join(", ")+")",e)},visit_rgba:function(e){return i.visit_color("rgba("+e.value.join(", ")+")",e)},visit_color:function(e,t){var r=e,s=i.visit(t.length);return s&&(r+=" "+s),r},visit_angular:function(e){return e.value+"deg"},visit_directional:function(e){return"to "+e.value},visit_array:function(e){var t="",r=e.length;return e.forEach(function(s,o){t+=i.visit(s),o<r-1&&(t+=", ")}),t},visit:function(e){if(!e)return"";var t="";if(e instanceof Array)return i.visit_array(e,t);if(e.type){var r=i["visit_"+e.type];if(r)return r(e);throw Error("Missing visitor visit_"+e.type)}else throw Error("Invalid node.")}};return function(e){return i.visit(e)}}();var le=le||{};le.parse=function(){var i={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},e="";function t(b){var C=new Error(e+": "+b);throw C.source=e,C}function r(){var b=s();return e.length>0&&t("Invalid input not EOF"),b}function s(){return y(o)}function o(){return n("linear-gradient",i.linearGradient,l)||n("repeating-linear-gradient",i.repeatingLinearGradient,l)||n("radial-gradient",i.radialGradient,c)||n("repeating-radial-gradient",i.repeatingRadialGradient,c)}function n(b,C,M){return a(C,function(j){var z=M();return z&&(D(i.comma)||t("Missing comma before color stops")),{type:b,orientation:z,colorStops:y(R)}})}function a(b,C){var M=D(b);if(M){D(i.startCall)||t("Missing (");var j=C(M);return D(i.endCall)||t("Missing )"),j}}function l(){return u()||h()}function u(){return k("directional",i.sideOrCorner,1)}function h(){return k("angular",i.angleValue,1)}function c(){var b,C=f(),M;return C&&(b=[],b.push(C),M=e,D(i.comma)&&(C=f(),C?b.push(C):e=M)),b}function f(){var b=d()||m();if(b)b.at=v();else{var C=p();if(C){b=C;var M=v();M&&(b.at=M)}else{var j=x();j&&(b={type:"default-radial",at:j})}}return b}function d(){var b=k("shape",/^(circle)/i,0);return b&&(b.style=J()||p()),b}function m(){var b=k("shape",/^(ellipse)/i,0);return b&&(b.style=N()||p()),b}function p(){return k("extent-keyword",i.extentKeywords,1)}function v(){if(k("position",/^at/,0)){var b=x();return b||t("Missing positioning value"),b}}function x(){var b=g();if(b.x||b.y)return{type:"position",value:b}}function g(){return{x:N(),y:N()}}function y(b){var C=b(),M=[];if(C)for(M.push(C);D(i.comma);)C=b(),C?M.push(C):t("One extra comma");return M}function R(){var b=E();return b||t("Expected color definition"),b.length=N(),b}function E(){return I()||O()||F()||w()}function w(){return k("literal",i.literalColor,0)}function I(){return k("hex",i.hexColor,1)}function F(){return a(i.rgbColor,function(){return{type:"rgb",value:y(A)}})}function O(){return a(i.rgbaColor,function(){return{type:"rgba",value:y(A)}})}function A(){return D(i.number)[1]}function N(){return k("%",i.percentageValue,1)||H()||J()}function H(){return k("position-keyword",i.positionKeywords,1)}function J(){return k("px",i.pixelValue,1)||k("em",i.emValue,1)}function k(b,C,M){var j=D(C);if(j)return{type:b,value:j[M]}}function D(b){var C,M;return M=/^[\n\r\t\s]+/.exec(e),M&&B(M[0].length),C=b.exec(e),C&&B(C[0].length),C}function B(b){e=e.substr(b)}return function(b){return e=b.toString(),r()}}();var du=le.parse;le.stringify;var jt={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Gt={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function mu(i){var e,t=[],r=1,s;if(typeof i=="string")if(jt[i])t=jt[i].slice(),s="rgb";else if(i==="transparent")r=0,s="rgb",t=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(i)){var o=i.slice(1),n=o.length,a=n<=4;r=1,a?(t=[parseInt(o[0]+o[0],16),parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16)],n===4&&(r=parseInt(o[3]+o[3],16)/255)):(t=[parseInt(o[0]+o[1],16),parseInt(o[2]+o[3],16),parseInt(o[4]+o[5],16)],n===8&&(r=parseInt(o[6]+o[7],16)/255)),t[0]||(t[0]=0),t[1]||(t[1]=0),t[2]||(t[2]=0),s="rgb"}else if(e=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(i)){var l=e[1],u=l==="rgb",o=l.replace(/a$/,"");s=o;var n=o==="cmyk"?4:o==="gray"?1:3;t=e[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(f,d){if(/%$/.test(f))return d===n?parseFloat(f)/100:o==="rgb"?parseFloat(f)*255/100:parseFloat(f);if(o[d]==="h"){if(/deg$/.test(f))return parseFloat(f);if(Gt[f]!==void 0)return Gt[f]}return parseFloat(f)}),l===o&&t.push(1),r=u||t[n]===void 0?1:t[n],t=t.slice(0,n)}else i.length>10&&/[0-9](?:\s|\/)/.test(i)&&(t=i.match(/([0-9]+)/g).map(function(h){return parseFloat(h)}),s=i.match(/([a-z])/ig).join("").toLowerCase());else isNaN(i)?Array.isArray(i)||i.length?(t=[i[0],i[1],i[2]],s="rgb",r=i.length===4?i[3]:1):i instanceof Object&&(i.r!=null||i.red!=null||i.R!=null?(s="rgb",t=[i.r||i.red||i.R||0,i.g||i.green||i.G||0,i.b||i.blue||i.B||0]):(s="hsl",t=[i.h||i.hue||i.H||0,i.s||i.saturation||i.S||0,i.l||i.lightness||i.L||i.b||i.brightness]),r=i.a||i.alpha||i.opacity||1,i.opacity!=null&&(r/=100)):(s="rgb",t=[i>>>16,(i&65280)>>>8,i&255]);return{space:s,values:t,alpha:r}}var ut={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]},Je={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(i){var e=i[0]/360,t=i[1]/100,r=i[2]/100,s,o,n,a,l;if(t===0)return l=r*255,[l,l,l];r<.5?o=r*(1+t):o=r+t-r*t,s=2*r-o,a=[0,0,0];for(var u=0;u<3;u++)n=e+1/3*-(u-1),n<0?n++:n>1&&n--,6*n<1?l=s+(o-s)*6*n:2*n<1?l=o:3*n<2?l=s+(o-s)*(2/3-n)*6:l=s,a[u]=l*255;return a}};ut.hsl=function(i){var e=i[0]/255,t=i[1]/255,r=i[2]/255,s=Math.min(e,t,r),o=Math.max(e,t,r),n=o-s,a,l,u;return o===s?a=0:e===o?a=(t-r)/n:t===o?a=2+(r-e)/n:r===o&&(a=4+(e-t)/n),a=Math.min(a*60,360),a<0&&(a+=360),u=(s+o)/2,o===s?l=0:u<=.5?l=n/(o+s):l=n/(2-o-s),[a,l*100,u*100]};function pu(i){Array.isArray(i)&&i.raw&&(i=String.raw(...arguments));var e,t=mu(i);if(!t.space)return[];const r=t.space[0]==="h"?Je.min:ut.min,s=t.space[0]==="h"?Je.max:ut.max;return e=Array(3),e[0]=Math.min(Math.max(t.values[0],r[0]),s[0]),e[1]=Math.min(Math.max(t.values[1],r[1]),s[1]),e[2]=Math.min(Math.max(t.values[2],r[2]),s[2]),t.space[0]==="h"&&(e=Je.rgb(e)),e.push(Math.min(Math.max(t.alpha,0),1)),e}function Cr(i){switch(typeof i){case"string":return gu(i);case"number":return Te(i);default:return i}}function gu(i){const e=pu(i);if(!e)throw new Error(`Unable to parse color "${i}" as RGBA.`);return[e[0]/255,e[1]/255,e[2]/255,e[3]]}function xu(i){const e=du(Eu(i));if(e.length===0)throw new Error("Invalid CSS gradient.");if(e.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const t=e[0],r=vu(t.type),s=yu(t.colorStops),o=wu(t.orientation);return{type:r,stops:s,angle:o}}function vu(i){const e={"linear-gradient":0,"radial-gradient":1};if(!(i in e))throw new Error(`Unsupported gradient type "${i}"`);return e[i]}function yu(i){const e=Tu(i),t=[];for(let r=0;r<i.length;r++){const s=_u(i[r]);t.push({offset:e[r],color:s.slice(0,3),alpha:s[3]})}return t}function _u(i){return Cr(bu(i))}function bu(i){switch(i.type){case"hex":return`#${i.value}`;case"literal":return i.value;default:return`${i.type}(${i.value.join(",")})`}}function Tu(i){const e=[];for(let s=0;s<i.length;s++){const o=i[s];let n=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(n=parseFloat(o.length.value)/100),e.push(n)}const t=s=>{for(let o=s;o<e.length;o++)if(e[o]!==-1)return{indexDelta:o-s,offset:e[o]};return{indexDelta:e.length-1-s,offset:1}};let r=0;for(let s=0;s<e.length;s++){const o=e[s];if(o!==-1)r=o;else if(s===0)e[s]=0;else if(s+1===e.length)e[s]=1;else{const n=t(s),a=(n.offset-r)/(1+n.indexDelta);for(let l=0;l<=n.indexDelta;l++)e[s+l]=r+(l+1)*a;s+=n.indexDelta,r=e[s]}}return e.map(Cu)}function Cu(i){return i.toString().length>6?parseFloat(i.toString().substring(0,6)):i}function wu(i){if(typeof i>"u")return 0;if("type"in i&&"value"in i)switch(i.type){case"angular":return parseFloat(i.value);case"directional":return Su(i.value)}return 0}function Su(i){const e={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(i in e))throw new Error(`Unsupported directional value "${i}"`);return e[i]}function Eu(i){let e=i.replace(/\s{2,}/gu," ");return e=e.replace(/;/g,""),e=e.replace(/ ,/g,","),e=e.replace(/\( /g,"("),e=e.replace(/ \)/g,")"),e.trim()}var Ru=Object.defineProperty,Mu=Object.defineProperties,Au=Object.getOwnPropertyDescriptors,Ht=Object.getOwnPropertySymbols,Pu=Object.prototype.hasOwnProperty,Fu=Object.prototype.propertyIsEnumerable,qt=(i,e,t)=>e in i?Ru(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,et=(i,e)=>{for(var t in e||(e={}))Pu.call(e,t)&&qt(i,t,e[t]);if(Ht)for(var t of Ht(e))Fu.call(e,t)&&qt(i,t,e[t]);return i},Du=(i,e)=>Mu(i,Au(e));const $t=90;function Ou(i){return[...i].sort((e,t)=>e.offset-t.offset)}const mt=class extends P{constructor(e){e&&"css"in e&&(e=Du(et({},xu(e.css||"")),{alpha:e.alpha,maxColors:e.maxColors}));const t=et(et({},mt.defaults),e);if(!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");super(fu,hu),this._stops=[],this.autoFit=!1,Object.assign(this,t)}get stops(){return this._stops}set stops(e){const t=Ou(e),r=new Float32Array(t.length*3),s=0,o=1,n=2;for(let a=0;a<t.length;a++){const l=Cr(t[a].color),u=a*3;r[u+s]=l[s],r[u+o]=l[o],r[u+n]=l[n]}this.uniforms.uColors=r,this.uniforms.uOffsets=t.map(a=>a.offset),this.uniforms.uAlphas=t.map(a=>a.alpha),this.uniforms.uNumStops=t.length,this._stops=t}set type(e){this.uniforms.uType=e}get type(){return this.uniforms.uType}set angle(e){this.uniforms.uAngle=e-$t}get angle(){return this.uniforms.uAngle+$t}set alpha(e){this.uniforms.uAlpha=e}get alpha(){return this.uniforms.uAlpha}set maxColors(e){this.uniforms.uMaxColors=e}get maxColors(){return this.uniforms.uMaxColors}};let ke=mt;ke.LINEAR=0,ke.RADIAL=1,ke.CONIC=2,ke.defaults={type:mt.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0};var Iu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ku=`precision mediump float;

varying mediump vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec2 texelSize;
uniform float matrix[9];

void main(void)
{
   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left
   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center
   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right

   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left
   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center
   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right

   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left
   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center
   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right

   gl_FragColor =
       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +
       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +
       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];

   gl_FragColor.a = c22.a;
}
`;let Lu=class extends P{constructor(e,t=200,r=200){super(Iu,ku),this.uniforms.texelSize=new Float32Array(2),this.uniforms.matrix=new Float32Array(9),e!==void 0&&(this.matrix=e),this.width=t,this.height=r}get matrix(){return this.uniforms.matrix}set matrix(e){e.forEach((t,r)=>{this.uniforms.matrix[r]=t})}get width(){return 1/this.uniforms.texelSize[0]}set width(e){this.uniforms.texelSize[0]=1/e}get height(){return 1/this.uniforms.texelSize[1]}set height(e){this.uniforms.texelSize[1]=1/e}};var Nu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,zu=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));
    
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;const wr=class extends P{constructor(e){super(Nu,zu),this.time=0,this.seed=0,this.uniforms.dimensions=new Float32Array(2),Object.assign(this,wr.defaults,e)}apply(e,t,r,s){const{width:o,height:n}=t.filterFrame;this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=n,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilter(this,t,r,s)}set curvature(e){this.uniforms.curvature=e}get curvature(){return this.uniforms.curvature}set lineWidth(e){this.uniforms.lineWidth=e}get lineWidth(){return this.uniforms.lineWidth}set lineContrast(e){this.uniforms.lineContrast=e}get lineContrast(){return this.uniforms.lineContrast}set verticalLine(e){this.uniforms.verticalLine=e}get verticalLine(){return this.uniforms.verticalLine}set noise(e){this.uniforms.noise=e}get noise(){return this.uniforms.noise}set noiseSize(e){this.uniforms.noiseSize=e}get noiseSize(){return this.uniforms.noiseSize}set vignetting(e){this.uniforms.vignetting=e}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(e){this.uniforms.vignettingAlpha=e}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(e){this.uniforms.vignettingBlur=e}get vignettingBlur(){return this.uniforms.vignettingBlur}};let Bu=wr;Bu.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0};var Uu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Vu=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`,ju=Object.defineProperty,Xt=Object.getOwnPropertySymbols,Gu=Object.prototype.hasOwnProperty,Hu=Object.prototype.propertyIsEnumerable,Yt=(i,e,t)=>e in i?ju(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Wt=(i,e)=>{for(var t in e||(e={}))Gu.call(e,t)&&Yt(i,t,e[t]);if(Xt)for(var t of Xt(e))Hu.call(e,t)&&Yt(i,t,e[t]);return i};const ct=class extends P{constructor(e){super(),this.angle=45,this._distance=5,this._resolution=Ce.FILTER_RESOLUTION;const t=e?Wt(Wt({},ct.defaults),e):ct.defaults,{kernels:r,blur:s,quality:o,pixelSize:n,resolution:a}=t;this._offset=new ft(this._updatePadding,this),this._tintFilter=new P(Uu,Vu),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.uniforms.shift=this._offset,this._tintFilter.resolution=a,this._blurFilter=r?new be(r):new be(s,o),this.pixelSize=n,this.resolution=a;const{shadowOnly:l,rotation:u,distance:h,offset:c,alpha:f,color:d}=t;this.shadowOnly=l,u!==void 0&&h!==void 0?(this.rotation=u,this.distance=h):this.offset=c,this.alpha=f,this.color=d}apply(e,t,r,s){const o=e.getFilterTexture();this._tintFilter.apply(e,t,o,1),this._blurFilter.apply(e,o,r,s),this.shadowOnly!==!0&&e.applyFilter(this,t,r,0),e.returnFilterTexture(o)}_updatePadding(){const e=Math.max(Math.abs(this._offset.x),Math.abs(this._offset.y));this.padding=e+this.blur*2}_updateShift(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))}set offset(e){this._offset.copyFrom(e),this._updatePadding()}get offset(){return this._offset}get resolution(){return this._resolution}set resolution(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)}get distance(){return this._distance}set distance(e){me("5.3.0","DropShadowFilter distance is deprecated, use offset"),this._distance=e,this._updatePadding(),this._updateShift()}get rotation(){return this.angle/_e}set rotation(e){me("5.3.0","DropShadowFilter rotation is deprecated, use offset"),this.angle=e*_e,this._updateShift()}get alpha(){return this._tintFilter.uniforms.alpha}set alpha(e){this._tintFilter.uniforms.alpha=e}get color(){return He(this._tintFilter.uniforms.color)}set color(e){Te(e,this._tintFilter.uniforms.color)}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.blur}set blur(e){this._blurFilter.blur=e,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){this._blurFilter.pixelSize=e}};let qu=ct;qu.defaults={offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:Ce.FILTER_RESOLUTION};var $u=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Xu=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;const ht=class extends P{constructor(e){super($u,Xu),this.offset=100,this.fillMode=ht.TRANSPARENT,this.average=!1,this.seed=0,this.minSize=8,this.sampleSize=512,this._slices=0,this._offsets=new Float32Array(1),this._sizes=new Float32Array(1),this._direction=-1,this.uniforms.dimensions=new Float32Array(2),this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=sr.from(this._canvas,{scaleMode:or.NEAREST}),Object.assign(this,ht.defaults,e)}apply(e,t,r,s){const{width:o,height:n}=t.filterFrame;this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=n,this.uniforms.aspect=n/o,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,t,r,s)}_randomizeSizes(){const e=this._sizes,t=this._slices-1,r=this.sampleSize,s=Math.min(this.minSize/r,.9/this._slices);if(this.average){const o=this._slices;let n=1;for(let a=0;a<t;a++){const l=n/(o-a),u=Math.max(l*(1-Math.random()*.6),s);e[a]=u,n-=u}e[t]=n}else{let o=1;const n=Math.sqrt(1/this._slices);for(let a=0;a<t;a++){const l=Math.max(n*o*Math.random(),s);e[a]=l,o-=l}e[t]=o}this.shuffle()}shuffle(){const e=this._sizes,t=this._slices-1;for(let r=t;r>0;r--){const s=Math.random()*r>>0,o=e[r];e[r]=e[s],e[s]=o}}_randomizeOffsets(){for(let e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const e=this.sampleSize,t=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,e);let s,o=0;for(let n=0;n<this._slices;n++){s=Math.floor(this._offsets[n]*256);const a=this._sizes[n]*e,l=s>0?s:0,u=s<0?-s:0;r.fillStyle=`rgba(${l}, ${u}, 0, 1)`,r.fillRect(0,o>>0,e,a+1>>0),o+=a}t.baseTexture.update(),this.uniforms.displacementMap=t}set sizes(e){const t=Math.min(this._slices,e.length);for(let r=0;r<t;r++)this._sizes[r]=e[r]}get sizes(){return this._sizes}set offsets(e){const t=Math.min(this._slices,e.length);for(let r=0;r<t;r++)this._offsets[r]=e[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(e){this._slices!==e&&(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new Float32Array(e),this._offsets=this.uniforms.slicesOffset=new Float32Array(e),this.refresh())}get direction(){return this._direction}set direction(e){if(this._direction===e)return;this._direction=e;const t=e*_e;this.uniforms.sinDir=Math.sin(t),this.uniforms.cosDir=Math.cos(t)}get red(){return this.uniforms.red}set red(e){this.uniforms.red=e}get green(){return this.uniforms.green}set green(e){this.uniforms.green=e}get blue(){return this.uniforms.blue}set blue(e){this.uniforms.blue=e}destroy(){var e;(e=this.texture)==null||e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};let de=ht;de.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},de.TRANSPARENT=0,de.ORIGINAL=1,de.LOOP=2,de.CLAMP=3,de.MIRROR=4;var Yu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Wu=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;
uniform float alpha;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    if (knockout) {
      float resultAlpha = (outerGlowAlpha + innerGlowAlpha) * alpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      vec4 outerGlowColor = outerGlowStrength * glowColor.rgba * alpha;
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;const Sr=class extends P{constructor(i){const e=Object.assign({},Sr.defaults,i),{outerStrength:t,innerStrength:r,color:s,knockout:o,quality:n,alpha:a}=e,l=Math.round(e.distance);super(Yu,Wu.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/n/l).toFixed(7)}`).replace(/__DIST__/gi,`${l.toFixed(0)}.0`)),this.uniforms.glowColor=new Float32Array([0,0,0,1]),this.uniforms.alpha=1,Object.assign(this,{color:s,outerStrength:t,innerStrength:r,padding:l,knockout:o,alpha:a})}get color(){return He(this.uniforms.glowColor)}set color(i){Te(i,this.uniforms.glowColor)}get outerStrength(){return this.uniforms.outerStrength}set outerStrength(i){this.uniforms.outerStrength=i}get innerStrength(){return this.uniforms.innerStrength}set innerStrength(i){this.uniforms.innerStrength=i}get knockout(){return this.uniforms.knockout}set knockout(i){this.uniforms.knockout=i}get alpha(){return this.uniforms.alpha}set alpha(i){this.uniforms.alpha=i}};let Ku=Sr;Ku.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1,alpha:1};var Qu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Zu=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,Ju=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;const Er=class extends P{constructor(e){super(Qu,Ju.replace("${perlin}",Zu)),this.parallel=!0,this.time=0,this._angle=0,this.uniforms.dimensions=new Float32Array(2);const t=Object.assign(Er.defaults,e);this._angleLight=new _,this.angle=t.angle,this.gain=t.gain,this.lacunarity=t.lacunarity,this.alpha=t.alpha,this.parallel=t.parallel,this.center=t.center,this.time=t.time}apply(e,t,r,s){const{width:o,height:n}=t.filterFrame;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=n,this.uniforms.aspect=n/o,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,r,s)}get angle(){return this._angle}set angle(e){this._angle=e;const t=e*_e;this._angleLight.x=Math.cos(t),this._angleLight.y=Math.sin(t)}get gain(){return this.uniforms.gain}set gain(e){this.uniforms.gain=e}get lacunarity(){return this.uniforms.lacunarity}set lacunarity(e){this.uniforms.lacunarity=e}get alpha(){return this.uniforms.alpha}set alpha(e){this.uniforms.alpha=e}};let ec=Er;ec.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1};var tc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,rc=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float uHue;
uniform float uAlpha;
uniform bool uColorize;
uniform float uSaturation;
uniform float uLightness;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    vec4 result = color;

    // colorize
    if (uColorize) {
        result.rgb = vec3(getWeightedAverage(result.rgb), 0., 0.);
    }

    // hue
    result.rgb = hueShift(result.rgb, uHue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (result.r + result.g + result.b) / 3.0;

    if (uSaturation > 0.) {
        result.rgb += (average - result.rgb) * (1. - 1. / (1.001 - uSaturation));
    } else {
        result.rgb -= (average - result.rgb) * uSaturation;
    }

    // lightness
    result.rgb = mix(result.rgb, vec3(ceil(uLightness)) * color.a, abs(uLightness));

    // alpha
    gl_FragColor = mix(color, result, uAlpha);
}
`;const Rr=class extends P{constructor(i){super(tc,rc),this._hue=0;const e=Object.assign({},Rr.defaults,i);Object.assign(this,e)}get hue(){return this._hue}set hue(i){this._hue=i,this.uniforms.uHue=this._hue*(Math.PI/180)}get alpha(){return this.uniforms.uAlpha}set alpha(i){this.uniforms.uAlpha=i}get colorize(){return this.uniforms.uColorize}set colorize(i){this.uniforms.uColorize=i}get lightness(){return this.uniforms.uLightness}set lightness(i){this.uniforms.uLightness=i}get saturation(){return this.uniforms.uSaturation}set saturation(i){this.uniforms.uSaturation=i}};let ic=Rr;ic.defaults={hue:0,saturation:0,lightness:0,colorize:!1,alpha:1};var oc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,sc=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;const Mr=class extends P{constructor(e,t=0){super(oc,sc),this.seed=0,this.uniforms.dimensions=new Float32Array(2),typeof e=="number"?(this.seed=e,e=void 0):this.seed=t,Object.assign(this,Mr.defaults,e)}apply(e,t,r,s){var o,n;this.uniforms.dimensions[0]=(o=t.filterFrame)==null?void 0:o.width,this.uniforms.dimensions[1]=(n=t.filterFrame)==null?void 0:n.height,this.uniforms.seed=this.seed,e.applyFilter(this,t,r,s)}set sepia(e){this.uniforms.sepia=e}get sepia(){return this.uniforms.sepia}set noise(e){this.uniforms.noise=e}get noise(){return this.uniforms.noise}set noiseSize(e){this.uniforms.noiseSize=e}get noiseSize(){return this.uniforms.noiseSize}set scratch(e){this.uniforms.scratch=e}get scratch(){return this.uniforms.scratch}set scratchDensity(e){this.uniforms.scratchDensity=e}get scratchDensity(){return this.uniforms.scratchDensity}set scratchWidth(e){this.uniforms.scratchWidth=e}get scratchWidth(){return this.uniforms.scratchWidth}set vignetting(e){this.uniforms.vignetting=e}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(e){this.uniforms.vignettingAlpha=e}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(e){this.uniforms.vignettingBlur=e}get vignettingBlur(){return this.uniforms.vignettingBlur}};let Ar=Mr;Ar.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3};var nc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ac=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterClamp;

uniform float uAlpha;
uniform vec2 uThickness;
uniform vec4 uColor;
uniform bool uKnockout;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${angleStep};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture2D(uSampler, clamp(displacedPos, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture2D(uSampler, vTextureCoord);
    vec4 contentColor = sourceColor * float(!uKnockout);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    gl_FragColor = contentColor + outlineColor;
}
`;const ze=class extends P{constructor(e=1,t=0,r=.1,s=1,o=!1){super(nc,ac.replace(/\$\{angleStep\}/,ze.getAngleStep(r))),this._thickness=1,this._alpha=1,this._knockout=!1,this.uniforms.uThickness=new Float32Array([0,0]),this.uniforms.uColor=new Float32Array([0,0,0,1]),this.uniforms.uAlpha=s,this.uniforms.uKnockout=o,Object.assign(this,{thickness:e,color:t,quality:r,alpha:s,knockout:o})}static getAngleStep(e){const t=Math.max(e*ze.MAX_SAMPLES,ze.MIN_SAMPLES);return(Math.PI*2/t).toFixed(7)}apply(e,t,r,s){this.uniforms.uThickness[0]=this._thickness/t._frame.width,this.uniforms.uThickness[1]=this._thickness/t._frame.height,this.uniforms.uAlpha=this._alpha,this.uniforms.uKnockout=this._knockout,e.applyFilter(this,t,r,s)}get alpha(){return this._alpha}set alpha(e){this._alpha=e}get color(){return He(this.uniforms.uColor)}set color(e){Te(e,this.uniforms.uColor)}get knockout(){return this._knockout}set knockout(e){this._knockout=e}get thickness(){return this._thickness}set thickness(e){this._thickness=e,this.padding=e}};let Kt=ze;Kt.MIN_SAMPLES=1,Kt.MAX_SAMPLES=100;var lc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,uc=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;const Pr=class extends P{constructor(e){super(lc,uc),this.time=0,this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,Pr.defaults,e)}apply(e,t,r,s){var o,n;this.uniforms.dimensions[0]=(o=t.filterFrame)==null?void 0:o.width,this.uniforms.dimensions[1]=(n=t.filterFrame)==null?void 0:n.height,this.uniforms.time=this.time,e.applyFilter(this,t,r,s)}set mirror(e){this.uniforms.mirror=e}get mirror(){return this.uniforms.mirror}set boundary(e){this.uniforms.boundary=e}get boundary(){return this.uniforms.boundary}set amplitude(e){this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]}get amplitude(){return this.uniforms.amplitude}set waveLength(e){this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]}get waveLength(){return this.uniforms.waveLength}set alpha(e){this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]}get alpha(){return this.uniforms.alpha}};let cc=Pr;cc.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0};var hc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,fc=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;const Fr=class extends P{constructor(e=[0,0],t,r=0){super(hc,fc),this.center=e,Object.assign(this,Fr.defaults,t),this.time=r}apply(e,t,r,s){this.uniforms.time=this.time,e.applyFilter(this,t,r,s)}get center(){return this.uniforms.center}set center(e){this.uniforms.center=e}get amplitude(){return this.uniforms.amplitude}set amplitude(e){this.uniforms.amplitude=e}get wavelength(){return this.uniforms.wavelength}set wavelength(e){this.uniforms.wavelength=e}get brightness(){return this.uniforms.brightness}set brightness(e){this.uniforms.brightness=e}get speed(){return this.uniforms.speed}set speed(e){this.uniforms.speed=e}get radius(){return this.uniforms.radius}set radius(e){this.uniforms.radius=e}};let dc=Fr;dc.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1};var mc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,pc=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;let Dr=class extends P{constructor(e){var t,r;super(mc,pc),this.uniforms.blur=e.blur,this.uniforms.gradientBlur=e.gradientBlur,this.uniforms.start=(t=e.start)!=null?t:new _(0,window.innerHeight/2),this.uniforms.end=(r=e.end)!=null?r:new _(600,window.innerHeight/2),this.uniforms.delta=new _(30,30),this.uniforms.texSize=new _(window.innerWidth,window.innerHeight),this.updateDelta()}updateDelta(){this.uniforms.delta.x=0,this.uniforms.delta.y=0}get blur(){return this.uniforms.blur}set blur(e){this.uniforms.blur=e}get gradientBlur(){return this.uniforms.gradientBlur}set gradientBlur(e){this.uniforms.gradientBlur=e}get start(){return this.uniforms.start}set start(e){this.uniforms.start=e,this.updateDelta()}get end(){return this.uniforms.end}set end(e){this.uniforms.end=e,this.updateDelta()}},gc=class extends Dr{updateDelta(){const e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,r=Math.sqrt(e*e+t*t);this.uniforms.delta.x=e/r,this.uniforms.delta.y=t/r}},xc=class extends Dr{updateDelta(){const e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,r=Math.sqrt(e*e+t*t);this.uniforms.delta.x=-t/r,this.uniforms.delta.y=e/r}};const Or=class extends P{constructor(e,t,r,s){super(),typeof e=="number"&&(me("5.3.0","TiltShiftFilter constructor arguments is deprecated, use options."),e={blur:e,gradientBlur:t,start:r,end:s}),e=Object.assign({},Or.defaults,e),this.tiltShiftXFilter=new gc(e),this.tiltShiftYFilter=new xc(e)}apply(e,t,r,s){const o=e.getFilterTexture();this.tiltShiftXFilter.apply(e,t,o,1),this.tiltShiftYFilter.apply(e,o,r,s),e.returnFilterTexture(o)}get blur(){return this.tiltShiftXFilter.blur}set blur(e){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e}get gradientBlur(){return this.tiltShiftXFilter.gradientBlur}set gradientBlur(e){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e}get start(){return this.tiltShiftXFilter.start}set start(e){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e}get end(){return this.tiltShiftXFilter.end}set end(e){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e}};let vc=Or;vc.defaults={blur:100,gradientBlur:600,start:void 0,end:void 0};var yc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,_c=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;const Ir=class extends P{constructor(i){super(yc,_c),Object.assign(this,Ir.defaults,i)}get offset(){return this.uniforms.offset}set offset(i){this.uniforms.offset=i}get radius(){return this.uniforms.radius}set radius(i){this.uniforms.radius=i}get angle(){return this.uniforms.angle}set angle(i){this.uniforms.angle=i}};let bc=Ir;bc.defaults={radius:200,angle:4,padding:20,offset:new _};var Tc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Cc=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,Qt=Object.getOwnPropertySymbols,wc=Object.prototype.hasOwnProperty,Sc=Object.prototype.propertyIsEnumerable,Ec=(i,e)=>{var t={};for(var r in i)wc.call(i,r)&&e.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&Qt)for(var r of Qt(i))e.indexOf(r)<0&&Sc.call(i,r)&&(t[r]=i[r]);return t};const kr=class extends P{constructor(i){const e=Object.assign(kr.defaults,i),{maxKernelSize:t}=e,r=Ec(e,["maxKernelSize"]);super(Tc,Cc.replace("${maxKernelSize}",t.toFixed(1))),Object.assign(this,r)}get center(){return this.uniforms.uCenter}set center(i){this.uniforms.uCenter=i}get strength(){return this.uniforms.uStrength}set strength(i){this.uniforms.uStrength=i}get innerRadius(){return this.uniforms.uInnerRadius}set innerRadius(i){this.uniforms.uInnerRadius=i}get radius(){return this.uniforms.uRadius}set radius(i){(i<0||i===1/0)&&(i=-1),this.uniforms.uRadius=i}};let Rc=kr;Rc.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32};const Zt=i=>{const{contrast:e=1,saturation:t=1,brightness:r=1,alpha:s=1,red:o=1,blue:n=1,gamma:a=1,green:l=1,blurRadius:u=0,temperature:h=0,hue:c=0,sharpness:f=0,vignette:d=0,noise:m=0}=i||{},p=new P(null,`
      precision mediump float;
      varying vec2 vTextureCoord;
      uniform sampler2D uSampler;
      uniform float temperature;
    
      void main() {
        vec4 color = texture2D(uSampler, vTextureCoord);
        color.r = color.r + (temperature / 100.0);
        color.b = color.b - (temperature / 100.0);
        gl_FragColor = color;
      }
    `);p.uniforms.temperature=h;const v=new Lu([0,-f,0,-f,1+4*f,-f,0,-f,0]),x=new Be.ColorMatrixFilter;x.hue(c,!1);const g=new be(u,1,!0),y=new Ar({vignetting:d}),R=new Be.NoiseFilter(m);return{adjustmentFilter:new eu({...a&&{gamma:a},...r&&{brightness:r},...e&&{contrast:e},...t&&{saturation:t},...o&&{red:o},...l&&{green:l},...n&&{blue:n},...s&&{alpha:s}}),blurFilter:g,hueFilter:x,sharpnessFilter:v,temperatureFilter:p,vignetteFilter:y,noiseFilter:R}};try{Zt.displayName="withFiltersHook",Zt.__docgenInfo={description:"",displayName:"withFiltersHook",props:{contrast:{defaultValue:null,description:"",name:"contrast",required:!1,type:{name:"number"}},saturation:{defaultValue:null,description:"",name:"saturation",required:!1,type:{name:"number"}},brightness:{defaultValue:null,description:"",name:"brightness",required:!1,type:{name:"number"}},alpha:{defaultValue:null,description:"",name:"alpha",required:!1,type:{name:"number"}},red:{defaultValue:null,description:"",name:"red",required:!1,type:{name:"number"}},blue:{defaultValue:null,description:"",name:"blue",required:!1,type:{name:"number"}},gamma:{defaultValue:null,description:"",name:"gamma",required:!1,type:{name:"number"}},green:{defaultValue:null,description:"",name:"green",required:!1,type:{name:"number"}},blurRadius:{defaultValue:null,description:"",name:"blurRadius",required:!1,type:{name:"number"}},temperature:{defaultValue:null,description:"",name:"temperature",required:!1,type:{name:"number"}},hue:{defaultValue:null,description:"",name:"hue",required:!1,type:{name:"number"}},sharpness:{defaultValue:null,description:"",name:"sharpness",required:!1,type:{name:"number"}},vignette:{defaultValue:null,description:"",name:"vignette",required:!1,type:{name:"number"}},noise:{defaultValue:null,description:"",name:"noise",required:!1,type:{name:"number"}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:"number"}},outlineColor:{defaultValue:null,description:"",name:"outlineColor",required:!1,type:{name:"number"}}}}}catch{}export{yr as A,oe as E,st as O,Vt as a,Zt as w};
//# sourceMappingURL=withFiltersHook-489645a6.js.map
