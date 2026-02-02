import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "lalbaug");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Lalbaug, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Lalbaug, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Lalbaug, CCTV installation Lalbaug, security camera Lalbaug, CCTV dealer Lalbaug Vadodara, Hikvision Lalbaug, CP Plus Lalbaug`,
  openGraph: {
    title: `CCTV Camera Installation in Lalbaug, Vadodara`,
    description: `Best CCTV and security system installation services in Lalbaug, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function LalbaugPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Lalbaug" areaSlug="lalbaug" />
      <MegaFooter />
    </>
  );
}
