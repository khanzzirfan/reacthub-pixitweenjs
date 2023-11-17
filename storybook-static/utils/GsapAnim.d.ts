interface Ease {
    from?: {
        duration: number;
        ease: string;
        y?: number;
        x?: number;
    };
    fromTo?: {
        from: {
            y?: number;
            x?: number;
            alpha?: number;
        };
        to: {
            ease: string;
            y?: number;
            x?: number;
            alpha?: number;
            duration: number;
        };
    };
    to?: {
        ease: string;
        alpha: number;
        duration: number;
    };
}
export declare const getAnimByName: (animate: string) => Ease;
export {};
