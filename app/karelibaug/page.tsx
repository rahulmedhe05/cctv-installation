import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "karelibaug");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Karelibaug, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Karelibaug, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Karelibaug, CCTV installation Karelibaug, security camera Karelibaug, CCTV dealer Karelibaug Vadodara, Hikvision Karelibaug, CP Plus Karelibaug`,
  openGraph: {
    title: `CCTV Camera Installation in Karelibaug, Vadodara`,
    description: `Best CCTV and security system installation services in Karelibaug, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function KarelibaugPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Karelibaug" areaSlug="karelibaug" />
      <MegaFooter />
    </>
  );
}
