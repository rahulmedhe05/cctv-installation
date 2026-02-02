import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "waghodia-road");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Waghodia Road, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Waghodia Road, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Waghodia Road, CCTV installation Waghodia Road, security camera Waghodia Road, CCTV dealer Waghodia Road Vadodara, Hikvision Waghodia Road, CP Plus Waghodia Road`,
  openGraph: {
    title: `CCTV Camera Installation in Waghodia Road, Vadodara`,
    description: `Best CCTV and security system installation services in Waghodia Road, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function WaghodiaRoadPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Waghodia Road" areaSlug="waghodia-road" />
      <MegaFooter />
    </>
  );
}
