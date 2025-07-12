"use client";

import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

interface FluidCanvasProps {
    offsetX?: number;
    offsetY?: number;
}

export function FluidCanvas({ offsetX = 0, offsetY = 0 }: FluidCanvasProps) {
    return (
        <Canvas
            className="pointer-events-auto fixed inset-0"
            style={{
                background: "transparent",
                zIndex: -10,
                height: "100dvh",
                width: "100dvw",
                transform: `translate(-${offsetX}px, -${offsetY}px)`,
            }}
        >
            <EffectComposer>
                <Fluid
                    radius={0.005}
                    velocityDissipation={0.75}
                    densityDissipation={0.975}
                    force={3}
                    fluidColor="white"
                    showBackground={false}
                    swirl={20}
                />
            </EffectComposer>
        </Canvas>
    );
}
