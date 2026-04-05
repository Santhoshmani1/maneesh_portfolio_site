import { siteContent } from "../data/siteContent";

export default function AnnouncementBar() {
    const { tickerText } = siteContent.announcement;
    return (
        <div className="bg-[#111] overflow-hidden py-2">
            <div className="flex animate-ticker" style={{ width: "200%" }}>
                <span className="text-[#D4AF37] text-[13px] whitespace-nowrap px-8">
                    {tickerText}
                </span>
                <span className="text-[#D4AF37] text-[13px] whitespace-nowrap px-8">
                    {tickerText}
                </span>
            </div>
        </div>
    );
}
