import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "tarsali");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Tarsali, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Tarsali, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Tarsali, CCTV installation Tarsali, security camera Tarsali, CCTV dealer Tarsali Vadodara, Hikvision Tarsali, CP Plus Tarsali`,
  openGraph: {
    title: `CCTV Camera Installation in Tarsali, Vadodara`,
    description: `Best CCTV and security system installation services in Tarsali, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function TarsaliPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Tarsali" areaSlug="tarsali" />
      <MegaFooter />
    </>
  );
}
