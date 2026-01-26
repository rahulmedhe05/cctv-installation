import Link from "next/link";
import { businessConfig, vadodaraAreas } from "@/lib/business-config";
import { keywords } from "@/lib/keywords-config";
import { MegaFooter } from "@/components/mega-footer";
import { HeroEnquiryForm } from "@/components/forms/hero-enquiry-form";
import { 
  Phone, 
  ArrowRight, 
  MapPin, 
  Star, 
  Users, 
  Award, 
  CheckCircle, 
  Shield, 
  Camera, 
  Lock, 
  Bell,
  Smartphone,
  Clock,
  BadgeCheck,
  Wrench,
  Building2,
  Home,
  Factory,
  Store,
  GraduationCap,
  Hospital,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best CCTV Camera Installation & Security System Provider in Vadodara | 15+ Years Experience",
  description:
    "Looking for professional CCTV camera installation in Vadodara? We are authorized dealers of Hikvision, CP Plus & Dahua. Expert security system provider serving all 40 areas of Vadodara. Free site survey. Call +91 6353583148",
  keywords: [
    "CCTV installation in Vadodara",
    "CCTV camera dealer in Vadodara",
    "Security system provider in Vadodara",
    "Hikvision dealer Vadodara",
    "CP Plus dealer Vadodara",
    "CCTV camera installation near me",
    "Home security system Vadodara",
    "Office CCTV installation Vadodara",
    "Best CCTV service provider Vadodara",
    "Security camera installation Vadodara",
    "Access control system Vadodara",
    "Biometric attendance system Vadodara",
    "CCTV AMC Vadodara",
    "CCTV repair service Vadodara",
  ],
  openGraph: {
    title: "Best CCTV Camera Installation & Security System Provider in Vadodara",
    description: "Professional CCTV installation services in Vadodara. Authorized dealer of Hikvision, CP Plus & Dahua. 15+ years experience, 5000+ installations.",
    type: "website",
    locale: "en_IN",
  },
};

