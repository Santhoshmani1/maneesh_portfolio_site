"use client";

import { useEffect, useState, useRef } from "react";
import { siteContent } from "../data/siteContent";
import { Quote, Zap } from "lucide-react";

export default function WhatDemandDelivers() {
    const { badge, title, quote, quoteLabel, paragraphs } = siteContent.whatDemandDelivers;
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="insights" className="py-16 md:py-24 px-6 bg-[#0D0D0D] relative overflow-hidden border-t border-[#1A1A1A]">
            {/* Background Ambient Glows */}
            <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute -top-[20%] right-[0%] w-[60%] h-[60%] rounded-full opacity-[0.06] blur-[150px] bg-[#D4AF37]" />
                <div className="absolute bottom-[0%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-[0.04] blur-[120px] bg-[#999B9B]" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMGQwZDBkIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxYTFhMWEiLz4KPC9zdmc+')] opacity-[0.35] mix-blend-overlay" />
            </div>

            <div className={`relative z-10 max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center`}>

                {/* Left Side: Title & Quote */}
                <div className={`flex flex-col relative w-full items-start transition-all duration-[1000ms] transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#999B9B]/20 bg-white/[0.02] backdrop-blur-md w-fit mb-8 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                        <Zap className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-[#999B9B] text-[11px] md:text-[13px] font-semibold tracking-[0.15em] uppercase" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                            {badge}
                        </span>
                    </div>

                    <h2
                        className="text-[38px] md:text-[46px] lg:text-[50px] font-medium text-[#F2F2F2] mb-14 leading-[1.1] tracking-tight text-balance"
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                    >
                        {title.main} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E2C365] to-[#B3932D]">{title.highlight}</span>
                    </h2>

                    <div className="relative group w-full max-w-[550px]">
                        {/* Animated background glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37]/5 to-[#D4AF37]/30 rounded-[2.5rem] blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-500" />

                        <div className="relative bg-[#0A0A0A]/90 backdrop-blur-2xl border border-[#222] group-hover:border-[#D4AF37]/40 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(212,175,55,0.1)]">
                            {/* Giant subtle quote icon */}
                            <Quote className="absolute -top-6 -left-6 w-48 h-48 text-[#151515] group-hover:text-[#D4AF37]/[0.03] transition-colors duration-700 pointer-events-none" />

                            {/* Gradient accent line */}
                            <div className="absolute top-0 right-0 w-[40%] h-[1px] bg-gradient-to-l from-[#D4AF37]/50 to-transparent" />

                            <div className="relative z-10">
                                <blockquote
                                    className="text-[#F2F2F2] text-[24px] md:text-[28px] leading-[1.6] font-light mb-8"
                                    style={{ fontFamily: '"EB Garamond", Garamond, serif', fontStyle: 'italic' }}
                                >
                                    &ldquo;{quote}&rdquo;
                                </blockquote>

                                <div className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                                    <div className="w-12 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
                                    <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-[11px] font-semibold" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                                        {quoteLabel}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Clarification Paragraphs */}
                <div className={`flex flex-col gap-12 relative w-full lg:pl-12 mt-16 lg:mt-0 transition-all duration-[1000ms] delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                    {paragraphs.map((para, idx) => (
                        <div key={idx} className="relative group cursor-default">
                            <div className="absolute -left-6 md:-left-10 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/20 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
                            <div className="absolute -left-6 md:-left-10 top-2 bottom-2 w-[2px] bg-[#222]" />
                            <p className="text-[22px] md:text-[27px] text-[#999B9B] leading-[1.6] font-light group-hover:text-[#c4c4c4] transition-colors duration-500" style={{ fontFamily: '"EB Garamond", Garamond, serif' }}>
                                {para}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
