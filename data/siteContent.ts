import { 
  Activity, 
  Layers, 
  Search, 
  Megaphone, 
  Workflow, 
  Target,
  Building2,
  Brain,
  UserPlus,
  Rocket
} from "lucide-react";

export const siteContent = {
  announcement: {
    tickerText: "2025 Demand Engine Report  |  Get Now →     New: Pipeline Accelerator System for SaaS →     Applications now open for Q2 2025 →",
  },
  header: {
    logo: "Maneesh Seepana",
    navLinks: [
      { name: "Home", href: "#home" },
      { name: "Insights", href: "#insights" },
      { name: "Process", href: "#process" },
      { name: "Services & Pricing", href: "#services" },
      { name: "FAQ", href: "#faq" }
    ],
    cta: {
      text: "Apply Now",
      href: "#apply"
    }
  },
  hero: {
    badge: "Strategic Growth Partner",
    title: {
      main: "B2B Demand Generation Services for",
      highlight: "SaaS & AI",
      suffix: "Companies"
    },
    description: "A Demand Engine is a structured system that turns positioning, search, and founder authority into predictable inbound pipeline.",
    ctas: [
      { text: "Explore Demand Engines", href: "#process", variant: "secondary" },
      { text: "Apply for Partnership", href: "#apply", variant: "primary" }
    ],
    journeyPillars: [
      { title: "Positioning Depth", icon: Layers, desc: "Solidify your market narrative & differentiation." },
      { title: "Search Capture", icon: Search, desc: "Own high-intent search real estate & capture demand." },
      { title: "Authority Amplification", icon: Megaphone, desc: "Scale the founder's influence and industry trust." },
      { title: "Conversion Architecture", icon: Workflow, desc: "Turn all attention into a predictable inbound pipeline." }
    ],
    framework: {
        title: "The Demand Engine",
        subtitle: "Execution Framework"
    }
  },
  whatDemandDelivers: {
    badge: "The Core Philosophy",
    title: {
        main: "What Real B2B Demand Generation Should",
        highlight: "Deliver?"
    },
    quote: "If your marketing isn't driving revenue conversations, it's not demand generation.",
    quoteLabel: "The Demand Principle",
    paragraphs: [
        "Most agencies think demand generation equals to traffic, but real demand generation for B2B companies means generating qualified pipeline, not impressions.",
        "The correct way of implementing demand generation for your company is aligning content with buyer intent, creating compounding inbound systems and building authority before prospects speak to sales."
    ]
  },
  processTimeline: {
    title: "How I Build Demand",
    description: "A systematic approach to building and scaling your B2B demand generation engine.",
    steps: [
      {
        title: "Diagnose",
        description: "Full audit of positioning, buyer intent gaps, and pipeline.",
      },
      {
        title: "Architect",
        description: "Design the demand system aligned to revenue goals.",
      },
      {
        title: "Deploy",
        description: "Execute across SEO, authority content, and storytelling.",
      },
      {
        title: "Optimize",
        description: "Refine based on pipeline data and engagement signals.",
      },
    ]
  },
  services: {
    badge: "Partnership Models",
    title: {
        main: "My B2B Demand Generation",
        highlight: "Services"
    },
    items: [
      {
        title: "Pipeline Accelerator System",
        priceRange: "$1,500–$2,000/month",
        commitment: "3-month minimum",
        icon: Activity,
        features: [
          "Full demand audit & ICP definition",
          "Content engine setup (SEO + thought leadership)",
          "LinkedIn distribution strategy",
          "Monthly pipeline reporting",
          "Bi-weekly strategy calls",
        ],
      },
      {
        title: "Category Leader Blueprint",
        priceRange: "$2,000–$3,000/month",
        commitment: "6-month minimum",
        icon: Layers,
        features: [
          "Everything in Pipeline Accelerator",
          "Category narrative & positioning",
          "Founder brand development",
          "Analyst & media outreach strategy",
          "Demand Engine performance dashboard",
          "Weekly strategy sessions",
        ],
        recommended: true,
      },
      {
        title: "Founder Magnet Machine",
        priceRange: "$1,500–$2,500/month",
        commitment: "4-month minimum",
        icon: Megaphone,
        features: [
          "Founder-led content system",
          "LinkedIn authority building",
          "Podcast & speaking pipeline",
          "Inbound lead nurture sequences",
          "Monthly growth review",
        ],
      },
    ]
  },
  whoItsFor: {
    badge: "Ideal Partnerships",
    title: {
        main: "Built for Growth-Stage",
        highlight: "SaaS & AI",
        suffix: "Teams"
    },
    description: "My B2B demand generation services are precise systems engineered for organizations ready to scale with intent and authority.",
    idealClients: [
      {
        title: "Growth-Stage SaaS",
        description: "B2B SaaS companies with active sales motions, looking to scale past their current growth plateau with high-intent pipeline.",
        icon: Building2,
        colSpan: "md:col-span-2 lg:col-span-2",
        gradient: "from-[#D4AF37]/10 via-[#D4AF37]/[0.02] to-transparent",
      },
      {
        title: "AI Startups",
        description: "AI-first platforms needing to cut through noise and establish category authority.",
        icon: Brain,
        colSpan: "md:col-span-1 lg:col-span-1",
        gradient: "from-[#E2C365]/10 via-[#E2C365]/[0.02] to-transparent",
      },
      {
        title: "Founder-Led Tech",
        description: "Technical founders ready to turn their domain expertise into a massive inbound revenue engine.",
        icon: UserPlus,
        colSpan: "md:col-span-1 lg:col-span-1",
        gradient: "from-[#B3932D]/10 via-[#B3932D]/[0.02] to-transparent",
      },
      {
        title: "Ready-to-Scale Teams",
        description: "Marketing and sales teams ready to unite and invest in compounding, long-term leverage rather than short-term hacks.",
        icon: Rocket,
        colSpan: "md:col-span-2 lg:col-span-2",
        gradient: "from-[#D4AF37]/10 via-[#D4AF37]/[0.02] to-transparent",
      },
    ],
    notFor: {
        title: {
            main: "Who this is",
            highlight: "Not",
            suffix: "for"
        },
        description: "My systems require serious commitment and a long-term mindset. If your team aligns with the categories below, we won't be a good match.",
        items: [
            "Idea-stage startups without product-market fit.",
            "Companies looking for quick-fix marketing hacks.",
            "Teams unwilling to invest in founder authority.",
            "Businesses that just want 'more blog traffic'.",
        ]
    }
  },
  whatMakesDifferent: {
    title: "What Makes Me Different from a B2B Demand Generation Agency",
    mostAgencies: {
        title: "Most Agencies operate on",
        items: [
            {
                title: "Vanity Metrics",
                description: "Focus on traffic and clicks instead of sales conversations.",
            },
            {
                title: "Siloed Execution",
                description: "Treating SEO, content, and storytelling as disconnected channels.",
            },
            {
                title: "Task Vendors",
                description: "Executing random acts of marketing without a unifying strategy.",
            },
        ]
    },
    myDemandEngine: {
        title: "My Demand Engine",
        items: [
            {
                title: "Pipeline & Revenue",
                description: "Map demand generation directly to measurable sales outcomes.",
            },
            {
                title: "Integrated Narrative",
                description: "Fuse search, content, and category positioning into one system.",
            },
            {
                title: "Compounding Leverage",
                description: "Build repeatable growth engines optimized for long-term ROI.",
            },
        ]
    }
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Don't see the answer to the question you have?",
    cta: "Get in touch",
    items: [
      {
        q: "What are B2B demand generation services?",
        a: "B2B demand generation services focus on building awareness, authority, and inbound interest that converts into qualified pipeline and revenue-not just traffic.",
      },
      {
        q: "How is demand generation different from lead generation?",
        a: "Lead generation captures existing demand, whereas demand generation creates and nurtures demand before prospects enter the buying stage.",
      },
      {
        q: "How long does B2B demand generation take to work?",
        a: "Most SaaS companies begin seeing measurable traction within 60–90 days, with compounding impact over 6–12 months.",
      },
      {
        q: "What do you mean by alignment in application selection?",
        a: "I follow a strict selection process because I avoid working with direct competitors of my existing customers for at least one year.",
      },
    ]
  },
  finalCta: {
    title: {
        main: "Growth Becomes Predictable When",
        highlight: "Demand Is Architected"
    },
    description: "Applications are reviewed personally. If there’s alignment, we’ll schedule a strategy call to build a demand engine that turns your expertise into pipeline.",
    cta: "Apply for Strategy",
    form: {
        title: "Application",
        fields: {
            firstName: { label: "First Name", placeholder: "Jane" },
            lastName: { label: "Last Name", placeholder: "Doe" },
            email: { label: "Work Email", placeholder: "jane@company.com" },
            website: { label: "Company Website", placeholder: "https://company.com" },
            bottleneck: { label: "Primary Growth Bottleneck", placeholder: "Where is your pipeline breaking right now?" }
        },
        submit: "Submit Application",
        cancel: "Cancel",
        success: "Application received. I'll be in touch soon."
    }
  },
  footer: {
    biography: {
        name: "Maneesh Seepana",
        role: "B2B Demand Generation Strategist building predictable revenue pipelines."
    },
    columns: [
        {
            title: "Services",
            links: [
                { name: "Pipeline Accelerator", href: "#services" },
                { name: "Category Leader", href: "#services" },
                { name: "Founder Magnet", href: "#services" }
            ]
        },
        {
            title: "Insights",
            links: [
                { name: "Demand Engines", href: "#insights" },
                { name: "B2B Strategy", href: "#insights" },
                { name: "Case Studies", href: "#insights" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About", href: "#about" },
                { name: "Contact", href: "#apply" },
                { name: "Apply", href: "#apply" }
            ]
        }
    ],
    social: [
        { name: "LinkedIn", href: "#", icon: "linkedin" },
        { name: "X (Twitter)", href: "#", icon: "twitter" }
    ],
    copyright: "Maneesh Seepana. All rights reserved."
  }
};
