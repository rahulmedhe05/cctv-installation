import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "sayajigunj");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Sayajigunj, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Sayajigunj, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Sayajigunj, CCTV installation Sayajigunj, security camera Sayajigunj, CCTV dealer Sayajigunj Vadodara, Hikvision Sayajigunj, CP Plus Sayajigunj`,
  openGraph: {
    title: `CCTV Camera Installation in Sayajigunj, Vadodara`,
    description: `Best CCTV and security system installation services in Sayajigunj, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function SayajigunjPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Sayajigunj" areaSlug="sayajigunj" />
      <MegaFooter />
    </>
  );
}
