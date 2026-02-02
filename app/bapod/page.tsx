import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "bapod");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Bapod, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Bapod, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Bapod, CCTV installation Bapod, security camera Bapod, CCTV dealer Bapod Vadodara, Hikvision Bapod, CP Plus Bapod`,
  openGraph: {
    title: `CCTV Camera Installation in Bapod, Vadodara`,
    description: `Best CCTV and security system installation services in Bapod, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function BapodPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Bapod" areaSlug="bapod" />
      <MegaFooter />
    </>
  );
}
