import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-12 lg:px-24">
                <Link href="/" className="flex items-center gap-2">
                    <BadgeCheck className="h-6 w-6 text-primary fill-blue-50" />
                    <span className="text-xl font-bold tracking-tight text-gray-900 font-sans">
                        Legal-Tech
                    </span>
                </Link>
                <button className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors cursor-pointer">
                    Get Started
                </button>
            </div>
        </header>
    );
}
