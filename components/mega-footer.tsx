"use client";

import Link from "next/link";
import { businessConfig, vadodaraAreas } from "@/lib/business-config";
import { keywords } from "@/lib/keywords-config";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube, Shield, Camera, Lock, Bell } from "lucide-react";

export function MegaFooter() {
  // Group keywords for footer
  const providerKeywords = keywords.filter(k => k.category === "provider").slice(0, 8);
  const serviceKeywords = keywords.filter(k => k.category === "service").slice(0, 8);
  const locationKeywords = keywords.filter(k => k.category === "location").slice(0, 8);
  const commercialKeywords = keywords.filter(k => k.category === "commercial").slice(0, 8);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Services Navigation */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-8 text-center">Our CCTV & Security Services in Vadodara</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Security Providers */}
            <div>
              <h3 className="font-bold text-lg border-b border-gray-600 pb-2 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-500" />
                Security Providers
              </h3>
              <ul className="space-y-2 text-sm">
                {providerKeywords.map((kw) => (
                  <li key={kw.slug}>
                    <Link
                      href={`/${kw.slug}`}
                      className="text-gray-400 hover:text-white transition-colors block py-0.5"
                    >
                      {kw.keyword}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CCTV Services */}
            <div>
              <h3 className="font-bold text-lg border-b border-gray-600 pb-2 mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-blue-500" />
                CCTV Services
              </h3>
              <ul className="space-y-2 text-sm">
                {serviceKeywords.map((kw) => (
                  <li key={kw.slug}>
                    <Link
                      href={`/${kw.slug}`}
                      className="text-gray-400 hover:text-white transition-colors block py-0.5"
                    >
                      {kw.keyword}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Services */}
            <div>
              <h3 className="font-bold text-lg border-b border-gray-600 pb-2 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-500" />
                CCTV for Properties
              </h3>
              <ul className="space-y-2 text-sm">
                {locationKeywords.map((kw) => (
                  <li key={kw.slug}>
                    <Link
                      href={`/${kw.slug}`}
                      className="text-gray-400 hover:text-white transition-colors block py-0.5"
                    >
                      {kw.keyword}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial Services */}
            <div>
              <h3 className="font-bold text-lg border-b border-gray-600 pb-2 mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-orange-500" />
                Commercial Security
              </h3>
              <ul className="space-y-2 text-sm">
                {commercialKeywords.map((kw) => (
                  <li key={kw.slug}>
                    <Link
                      href={`/${kw.slug}`}
                      className="text-gray-400 hover:text-white transition-colors block py-0.5"
                    >
                      {kw.keyword}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Areas We Serve */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-xl font-bold mb-6 text-center">CCTV Installation in All Areas of Vadodara</h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {vadodaraAreas.map((area, index) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {area.name}{index < vadodaraAreas.length - 1 ? "" : ""}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-bold mb-6 text-center">Authorized Dealer</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/hikvision-cctv-dealer-in-vadodara" className="text-gray-400 font-semibold px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
              Hikvision
            </Link>
            <Link href="/cp-plus-cctv-dealer-in-vadodara" className="text-gray-400 font-semibold px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
              CP Plus
            </Link>
            <Link href="/dahua-cctv-dealer-in-vadodara" className="text-gray-400 font-semibold px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
              Dahua
            </Link>
            <Link href="/bosch-security-system-in-vadodara" className="text-gray-400 font-semibold px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
              Bosch
            </Link>
            <Link href="/panasonic-cctv-camera-in-vadodara" className="text-gray-400 font-semibold px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
              Panasonic
            </Link>
            <Link href="/ezviz-camera-dealer-in-vadodara" className="text-gray-400 font-semibold px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
              Ezviz
            </Link>
            <span className="text-gray-400 font-semibold px-4 py-2 bg-gray-800 rounded-lg">
              Godrej
            </span>
            <span className="text-gray-400 font-semibold px-4 py-2 bg-gray-800 rounded-lg">
              Samsung
            </span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <a href={`tel:${businessConfig.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {businessConfig.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <a href={`mailto:${businessConfig.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {businessConfig.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400">{businessConfig.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-gray-400">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-400">Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📹</span>
            <span className="font-bold text-lg">CCTV Vadodara</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {businessConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* SEO Text */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <p className="text-gray-500 text-xs text-center max-w-4xl mx-auto">
            Best CCTV camera installation and security system provider in Vadodara. We are authorized dealers of Hikvision, CP Plus, Dahua, Bosch, Panasonic, and Ezviz. 
            Our services include CCTV installation, access control systems, biometric attendance, fire alarms, video door phones, and complete security solutions. 
            Serving all 40 areas of Vadodara including Alkapuri, Gotri, Manjalpur, Karelibaug, Sayajigunj, Akota, and more. 15+ years experience, 5000+ installations, 24/7 support.
          </p>
        </div>
      </div>
    </footer>
  );
}
