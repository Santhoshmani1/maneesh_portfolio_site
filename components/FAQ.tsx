"use client";

import { useState } from "react";
import { siteContent } from "../data/siteContent";

export default function FAQ() {
    const { title, description, cta, items } = siteContent.faq;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-16 md:py-24 px-6 border-t border-[rgba(255,255,255,0.08)] min-h-dvh flex items-center justify-center" id="faq">
            <div className="max-w-275 mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 md:gap-12">
                <div className="md:pr-8">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-4 leading-[1.1] tracking-tight"
                        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                    >
                        {title}
                    </h2>
                    <p
                        className="text-[19px] md:text-[21px] text-[#999B9B] leading-[1.6] mb-8 font-light"
                        style={{ fontFamily: "var(--font-eb-garamond)" }}
                    >
                        {description}
                    </p>
                    <a
                        href="#apply"
                        className="group inline-flex items-center gap-3 px-7 py-3 text-[12px] uppercase tracking-[0.2em] font-medium text-[#F2F2F2] rounded-full border border-[rgba(255,255,255,0.15)] hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[rgba(212,175,55,0.03)] transition-all duration-500"
                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                    >
                        {cta}
                        <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
                <div className="flex flex-col">
                    {items.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i} className="border-b border-[rgba(255,255,255,0.08)]">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className={`group w-full flex justify-between items-center text-left py-6 cursor-pointer transition-all duration-500 ${isOpen ? "text-[#D4AF37]" : "text-[#F2F2F2] hover:text-[#D4AF37]"}`}
                                >
                                    <span
                                        className="font-bold text-[21px] md:text-[23px] tracking-tight pr-8"
                                        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                                    >
                                        {item.q}
                                    </span>

                                    {/* Elegant Plus/Minus Icon */}
                                    <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
                                        <span
                                            className={`absolute w-full h-[1.5px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "bg-[#D4AF37] rotate-180" : "bg-current group-hover:bg-[#D4AF37]"}`}
                                        />
                                        <span
                                            className={`absolute w-full h-[1.5px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "bg-[#D4AF37] rotate-180 opacity-0 scale-50" : "bg-current rotate-90 group-hover:bg-[#D4AF37]"}`}
                                        />
                                    </div>
                                </button>
                                <div
                                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                >
                                    <div className="overflow-hidden">
                                        <p
                                            className="text-[#999B9B] pb-8 leading-[1.7] text-[19px] md:text-[21px] font-light max-w-[90%]"
                                            style={{ fontFamily: "var(--font-eb-garamond)" }}
                                        >
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}