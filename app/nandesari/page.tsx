import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "nandesari");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Nandesari, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Nandesari, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Nandesari, CCTV installation Nandesari, security camera Nandesari, CCTV dealer Nandesari Vadodara, Hikvision Nandesari, CP Plus Nandesari`,
  openGraph: {
    title: `CCTV Camera Installation in Nandesari, Vadodara`,
    description: `Best CCTV and security system installation services in Nandesari, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function NandesariPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Nandesari" areaSlug="nandesari" />
      <MegaFooter />
    </>
  );
}
