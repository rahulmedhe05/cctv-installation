import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "vadsar");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Vadsar, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Vadsar, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Vadsar, CCTV installation Vadsar, security camera Vadsar, CCTV dealer Vadsar Vadodara, Hikvision Vadsar, CP Plus Vadsar`,
  openGraph: {
    title: `CCTV Camera Installation in Vadsar, Vadodara`,
    description: `Best CCTV and security system installation services in Vadsar, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function VadsarPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Vadsar" areaSlug="vadsar" />
      <MegaFooter />
    </>
  );
}
