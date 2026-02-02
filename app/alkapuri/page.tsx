import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "alkapuri");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Alkapuri, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Alkapuri, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Alkapuri, CCTV installation Alkapuri, security camera Alkapuri, CCTV dealer Alkapuri Vadodara, Hikvision Alkapuri, CP Plus Alkapuri`,
  openGraph: {
    title: `CCTV Camera Installation in Alkapuri, Vadodara`,
    description: `Best CCTV and security system installation services in Alkapuri, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function AlkapuriPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Alkapuri" areaSlug="alkapuri" />
      <MegaFooter />
    </>
  );
}
