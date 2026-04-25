"use client";

import { useState, useEffect, useRef } from "react";
import { siteContent } from "../data/siteContent";

export default function ProcessTimeline() {
    const { title, description, steps } = siteContent.processTimeline;
    const [activeStep, setActiveStep] = useState<number>(1);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [fillHeight, setFillHeight] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowCenter = window.innerHeight * 0.55;
            let closestIndex = 0;
            let minDistance = Infinity;

            const firstStep = stepRefs.current[0];
            const lastStep = stepRefs.current[stepRefs.current.length - 1];

            stepRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const distance = Math.abs(rect.top - windowCenter);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                }
            });

            setActiveStep(closestIndex);

            if (firstStep && lastStep) {
                const firstRect = firstStep.getBoundingClientRect();
                const lastRect = lastStep.getBoundingClientRect();

                const totalLineHeight = lastRect.top - firstRect.top;
                setLineHeight(totalLineHeight);

                // Butter-smooth continuous fill calculation
                const scrollOffset = windowCenter - firstRect.top;

                let newFillHeight = scrollOffset;
                if (newFillHeight < 0) newFillHeight = 0;
                if (newFillHeight > totalLineHeight) newFillHeight = totalLineHeight;

                setFillHeight(newFillHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        handleScroll();
        const timeoutId = setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section id="process" className="py-16 md:py-24 px-6">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 md:gap-24">
                <div className="md:sticky md:top-32 self-start">
                    <h2
                        className="text-4xl md:text-5xl font-helvetica font-bold text-[#F2F2F2] mb-6 leading-[1.1] tracking-tight"
                    >
                        {title}
                    </h2>
                    <p
                        className="text-[20px] md:text-[22px] text-[#999B9B] leading-relaxed font-garamond font-normal"
                    >
                        {description}
                    </p>
                </div>

                <div className="relative pl-10 md:pl-16 flex flex-col gap-20 md:gap-32 pb-16 md:pb-32 mt-8 md:mt-0">
                    {/* The track line */}
                    <div
                        className="absolute top-[18px] left-[11px] w-[2px] bg-[rgba(255,255,255,0.15)] z-0"
                        style={{ height: `${lineHeight}px` }}
                    ></div>

                    {/* The active fill line */}
                    <div
                        className="absolute top-[18px] left-[11px] w-[2px] bg-[#D4AF37] z-10"
                        style={{ height: `${fillHeight}px` }}
                    >
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-10 bg-[#D4AF37] opacity-60 blur-[6px] rounded-full"></div>
                    </div>

                    {steps.map((step, index) => {
                        const isActive = index <= activeStep;
                        const isCurrent = index === activeStep;
                        return (
                            <div
                                key={step.title}
                                ref={(el) => { stepRefs.current[index] = el; }}
                                className="relative z-20"
                            >
                                <div
                                    className={`absolute top-1.5 -left-[40px] md:-left-[64px] w-6 h-6 rounded-full border-[2px] bg-[#0D0D0D] transition-all duration-500 flex items-center justify-center ${isActive ? 'border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'border-[rgba(255,255,255,0.25)]'}`}
                                >
                                    <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${isActive ? 'bg-[#D4AF37] scale-100' : 'bg-transparent scale-0'}`} />
                                </div>

                                <div className={`transition-all duration-700 origin-left ${isCurrent ? "opacity-100 translate-x-0 scale-100" : isActive ? "opacity-60 translate-x-0 scale-100" : "opacity-30 -translate-x-4 scale-95"}`}>
                                    <span
                                        className="text-7xl md:text-9xl font-helvetica font-bold text-[rgba(212,175,55,0.05)] absolute -top-10 md:-top-16 -left-2 md:-left-6 select-none z-0"
                                    >
                                        0{index + 1}
                                    </span>
                                    <div className="relative z-10">
                                        <h3
                                            className="text-2xl md:text-3xl text-[#F2F2F2] font-helvetica font-bold mb-4 tracking-tight"
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            className="text-[19px] md:text-[22px] text-[#999B9B] leading-relaxed font-garamond font-normal"
                                        >
                                            {step.description}
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