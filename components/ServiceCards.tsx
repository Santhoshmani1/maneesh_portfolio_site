"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "../data/siteContent";
import { Activity, Layers, Megaphone, Check, LayoutTemplate, ArrowUpRight } from "lucide-react";

interface ServiceCardData {
    title: string;
    priceRange: string;
    commitment: string;
    features: string[];
    recommended?: boolean;
    icon: React.ElementType;
}

export default function ServiceCards() {
    const { badge, title, items } = siteContent.services;
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Staggered animation for cards
    useEffect(() => {
        if (!isVisible) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLDivElement;
                        const index = Number(target.dataset.index) || 0;
                        
                        setTimeout(() => {
                            target.classList.remove("opacity-0", "translate-y-12");
                            target.classList.add("opacity-100", "translate-y-0");
                        }, index * 150 + 200); 
                        
                        observer.unobserve(target);
                    }
                });
            },
            { rootMargin: "0px 0px -50px 0px" }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, [isVisible]);

    return (
        <section ref={sectionRef} id="services" className="py-16 md:py-24 px-6 bg-[#0D0D0D] relative overflow-hidden border-t border-[#1A1A1A]">
            {/* Ambient Background Effects */}
            <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] rounded-full opacity-[0.05] blur-[120px] bg-[#D4AF37]" />
                <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full opacity-[0.06] blur-[120px] bg-[#999B9B]" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMGQwZDBkIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxYTFhMWEiLz4KPC9zdmc+')] opacity-[0.35] mix-blend-overlay" />
            </div>

            <div className="relative z-10 max-w-[1300px] mx-auto">
                {/* Header */}
                <div className={`flex flex-col items-center text-center transition-all duration-[1000ms] transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#999B9B]/20 bg-white/[0.02] backdrop-blur-md w-fit mb-8 shadow-[0_0_15px_rgba(255,255,255,0.02)] transition-transform hover:scale-105 duration-300">
                        <LayoutTemplate className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-[#999B9B] text-[11px] md:text-[13px] tracking-[0.15em] uppercase font-helvetica font-bold">
                            {badge}
                        </span>
                    </div>

                    <h2
                        className="text-[38px] md:text-[46px] lg:text-[50px] text-[#F2F2F2] mb-16 md:mb-24 leading-[1.1] tracking-tight text-balance max-w-3xl mx-auto font-helvetica font-bold"
                    >
                        {title.main} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E2C365] to-[#B3932D]">{title.highlight}</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
                    {items.map((service, index) => {
                        const Icon = service.icon;
                        
                        return (
                        <div
                            key={service.title}
                            ref={(el) => { cardRefs.current[index] = el; }}
                            data-index={index}
                            className={`group opacity-0 translate-y-12 relative flex flex-col p-[1px] transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-10 hover:z-20 ${
                                service.recommended ? 'lg:-translate-y-4' : ''
                            }`}
                        >
                            {/* Card Glow & Border Gradient */}
                            <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-b transition-all duration-500 ease-out group-hover:blur-[2px] ${
                                service.recommended 
                                ? 'from-[#D4AF37]/50 via-[#D4AF37]/10 to-transparent opacity-100 group-hover:from-[#D4AF37]/70 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]' 
                                : 'from-[#333]/60 to-[#111]/30 opacity-70 group-hover:opacity-100 group-hover:from-[#D4AF37]/40'
                            }`} />
                            
                            {/* Inner Card Content */}
                            <div className="relative flex flex-col h-full bg-gradient-to-b from-[#121212]/95 to-[#0A0A0A]/95 backdrop-blur-xl rounded-[2.4rem] p-8 md:p-10 overflow-hidden transform transition-transform duration-500 group-hover:-translate-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                                
                                {/* Inner Ambient Glow */}
                                <div className={`absolute -inset-px rounded-[2.4rem] bg-gradient-to-b from-[#D4AF37] to-transparent opacity-0 transition-opacity duration-500 pointer-events-none z-0 ${service.recommended ? "group-hover:opacity-[0.08]" : "group-hover:opacity-[0.04]"}`} />

                                {/* Recommended Badge */}
                                {service.recommended && (
                                    <div className="absolute top-0 right-0 z-20">
                                        <div className="bg-gradient-to-r from-[#D4AF37] to-[#B38D22] text-[#0D0D0D] text-[10px] md:text-[11px] uppercase tracking-[0.15em] px-6 py-2.5 rounded-bl-[1.5rem] shadow-[-4px_4px_15px_rgba(0,0,0,0.3)] font-helvetica font-bold">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Service Icon */}
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${
                                        service.recommended 
                                        ? "bg-[#D4AF37]/10 border border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.2)]" 
                                        : "bg-[#222]/30 border border-[#333] group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/10 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                                    }`}>
                                        <Icon className={`w-6 h-6 transition-colors duration-500 ${service.recommended ? 'text-[#D4AF37]' : 'text-[#888] group-hover:text-[#D4AF37]'}`} />
                                    </div>

                                    {/* Service Title */}
                                    <h3
                                        className="text-[#F2F2F2] text-2xl mb-4 tracking-tight leading-snug group-hover:text-[#FFF] transition-colors font-helvetica font-bold"
                                    >
                                        {service.title}
                                    </h3>

  
                                    {/* Details List */}
                                    <ul className="flex flex-col gap-4 mb-10 flex-1">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-4 group/item">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-[#222] border border-[#333] flex items-center justify-center shrink-0 transition-all duration-300 group-hover/item:border-[#D4AF37]/50 group-hover/item:bg-[#D4AF37]/10 group-hover/item:shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                                                    <Check className="w-3 h-3 text-[#D4AF37] opacity-70 group-hover/item:opacity-100 transition-opacity" strokeWidth={3} />
                                                </div>
                                                <span className="text-[#999B9B] text-[17px] leading-snug transition-colors duration-300 group-hover/item:text-[#F2F2F2] font-garamond font-normal">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <a
                                        href="#apply"
                                        className={`group mt-auto flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 md:py-4 md:px-9 text-[14px] md:text-[15px] font-helvetica font-bold tracking-wide transition-all z-10 hover:-translate-y-0.5 border-2 ${
                                            service.recommended
                                                ? "text-[#0D0D0D] border-white bg-white hover:bg-[#EAEAEA] hover:border-[#D4AF37] shadow-[0_8px_10px_rgba(255,255,255,0.08)]"
                                                : "border-white/20 bg-white/5 backdrop-blur-sm text-[#F2F2F2] hover:border-white/50 hover:bg-white/10"
                                        }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            Apply for Strategy
                                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </section>
    );
}
