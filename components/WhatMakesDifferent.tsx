"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "../data/siteContent";

const GrayX = () => (
    <svg className="w-6 h-6 shrink-0 text-[#999B9B]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const GoldCheckmark = () => (
    <svg className="w-6 h-6 shrink-0 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const AgencyPoint = ({ title, description }: { title: string; description: string }) => (
    <li className="flex items-start gap-5 group opacity-70 hover:opacity-100 transition-opacity duration-300">
        <div className="mt-0.5">
            <GrayX />
        </div>
        <div className="flex flex-col gap-1">
            <span className="text-[#F2F2F2]/80 font-medium tracking-wide text-[17px] md:text-lg" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                {title}
            </span>
            <span className="text-[#999B9B] leading-relaxed text-[17px] md:text-[19px]">
                {description}
            </span>
        </div>
    </li>
);

const MyPoint = ({ title, description }: { title: string; description: string }) => (
    <li className="flex items-start gap-5 group">
        <div className="mt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
            <GoldCheckmark />
        </div>
        <div className="flex flex-col gap-1.5">
            <span className="text-[#D4AF37] font-bold tracking-wide text-[17px] md:text-lg" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                {title}
            </span>
            <span className="text-[#F2F2F2] leading-relaxed text-[18px] md:text-[20px]">
                {description}
            </span>
        </div>
    </li>
);

export default function WhatMakesDifferent() {
    const { title, mostAgencies, myDemandEngine } = siteContent.whatMakesDifferent;
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (typeof IntersectionObserver === "undefined") {
            requestAnimationFrame(() => setIsVisible(true));
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "0px 0px -100px 0px" }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-16 md:py-24 px-6 border-t border-[rgba(255,255,255,0.05)] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.03)_0%,transparent_70%)] relative">
            <div className={`max-w-275 mx-auto relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="text-center max-w-225 mx-auto mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#F2F2F2] leading-[1.1] tracking-tight"
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                    >
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Most Agencies */}
                    <div className="bg-[#111111] border border-[rgba(255,255,255,0.05)] rounded-[2rem] p-8 md:p-12 relative overflow-hidden transition-all duration-500 hover:border-[rgba(255,255,255,0.1)] group/card">
                        <h3
                            className="text-[#999B9B] uppercase tracking-widest text-xs md:text-sm font-bold mb-10 flex items-center gap-3 transition-colors duration-300 group-hover/card:text-[#F2F2F2]"
                            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                        >
                            <span className="w-2 h-2 rounded-full bg-[#999B9B]/50 transition-colors duration-300 group-hover/card:bg-[#999B9B]"></span>
                            {mostAgencies.title}
                        </h3>
                        <ul className="flex flex-col gap-8 text-[#999B9B] font-light" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                            {mostAgencies.items.map((point) => (
                                <AgencyPoint
                                    key={point.title}
                                    title={point.title}
                                    description={point.description}
                                />
                            ))}
                        </ul>
                    </div>

                    {/* How I Work */}
                    <div className="bg-linear-to-b from-[#1A1A1A] to-[#111111] border border-[#D4AF37]/40 rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.08)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.12)] hover:-translate-y-1 md:hover:-translate-y-2">
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#D4AF37] opacity-[0.08] blur-[60px] rounded-full pointer-events-none transition-opacity duration-500" />
                        <h3
                            className="text-[#D4AF37] uppercase tracking-widest text-xs md:text-sm font-bold mb-10 flex items-center gap-3"
                            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-40"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></span>
                            </span>
                            {myDemandEngine.title}
                        </h3>
                        <ul className="flex flex-col gap-8 text-[#F2F2F2] font-light" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                            {myDemandEngine.items.map((point) => (
                                <MyPoint
                                    key={point.title}
                                    title={point.title}
                                    description={point.description}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
