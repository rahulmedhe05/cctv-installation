import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "nizampura");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Nizampura, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Nizampura, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Nizampura, CCTV installation Nizampura, security camera Nizampura, CCTV dealer Nizampura Vadodara, Hikvision Nizampura, CP Plus Nizampura`,
  openGraph: {
    title: `CCTV Camera Installation in Nizampura, Vadodara`,
    description: `Best CCTV and security system installation services in Nizampura, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function NizampuraPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Nizampura" areaSlug="nizampura" />
      <MegaFooter />
    </>
  );
}
