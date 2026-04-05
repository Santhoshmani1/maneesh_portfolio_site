"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "../data/siteContent";

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

export default function FinalCTA() {
    const { title, description, cta, form } = siteContent.finalCta;
    const [isFormOpen, setIsFormOpen] = useState(false);
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
                console.log("Form Submitted:", formData);
                setIsSubmitted(true);
                setIsFormOpen(false);
                setFormData({ firstName: "", lastName: "", email: "", website: "", bottleneck: "" });
                // No need for alert if we use a success state
                setTimeout(() => setIsSubmitted(false), 5000);
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
        <section id="apply" className="py-16 md:py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0D0D0D]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06)_0%,transparent_50%)]" />
            <div className="relative max-w-275 mx-auto text-center flex flex-col items-center z-10">
                <h2
                    className="text-5xl md:text-6xl lg:text-7xl text-[#F2F2F2] mb-8 leading-[1.1] tracking-tight max-w-225 font-helvetica font-bold"
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

                <div className={`transition-all duration-700 ease-in-out overflow-hidden w-full px-2 md:px-0 ${isFormOpen ? 'max-h-0 opacity-0 mb-0' : 'max-h-50 opacity-100 mb-2 p-6'}`}>
                    {isSubmitted ? (
                        <div className="flex flex-col items-center gap-2 p-6 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl animate-in zoom-in duration-500">
                             <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                                <svg className="w-6 h-6 text-[#0D0D0D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                             </div>
                             <p className="text-[#D4AF37] font-bold font-helvetica tracking-wide uppercase text-sm">
                                {form.success}
                             </p>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="group flex w-full md:w-auto mx-auto items-center justify-center px-8 py-4 md:py-4 md:px-9 text-[14px] md:text-[15px] tracking-wide text-[#0D0D0D] rounded-full border-2 border-white bg-white hover:bg-[#EAEAEA] hover:border-[#D4AF37] shadow-[0_8px_10px_rgba(255,255,255,0.08)] transition-all hover:-translate-y-0.5 cursor-pointer font-helvetica font-bold"
                        >
                            <span className="flex items-center gap-3">
                                {cta}
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                            </span>
                        </button>
                    )}
                </div>

                {/* Application Form */}
                <div className={`transition-all duration-1000 ease-in-out overflow-hidden w-full max-w-200 ${isFormOpen ? 'max-h-300 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-8 pointer-events-none'}`}>
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

                        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-6 mt-8 relative z-10">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsFormOpen(false);
                                    setFormData({ firstName: "", lastName: "", email: "", website: "", bottleneck: "" });
                                }}
                                className="w-full md:w-auto py-3 md:py-0 text-[#999B9B] hover:text-[#F2F2F2] text-[14px] md:text-[15px] tracking-wide font-helvetica font-bold transition-colors duration-300 cursor-pointer whitespace-nowrap text-center"
                            >
                                {form.cancel}
                            </button>
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
                </div>
            </div>
        </section>
    );
}