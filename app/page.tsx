import Hero from "@/components/Hero";
import WhatDemandDelivers from "@/components/WhatDemandDelivers";
import WhoItsFor from "@/components/WhoItsFor";
import ServiceCards from "@/components/ServiceCards";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import ProcessTimeline from "@/components/ProcessTimeline";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <Analytics />
      <main>
        <Hero />
        <WhatDemandDelivers />
        <WhatMakesDifferent />
        <ProcessTimeline />
        <WhoItsFor />
        <ServiceCards />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
