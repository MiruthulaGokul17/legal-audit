"use client";

import { FileUp, Scale, BadgeCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.5"], // Start when container is 80% from top, end when 50%
    });

    // Transform scroll progress to line height (0 to 100%)
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Transform scroll progress to circle activation thresholds
    // Circle 1 activates at 0%, Circle 2 at ~40%, Circle 3 at ~80%
    const circle1Active = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const circle2Active = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
    const circle3Active = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

    const steps = [
        {
            icon: FileUp,
            title: "Secure Upload",
            description:
                "Your documents are safely uploaded to ensure legibility and integrity before reaching our legal team.",
            progress: circle1Active,
        },
        {
            icon: Scale,
            title: "Expert Legal Review",
            description:
                "A certified land advocate carefully reviews your documents to verify legal status and potential risks.",
            progress: circle2Active,
        },
        {
            icon: BadgeCheck,
            title: "Verified Digital Report",
            description:
                "Receive a secure legal verification report with a QR code you can trust and easily share when needed.",
            progress: circle3Active,
        },
    ];

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
                delay: index * 0.2,
            },
        }),
    };

    return (
        <section className="py-10 md:py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={titleVariants}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        The Verification Path
                    </h2>
                </motion.div>

                <div ref={containerRef} className="relative max-w-3xl mx-auto">
                    {/* Background Line (gray) - stops at third circle */}
                    <div className="absolute left-[27px] top-7 h-[calc(100%-3.5rem)] w-0.5 bg-gray-200" />

                    {/* Animated Progress Line (blue) - grows with scroll */}
                    <motion.div
                        className="absolute left-[27px] top-7 w-0.5 bg-primary origin-top"
                        style={{
                            height: lineHeight,
                            maxHeight: "calc(100% - 3.6rem)"
                        }}
                    />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative flex flex-row gap-6 md:gap-8 items-start"
                            >
                                {/* Circle */}
                                <div className="flex-shrink-0 z-10 mx-0 relative">
                                    <motion.div
                                        className="flex h-14 w-14 items-center justify-center rounded-full"
                                        style={{
                                            backgroundColor: useTransform(
                                                step.progress,
                                                [0, 1],
                                                ["#ffffff", "#0066DA"]
                                            ),
                                            borderWidth: useTransform(
                                                step.progress,
                                                [0, 1],
                                                ["2px", "0px"]
                                            ),
                                            borderColor: "#0066DA",
                                            boxShadow: useTransform(
                                                step.progress,
                                                [0, 1],
                                                ["none", "0 10px 25px -5px rgba(0, 102, 218, 0.3)"]
                                            ),
                                        }}
                                    >
                                        <motion.div
                                            style={{
                                                color: useTransform(
                                                    step.progress,
                                                    [0, 1],
                                                    ["#0066DA", "#ffffff"]
                                                ),
                                            }}
                                        >
                                            <step.icon className="h-6 w-6" />
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Text Content */}
                                <motion.div
                                    className="flex-1 text-left"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={textVariants}
                                    custom={index}
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
