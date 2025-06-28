"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import ShadcnIcon from "../../public/icons/shadcn";
import Motion from "@/public/icons/motion";

export default function Features() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const handleMouseEnter = (iconName: string) => {
        setHoveredItem(iconName);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <div className="w-full max-w-none flex flex-col justify-start items-center z-10 mx-auto">
            <div className="grid grid-cols-3 md:flex md:flex-wrap items-center justify-start gap-6 md:gap-8 w-[95%] mx-auto py-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.1,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className={cn(
                        "text-blue-600 dark:text-blue-400 relative flex flex-col items-center gap-2"
                    )}
                    onMouseEnter={() => handleMouseEnter("TailwindCSS")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Image src={"/icons/tailwindcss.svg"} width={30} height={30} alt="tailwind" />
                     <motion.span
                        animate={{
                            scale: hoveredItem === "TailwindCSS" ? 1.1 : 1,
                            fontWeight:
                                hoveredItem === "TailwindCSS" ? 500 : 400,
                        }}
                        className="text-xs text-center mt-1 whitespace-nowrap text-black dark:text-white"
                    >
                        TailwindCSS
                    </motion.span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.4,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className={cn(
                        "text-yellow-500 dark:text-[#F5EA1E] relative flex flex-col items-center gap-2"
                    )}
                    onMouseEnter={() => handleMouseEnter("Motion")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Motion className="h-8 w-8"/>
                    <motion.span
                        animate={{
                            scale: hoveredItem === "Motion" ? 1.1 : 1,
                            fontWeight: hoveredItem === "Motion" ? 500 : 400,
                        }}
                        className="text-xs text-center mt-1 whitespace-nowrap text-black dark:text-white"
                    >
                        Motion
                    </motion.span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.5,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className={cn(
                        "text-black dark:text-white flex flex-col items-center gap-2 relative"
                    )}
                    onMouseEnter={() => handleMouseEnter("Shadcn UI")}
                    onMouseLeave={handleMouseLeave}
                >
                    <ShadcnIcon
                        className="w-8 h-8 text-black dark:text-white"
                        aria-label="Shadcn/ui"
                    />
                    <motion.span
                        animate={{
                            scale: hoveredItem === "Shadcn UI" ? 1.1 : 1,
                            fontWeight: hoveredItem === "Shadcn UI" ? 500 : 400,
                        }}
                        className="text-xs text-center mt-1 whitespace-nowrap"
                    >
                        shadcn/ui
                    </motion.span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.6,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className={cn(
                        "text-black dark:text-white flex flex-col items-center gap-2 relative col-span-1 col-start-1 md:col-auto"
                    )}
                    onMouseEnter={() => handleMouseEnter("Next.js")}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* <Nextjs className="w-8 h-8" aria-label="Next.js" /> */}
                    <Image src={"/icons/nextjs.svg"} alt={"reacticon"} width={34} height={34}/>

                    <motion.span
                        animate={{
                            scale: hoveredItem === "Next.js" ? 1.1 : 1,
                            fontWeight: hoveredItem === "Next.js" ? 500 : 400,
                        }}
                        className="text-xs text-center mt-1 whitespace-nowrap"
                    >
                        Next.js
                    </motion.span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.3,
                        delay: 0.7,
                        ease: [0.23, 1, 0.32, 1],
                    }}
                    className={cn(
                        "text-black dark:text-white flex flex-col items-center gap-2 relative col-span-1 col-start-3 md:col-auto"
                    )}
                    onMouseEnter={() => handleMouseEnter("React")}
                    onMouseLeave={handleMouseLeave}
                >
                    <Image src={"/icons/react.svg"} alt={"reacticon"} width={34} height={34}/>
                    {/* <ReactIcon className="w-8 h-8" aria-label="React" /> */}
                    <motion.span
                        animate={{
                            scale: hoveredItem === "React" ? 1.1 : 1,
                            fontWeight: hoveredItem === "React" ? 500 : 400,
                        }}
                        className="text-xs text-center mt-1 whitespace-nowrap"
                    >
                        React
                    </motion.span>
                </motion.div>
            </div>
        </div>
    );
}