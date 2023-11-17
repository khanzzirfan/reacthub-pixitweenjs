type EffectFunc = () => void;
type Deps = ReadonlyArray<unknown>;
declare const useDeepEffect: (effectFunc: EffectFunc, deps: Deps) => void;
export default useDeepEffect;
