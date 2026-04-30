"use client";

import { ArrowUpRight } from "lucide-react";
import { siteContent } from "../data/siteContent";
import Link from "next/link";

export default function FinalCTA() {
    const { title, description, cta, href } = siteContent.finalCta;

    return (
        <section id="apply" className="py-16 md:py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0D0D0D]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06)_0%,transparent_50%)]" />
            <div className="relative max-w-275 mx-auto text-center flex flex-col items-center z-10">
                <h2
                    className="text-[40px] md:text-[50px] lg:text-[58px] text-[#F2F2F2] mb-8 leading-[1.1] tracking-tight max-w-225 font-helvetica font-bold "
                >
                    {title.main}
                    <div className="text-[#D4AF37] mt-2">
                        {title.highlight}
                    </div>
                </h2>

                <p
                    className="text-[19px] md:text-[22px] text-[#999B9B] leading-[1.6] max-w-170 mb-12 font-garamond font-normal"
                >
                    {description}
                </p>

                <div className="w-full px-2 md:px-0">
                    <Link
                        href={href || "/apply"}
                        className="group flex w-full md:w-auto mx-auto items-center justify-center px-8 py-4 md:py-4 md:px-9 text-[14px] md:text-[15px] tracking-wide text-[#0D0D0D] rounded-full border-2 border-white bg-white hover:bg-[#EAEAEA] hover:border-[#D4AF37] shadow-[0_8px_10px_rgba(255,255,255,0.08)] transition-all hover:-translate-y-0.5 cursor-pointer font-helvetica font-bold lg:w-1/2"
                    >
                        <span className="flex items-center gap-3">
                            {cta}
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}