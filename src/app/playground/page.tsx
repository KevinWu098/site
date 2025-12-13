"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Playground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const redRef = useRef<HTMLDivElement>(null);
    const greenTriggerRef = useRef<HTMLDivElement>(null);
    const blueRef = useRef<HTMLDivElement>(null);
    const purpleTriggerRef = useRef<HTMLDivElement>(null);
    const [greenHeight, setGreenHeight] = useState(0);
    const [greenScrolled, setGreenScrolled] = useState(0);
    const [purpleHeight, setPurpleHeight] = useState(0);
    const [purpleScrolled, setPurpleScrolled] = useState(0);
    const [redHeight, setRedHeight] = useState(0);
    const [blueHeight, setBlueHeight] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [isReady, setIsReady] = useState(false);

    // Full height of the green element when fully revealed
    const fullGreenHeight = 300; // pixels
    // Full height of the purple element when fully revealed
    const fullPurpleHeight = 300; // pixels

    useEffect(() => {
        const measure = () => {
            setRedHeight(redRef.current?.offsetHeight ?? 0);
            setBlueHeight(blueRef.current?.offsetHeight ?? 0);
        };

        const handleScroll = () => {
            // Always compute thresholds from DOM + scroll position (avoid stale state).
            const nextRedHeight = redRef.current?.offsetHeight ?? 0;
            const nextBlueHeight = blueRef.current?.offsetHeight ?? 0;

            let nextGreenHeight = 0;
            let nextGreenScrolled = 0;

            if (greenTriggerRef.current) {
                const greenTriggerRect =
                    greenTriggerRef.current.getBoundingClientRect();
                const scrollPastGreenTrigger = -greenTriggerRect.top;
                const greenRevealDistance = 400; // Adjust this value as needed

                if (scrollPastGreenTrigger <= 0) {
                    nextGreenHeight = 0;
                    nextGreenScrolled = 0;
                } else if (scrollPastGreenTrigger <= greenRevealDistance) {
                    const progress =
                        scrollPastGreenTrigger / greenRevealDistance;
                    nextGreenHeight = progress * fullGreenHeight;
                    nextGreenScrolled = 0;
                } else {
                    nextGreenHeight = fullGreenHeight;
                    nextGreenScrolled =
                        scrollPastGreenTrigger - greenRevealDistance;
                }
            }

            // Blue's computed sticky top offset; at top when this hits 0.
            const nextBlueTopOffset = Math.max(
                0,
                nextRedHeight + nextGreenHeight - nextGreenScrolled + 32
            );
            // IMPORTANT: nextBlueTopOffset hitting 0 is necessary but not sufficient:
            // it can become 0 before the blue element has even reached the viewport.
            // Gate on the *actual* on-screen position of blue.
            const blueRectTop = blueRef.current?.getBoundingClientRect().top;
            const blueAtTop =
                nextBlueTopOffset === 0 &&
                blueRectTop !== undefined &&
                blueRectTop <= 0.5;

            let nextPurpleHeight = 0;
            let nextPurpleScrolled = 0;

            if (blueAtTop) {
                // IMPORTANT: blue can only reach top once green is fully revealed.
                // Use fullGreenHeight here to prevent purple starting "early" during
                // the phase transition where greenHeight is still catching up.
                const greenScrolledWhenBlueReachesTop =
                    nextRedHeight + fullGreenHeight + 32;
                const scrollPastBlueTop = Math.max(
                    0,
                    nextGreenScrolled - greenScrolledWhenBlueReachesTop
                );
                const purpleRevealDistance = 400; // Adjust this value as needed

                if (scrollPastBlueTop <= 0) {
                    nextPurpleHeight = 0;
                    nextPurpleScrolled = 0;
                } else if (scrollPastBlueTop <= purpleRevealDistance) {
                    const progress = scrollPastBlueTop / purpleRevealDistance;
                    nextPurpleHeight = progress * fullPurpleHeight;
                    nextPurpleScrolled = 0;
                } else {
                    nextPurpleHeight = fullPurpleHeight;
                    nextPurpleScrolled =
                        scrollPastBlueTop - purpleRevealDistance;
                }
            }

            // Commit state updates after all math is done.
            setRedHeight(nextRedHeight);
            setBlueHeight(nextBlueHeight);
            setGreenHeight(nextGreenHeight);
            setGreenScrolled(nextGreenScrolled);
            setPurpleHeight(nextPurpleHeight);
            setPurpleScrolled(nextPurpleScrolled);
        };

        const handleResize = () => {
            measure();
            handleScroll();
        };

        // Step 1: Enable rendering so green/purple elements are in DOM
        setIsMounted(true);

        // Step 2: Wait for React to render, then measure and calculate
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                measure();
                handleScroll(); // Initial calculation with all elements now in DOM

                // Step 3: Wait for React to re-render with updated state values
                // Purple's position depends on state that was just updated
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setIsReady(true);
                    });
                });
            });
        });

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative h-[300dvh] transition-all duration-200 ease-out"
            style={{
                filter: isReady ? "blur(0px)" : "blur(200px)",
                opacity: isReady ? 1 : 0.3,
                pointerEvents: isReady ? "auto" : "none",
            }}
        >
            {/* Red Section */}
            <div
                ref={redRef}
                className="sticky top-0 z-0 grid grid-cols-3"
            >
                <div>FOOBAR</div>
                <div>FOOBAR</div>
                {/* <div className="flex aspect-video h-full w-full items-center justify-center bg-red-500">
                    RED - Stays at top
                </div> */}
                <div className="group/image order-1 aspect-video w-full overflow-hidden bg-neutral-800 sm:order-2">
                    <Image
                        src="/work/stripe.webp"
                        alt={""}
                        width={800}
                        height={800}
                        className={cn(
                            "h-full w-full object-cover object-center",
                            "transition-all duration-300 ease-in-out"
                        )}
                    />
                </div>
            </div>

            {isMounted && (
                <>
                    {/* Invisible trigger point for green reveal */}
                    <div
                        ref={greenTriggerRef}
                        className="h-0"
                    />

                    {/* Spacer that grows to push down the blue section */}
                    <div
                        style={{
                            height: `${Math.max(0, greenHeight - greenScrolled)}px`,
                        }}
                    />

                    {/* Green Section - The new element that emerges (positioned over the spacer) */}
                    <div
                        className="sticky -z-10 grid grid-cols-3 overflow-hidden"
                        style={{
                            top: `${redHeight}px`, // Position below the red section dynamically
                            height: `${greenHeight}px`,
                            marginTop: `-${greenHeight}px`,
                            transform: `translateY(-${greenScrolled}px)`,
                        }}
                    >
                        <div className="flex items-center justify-center">
                            EMERGING
                        </div>
                        <div className="flex items-center justify-center">
                            EMERGING
                        </div>
                        <div className="flex h-full w-full items-center justify-center bg-green-500">
                            GREEN - Emerges then scrolls (height:{" "}
                            {Math.round(greenHeight)}px)
                        </div>
                    </div>
                </>
            )}

            {/* Blue Section - Positioned after the spacer */}
            <div
                ref={blueRef}
                className="sticky z-0 grid grid-cols-3"
                style={{
                    top: isMounted
                        ? `${Math.max(0, redHeight + greenHeight - greenScrolled + 32)}px`
                        : "32px", // Maintain 32px gap, then stick at top and cover red
                    zIndex:
                        isMounted &&
                        redHeight + greenHeight - greenScrolled + 32 <= 0
                            ? 10
                            : 0, // Cover red when at top
                }}
            >
                <div>FOOBAR</div>
                <div>FOOBAR</div>
                <div className="group/image order-1 aspect-video w-full overflow-hidden bg-neutral-800 sm:order-2">
                    <Image
                        src="/work/mercury.jpg"
                        alt={""}
                        width={800}
                        height={800}
                        className={cn(
                            "h-full w-full object-cover object-center",
                            "transition-all duration-300 ease-in-out"
                        )}
                    />
                </div>
            </div>

            {isMounted && (
                <>
                    {/* Invisible trigger point for purple reveal */}
                    <div
                        ref={purpleTriggerRef}
                        className="h-0"
                    />

                    {/* Spacer that grows to push down content after purple */}
                    <div
                        style={{
                            height: `${Math.max(0, purpleHeight - purpleScrolled)}px`,
                        }}
                    />

                    {/* Purple Section - The new element that emerges (positioned over the spacer) */}
                    <div
                        className="sticky -z-10 grid grid-cols-3 overflow-hidden"
                        style={{
                            top: `${Math.max(0, redHeight + greenHeight - greenScrolled + 32) + blueHeight + 32}px`, // Position below blue with 32px gap
                            height: `${purpleHeight}px`,
                            marginTop: `-${purpleHeight}px`,
                            transform: `translateY(-${purpleScrolled}px)`,
                        }}
                    >
                        <div className="flex items-center justify-center">
                            EMERGING
                        </div>
                        <div className="flex items-center justify-center">
                            EMERGING
                        </div>
                        <div className="flex h-full w-full items-center justify-center bg-purple-500">
                            PURPLE - Emerges then scrolls (height:{" "}
                            {Math.round(purpleHeight)}px)
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
