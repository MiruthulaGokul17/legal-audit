import { BadgeCheck } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-100 py-12">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2">
                        <div className="bg-gray-100 p-1 rounded-sm">
                            <BadgeCheck className="h-5 w-5 text-gray-600" />
                        </div>
                        <span className="text-lg font-bold text-gray-700 font-sans">
                            Legal-Tech
                        </span>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            Contact Us
                        </Link>
                    </div>

                    {/* Powered By Section */}
                    <div className="text-sm text-gray-400">
                        Powered by <span className="font-bold text-gray-600">WeDigi</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
