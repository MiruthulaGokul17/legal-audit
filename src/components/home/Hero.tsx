"use client";

import { ShieldCheck, UserCheck, FileText, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
    // Animation variants with proper typing
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const, delay },
        }),
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: (delay: number) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const, delay },
        }),
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: (delay: number) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const, delay },
        }),
    };

    const floatIn = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15,
                delay: 0.8,
            },
        },
    };

    return (
        <section className="relative overflow-visible lg:overflow-hidden bg-slate-50 py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        className="flex flex-col justify-center space-y-6 md:items-center md:text-center lg:items-start lg:text-left"
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center rounded-sm bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary w-fit"
                            variants={fadeInUp}
                            custom={0}
                        >
                            Trusted by 5000+ Real Estate Firms
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-playfair"
                            variants={fadeInLeft}
                            custom={0.1}
                        >
                            Verify Land Documents with{" "}
                            <span className="text-primary italic font-playfair inline-flex">
                                {"Legal Clarity".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.05,
                                            delay: 0.8 + index * 0.08,
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                                <motion.span
                                    className="inline-block w-[3px] h-[1em] bg-primary ml-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: 3,
                                        delay: 0.8 + 13 * 0.08,
                                    }}
                                />
                            </span>
                        </motion.h1>

                        {/* Paragraph */}
                        <motion.p
                            className="max-w-2xl text-lg text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed"
                            variants={fadeInLeft}
                            custom={0.2}
                        >
                            Upload your land documents for expert legal verification by certified advocates. Track every step in real time and receive clear legal guidance.
                        </motion.p>

                        {/* Upload Widget Area */}
                        <motion.div
                            className="w-full max-w-lg flex flex-col items-center"
                            variants={scaleIn}
                            custom={0.3}
                        >
                            <div className="w-full group relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-8 transition-colors hover:border-primary/50 hover:bg-blue-50/30">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 mb-4">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10 text-primary"
                                    >
                                        <path
                                            d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM14 13V17H10V13H7L12 8L17 13H14Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Drag & drop land documents here
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    PDF, JPG, or PNG files up to 100MB.
                                </p>
                                <div className="absolute inset-0 cursor-pointer" />
                            </div>

                            {/* Button with hover animation */}
                            <motion.button
                                className="mt-6 w-full sm:w-auto rounded-md bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm cursor-pointer"
                                whileHover={{ scale: 1.02, backgroundColor: "#0052b3" }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                Upload for verification
                            </motion.button>

                            {/* Trust Indicators */}
                            <motion.div
                                className="mt-4 flex flex-nowrap justify-center items-center gap-2 md:gap-6 text-xs md:text-sm text-gray-500 w-full overflow-x-auto"
                                variants={fadeInUp}
                                custom={0.5}
                            >
                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                    <ShieldCheck className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-500" />
                                    <span>Secure</span>
                                </div>
                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                    <UserCheck className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-500" />
                                    <span>Advocate Verified</span>
                                </div>
                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                    <FileText className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-500" />
                                    <span>Trackable</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Image - visible on mobile & desktop, hidden on tablet */}
                    <motion.div
                        className="relative mx-auto w-full max-w-[350px] md:hidden lg:block lg:max-w-[450px]"
                        initial="hidden"
                        animate="visible"
                        variants={scaleIn}
                        custom={0.4}
                    >
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-2xl bg-gray-200">
                            <Image
                                src="/images/hero.png"
                                alt="Legal verification workspace with tablet and gavel"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Floating Card Mockup */}
                        <motion.div
                            className="absolute bottom-[15px] left-1/2 -translate-x-1/2 lg:left-[-30px] lg:bottom-[-30px] lg:translate-x-0 bg-white p-3 rounded-lg shadow-lg border border-gray-100 max-w-[240px] w-max z-10"
                            variants={floatIn}
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center">
                                    <BadgeCheck className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Documents Verified</p>
                                    <p className="text-[10px] text-gray-500">Legally Reviewed</p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="absolute -z-10 top-1/2 right-1/2 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