export default function HomePage() {
  // Group keywords by category for display
  const serviceKeywords = keywords.filter(k => k.category === "service" || k.category === "provider").slice(0, 8);
  const brandKeywords = keywords.filter(k => k.category === "brand");

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">📹</span>
              <span className="font-bold text-lg text-gray-900">CCTV Vadodara</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-600 hover:text-red-600 transition-colors">Services</a>
              <a href="#areas" className="text-gray-600 hover:text-red-600 transition-colors">Areas</a>
              <a href="#brands" className="text-gray-600 hover:text-red-600 transition-colors">Brands</a>
              <a href="#contact" className="text-gray-600 hover:text-red-600 transition-colors">Contact</a>
            </div>
            <a
              href={`tel:${businessConfig.phone}`}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Form & Slider */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white py-12 md:py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Hero Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-4">
                <BadgeCheck className="w-5 h-5 text-red-400" />
                <span className="text-red-300 text-sm font-medium">Authorized Dealer - Hikvision, CP Plus, Dahua</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Best <span className="text-red-500">CCTV Camera Installation</span> & Security System Provider in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Vadodara
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                Professional <strong>CCTV installation services</strong> for homes, offices, shops, factories & warehouses in Vadodara. 
                We offer complete <strong>security system solutions</strong> including HD cameras, IP cameras, wireless CCTV, 
                access control & biometric systems. <strong>15+ years of experience</strong> serving all 40 areas of Vadodara.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={`tel:${businessConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-bold hover:from-red-600 hover:to-red-700 transition-all hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call: +91 6353583148
                </a>
                <a
                  href={`https://wa.me/${businessConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Now
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">5000+ Installations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">4.9★ Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">15+ Years Exp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>

              {/* Hero Image Slider */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-48 md:h-56">
                  {/* Slider Images */}
                  <div className="absolute inset-0 animate-fade-1">
                    <img 
                      src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=400&fit=crop" 
                      alt="CCTV Camera Installation in Vadodara" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-semibold">HD CCTV Camera Installation</p>
                      <p className="text-gray-300 text-sm">Professional setup for homes & offices</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 animate-fade-2">
                    <img 
                      src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=400&fit=crop" 
                      alt="Security System Vadodara" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-semibold">Complete Security Solutions</p>
                      <p className="text-gray-300 text-sm">Access control & surveillance systems</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 animate-fade-3">
                    <img 
                      src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=400&fit=crop" 
                      alt="Home Security System Vadodara" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-semibold">Home Security Systems</p>
                      <p className="text-gray-300 text-sm">Protect your family 24/7</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 animate-fade-4">
                    <img 
                      src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&h=400&fit=crop" 
                      alt="Office CCTV System Vadodara" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-semibold">Office & Commercial CCTV</p>
                      <p className="text-gray-300 text-sm">Enterprise-grade security solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="text-center mb-5">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Get Free Quote & Site Survey</h2>
                <p className="text-gray-600 text-sm">Fill the form & our expert will contact you within 30 minutes</p>
              </div>
              <HeroEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-lg relative -mt-6 mx-4 md:mx-8 rounded-2xl z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-red-600">5000+</p>
              <p className="text-gray-600">Installations Done</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-green-600">40+</p>
              <p className="text-gray-600">Areas Covered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">15+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-purple-600">4.9★</p>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our CCTV & Security Services in Vadodara
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide comprehensive security solutions including <strong>CCTV camera installation</strong>, 
              <strong>access control systems</strong>, <strong>biometric attendance</strong>, and <strong>fire alarm systems</strong> 
              across all areas of Vadodara.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* CCTV Installation */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <Camera className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">CCTV Camera Installation</h3>
              <p className="text-gray-600 mb-4">Professional CCTV installation for homes, offices & commercial spaces. HD, IP & wireless cameras available.</p>
              <Link href="/cctv-camera-installation-in-vadodara" className="text-red-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Home Security */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Home Security Systems</h3>
              <p className="text-gray-600 mb-4">Complete home security with CCTV, alarms, video door phones & smart locks. Protect your family 24/7.</p>
              <Link href="/home-security-system-in-vadodara" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Access Control */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-green-600">
              <Lock className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Access Control & Biometrics</h3>
              <p className="text-gray-600 mb-4">Advanced access control with fingerprint, face recognition & card-based systems for offices & factories.</p>
              <Link href="/access-control-system-in-vadodara" className="text-green-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Fire & Alarm */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-600">
              <Bell className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Fire & Alarm Systems</h3>
              <p className="text-gray-600 mb-4">Fire detection, burglar alarms & intrusion detection systems. NOC compliant installations available.</p>
              <Link href="/fire-alarm-system-in-vadodara" className="text-orange-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* All Services Links */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">All Our Security Services in Vadodara</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceKeywords.map((keyword) => (
                <Link
                  key={keyword.slug}
                  href={`/${keyword.slug}`}
                  className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors group"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 group-hover:text-red-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{keyword.keyword}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location-Based Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CCTV Installation for Every Property Type in Vadodara</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether it's your home, shop, office, factory or warehouse - we have the right security solution for you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Home, title: "Home CCTV", link: "/cctv-camera-for-home-in-vadodara", color: "text-blue-600" },
              { icon: Store, title: "Shop CCTV", link: "/cctv-camera-for-shop-in-vadodara", color: "text-green-600" },
              { icon: Building2, title: "Office CCTV", link: "/cctv-camera-for-office-in-vadodara", color: "text-purple-600" },
              { icon: Factory, title: "Factory CCTV", link: "/cctv-for-factory-in-vadodara", color: "text-orange-600" },
              { icon: GraduationCap, title: "School CCTV", link: "/school-cctv-installation-in-vadodara", color: "text-red-600" },
              { icon: Hospital, title: "Hospital CCTV", link: "/hospital-security-system-in-vadodara", color: "text-cyan-600" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <item.icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                <h3 className="font-bold">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our CCTV Installation Projects in Vadodara</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See our recent CCTV camera installation and security system projects across Vadodara
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop", alt: "CCTV Installation in Alkapuri Vadodara" },
              { src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop", alt: "Security Camera Setup in Gotri Vadodara" },
              { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop", alt: "Home Security in Manjalpur Vadodara" },
              { src: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=300&fit=crop", alt: "Office CCTV in Karelibaug Vadodara" },
              { src: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=400&h=300&fit=crop", alt: "Factory Security in GIDC Vadodara" },
              { src: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=300&fit=crop", alt: "Access Control System Vadodara" },
              { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop", alt: "Biometric Attendance System Vadodara" },
              { src: "https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?w=400&h=300&fit=crop", alt: "Video Door Phone Installation Vadodara" },
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Authorized CCTV Camera Dealer in Vadodara</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We are authorized dealers for all major CCTV and security brands. Genuine products with manufacturer warranty.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {businessConfig.brands.map((brand) => (
              <div key={brand} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <p className="text-xl font-bold text-gray-800">{brand}</p>
                <p className="text-sm text-gray-500">Authorized Dealer</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {brandKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}`}
                className="flex items-center gap-2 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
              >
                <BadgeCheck className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="font-medium text-gray-800">{keyword.keyword} in Vadodara</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CCTV Installation in All 40 Areas of Vadodara</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide professional CCTV camera installation and security system services across all areas of Vadodara. Quick response, local technicians.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-3 max-w-7xl mx-auto">
            {vadodaraAreas.map((area) => (
              <div
                key={area.slug}
                className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-red-50 hover:shadow-md transition-all cursor-pointer group"
              >
                <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-sm text-gray-700 group-hover:text-red-600">{area.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us for CCTV Installation in Vadodara?</h2>
            <p className="text-red-200 text-lg max-w-2xl mx-auto">
              We are the most trusted security system provider in Vadodara with 15+ years of experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: BadgeCheck, title: "Authorized Dealer", desc: "Genuine products from Hikvision, CP Plus, Dahua with manufacturer warranty" },
              { icon: Wrench, title: "Expert Installation", desc: "Trained technicians with 15+ years experience in CCTV installation" },
              { icon: Smartphone, title: "Mobile App Setup", desc: "Free mobile app configuration for remote viewing on your smartphone" },
              { icon: Clock, title: "24/7 Support", desc: "Round-the-clock technical support and emergency service available" },
              { icon: Shield, title: "AMC Available", desc: "Annual maintenance contracts for worry-free security system operation" },
              { icon: Star, title: "5-Star Rated", desc: "Highest rated CCTV service provider in Vadodara with 4.9★ rating" },
              { icon: Users, title: "5000+ Installations", desc: "Successfully completed 5000+ installations across Vadodara" },
              { icon: Award, title: "Best Prices", desc: "Competitive pricing with no hidden charges. Free site survey included" },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <item.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-red-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Keywords Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Security Services in Vadodara</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our complete range of CCTV and security services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {keywords.slice(0, 24).map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}`}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-red-50 hover:shadow-md transition-all group"
              >
                <CheckCircle className="w-5 h-5 text-green-500 group-hover:text-red-500 flex-shrink-0" />
                <span className="font-medium text-gray-700 group-hover:text-red-600">{keyword.title}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-500 ml-auto" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500">
              <strong>{keywords.length}+</strong> specialized security services available in Vadodara
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Free Quote</h2>
              <p className="text-gray-600">Fill the form & our expert will contact you within 30 minutes</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <HeroEnquiryForm area="Vadodara" />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">Best CCTV Camera Installation Service in Vadodara</h2>
            
            <p>
              Looking for professional <strong>CCTV camera installation in Vadodara</strong>? You've come to the right place! 
              We are Vadodara's leading <strong>security system provider</strong> with over 15 years of experience in delivering 
              top-notch security solutions. As an <strong>authorized dealer of Hikvision, CP Plus, and Dahua</strong>, we offer 
              genuine products with manufacturer warranty and expert installation services.
            </p>

            <h3>Why CCTV Installation is Essential in Vadodara</h3>
            <p>
              In today's world, security is paramount. Whether you need <strong>CCTV camera for home</strong>, 
              <strong>CCTV camera for shop</strong>, or <strong>CCTV camera for office</strong> in Vadodara, 
              our comprehensive security solutions ensure complete peace of mind. Our professional 
              <strong> CCTV installation services</strong> cover all 40 areas of Vadodara including Alkapuri, Gotri, 
              Manjalpur, Karelibaug, Sayajigunj, and more.
            </p>

            <h3>Our Security Services in Vadodara</h3>
            <ul>
              <li><strong>CCTV Camera Installation</strong> - HD, IP, and wireless cameras</li>
              <li><strong>Home Security Systems</strong> - Complete protection for your family</li>
              <li><strong>Access Control Systems</strong> - Card, fingerprint, and face recognition</li>
              <li><strong>Biometric Attendance Systems</strong> - For offices and factories</li>
              <li><strong>Video Door Phones</strong> - Smart entry solutions</li>
              <li><strong>Fire Alarm Systems</strong> - NOC compliant installations</li>
              <li><strong>Burglar Alarm Systems</strong> - Intrusion detection</li>
              <li><strong>CCTV AMC Services</strong> - Annual maintenance contracts</li>
            </ul>

            <h3>Areas We Serve in Vadodara</h3>
            <p>
              Our <strong>CCTV installation services</strong> are available across all major areas of Vadodara:
              Alkapuri, Akota, Old Padra Road, Gotri, Vasna Bhayli, Manjalpur, Sama, Karelibaug, 
              Waghodia Road, Chhani, Harni, Kalali, Atladara, Vadsar, Tarsali, Sayajigunj, Subhanpura, 
              Tandalja, Makarpura, Fatehgunj, Race Course, Nizampura, Productivity Road, Ajwa Road, 
              Jetalpur, Gorwa, Bil, Savli, Dabhoi Road, Ellora Park, Pratap Nagar, Lalbaug, Raopura, 
              Navapura, Wadi, Nandesari, Karjan, Padra, Sindhrot, and Bapod.
            </p>

            <h3>Contact Us for CCTV Installation in Vadodara</h3>
            <p>
              Get a <strong>free site survey</strong> and quotation for your security requirements. 
              Call us at <a href="tel:+916353583148"><strong>+91 6353583148</strong></a> or 
              WhatsApp us for quick response. We offer same-day installation, competitive pricing, 
              and after-sales support for all our security products and services in Vadodara.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <MegaFooter />

      {/* WhatsApp Float Button */}
      <a
        href={`https://wa.me/${businessConfig.whatsapp}?text=Hi, I'm interested in CCTV installation in Vadodara`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
