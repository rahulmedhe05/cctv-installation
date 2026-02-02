import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "wadi");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Wadi, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Wadi, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Wadi, CCTV installation Wadi, security camera Wadi, CCTV dealer Wadi Vadodara, Hikvision Wadi, CP Plus Wadi`,
  openGraph: {
    title: `CCTV Camera Installation in Wadi, Vadodara`,
    description: `Best CCTV and security system installation services in Wadi, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function WadiPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Wadi" areaSlug="wadi" />
      <MegaFooter />
    </>
  );
}
