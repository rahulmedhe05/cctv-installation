import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "subhanpura");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Subhanpura, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Subhanpura, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Subhanpura, CCTV installation Subhanpura, security camera Subhanpura, CCTV dealer Subhanpura Vadodara, Hikvision Subhanpura, CP Plus Subhanpura`,
  openGraph: {
    title: `CCTV Camera Installation in Subhanpura, Vadodara`,
    description: `Best CCTV and security system installation services in Subhanpura, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function SubhanpuraPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Subhanpura" areaSlug="subhanpura" />
      <MegaFooter />
    </>
  );
}
