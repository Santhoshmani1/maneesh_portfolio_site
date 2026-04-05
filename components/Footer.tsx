import { siteContent } from "../data/siteContent";

export default function Footer() {
    const { biography, columns, social, copyright } = siteContent.footer;
    
    return (
        <footer className="bg-[#0A0A0A] border-t border-[rgba(255,255,255,0.08)] pt-24 pb-8 px-6">
            <div className="max-w-[1100px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    <div className="md:col-span-1">
                        <span className="font-[family-name:var(--font-eb-garamond)] italic text-[#F2F2F2] text-xl block mb-4">
                            {biography.name}
                        </span>
                        <p
                            className="text-[#999B9B] text-sm leading-relaxed"
                            style={{ fontFamily: "var(--font-eb-garamond)" }}
                        >
                            {biography.role}
                        </p>
                    </div>
                    {columns.map((column) => (
                        <div key={column.title}>
                            <h3
                                className="text-[#F2F2F2] font-bold uppercase tracking-widest text-xs mb-6"
                                style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                            >
                                {column.title}
                            </h3>
                            <ul
                                className="flex flex-col gap-4 text-sm text-[#999B9B]"
                                style={{ fontFamily: "var(--font-eb-garamond)" }}
                            >
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="hover:text-[#D4AF37] transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-[rgba(255,255,255,0.08)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p
                        className="text-[#999B9B] text-sm"
                        style={{ fontFamily: "var(--font-eb-garamond)" }}
                    >
                        &copy; {new Date().getFullYear()} {copyright}
                    </p>
                    <div className="flex gap-6">
                        {social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                aria-label={item.name}
                                className="text-[#999B9B] hover:text-[#D4AF37] transition-colors"
                            >
                                {item.icon === "linkedin" ? (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}