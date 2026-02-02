import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "atladara");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Atladara, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Atladara, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Atladara, CCTV installation Atladara, security camera Atladara, CCTV dealer Atladara Vadodara, Hikvision Atladara, CP Plus Atladara`,
  openGraph: {
    title: `CCTV Camera Installation in Atladara, Vadodara`,
    description: `Best CCTV and security system installation services in Atladara, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function AtladaraPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Atladara" areaSlug="atladara" />
      <MegaFooter />
    </>
  );
}
