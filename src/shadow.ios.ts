import { ShadowOptions, TextShadowOptions } from "./index";

export enum ShadowType {
    RECTANGLE = 0,
    OVAL = 1,
    SWEEP_GRADIENT = 2,
    RING = 3
}

export class Shadow {
    public createBaseShadowOptions(): ShadowOptions {
        return {
            size: { height: 5, width: 5 },
            opacity: 1.0,
            radius: 2.0
        };
    }

    public addShadow(nsView, shadowOptions: ShadowOptions) {
        const localShadowOpts = shadowOptions.elevation
            ? shadowOptions
            : this.createBaseShadowOptions();

        const nativeView = nsView.ios;

        nsView.clipToBounds = false;
        nativeView.layer.shadowColor = UIColor.blackColor.CGColor;

        if (localShadowOpts.size) {
            nativeView.layer.shadowOffset = CGSizeMake(
                localShadowOpts.size.width,
                localShadowOpts.size.height
            );
        }

        nativeView.layer.shadowOpacity = localShadowOpts.opacity;
        nativeView.layer.shadowRadius = localShadowOpts.radius;
    }

    public addShadowToText(nsView, textShadowOptions: TextShadowOptions) { }
}
