import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "dabhoi-road");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Dabhoi Road, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Dabhoi Road, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Dabhoi Road, CCTV installation Dabhoi Road, security camera Dabhoi Road, CCTV dealer Dabhoi Road Vadodara, Hikvision Dabhoi Road, CP Plus Dabhoi Road`,
  openGraph: {
    title: `CCTV Camera Installation in Dabhoi Road, Vadodara`,
    description: `Best CCTV and security system installation services in Dabhoi Road, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function DabhoiRoadPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Dabhoi Road" areaSlug="dabhoi-road" />
      <MegaFooter />
    </>
  );
}
