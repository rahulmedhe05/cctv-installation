import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "sama");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Sama, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Sama, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Sama, CCTV installation Sama, security camera Sama, CCTV dealer Sama Vadodara, Hikvision Sama, CP Plus Sama`,
  openGraph: {
    title: `CCTV Camera Installation in Sama, Vadodara`,
    description: `Best CCTV and security system installation services in Sama, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function SamaPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Sama" areaSlug="sama" />
      <MegaFooter />
    </>
  );
}
