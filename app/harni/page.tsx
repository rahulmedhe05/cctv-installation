import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "harni");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Harni, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Harni, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Harni, CCTV installation Harni, security camera Harni, CCTV dealer Harni Vadodara, Hikvision Harni, CP Plus Harni`,
  openGraph: {
    title: `CCTV Camera Installation in Harni, Vadodara`,
    description: `Best CCTV and security system installation services in Harni, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function HarniPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Harni" areaSlug="harni" />
      <MegaFooter />
    </>
  );
}
