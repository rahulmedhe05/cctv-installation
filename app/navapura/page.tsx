import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "navapura");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Navapura, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Navapura, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Navapura, CCTV installation Navapura, security camera Navapura, CCTV dealer Navapura Vadodara, Hikvision Navapura, CP Plus Navapura`,
  openGraph: {
    title: `CCTV Camera Installation in Navapura, Vadodara`,
    description: `Best CCTV and security system installation services in Navapura, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function NavapuraPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Navapura" areaSlug="navapura" />
      <MegaFooter />
    </>
  );
}
