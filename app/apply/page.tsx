"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "../../data/siteContent";
import Link from "next/link";

interface InputFieldProps {
    label: string;
    type?: "text" | "email" | "url" | "textarea";
    name: string;
    value: string;
    placeholder: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField = ({ label, type = "text", name, value, placeholder, required = true, onChange }: InputFieldProps) => {
    const inputClasses = "bg-[#0D0D0D] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3.5 text-[#F2F2F2] placeholder-[#999B9B]/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all duration-300 font-light w-full";

    return (
        <div className="flex flex-col gap-2 relative z-10 w-full">
            <label className="text-[12px] uppercase tracking-widest text-[#999B9B] font-helvetica font-bold">
                {label}
            </label>
            {type === "textarea" ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    rows={4}
                    className={`${inputClasses} resize-none font-garamond font-normal`}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={`${inputClasses} font-garamond font-normal`}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};

export default function ApplyPage() {
    const { form, title, description } = siteContent.finalCta;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        website: "",
        bottleneck: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const payload = {
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
            ...formData,
            subject: `New Strategy Application from ${formData.firstName} ${formData.lastName}`
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await res.json();

            if (result.success) {
                setIsSubmitted(true);
                setFormData({ firstName: "", lastName: "", email: "", website: "", bottleneck: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Connection error. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#0D0D0D] py-24 md:py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06)_0%,transparent_50%)]" />
            
            <div className="relative max-w-200 w-full mx-auto text-center flex flex-col items-center z-10 mb-12">
                <Link href="/" className="mb-12 text-[#999B9B] hover:text-[#D4AF37] transition-colors font-helvetica text-sm tracking-widest uppercase">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#F2F2F2] mb-6 leading-[1.1] tracking-tight font-helvetica font-bold">
                    {title.main}
                    <div className="text-[#D4AF37] mt-2">
                        {title.highlight}
                    </div>
                </h1>
                <p className="text-[18px] md:text-[20px] text-[#999B9B] leading-[1.6] max-w-150 font-garamond font-normal">
                    {description}
                </p>
            </div>

            <div className="w-full max-w-200 relative z-10">
                {isSubmitted ? (
                    <div className="flex flex-col items-center gap-4 p-12 bg-linear-to-b from-[#131313] to-[#0A0A0A] border border-[#D4AF37]/30 rounded-[2rem] text-center animate-in zoom-in duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                            <svg className="w-8 h-8 text-[#0D0D0D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl text-[#F2F2F2] font-helvetica font-bold">Application Received</h3>
                        <p className="text-[#999B9B] font-garamond text-lg mb-6 max-w-md">
                            {form.success}
                        </p>
                        <Link href="/" className="px-8 py-3 text-[14px] tracking-wide text-[#0D0D0D] rounded-full border-2 border-white bg-white hover:bg-[#EAEAEA] hover:border-[#D4AF37] transition-all font-helvetica font-bold">
                            Return Home
                        </Link>
                    </div>
                ) : (
                    <form
                        className="bg-linear-to-b from-[#131313] to-[#0A0A0A] border border-[rgba(255,255,255,0.05)] rounded-[2rem] p-8 md:p-12 text-left shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
                        onSubmit={handleSubmit}
                    >
                        <div className="absolute -top-37.5 left-1/2 -translate-x-1/2 w-100 h-75 bg-[#D4AF37] opacity-[0.05] blur-[80px] rounded-[100%] pointer-events-none"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <InputField label={form.fields.firstName.label} name="firstName" value={formData.firstName} onChange={handleChange} placeholder={form.fields.firstName.placeholder} />
                            <InputField label={form.fields.lastName.label} name="lastName" value={formData.lastName} onChange={handleChange} placeholder={form.fields.lastName.placeholder} />
                        </div>

                        <div className="mb-6">
                            <InputField label={form.fields.email.label} type="email" name="email" value={formData.email} onChange={handleChange} placeholder={form.fields.email.placeholder} />
                        </div>

                        <div className="mb-6">
                            <InputField label={form.fields.website.label} type="url" name="website" value={formData.website} onChange={handleChange} placeholder={form.fields.website.placeholder} />
                        </div>

                        <div className="mb-8">
                            <InputField label={form.fields.bottleneck.label} type="textarea" name="bottleneck" value={formData.bottleneck} onChange={handleChange} placeholder={form.fields.bottleneck.placeholder} />
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-end gap-4 md:gap-6 mt-8 relative z-10">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`group flex w-full md:w-auto items-center justify-center px-8 py-4 md:py-4 md:px-9 text-[14px] md:text-[15px] tracking-wide text-[#0D0D0D] rounded-full border-2 border-white bg-white hover:bg-[#EAEAEA] hover:border-[#D4AF37] shadow-[0_8px_10px_rgba(255,255,255,0.08)] transition-all hover:-translate-y-0.5 cursor-pointer font-helvetica font-bold ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                <span className="flex items-center gap-3">
                                    {isSubmitting ? 'Architecting...' : form.submit}
                                    {!isSubmitting && <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />}
                                </span>
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </main>
    );
}
