import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "ajwa-road");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Ajwa Road, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Ajwa Road, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Ajwa Road, CCTV installation Ajwa Road, security camera Ajwa Road, CCTV dealer Ajwa Road Vadodara, Hikvision Ajwa Road, CP Plus Ajwa Road`,
  openGraph: {
    title: `CCTV Camera Installation in Ajwa Road, Vadodara`,
    description: `Best CCTV and security system installation services in Ajwa Road, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function AjwaRoadPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Ajwa Road" areaSlug="ajwa-road" />
      <MegaFooter />
    </>
  );
}
