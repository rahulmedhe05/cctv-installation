import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "old-padra-road");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Old Padra Road, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Old Padra Road, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Old Padra Road, CCTV installation Old Padra Road, security camera Old Padra Road, CCTV dealer Old Padra Road Vadodara, Hikvision Old Padra Road, CP Plus Old Padra Road`,
  openGraph: {
    title: `CCTV Camera Installation in Old Padra Road, Vadodara`,
    description: `Best CCTV and security system installation services in Old Padra Road, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function OldPadraRoadPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Old Padra Road" areaSlug="old-padra-road" />
      <MegaFooter />
    </>
  );
}
