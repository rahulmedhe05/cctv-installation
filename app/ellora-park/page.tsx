import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "ellora-park");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Ellora Park, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Ellora Park, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Ellora Park, CCTV installation Ellora Park, security camera Ellora Park, CCTV dealer Ellora Park Vadodara, Hikvision Ellora Park, CP Plus Ellora Park`,
  openGraph: {
    title: `CCTV Camera Installation in Ellora Park, Vadodara`,
    description: `Best CCTV and security system installation services in Ellora Park, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function ElloraParkPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Ellora Park" areaSlug="ellora-park" />
      <MegaFooter />
    </>
  );
}
