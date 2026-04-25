"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "../data/siteContent";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const { logo, navLinks, cta } = siteContent.header;

    return (
        <header
            className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/20 ${scrolled
                ? "bg-[#0D0D0D]/90 backdrop-blur-2xl py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                : "bg-[#0D0D0D]  py-4 md:py-5"
                }`}
        >
            <div className="max-w-275 mx-auto px-6 flex items-center justify-between">
                <a href="#" className="relative z-50">
                    <span
                        className="text-[#F2F2F2] text-xl lg:text-2xl font-medium tracking-tighter font-bold"
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                    >
                        {logo}
                    </span>
                </a>

                {/* Center: Nav links */}
                <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
                    <ul className="flex items-center gap-10 tracking-tight text-[#FFFFFF] font-medium" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="relative py-2 hover:text-[#D4AF37] transition-colors duration-500 group"
                                >
                                    {link.name}
                                    <span className="absolute left-0 bottom-0 w-full h-px bg-[#D4AF37] scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right: CTAs and Mobile Toggle */}
                <div className="flex items-center gap-5 relative z-50">
                    {/* Apply pill button (Desktop) */}
                    <a
                        href={cta.href}
                        className="hidden md:inline-flex group relative items-center justify-center px-8 py-3 text-[12px] uppercase tracking-widest text-[#0D0D0D] rounded-full overflow-hidden border border-[#E5E5E5] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-[#D4AF37]/30 hover:shadow-[0_12px_25px_rgba(212,175,55,0.15)] hover:-translate-y-0.5"
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#F9F7F2] to-[#FFF7E6] transition-opacity duration-500 group-hover:opacity-90"></span>
                        <span className="relative z-10 font-semibold tracking-widest text-[#0D0D0D] flex items-center gap-2">
                            {cta.text}
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F2F2F2] text-[#0D0D0D] transition-colors duration-500 group-hover:bg-[#D4AF37] group-hover:text-white">
                                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" strokeWidth={2.5} />
                            </span>
                        </span>
                    </a>

                    {/* Mobile Menu Hamburger */}
                    <button
                        className="md:hidden relative p-3 -mr-3 text-[#F2F2F2] hover:text-[#D4AF37] transition-colors focus:outline-none z-[60]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <div className="w-6 h-5 relative flex justify-center items-center">
                            <span className={`absolute w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-out origin-center ${mobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                            <span className={`absolute w-full h-[2px] bg-current rounded-full transition-opacity duration-300 ease-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`absolute w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-out origin-center ${mobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            <div
                className={`fixed inset-0 h-[100dvh] bg-[#050505]/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${mobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
                    }`}
            >
                {/* Decorative background element */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[#D4AF37]/5 blur-[120px]"></div>
                    <div className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[#D4AF37]/5 blur-[120px]"></div>
                </div>

                <nav className="flex flex-col w-full max-w-md px-8 relative z-10">
                    <ul className="flex flex-col w-full" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                        {navLinks.map((link, index) => (
                            <li
                                key={link.name}
                                className="w-full border-b border-white/5 last:border-0"
                                style={{
                                    transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms',
                                    transform: mobileMenuOpen ? "translateY(0)" : "translateY(40px)",
                                    opacity: mobileMenuOpen ? 1 : 0,
                                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                                }}
                            >
                                <a
                                    href={link.href}
                                    className="flex items-center justify-between py-6 text-3xl font-medium tracking-tight text-[#F2F2F2] hover:text-[#D4AF37] transition-colors duration-500 group"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="group-hover:translate-x-2 transition-transform duration-500">{link.name}</span>
                                    <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#D4AF37]" strokeWidth={1.5} />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div
                        className="mt-12 w-full flex justify-center"
                        style={{
                            transitionDelay: mobileMenuOpen ? `${navLinks.length * 100}ms` : '0ms',
                            transform: mobileMenuOpen ? "translateY(0)" : "translateY(40px)",
                            opacity: mobileMenuOpen ? 1 : 0,
                            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                        }}
                    >
                        <a
                            href={cta.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="group relative inline-flex items-center justify-center px-10 py-4 text-[13px] uppercase tracking-widest font-semibold text-[#0D0D0D] rounded-full overflow-hidden border border-[#E5E5E5] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-[#D4AF37]/30 hover:shadow-[0_12px_25px_rgba(212,175,55,0.15)] hover:-translate-y-0.5"
                            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#F9F7F2] to-[#FFF7E6] transition-opacity duration-500 group-hover:opacity-90"></span>
                            <span className="relative z-10 flex items-center gap-2">
                                {cta.text}
                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F2F2F2] text-[#0D0D0D] transition-colors duration-500 group-hover:bg-[#D4AF37] group-hover:text-white">
                                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" strokeWidth={2.5} />
                                </span>
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
