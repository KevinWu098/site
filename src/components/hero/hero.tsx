"use client";

import {
    Component,
    ErrorInfo,
    ReactNode,
    Suspense,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { cn } from "@/lib/utils";

const FluidCanvas = dynamic(
    () => import("./fluid-canvas").then((m) => ({ default: m.FluidCanvas })),
    { ssr: false }
);

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || null;
        }

        return this.props.children;
    }
}

export function Hero() {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const [h1Position, setH1Position] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = () => {
            if (h1Ref.current) {
                const rect = h1Ref.current.getBoundingClientRect();
                setH1Position({ x: rect.left, y: rect.top });
            }
        };

        updatePosition();
        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition);

        return () => {
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition);
        };
    }, []);

    const memoizedFluidCanvas = useMemo(() => {
        return (
            <FluidCanvas
                offsetX={h1Position.x}
                offsetY={h1Position.y}
            />
        );
    }, [h1Position.x, h1Position.y]);

    return (
        <div className="w-full space-y-4">
            <svg
                width="0"
                height="0"
                className="absolute"
            >
                <defs>
                    <mask
                        id="name-mask"
                        maskUnits="objectBoundingBox"
                    >
                        <rect
                            width="100%"
                            height="100%"
                            fill="#16a34a"
                        />

                        <text
                            x="50%"
                            y="50%"
                            dy=".6525em"
                            fontFamily="Playfair Display, serif"
                            fontSize="60"
                            fontStyle="italic"
                            fontWeight="500"
                            fill="white"
                            dominantBaseline="middle"
                        >
                            {"Kevin Wu"}
                        </text>
                    </mask>
                </defs>
            </svg>

            <div className="relative inline-block">
                <h1
                    ref={h1Ref}
                    className={cn(
                        "relative font-playfair-display text-6xl font-medium italic text-custom-primary"
                    )}
                >
                    {"Kevin Wu"}
                </h1>

                <div
                    className="xs:block pointer-events-none absolute inset-0 hidden overflow-hidden"
                    style={{
                        mask: "url(#name-mask)",
                        WebkitMask: "url(#name-mask)",
                        maskSize: "100% 100%",
                        WebkitMaskSize: "100% 100%",
                        maskPosition: "0 0",
                        WebkitMaskPosition: "0 0",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                    }}
                >
                    <Suspense fallback={null}>
                        <ErrorBoundary fallback={null}>
                            {memoizedFluidCanvas}
                        </ErrorBoundary>
                    </Suspense>
                </div>
            </div>

            <div className="z-50 space-y-2">
                <p className="text-pretty md:text-lg">
                    {"I'm a full-stack developer building products, "}
                    <Link
                        href="https://www.devpost.com/kevinwu098"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        competing at hackathons
                    </Link>
                    , and playing pickleball. Studying Computer Science at the
                    University of California, Irvine.
                </p>
                <p className="text-pretty md:text-lg">
                    Currently at Stripe engineering on{" "}
                    <Link
                        href="https://stripe.com/payments/link"
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        Link
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}
