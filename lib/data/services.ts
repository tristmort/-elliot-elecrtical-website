import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "1",
    slug: "maintenance-repairs",
    title: "Maintenance & Repairs",
    shortDescription:
      "Expert electrical fault diagnosis and repair services for homes and businesses.",
    fullDescription: `Electrical faults are not always what they seem and are often difficult to identify. When your lights go off and you cannot find the cause, Elliot Electrical will send out one of our friendly and experienced technicians to diagnose and resolve the issue efficiently.

We maintain multiple response teams equipped to handle both major and minor electrical issues. Our approach prioritises thorough diagnostics rather than assumptions, ensuring you avoid costly unnecessary repairs.

With over two decades of experience, our teams can quickly identify root causes and implement lasting solutions that keep your property safe and fully operational.`,
    bulletPoints: [
      "General Lighting Repairs",
      "Electrical Fault Finding",
      "Pool Motor Installations & Repairs",
      "DB Board Revamps & Repairs",
      "Load Balancing",
      "Garden Lighting",
      "LED Lighting Upgrades (up to 90% consumption reduction)",
    ],
    icon: "Wrench",
  },
  {
    id: "2",
    slug: "electrical-construction",
    title: "Electrical Construction",
    shortDescription:
      "Installation, wiring and testing of electrical equipment in residential, commercial and industrial buildings.",
    fullDescription: `Electrical construction involves the installation, wiring and testing of electrical equipment in residential, commercial and industrial buildings.

Elliot Electrical handles specialised construction related to designing, installing, and maintaining electrical systems during building assembly or reconstruction. This includes electric wiring through cable lines, current leads, and interior wiring installation.

Our experienced teams work closely with builders, architects, and project managers to ensure electrical systems are installed correctly the first time, meeting all compliance requirements.`,
    bulletPoints: [
      "New Building Electrical Installations",
      "Wiring & Cable Management",
      "Interior Wiring Installation",
      "Electrical System Design",
      "Testing & Commissioning",
    ],
    areas: [
      "Warehouses",
      "Office Buildings",
      "Schools & Recreational Facilities",
      "Town Houses",
      "Houses",
      "Guard Houses",
      "Server Rooms",
    ],
    icon: "Building2",
  },
  {
    id: "3",
    slug: "certificate-of-compliance",
    title: "Electrical Compliance Certificate",
    shortDescription:
      "Electrical compliance certification for all installations and existing properties.",
    fullDescription: `Elliot Electrical can issue a certificate on all installations undertaken by us as well as certification of any existing installation, provided that we conduct the inspection ourselves.

Certificates of Compliance are mandated continuously and should be renewed every 24 months or following any modifications to the electrical system.

Our process involves a thorough inspection and compliance check. If the installation is compliant, certification is issued. If not, a detailed defect report is provided along with repair estimates, so you know exactly what needs to be addressed.

We also cover electric fencing certification — systems altered after October 1, 2012 require proper certification.`,
    bulletPoints: [
      "Full Electrical Inspections",
      "Certificate of Compliance (COC) Issuance",
      "Defect Reports & Repair Estimates",
      "Electric Fencing Certification",
      "24-Month Renewal Compliance",
    ],
    areas: [
      "Office Buildings",
      "Warehouses",
      "Churches",
      "Houses",
      "Town Houses",
      "Flats & Apartments",
    ],
    icon: "ShieldCheck",
  },
  {
    id: "4",
    slug: "revamp-renovate",
    title: "Revamp & Renovate",
    shortDescription:
      "Modernisation of old and dated electrical systems with safety and style.",
    fullDescription: `Besides serving newly built structures, shops, houses and more, we also specialise in the revamp and renovation of old and dated electrical systems.

Many systems installed decades ago no longer have the capacity to serve modern requirements properly. Safety is paramount when dealing with ageing infrastructure.

Our experienced teams can immediately detect dangerous and problematic situations and provide proper solutions. We also incorporate trendy, modern components for visual appeal, ensuring your electrical systems are not only safe and functional but also aesthetically pleasing.`,
    bulletPoints: [
      "Old System Upgrades",
      "Capacity Assessments",
      "Modern Component Integration",
      "Safety-First Approach",
      "Aesthetic Electrical Finishes",
    ],
    areas: ["Offices", "Shops", "Houses", "Cottages"],
    icon: "RefreshCw",
  },
  {
    id: "5",
    slug: "solar-backup-power",
    title: "Solar Backup Power",
    shortDescription:
      "Premium solar solutions for energy independence and load shedding protection.",
    fullDescription: `Tired of being left stranded without electricity because of the unpredictability of the power grid or when Eskom decides to shut the power off?

Elliot Electrical has been providing solar solutions since 2019, backed by over two decades of electrical expertise established since 2001. Our solar installations are designed to give you complete energy independence.

Solar power eliminates the impact of load shedding, provides energy self-sufficiency, reduces monthly electricity bills, increases property value, and lowers your carbon footprint. Panels require minimal maintenance and come with warranties at 80% output for 5+ years.`,
    bulletPoints: [
      "Solar Panel Installations",
      "Battery Backup Systems",
      "Hybrid Solar Solutions",
      "Load Shedding Protection",
      "Free Consultation & Quotes",
      "Warranty-Backed Installations",
    ],
    icon: "Sun",
  },
  {
    id: "6",
    slug: "conserving-energy",
    title: "Conserving Energy",
    shortDescription:
      "Practical solutions to reduce electricity consumption against rising costs.",
    fullDescription: `With the rising costs of electricity at approximately a 15% increase year on year, we need to find ways of reducing consumption without compromising comfort or productivity.

Elliot Electrical provides expert guidance and installation services to help you save significantly on your electricity bills through proven energy conservation methods.

Key areas include geyser optimisation (which accounts for up to 40% of household consumption), where heat pumps can reduce consumption by 65% and solar geysers by 60%. LED lighting upgrades can reduce lighting consumption by up to 90% — for example, converting 12 downlights from 600W to just 60W.`,
    bulletPoints: [
      "Geyser Optimisation (Heat Pumps & Solar Geysers)",
      "LED Lighting Conversions (up to 90% savings)",
      "Air Conditioning Management",
      "Appliance Monitoring & Assessment",
      "Timer Installations",
      "Pre-Paid Metering Solutions",
    ],
    icon: "Leaf",
  },
  {
    id: "7",
    slug: "maintenance-contracts",
    title: "Maintenance Contracts",
    shortDescription:
      "Monthly electrical maintenance and inspection for proactive property care.",
    fullDescription: `You will have the top electrical contractors looking after your property's electrics on a monthly basis. Our proactive inspection approach targets high-risk areas to prevent emergency situations before they arise.

We offer two contract tiers to suit your needs:

**Standard Contract — R139/month (excl. VAT)**
Includes bi-monthly inspections, proactive fault checks, high-risk area assessments, discounted labour rates, and competitive parts pricing.

**Executive Contract — R385/month (excl. VAT)**
Includes everything in the Standard contract plus annual compliance certification, 24/7 availability with no call-out fees, and an initial R950 compliance assessment.

Both contracts require automatic debit order payment.`,
    bulletPoints: [
      "Bi-Monthly Inspections",
      "Proactive Fault Detection",
      "High-Risk Area Assessments",
      "Discounted Labour & Parts Rates",
      "24/7 Emergency Availability (Executive)",
      "Annual Compliance Certification (Executive)",
    ],
    icon: "FileCheck",
  },
];
