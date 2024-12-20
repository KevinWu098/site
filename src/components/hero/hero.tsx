import { HeroHighlight } from "@/components/acternity/hero-highlight";

export function Hero() {
    return (
        <HeroHighlight
            containerClassName="bg-transparent w-full"
            className="w-full max-w-screen-xl"
        >
            <div className="bg-neutral-500 text-left">
                <p>
                    Building products, competing at hackathons, and playing
                    pickleball.
                </p>
            </div>
        </HeroHighlight>
    );
}
