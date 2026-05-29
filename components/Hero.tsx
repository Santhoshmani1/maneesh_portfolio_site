"use client";

import { ArrowRight, Sparkles, Activity, Target, Layers, Search, Megaphone, Workflow, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { siteContent } from "../data/siteContent";


export default function Hero() {
    const { badge, title, description, ctas, journeyPillars, framework } = siteContent.hero;
    const [mounted, setMounted] = useState(false);
    const [activePillar, setActivePillar] = useState(0);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setActivePillar((prev) => (prev + 1) % journeyPillars.length);
        }, 3500); // Increased duration to allow users to read the description

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative w-full flex items-center justify-center overflow-hidden bg-[#0D0D0D] py-4 lg:py-0 h-[calc(100dvh-85px)] lg:min-h-[calc(100dvh-85px)] lg:h-auto">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] rounded-full opacity-[0.14] blur-[100px]"
                    style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }}
                />
                <div
                    className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] rounded-full opacity-[0.08] blur-[80px]"
                    style={{ background: "radial-gradient(circle, #999B9B 0%, transparent 70%)" }}
                />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMGQwZDBkIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxYTFhMWEiLz4KPC9zdmc+')] opacity-[0.35] mix-blend-overlay" />
            </div>

            <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-12 items-center px-6 md:px-12 max-w-[1300px] mx-auto w-full transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Text Content */}
                <div className="flex flex-col justify-center max-w-[800px] text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#999B9B]/20 bg-[#D4AF37]/5 backdrop-blur-md w-fit mb-4 lg:mb-6 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-[11px] md:text-[13px] font-semibold tracking-[0.15em] uppercase" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                            {badge}
                        </span>
                    </div>

                    <h1
                        className="font-bold text-[#F2F2F2] leading-[1.05] tracking-tight mb-4 lg:mb-7 text-balance"
                        style={{
                            fontSize: "clamp(34px, 5.5vw, 62px)",
                            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        }}
                    >
                        {title.main} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9db77] via-[#D4AF37] to-[#B3932D]">{title.highlight}</span> {title.suffix}
                    </h1>

                    <p
                        className="text-[18px] md:text-[23px] text-[#999B9B] leading-[1.5] md:leading-[1.6] mb-6 lg:mb-10 max-w-[92%]"
                        style={{ fontFamily: '"EB Garamond", Garamond, serif' }}
                    >
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
                        {ctas.map((cta, idx) => (
                            <a
                                key={cta.text}
                                href={cta.href}
                                className={cta.variant === "primary" 
                                    ? "group flex flex-1 sm:flex-none items-center justify-center px-6 py-3.5 md:py-4 md:px-9 text-[14px] md:text-[15px] font-semibold border-2 tracking-wide text-[#0D0D0D] rounded-full border-white bg-white hover:bg-[#EAEAEA] hover:border-[#D4AF37] shadow-[0_8px_10px_rgba(255,255,255,0.08)] transition-all hover:-translate-y-0.5"
                                    : "group flex flex-1 sm:flex-none items-center justify-center gap-2 md:gap-3 border border-white/20 bg-white/5 backdrop-blur-sm text-[#F2F2F2] font-medium tracking-wide rounded-full px-6 py-3.5 md:py-4 md:px-8 text-[14px] md:text-[15px] hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                                }
                                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                            >
                                {cta.variant === "secondary" && (
                                    <Activity className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                                )}
                                <span className="flex items-center gap-3">
                                    {cta.text}
                                    {cta.variant === "primary" && (
                                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    )}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Beautiful Modern Journey Carousel (Desktop Only) */}
                <div className="w-full hidden lg:flex h-full">
                    <div className="relative w-full h-full min-h-[420px] bg-gradient-to-b from-[#161616]/90 to-[#0A0A0A]/90 backdrop-blur-2xl rounded-[2.5rem] border border-[#2A2A2A] overflow-hidden flex flex-col p-8 xl:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] group">

                        {/* Dynamic Background Aura based on active pillar */}
                        <div
                            className="absolute rounded-full transition-all duration-200 pointer-events-none blur-[120px]"
                            style={{
                                width: '400px',
                                height: '400px',
                                background: 'rgba(212, 175, 55, 0.05)',
                                top: `${20 + (activePillar * 20)}%`,
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />

                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCAuNWgyNE0uNSAwdjI0IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz4KPC9zdmc+')] mix-blend-overlay pointer-events-none opacity-40" />

                        {/* Elegantly styled header */}
                        <div className="mb-10 flex items-center justify-between z-10 w-full relative">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#333] flex items-center justify-center shadow-inner">
                                    <Target className="w-5 h-5 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <h4 className="text-[#F2F2F2] font-medium text-[22px] tracking-tight leading-tight" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                                        {framework.title}
                                    </h4>
                                    <span className="text-[#999B9B] text-[11px] uppercase tracking-[0.25em] font-medium block mt-1">
                                        {framework.subtitle}
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Interactive List */}
                        <div className="relative flex-1 w-full flex flex-col justify-center gap-1 z-10">
                            {journeyPillars.map((pillar, idx) => {
                                const isActive = idx === activePillar;
                                const isPassed = idx < activePillar;
                                const Icon = pillar.icon;

                                return (
                                    <div
                                        key={idx}
                                        className={`flex items-center gap-4 p-2 rounded-[24px] cursor-pointer transition-all duration-200ms] ease-[cubic-bezier(0.22,1,0.36,1)] border
                                            ${isActive ? 'bg-[#161616] border-[#333]/80 shadow-[0_15px_30px_rgba(0,0,0,0.4)] scale-100' : 'bg-transparent border-transparent hover:bg-[#111] scale-[0.98] opacity-60 hover:opacity-100'}
                                        `}
                                        onClick={() => setActivePillar(idx)}
                                    >
                                        <div className={`relative flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                            <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center transition-all duration-300 
                                                ${isActive ? 'bg-[#D4AF37]/10 border border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.15)]' : 'bg-[#111] border border-[#222]'}
                                            `}>
                                                <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-[#D4AF37]' : isPassed ? 'text-[#F2F2F2]/40' : 'text-[#555]'}`} />
                                            </div>
                                        </div>

                                        <div className="flex flex-col flex-1">
                                            <div className="flex items-center gap-3 mb-[2px]">
                                                <span className={`text-[10px] font-bold tracking-[0.2em] transition-colors duration-500 ${isActive ? 'text-[#D4AF37]' : 'text-[#444]'}`}>
                                                    0{idx + 1}
                                                </span>
                                                <h3 className={`text-[19px] xl:text-[21px] font-medium tracking-tight transition-colors duration-500 ${isActive ? 'text-[#F2F2F2]' : 'text-[#888]'}`} style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                                                    {pillar.title}
                                                </h3>
                                            </div>

                                            {/* <div className={`grid transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                                                <div className="min-h-0 pr-4">
                                                    <p className="text-[16px] xl:text-[17px] text-[#999B9B] leading-[1.6]" style={{ fontFamily: '"EB Garamond", Garamond, serif' }}>
                                                        {pillar.desc}
                                                    </p>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
