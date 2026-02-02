import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "kalali");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Kalali, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Kalali, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Kalali, CCTV installation Kalali, security camera Kalali, CCTV dealer Kalali Vadodara, Hikvision Kalali, CP Plus Kalali`,
  openGraph: {
    title: `CCTV Camera Installation in Kalali, Vadodara`,
    description: `Best CCTV and security system installation services in Kalali, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function KalaliPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Kalali" areaSlug="kalali" />
      <MegaFooter />
    </>
  );
}
