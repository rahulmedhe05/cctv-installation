import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "productivity-road");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Productivity Road, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Productivity Road, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Productivity Road, CCTV installation Productivity Road, security camera Productivity Road, CCTV dealer Productivity Road Vadodara, Hikvision Productivity Road, CP Plus Productivity Road`,
  openGraph: {
    title: `CCTV Camera Installation in Productivity Road, Vadodara`,
    description: `Best CCTV and security system installation services in Productivity Road, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function ProductivityRoadPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Productivity Road" areaSlug="productivity-road" />
      <MegaFooter />
    </>
  );
}
