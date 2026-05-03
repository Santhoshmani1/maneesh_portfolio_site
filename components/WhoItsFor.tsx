"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "../data/siteContent";
import { CheckCircle2, XCircle, Building2, Brain, UserPlus, Rocket, Users } from "lucide-react";

export default function WhoItsFor() {
    const { badge, title, description, idealClients, notFor } = siteContent.whoItsFor;
    const [isVisible, setIsVisible] = useState(false);
    const [isNotForVisible, setIsNotForVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const notForRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    sectionObserver.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        const notForObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsNotForVisible(true);
                    notForObserver.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (notForRef.current) {
            notForObserver.observe(notForRef.current);
        }

        return () => {
            sectionObserver.disconnect();
            notForObserver.disconnect();
        };
    }, []);

    return (
        <section ref={sectionRef} id="who-its-for" className="py-16 md:py-24 px-6 bg-[min(100vw,2000px)] bg-[#0A0A0A] relative overflow-hidden border-t border-[#1A1A1A]">
            {/* Background Ambient Glows */}
            <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-[2000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-[5%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.04] blur-[150px] bg-[#D4AF37]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.03] blur-[120px] bg-[#E2C365]" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMGEwYTBhIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxNTE1MTUiLz4KPC9zdmc+')] opacity-[0.4] mix-blend-overlay" />
            </div>

            <div className="relative z-10 max-w-[1300px] mx-auto">
                {/* Header Section */}
                <div className={`flex flex-col items-center text-center mb-10 md:mb-20 relative transition-all duration-[1000ms] transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.03] backdrop-blur-md w-fit mb-6 md:mb-8 shadow-[0_0_20px_rgba(212,175,55,0.05)]">
                        <Users className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-[12px] md:text-[13px] tracking-[0.2em] uppercase font-helvetica font-normal">
                            {badge}
                        </span>
                    </div   >

                    <h2
                        className="text-[40px] md:text-[50px] lg:text-[58px] text-[#F2F2F2] mb-4 md:mb-6 leading-[1.05] tracking-tight text-balance max-w-4xl font-helvetica font-bold"
                    >
                        {title.main} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E2C365] to-[#B3932D]">{title.highlight}</span> {title.suffix}
                    </h2>
                    <p
                        className="text-[#999B9B] text-[20px] md:text-[23px] max-w-2xl mx-auto leading-[1.6] font-garamond font-normal"
                    >
                        {description}
                    </p>
                </div>

                {/* Bento Grid: Ideal Clients */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-32 relative z-10 auto-rows-[minmax(0,1fr)]">
                    {idealClients.map((client, idx) => (
                        <div
                            key={client.title}
                            className={`group cursor-default relative bg-[#0D0D0D] border border-white/[0.08] hover:border-[#D4AF37]/40 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col overflow-hidden transition-all duration-[800ms] hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(212,175,55,0.15)] transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${client.colSpan}`}
                            style={{ transitionDelay: `${idx * 150}ms`, boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.05)" }}
                        >
                            {/* Giant outlined background number */}
                            <div
                                className="absolute right-[-5%] bottom-[-10%] z-0 text-[180px] md:text-[240px] text-transparent transition-all duration-1000 select-none pointer-events-none group-hover:-translate-y-4 group-hover:-translate-x-4 font-helvetica font-bold"
                                style={{
                                    WebkitTextStroke: '2px rgba(212,175,55,0.06)',
                                    lineHeight: 1
                                }}
                            >
                                0{idx + 1}
                            </div>

                            {/* Permanent subtle ambient light */}
                            <div className={`absolute -inset-10 bg-gradient-to-br ${client.gradient} opacity-50 group-hover:opacity-100 blur-[80px] transition-opacity duration-1000 -z-10`} />

                            <div className="relative z-10 flex items-start justify-between mb-8 md:mb-20">
                                {/* Premium Icon Box */}
                                <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-xl group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <client.icon className="w-7 h-7 text-[#999B9B] relative z-10 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-500" />
                                </div>

                                {/* Status Indicator */}
                                <div className="flex items-center gap-2.5 px-4 py-2 bg-[#111111] border border-white/[0.08] rounded-full group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/10 transition-all duration-500 shadow-inner">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-75 transition-opacity duration-500"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#333] group-hover:bg-[#D4AF37] group-hover:shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-500"></span>
                                    </span>
                                    <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-[#666] group-hover:text-[#D4AF37] transition-colors duration-500 font-helvetica font-normal">Match</span>
                                </div>
                            </div>

                            <div className="relative z-10 mt-auto">
                                <h3
                                    className="text-[#F2F2F2] text-[26px] md:text-[32px] mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F2F2F2] group-hover:to-[#D4AF37] transition-all duration-300 font-helvetica font-bold"
                                >
                                    {client.title}
                                </h3>

                                {/* Expanding Divider Animation */}
                                <div className="w-10 h-[2px] bg-white/10 mb-6 group-hover:bg-[#D4AF37] group-hover:w-20 transition-all duration-700 ease-out" />

                                <p
                                    className="text-[#888888] text-[18px] md:text-[21px] leading-[1.65] group-hover:text-[#c4c4c4] transition-colors duration-500 font-garamond font-normal"
                                >
                                    {client.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 1-Column Layout: Not for subsection */}
                <div
                    ref={notForRef}
                    className={`relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform ${isNotForVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-[0.98]'}`}
                >
                    {/* Dark aesthetic base with subtle crimson undertones */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[#050505] border border-white/[0.05] rounded-[2.5rem] md:rounded-[3rem]" />

                    {/* Dark themed diagonal stripes pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 20px)' }} />

                    <div className="relative z-10 flex flex-col p-8 md:p-14 lg:p-20 flex justify-center items-center">
                        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="inline-flex items-center gap-3 mb-6 md:mb-10 px-5 py-2.5 rounded-full border border-white/[0.05] bg-white/[0.02] w-fit backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover:border-red-900/30 transition-colors duration-500">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-20"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500/50"></span>
                            </span>
                            <span className="text-[#888] text-[11px] md:text-[12px] tracking-[0.25em] uppercase font-helvetica font-medium group-hover:text-red-400/80 transition-colors duration-500">
                                Not A Fit
                            </span>
                        </div>

                        <h3
                            className="text-[38px] md:text-[48px] text-[#F2F2F2] leading-[1.05] tracking-tight mb-8 font-helvetica font-bold max-w-2xl"
                        >
                            {notFor.title.main} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#666] to-[#444]">{notFor.title.highlight}</span> {notFor.title.suffix}
                        </h3>

                        <div className="flex flex-col gap-6 relative z-10 max-w-3xl">
                            <p className="text-[#F2F2F2] text-[19px] md:text-[22px] leading-[1.65] font-garamond font-normal">
                                {notFor.description}
                            </p>
                            
                            <div className="mt-2 bg-[#0D0D0D]/40 border border-white/[0.03] rounded-3xl p-8 md:p-10 ">
                                <p className="text-[#777] text-[19px] md:text-[22px] leading-[1.65] font-garamond font-normal mb-6">
                                    {notFor.preList}
                                </p>
                                
                                <ul className="flex flex-col gap-3 md:gap-4 list-disc pl-6 marker:text-[#555]">
                                    {notFor.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className={`text-[18px] md:text-[22px] text-[#888] leading-[1.5] font-garamond font-normal transform transition-all duration-700 ${isNotForVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                                            style={{ transitionDelay: `${300 + (idx * 150)}ms` }}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-[#ffffff] text-[18px] md:text-[20px] leading-[1.6] font-garamond italic mt-4">
                                {notFor.conclusion}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
