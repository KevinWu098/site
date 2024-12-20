"use client";

import Image from "next/image";
import { PROJECT_DATA } from "@/components/projects/projects-data";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function ProjectsGrid() {
    return (
        <div
            className={cn(
                "grid gap-4",
                "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
        >
            {PROJECT_DATA.map((item, index) => (
                <motion.div
                    key={item.title}
                    className="group space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                    }}
                >
                    <div className="group/image peer/image aspect-video overflow-hidden rounded-md bg-neutral-800">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={500}
                            height={0}
                            className={cn(
                                "w-full object-cover",
                                "transition-all duration-200 ease-in-out group-hover/image:scale-[1.025]"
                            )}
                        />
                    </div>

                    <div
                        className={cn(
                            "peer-hover/image:*:text-custom-primary" // *: targets descendants
                        )}
                    >
                        <div
                            className={cn(
                                "text-lg leading-tight text-neutral-200 transition-colors duration-200 ease-in-out"
                            )}
                        >
                            {item.title}
                        </div>

                        <div
                            className={cn(
                                "text-base !text-neutral-400" // selector for descendants needs to be overridden
                            )}
                        >
                            {item.description}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
