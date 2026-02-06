"use client";

import { BadgeCheck, Shield, QrCode, Workflow } from "lucide-react";
import { motion } from "framer-motion";

export function TrustBar() {
    const items = [
        { icon: BadgeCheck, text: "Verified advocates" },
        { icon: Shield, text: "Secure storage" },
        { icon: QrCode, text: "QR verification" },
        { icon: Workflow, text: "Trackable workflow" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
    };

    return (
        <section className="bg-primary py-12">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center justify-center text-center gap-3"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <item.icon className="h-8 w-8 text-white" />
                            <span className="text-white font-medium text-sm md:text-base">
                                {item.text}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
