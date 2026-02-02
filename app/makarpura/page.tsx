import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "makarpura");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Makarpura, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Makarpura, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Makarpura, CCTV installation Makarpura, security camera Makarpura, CCTV dealer Makarpura Vadodara, Hikvision Makarpura, CP Plus Makarpura`,
  openGraph: {
    title: `CCTV Camera Installation in Makarpura, Vadodara`,
    description: `Best CCTV and security system installation services in Makarpura, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function MakarpuraPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Makarpura" areaSlug="makarpura" />
      <MegaFooter />
    </>
  );
}
