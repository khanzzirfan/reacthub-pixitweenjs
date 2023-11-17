declare const useDebouncedPointerEvents: (onPointerOver: () => void, onPointerDown: () => void, onPointerOut: () => void, delay: number) => {
    onPointerOver: () => void;
    onPointerDown: () => void;
    onPointerOut: () => void;
};
export default useDebouncedPointerEvents;
