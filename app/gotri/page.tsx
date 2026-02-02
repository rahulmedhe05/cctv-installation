import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vadodaraAreas, businessConfig } from "@/lib/business-config";
import { AreaPageContent } from "@/components/area-page-content";
import { Navigation } from "@/components/navigation";
import { MegaFooter } from "@/components/mega-footer";

const area = vadodaraAreas.find(a => a.slug === "gotri");

export const metadata: Metadata = {
  title: `CCTV Camera Installation in Gotri, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation, security systems, and surveillance solutions in Gotri, Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. Call ${businessConfig.phone} for free survey.`,
  keywords: `CCTV Gotri, CCTV installation Gotri, security camera Gotri, CCTV dealer Gotri Vadodara, Hikvision Gotri, CP Plus Gotri`,
  openGraph: {
    title: `CCTV Camera Installation in Gotri, Vadodara`,
    description: `Best CCTV and security system installation services in Gotri, Vadodara. Get free site survey and quotation.`,
    type: "website",
  },
};

export default function GotriPage() {
  if (!area) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <AreaPageContent areaName="Gotri" areaSlug="gotri" />
      <MegaFooter />
    </>
  );
}
