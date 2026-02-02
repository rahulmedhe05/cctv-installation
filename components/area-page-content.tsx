import Link from "next/link";
import { businessConfig, vadodaraAreas } from "@/lib/business-config";
import { Phone, MapPin, Shield, Camera, Lock, Bell, CheckCircle, Star, Clock, Users, Award, Wrench } from "lucide-react";

interface AreaPageContentProps {
  areaName: string;
  areaSlug: string;
}

export function AreaPageContent({ areaName, areaSlug }: AreaPageContentProps) {
  // Get nearby areas (for internal linking)
  const currentIndex = vadodaraAreas.findIndex(a => a.slug === areaSlug);
  const nearbyAreas = vadodaraAreas.filter((_, i) => 
    i !== currentIndex && Math.abs(i - currentIndex) <= 5
  ).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/#areas" className="hover:text-white">Areas</Link>
              <span>/</span>
              <span className="text-white">{areaName}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CCTV Camera Installation & Security System in {areaName}, Vadodara
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional CCTV installation and comprehensive security solutions for homes, offices, shops, and industries in {areaName}. 
              Trusted by 500+ customers with 15+ years of experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={`tel:${businessConfig.phone}`}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now: {businessConfig.phone}
              </a>
              <a 
                href={`https://wa.me/${businessConfig.whatsapp}`}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-red-600 mb-2" />
              <span className="font-bold text-lg">15+ Years</span>
              <span className="text-sm text-gray-600">Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-red-600 mb-2" />
              <span className="font-bold text-lg">5000+</span>
              <span className="text-sm text-gray-600">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 text-red-600 mb-2" />
              <span className="font-bold text-lg">4.9/5</span>
              <span className="text-sm text-gray-600">Customer Rating</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-red-600 mb-2" />
              <span className="font-bold text-lg">24/7</span>
              <span className="text-sm text-gray-600">Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Area Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Best CCTV Installation Service in {areaName}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Are you searching for <strong>CCTV camera installation in {areaName}, Vadodara</strong>? You've come to the right place! 
                We are the leading <strong>security system provider in {areaName}</strong> offering professional installation, 
                maintenance, and repair services for all types of security equipment.
              </p>
              <p>
                {areaName} is one of the prominent localities in Vadodara with a mix of residential societies, commercial establishments, 
                and business centers. Whether you own a home, run a shop, manage an office, or operate a factory in {areaName}, 
                our expert team provides customized security solutions tailored to your specific needs.
              </p>
              <p>
                We are <strong>authorized dealers of Hikvision, CP Plus, Dahua, Bosch, and Panasonic</strong> in {areaName}, Vadodara. 
                Our certified technicians ensure professional installation with proper cable management, optimal camera positioning, 
                and mobile app configuration for remote viewing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Our Security Services in {areaName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive security solutions for every need - from basic home CCTV to advanced industrial surveillance systems.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Camera className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">CCTV Camera Installation</h3>
              <p className="text-gray-600 mb-4">
                HD, Full HD, and 4K CCTV cameras with night vision, wide-angle lens, and weatherproof options for {areaName} homes and businesses.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Dome & Bullet Cameras</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> PTZ Cameras</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> IP & Wireless Cameras</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Home Security Systems</h3>
              <p className="text-gray-600 mb-4">
                Complete home security packages for {areaName} residents including CCTV, alarms, sensors, and smart home integration.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 2/4/8 Camera Packages</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Mobile App Viewing</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Cloud Storage Options</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Lock className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Access Control Systems</h3>
              <p className="text-gray-600 mb-4">
                Biometric attendance, card-based access, and smart locks for offices and commercial buildings in {areaName}.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Fingerprint Scanners</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Face Recognition</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> RFID Card Systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Bell className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Fire & Burglar Alarms</h3>
              <p className="text-gray-600 mb-4">
                Smoke detectors, fire alarms, and intrusion detection systems for complete safety in {areaName}.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Smoke Detectors</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Motion Sensors</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Siren Systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Video Door Phone</h3>
              <p className="text-gray-600 mb-4">
                See and talk to visitors before opening the door. Perfect for apartments and homes in {areaName}.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> HD Video Quality</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Night Vision</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Mobile Connectivity</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Wrench className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">AMC & Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Annual maintenance contracts and repair services to keep your security systems running smoothly in {areaName}.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Regular Servicing</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Quick Repairs</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Priority Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            CCTV Packages for {areaName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Affordable security packages with professional installation and warranty. Prices include cameras, DVR/NVR, cables, and installation.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border rounded-xl p-6 hover:border-red-500 transition-colors">
              <h3 className="text-xl font-bold mb-2">Basic Package</h3>
              <p className="text-gray-600 text-sm mb-4">For small homes & shops</p>
              <div className="text-3xl font-bold text-red-600 mb-4">₹9,999<span className="text-base font-normal text-gray-500">onwards</span></div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 2 HD Cameras</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 4 Channel DVR</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 500GB Hard Disk</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Mobile App Setup</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 1 Year Warranty</li>
              </ul>
              <a href={`tel:${businessConfig.phone}`} className="block text-center bg-gray-100 hover:bg-gray-200 py-2 rounded-lg font-semibold transition-colors">
                Get Quote
              </a>
            </div>

            <div className="border-2 border-red-500 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Standard Package</h3>
              <p className="text-gray-600 text-sm mb-4">For homes & offices</p>
              <div className="text-3xl font-bold text-red-600 mb-4">₹17,999<span className="text-base font-normal text-gray-500">onwards</span></div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 4 Full HD Cameras</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 8 Channel DVR</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 1TB Hard Disk</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Night Vision</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 2 Year Warranty</li>
              </ul>
              <a href={`tel:${businessConfig.phone}`} className="block text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Get Quote
              </a>
            </div>

            <div className="border rounded-xl p-6 hover:border-red-500 transition-colors">
              <h3 className="text-xl font-bold mb-2">Premium Package</h3>
              <p className="text-gray-600 text-sm mb-4">For large properties</p>
              <div className="text-3xl font-bold text-red-600 mb-4">₹34,999<span className="text-base font-normal text-gray-500">onwards</span></div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 8 4K Cameras</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 16 Channel NVR</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 2TB Hard Disk</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> AI Features</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> 3 Year Warranty</li>
              </ul>
              <a href={`tel:${businessConfig.phone}`} className="block text-center bg-gray-100 hover:bg-gray-200 py-2 rounded-lg font-semibold transition-colors">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Us for CCTV Installation in {areaName}?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Authorized Dealers</h3>
              <p className="text-gray-400 text-sm">Official dealers of Hikvision, CP Plus, Dahua, Bosch & more</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Expert Technicians</h3>
              <p className="text-gray-400 text-sm">Certified & trained professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Same Day Service</h3>
              <p className="text-gray-400 text-sm">Quick installation and support for {areaName} customers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Warranty & Support</h3>
              <p className="text-gray-400 text-sm">Comprehensive warranty with 24/7 technical support</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions - CCTV in {areaName}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">What is the cost of CCTV installation in {areaName}?</h3>
              <p className="text-gray-600">
                CCTV installation cost in {areaName} starts from ₹9,999 for a basic 2-camera setup. 
                The price varies based on camera quality, number of cameras, and additional features. 
                Contact us for a free site survey and customized quote.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">Do you provide same-day CCTV installation in {areaName}?</h3>
              <p className="text-gray-600">
                Yes, we offer same-day CCTV installation services in {areaName}, Vadodara for urgent requirements. 
                Our local technicians can reach your location quickly for installation and repairs.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">Which CCTV brands do you sell in {areaName}?</h3>
              <p className="text-gray-600">
                We are authorized dealers of Hikvision, CP Plus, Dahua, Bosch, Panasonic, and Ezviz in {areaName}. 
                All products come with manufacturer warranty and our installation guarantee.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold mb-2">Do you offer AMC services for CCTV in {areaName}?</h3>
              <p className="text-gray-600">
                Yes, we provide Annual Maintenance Contracts (AMC) starting from ₹2,000/year for customers in {areaName}. 
                AMC includes regular servicing, free repairs, and priority support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            We Also Serve Nearby Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {nearbyAreas.map((nearbyArea) => (
              <Link
                key={nearbyArea.slug}
                href={`/${nearbyArea.slug}`}
                className="px-4 py-2 bg-white border rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
              >
                CCTV in {nearbyArea.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Secure Your Property in {areaName}?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Get a free site survey and quotation. Our team will visit your location in {areaName} and recommend the best security solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`tel:${businessConfig.phone}`}
              className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <Phone className="w-6 h-6" />
              Call: {businessConfig.phone}
            </a>
            <a 
              href={`https://wa.me/${businessConfig.whatsapp}`}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `${businessConfig.name} - ${areaName}`,
            "description": `CCTV camera installation and security system services in ${areaName}, Vadodara`,
            "telephone": businessConfig.phone,
            "email": businessConfig.email,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": areaName,
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "Place",
              "name": `${areaName}, Vadodara`
            },
            "priceRange": "₹9,999 - ₹50,000+",
            "openingHours": "Mo-Sa 09:00-20:00"
          })
        }}
      />
    </div>
  );
}
