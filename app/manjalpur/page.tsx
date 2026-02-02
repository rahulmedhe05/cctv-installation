import { getAreaBySlug } from "@/lib/keywords-config";
import { businessConfig } from "@/lib/business-config";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const slug = "manjalpur";
const area = getAreaBySlug(slug);

export const metadata: Metadata = area ? {
  title: `CCTV & Security System in ${area.name}, Vadodara | ${businessConfig.name}`,
  description: `Professional CCTV installation & security system services in ${area.name}, Vadodara. Get expert security solutions for home, office & commercial spaces. Call ${businessConfig.phone}`,
} : {
  title: "Page Not Found",
};

export default function AreaPage() {
  if (!area) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">
          CCTV & Security System Services in {area.name}, Vadodara
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Looking for professional CCTV installation and security system services in {area.name}? 
          We provide complete security solutions for residential, commercial, and industrial properties.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Home Security</h3>
            <p className="text-muted-foreground">Complete home security solutions including CCTV cameras, smart locks, and alarm systems.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Office Security</h3>
            <p className="text-muted-foreground">Professional office security with access control, biometric systems, and surveillance.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Industrial Security</h3>
            <p className="text-muted-foreground">Heavy-duty security systems for factories, warehouses, and industrial facilities.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Services in {area.name}</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-center gap-2">✓ CCTV Camera Installation</li>
            <li className="flex items-center gap-2">✓ Security System Setup</li>
            <li className="flex items-center gap-2">✓ Access Control Systems</li>
            <li className="flex items-center gap-2">✓ Biometric Attendance</li>
            <li className="flex items-center gap-2">✓ Video Door Phone</li>
            <li className="flex items-center gap-2">✓ Fire Alarm Systems</li>
            <li className="flex items-center gap-2">✓ Annual Maintenance</li>
            <li className="flex items-center gap-2">✓ CCTV Repair & Service</li>
          </ul>
        </div>

        <div className="bg-primary/10 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Get Free Quote for {area.name}</h2>
          <p className="mb-4">Contact us today for a free site survey and quotation</p>
          <a 
            href={`tel:${businessConfig.phone}`}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90"
          >
            Call {businessConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
