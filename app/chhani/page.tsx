import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "chhani");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Chhani, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Chhani, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Chhani, CCTV installation Chhani, security camera Chhani, CCTV dealer Chhani Vadodara, Hikvision Chhani, CP Plus Chhani`,
  openGraph: {
    title: `CCTV Camera Installation in Chhani, Vadodara`,
    description: `Best CCTV and security system installation services in Chhani, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function ChhaniPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Chhani" areaSlug="chhani" />
      <MegaFooter />
    </>
  );
}
