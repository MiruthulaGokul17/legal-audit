"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function Pricing() {
    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
                delay: index * 0.15,
            },
        }),
    };

    const featureVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
                delay: 0.3 + index * 0.1,
            },
        }),
    };

    const badgeVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 15,
                delay: 0.4,
            },
        },
    };

    const basicFeatures = [
        "Signature authenticity check",
        "Government record cross-match",
        "Digital verification report",
    ];

    const fullFeatures = [
        "30-year title history search",
        "Physical record validation",
        "Advocate legal opinion letter",
        "Encumbrance certificate check",
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    className="text-center mb-16 space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={titleVariants}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-gray-600">
                        Choose the level of verification that fits your needs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Basic Plan */}
                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        custom={0}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Basic Verification
                        </h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-5xl font-bold text-gray-900">$49</span>
                            <span className="text-gray-500 text-sm">/per document</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {basicFeatures.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-3"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={featureVariants}
                                    custom={i}
                                >
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                                        <Check className="h-3.5 w-3.5 text-blue-600" />
                                    </div>
                                    <span className="text-gray-600 text-sm">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.button
                            className="w-full mt-auto rounded-lg px-4 py-3 text-sm font-semibold text-blue-600 bg-white border border-transparent hover:bg-blue-50 transition-colors cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Start Verification
                        </motion.button>
                    </motion.div>

                    {/* Full Due Diligence Plan */}
                    <motion.div
                        className="relative bg-white rounded-2xl p-8 shadow-md border-2 border-blue-500 flex flex-col"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        custom={1}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={badgeVariants}
                        >
                            Most Thorough
                        </motion.div>

                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Full Due Diligence
                        </h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-5xl font-bold text-gray-900">$199</span>
                            <span className="text-gray-500 text-sm">/per property</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {fullFeatures.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-3"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={featureVariants}
                                    custom={i}
                                >
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                                        <Check className="h-3.5 w-3.5 text-blue-600" />
                                    </div>
                                    <span className="text-gray-600 text-sm">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.button
                            className="w-full mt-auto rounded-lg px-4 py-3 text-sm font-semibold text-white bg-blue-600 shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Start Verification
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
