import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "pratap-nagar");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Pratap Nagar, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Pratap Nagar, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Pratap Nagar, CCTV installation Pratap Nagar, security camera Pratap Nagar, CCTV dealer Pratap Nagar Vadodara, Hikvision Pratap Nagar, CP Plus Pratap Nagar`,
  openGraph: {
    title: `CCTV Camera Installation in Pratap Nagar, Vadodara`,
    description: `Best CCTV and security system installation services in Pratap Nagar, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function PratapNagarPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Pratap Nagar" areaSlug="pratap-nagar" />
      <MegaFooter />
    </>
  );
}
