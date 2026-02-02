import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "raopura");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Raopura, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Raopura, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Raopura, CCTV installation Raopura, security camera Raopura, CCTV dealer Raopura Vadodara, Hikvision Raopura, CP Plus Raopura`,
  openGraph: {
    title: `CCTV Camera Installation in Raopura, Vadodara`,
    description: `Best CCTV and security system installation services in Raopura, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function RaopuraPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Raopura" areaSlug="raopura" />
      <MegaFooter />
    </>
  );
}
