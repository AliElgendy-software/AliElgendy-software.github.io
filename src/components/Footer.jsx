import { Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-neutral-950 py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Ali Elgendy. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
