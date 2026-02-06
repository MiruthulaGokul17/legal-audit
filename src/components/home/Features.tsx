"use client";

import { BarChart3, Languages, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
                delay: index * 0.15,
            },
        }),
    };

    const bannerVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
                delay: 0.2,
            },
        },
    };

    return (
        <section className="py-20 bg-white pt-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 space-y-20">

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        className="bg-slate-50 p-8 rounded-2xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        custom={0}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="h-10 w-10 bg-blue-600 rounded-md flex items-center justify-center mb-6">
                            <BarChart3 className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Clear Risk Assessment
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Get an instant visual indicator (Green/Yellow/Red) showing the
                            legal status of your land documents after advocate review.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="bg-slate-50 p-8 rounded-2xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        custom={1}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="h-10 w-10 flex items-center justify-center mb-6">
                            <Languages className="h-10 w-10 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Plain-language Summary
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            No confusing legal terms. We provide a concise, easy-to-understand
                            summary of all potential issues and next steps.
                        </p>
                    </motion.div>
                </div>

                {/* Security Banner */}
                <motion.div
                    className="bg-emerald-100/50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={bannerVariants}
                >
                    <div className="flex items-center gap-6">
                        <motion.div
                            className="h-16 w-16 bg-emerald-200/50 rounded-full flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Shield className="h-8 w-8 text-emerald-600 fill-emerald-600" />
                        </motion.div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Safe & Secure Infrastructure</h3>
                            <p className="text-gray-600 max-w-lg">
                                Your documents are securely encrypted and only visible to assigned legal experts.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">Active Protection</span>
                        {/* Custom Filled Toggle */}
                        <div className="h-8 w-14 bg-emerald-500 rounded-full p-1 cursor-pointer flex justify-end">
                            <motion.div
                                className="h-6 w-6 bg-white rounded-full shadow-sm"
                                animate={{ x: [0, 2, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
