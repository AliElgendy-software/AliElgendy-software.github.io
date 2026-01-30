import { Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-neutral-950 py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Ali Elgendy. All rights reserved.
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Built with</span>
                    <Heart size={16} className="text-red-500 fill-red-500" />
                    <span>using React & Tailwind</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
