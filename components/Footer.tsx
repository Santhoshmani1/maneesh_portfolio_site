import { siteContent } from "../data/siteContent";
import { FaLinkedin, FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";

export default function Footer() {
    const { biography, columns, social, copyright } = siteContent.footer;

    const getSocialIcon = (iconName: string) => {
        switch (iconName.toLowerCase()) {
            case "linkedin": return <FaLinkedin className="w-5 h-5" />;
            case "instagram": return <FaInstagram className="w-5 h-5" />;
            case "gmail": return <FaEnvelope className="w-5 h-5" />;
            case "youtube": return <FaYoutube className="w-5 h-5" />;
            default: return null;
        }
    };

    return (
        <footer className="bg-[#0A0A0A] border-t border-[rgba(255,255,255,0.08)] pt-24 pb-8 px-6">
            <div className="max-w-[1100px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    <div className="md:col-span-1">
                        <span className="font-helvetica font-semibold text-[#F2F2F2] md:text-2xl text-xl block mb-4">
                            {biography.name}
                        </span>
                        <p
                            className="text-[#999B9B] text-sm md:text-base leading-relaxed font-garamond font-normal"
                        >
                            {biography.role}
                        </p>
                    </div>
                    {columns.map((column) => (
                        <div key={column.title}>
                            <h3
                                className="text-[#F2F2F2] font-helvetica font-bold uppercase tracking-widest text-xs mb-6"
                            >
                                {column.title}
                            </h3>
                            <ul
                                className="flex flex-col gap-4 text-sm text-[#999B9B] font-garamond font-normal"
                            >
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="hover:text-[#D4AF37] transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-[rgba(255,255,255,0.08)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p
                        className="text-[#999B9B] text-sm md:text-base font-garamond font-normal"
                    >
                        &copy; {new Date().getFullYear()} {copyright}
                    </p>
                    <div className="flex gap-6">
                        {social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                aria-label={item.name}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#999B9B] hover:text-[#D4AF37] transition-colors"
                            >
                                {getSocialIcon(item.icon)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
