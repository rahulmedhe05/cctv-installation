import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "sindhrot");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Sindhrot, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Sindhrot, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Sindhrot, CCTV installation Sindhrot, security camera Sindhrot, CCTV dealer Sindhrot Vadodara, Hikvision Sindhrot, CP Plus Sindhrot`,
  openGraph: {
    title: `CCTV Camera Installation in Sindhrot, Vadodara`,
    description: `Best CCTV and security system installation services in Sindhrot, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function SindhrotPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Sindhrot" areaSlug="sindhrot" />
      <MegaFooter />
    </>
  );
}
