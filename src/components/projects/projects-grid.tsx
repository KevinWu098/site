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
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                    }}
                >
                    <div className="group aspect-video overflow-hidden rounded-md bg-neutral-800">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={500}
                            height={0}
                            className={cn(
                                "w-full object-cover",
                                "transition-all duration-200 ease-in-out group-hover:scale-[1.025]"
                            )}
                        />
                    </div>

                    <div className="">
                        <div className="text-lg leading-tight text-neutral-200">
                            {item.title}
                        </div>

                        <div className="text-base text-neutral-400">
                            {item.description}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
