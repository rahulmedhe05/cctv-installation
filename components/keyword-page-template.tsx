"use client";

import { BusinessConfig, vadodaraAreas } from "@/lib/business-config";
import { KeywordConfig, keywords } from "@/lib/keywords-config";
import { MegaFooter } from "./mega-footer";
import { CCTVSecurityForm } from "./forms/cctv-security-form";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Clock, 
  ArrowRight,
  Shield,
  Camera,
  Wrench,
  BadgeCheck,
  Smartphone,
  Home,
  Building2,
  Factory,
  Store,
} from "lucide-react";

interface KeywordPageTemplateProps {
  keyword: KeywordConfig;
  business: BusinessConfig;
}

// Generate unique content based on keyword category
function generateUniqueContent(keyword: KeywordConfig) {
  const keywordName = keyword.keyword;
  
  const contentMap: Record<string, {
    intro: string;
    benefits: string[];
    process: { title: string; description: string }[];
    faq: { question: string; answer: string }[];
    cta: string;
  }> = {
    provider: {
      intro: `Looking for a reliable <strong>${keywordName}</strong> in Vadodara? You've found the right partner! With over 15 years of experience, we are Vadodara's most trusted security solutions company. Our team of certified technicians specializes in designing, installing, and maintaining comprehensive security systems tailored to your specific needs. Whether you need CCTV cameras, access control systems, or complete security solutions, we deliver excellence every time.`,
      benefits: [
        "Authorized dealer of Hikvision, CP Plus & Dahua",
        "15+ years of experience in security industry",
        "5000+ successful installations across Vadodara",
        "Free site survey and security assessment",
        "24/7 technical support and emergency service",
        "Competitive pricing with no hidden charges",
        "Professional installation by certified technicians",
        "Mobile app setup for remote monitoring",
      ],
      process: [
        { title: "Free Consultation", description: "Schedule a free consultation to discuss your security requirements" },
        { title: "Site Survey", description: "Our experts visit your location to assess and recommend the best solution" },
        { title: "Custom Proposal", description: "Receive a detailed proposal with transparent pricing" },
        { title: "Professional Installation", description: "Our certified team installs your security system" },
        { title: "Training & Handover", description: "Complete training on system operation and mobile app" },
        { title: "Ongoing Support", description: "24/7 technical support and AMC options available" },
      ],
      faq: [
        { question: `Why should I choose you as my ${keywordName}?`, answer: `We are authorized dealers of top brands with 15+ years experience, 5000+ installations, and 4.9★ customer rating. We offer free site surveys, professional installation, and 24/7 support.` },
        { question: "What brands do you offer?", answer: "We are authorized dealers for Hikvision, CP Plus, Dahua, Bosch, Panasonic, and Ezviz. All products come with manufacturer warranty." },
        { question: "Do you provide installation services?", answer: "Yes, we provide end-to-end services including consultation, installation, mobile app setup, training, and after-sales support." },
        { question: "What areas do you serve in Vadodara?", answer: "We serve all 40 areas of Vadodara including Alkapuri, Gotri, Manjalpur, Karelibaug, Sayajigunj, and more." },
      ],
      cta: `Get in touch with the best ${keywordName} in Vadodara today!`,
    },
    service: {
      intro: `Need professional <strong>${keywordName}</strong> services in Vadodara? Our expert team provides comprehensive ${keywordName.toLowerCase()} services for homes, offices, shops, factories, and warehouses. With state-of-the-art equipment and certified technicians, we ensure your property is protected with the latest security technology. From HD cameras to wireless systems, we offer solutions for every budget and requirement.`,
      benefits: [
        "HD, IP, and wireless camera options available",
        "Same-day installation service",
        "Mobile app configuration included",
        "Night vision and motion detection features",
        "Cloud storage and local recording options",
        "Professional cabling and cable management",
        "All installation materials included",
        "1-year warranty on installation work",
      ],
      process: [
        { title: "Requirement Analysis", description: "Understand your security needs and coverage areas" },
        { title: "Camera Positioning", description: "Identify optimal camera positions for maximum coverage" },
        { title: "Equipment Selection", description: "Recommend the best cameras and recording systems" },
        { title: "Installation", description: "Professional installation with proper cabling" },
        { title: "Configuration", description: "Setup DVR/NVR, mobile app, and remote viewing" },
        { title: "Testing", description: "Thorough testing of all cameras and features" },
      ],
      faq: [
        { question: `What is included in your ${keywordName} service?`, answer: "Our service includes cameras, DVR/NVR, cables, connectors, power supply, professional installation, mobile app setup, and user training." },
        { question: "How long does installation take?", answer: "Basic 4-camera installation takes 3-4 hours. Larger installations may take 1-2 days depending on complexity." },
        { question: "Can I view cameras on my mobile phone?", answer: "Yes, we configure mobile apps (Hik-Connect, gCMOB, iVMS) so you can monitor your cameras from anywhere in the world." },
        { question: "Do you provide AMC services?", answer: "Yes, we offer Annual Maintenance Contracts starting from ₹2,000/year for hassle-free maintenance and support." },
      ],
      cta: `Book your ${keywordName} service in Vadodara today!`,
    },
    location: {
      intro: `Are you searching for <strong>${keywordName}</strong> in Vadodara? We specialize in providing top-quality security camera solutions for ${keyword.keyword.includes("home") ? "residential" : keyword.keyword.includes("office") ? "commercial" : "all types of"} properties in Vadodara. Our ${keywordName.toLowerCase()} packages are designed to meet your specific security requirements while staying within your budget. Protect your ${keyword.keyword.includes("home") ? "family" : keyword.keyword.includes("office") ? "business" : "property"} with professional CCTV installation.`,
      benefits: [
        "Customized solutions for your property type",
        "Wide range of camera options to choose from",
        "Package deals for budget-friendly installation",
        "Remote viewing on mobile and desktop",
        "Night vision for 24/7 surveillance",
        "Weather-resistant outdoor cameras",
        "High-definition video recording",
        "Easy-to-use monitoring interface",
      ],
      process: [
        { title: "Site Assessment", description: "Free visit to assess your property's security needs" },
        { title: "Package Selection", description: "Choose from our range of camera packages" },
        { title: "Scheduling", description: "Pick a convenient date for installation" },
        { title: "Installation", description: "Quick and professional installation" },
        { title: "App Setup", description: "Configure remote viewing on your devices" },
        { title: "Demonstration", description: "Complete walkthrough of system features" },
      ],
      faq: [
        { question: `What ${keywordName} packages do you offer?`, answer: "We offer 2-camera, 4-camera, 8-camera, and custom packages starting from ₹9,999. All packages include installation and mobile app setup." },
        { question: "Which cameras are best for my property?", answer: "We recommend cameras based on your specific needs - dome cameras for indoors, bullet cameras for outdoors, and PTZ for large areas." },
        { question: "How much storage do I need?", answer: "This depends on camera count and recording quality. We'll recommend the right HDD size based on your requirements (typically 1TB-4TB)." },
        { question: "Can I add more cameras later?", answer: "Yes, our systems are expandable. You can add more cameras anytime as your security needs grow." },
      ],
      cta: `Get the best ${keywordName} packages in Vadodara!`,
    },
    commercial: {
      intro: `Looking for professional <strong>${keywordName}</strong> solutions in Vadodara? Our enterprise-grade security systems are designed for commercial establishments, industrial facilities, and large-scale operations. We understand the unique security challenges faced by businesses and provide customized solutions that ensure complete protection of your assets, employees, and premises.`,
      benefits: [
        "Enterprise-grade security equipment",
        "Multi-location monitoring capability",
        "Integration with existing security systems",
        "Advanced analytics and motion detection",
        "High-capacity recording and storage",
        "Vandal-proof and weatherproof cameras",
        "Centralized monitoring solutions",
        "Compliance with industry regulations",
      ],
      process: [
        { title: "Security Audit", description: "Comprehensive assessment of your facility's security needs" },
        { title: "System Design", description: "Custom security architecture for your premises" },
        { title: "Approval & Planning", description: "Review proposal and plan implementation timeline" },
        { title: "Installation", description: "Professional installation with minimal disruption" },
        { title: "Integration", description: "Connect with access control, alarms, and existing systems" },
        { title: "Training", description: "Staff training on system operation and monitoring" },
      ],
      faq: [
        { question: `Why do I need a specialized ${keywordName}?`, answer: "Commercial properties have unique security challenges requiring professional-grade equipment, centralized monitoring, and integration with other security systems." },
        { question: "Can you handle large-scale installations?", answer: "Yes, we have experience with factories, warehouses, hospitals, schools, and multi-building campuses with 50+ cameras." },
        { question: "Do you offer 24/7 monitoring services?", answer: "Yes, we can set up centralized monitoring and integrate with professional monitoring services if required." },
        { question: "What about data security?", answer: "Our systems use encrypted connections and secure storage. We can also set up on-premise servers for sensitive environments." },
      ],
      cta: `Secure your business with ${keywordName} solutions in Vadodara!`,
    },
    access: {
      intro: `Need professional <strong>${keywordName}</strong> installation in Vadodara? Our advanced access control and biometric solutions help you control who enters your premises while maintaining detailed attendance and entry records. From fingerprint scanners to face recognition systems, we offer cutting-edge technology for offices, factories, apartments, and commercial establishments.`,
      benefits: [
        "Fingerprint, face recognition & card options",
        "Integration with attendance software",
        "Mobile app for remote access management",
        "Multi-door and multi-location support",
        "Visitor management features",
        "Time-based access restrictions",
        "Detailed access logs and reports",
        "Integration with CCTV systems",
      ],
      process: [
        { title: "Needs Assessment", description: "Understand your access control requirements" },
        { title: "System Selection", description: "Choose the right biometric/access technology" },
        { title: "User Enrollment", description: "Plan user registration and access levels" },
        { title: "Installation", description: "Install devices at all entry/exit points" },
        { title: "Software Setup", description: "Configure attendance and reporting software" },
        { title: "Training", description: "Train admin staff on system management" },
      ],
      faq: [
        { question: `What types of ${keywordName} do you offer?`, answer: "We offer fingerprint, face recognition, card-based, PIN-based, and multi-factor authentication systems from leading brands." },
        { question: "Can it integrate with my HR software?", answer: "Yes, our biometric systems can integrate with popular HR and payroll software for automated attendance tracking." },
        { question: "How many users can be enrolled?", answer: "Our systems support from 100 to 10,000+ users depending on the model. We'll recommend based on your needs." },
        { question: "What if the device malfunctions?", answer: "All our systems have backup options (PIN, card) and we provide quick on-site support for any issues." },
      ],
      cta: `Install advanced ${keywordName} in Vadodara today!`,
    },
    brand: {
      intro: `Looking for an authorized <strong>${keywordName}</strong> in Vadodara? As an official dealer of ${keyword.keyword.split(" ")[0]} security products, we offer genuine equipment with manufacturer warranty and expert installation services. Get the best prices on ${keyword.keyword.split(" ")[0]} CCTV cameras, DVRs, NVRs, and complete security systems with professional installation and after-sales support.`,
      benefits: [
        `Authorized ${keyword.keyword.split(" ")[0]} dealer`,
        "100% genuine products with warranty",
        "Complete product range available",
        "Competitive pricing guaranteed",
        "Expert installation included",
        "Mobile app setup and training",
        "Spare parts and accessories",
        "After-sales service and support",
      ],
      process: [
        { title: "Product Consultation", description: `Discuss your needs and explore ${keyword.keyword.split(" ")[0]} product options` },
        { title: "Quotation", description: "Receive detailed quotation with best prices" },
        { title: "Order Confirmation", description: "Confirm order and schedule delivery/installation" },
        { title: "Installation", description: "Professional installation by certified technicians" },
        { title: "Configuration", description: "Complete setup including mobile app" },
        { title: "Warranty Registration", description: "Register product for manufacturer warranty" },
      ],
      faq: [
        { question: `Are you an authorized ${keywordName}?`, answer: `Yes, we are an authorized ${keywordName} in Vadodara. All products come with official warranty and genuine accessories.` },
        { question: `What ${keyword.keyword.split(" ")[0]} products do you have?`, answer: `We stock the complete range including dome cameras, bullet cameras, PTZ, DVR/NVR, and accessories.` },
        { question: "Do you offer installation services?", answer: "Yes, our certified technicians provide professional installation, configuration, and mobile app setup for all products." },
        { question: "What is the warranty period?", answer: "Manufacturer warranty applies - typically 1-2 years depending on the product. Extended warranty available." },
      ],
      cta: `Get genuine ${keyword.keyword.split(" ")[0]} products in Vadodara!`,
    },
    local: {
      intro: `Searching for <strong>${keywordName}</strong>? You've found the right place! We are the most trusted CCTV and security system provider serving all 40 areas of Vadodara. Whether you're in Alkapuri, Gotri, Manjalpur, or any other locality, our expert team provides prompt service with same-day installation options. Experience professional security solutions at your doorstep.`,
      benefits: [
        "Local technicians for quick response",
        "Same-day installation available",
        "Serving all 40 areas of Vadodara",
        "Free on-site consultation",
        "Competitive local pricing",
        "Quick after-sales support",
        "Emergency service available",
        "Trusted by thousands in Vadodara",
      ],
      process: [
        { title: "Contact Us", description: "Call or WhatsApp for instant response" },
        { title: "Free Visit", description: "We visit your location for assessment" },
        { title: "Quotation", description: "Get on-the-spot or same-day quotation" },
        { title: "Installation", description: "Quick installation at your convenience" },
        { title: "Support", description: "Local support whenever you need it" },
        { title: "AMC", description: "Optional annual maintenance for peace of mind" },
      ],
      faq: [
        { question: "Which areas in Vadodara do you serve?", answer: "We serve all 40 areas including Alkapuri, Gotri, Manjalpur, Karelibaug, Sayajigunj, Subhanpura, Akota, and more." },
        { question: "How quickly can you respond?", answer: "We typically respond within 1-2 hours and can schedule visits the same day for urgent requirements." },
        { question: "Do you have a local office?", answer: "Yes, we are based in Vadodara and have local technicians for quick service across the city." },
        { question: "What payment options do you accept?", answer: "We accept cash, UPI, bank transfer, and all major cards. EMI options also available." },
      ],
      cta: `Get the best security solutions near you in Vadodara!`,
    },
    price: {
      intro: `Want to know the <strong>${keywordName}</strong>? We offer transparent, competitive pricing for all our CCTV and security products in Vadodara. No hidden charges, no surprises - just honest pricing with quality products and professional installation. Compare our prices and you'll find we offer the best value for your security investment.`,
      benefits: [
        "Transparent pricing with no hidden costs",
        "Best prices guaranteed in Vadodara",
        "Package deals for extra savings",
        "EMI options available",
        "Price matching available",
        "Bulk order discounts",
        "Installation included in packages",
        "Value-added services included",
      ],
      process: [
        { title: "Get Quote", description: "Request a detailed quotation for your requirements" },
        { title: "Compare", description: "Compare our prices with any competitor" },
        { title: "Customize", description: "Adjust package to fit your budget" },
        { title: "Confirm", description: "Lock in your price with booking" },
        { title: "Pay Conveniently", description: "Multiple payment options available" },
        { title: "Get Installed", description: "Professional installation at quoted price" },
      ],
      faq: [
        { question: `What is the ${keywordName}?`, answer: "CCTV camera prices start from ₹1,500 for 2MP cameras. Complete 4-camera packages start from ₹9,999 including installation." },
        { question: "Are installation charges extra?", answer: "Our package prices include installation. For individual cameras, installation is ₹500-1,000 per camera depending on complexity." },
        { question: "Do you offer EMI?", answer: "Yes, we offer EMI options through leading banks and finance companies for purchases above ₹10,000." },
        { question: "Is there any hidden cost?", answer: "No hidden costs. Our quotations include everything - products, installation materials, labor, and taxes." },
      ],
      cta: `Get the best ${keywordName} in Vadodara!`,
    },
    longtail: {
      intro: `Looking for the <strong>${keywordName}</strong> in Vadodara? Your search ends here! We specialize in providing exactly what you need - professional, reliable, and affordable security solutions. Our experienced team understands your specific requirements and delivers customized solutions that exceed expectations. From consultation to installation to support, we're with you every step of the way.`,
      benefits: [
        "Customized solutions for specific needs",
        "Expert consultation and guidance",
        "End-to-end service delivery",
        "Quality products at fair prices",
        "Professional installation team",
        "Comprehensive after-sales support",
        "Flexible scheduling options",
        "Satisfaction guaranteed",
      ],
      process: [
        { title: "Discuss Your Needs", description: "Tell us exactly what you're looking for" },
        { title: "Custom Solution", description: "We design a solution specific to your needs" },
        { title: "Transparent Quote", description: "Clear pricing with no surprises" },
        { title: "Professional Execution", description: "Expert installation and setup" },
        { title: "Quality Check", description: "Thorough testing and verification" },
        { title: "Ongoing Support", description: "We're here whenever you need us" },
      ],
      faq: [
        { question: `Why are you the best choice for ${keywordName}?`, answer: "We combine 15+ years experience, authorized dealership, professional installation, and excellent support to deliver the best results." },
        { question: "Can you handle custom requirements?", answer: "Absolutely! We specialize in understanding unique needs and delivering customized solutions." },
        { question: "What makes you different from others?", answer: "Our commitment to quality, transparent pricing, professional service, and customer satisfaction sets us apart." },
        { question: "How do I get started?", answer: "Simply call or WhatsApp us. We'll discuss your needs and schedule a free consultation at your convenience." },
      ],
      cta: `Experience the best ${keywordName} service in Vadodara!`,
    },
    main: {
      intro: `Welcome to Vadodara's premier <strong>${keywordName}</strong>! We are your one-stop destination for all security needs - from CCTV cameras to access control systems. With 15+ years of experience and 5000+ successful installations, we have earned the trust of thousands of homes and businesses across Vadodara. Our commitment to quality, professional service, and customer satisfaction makes us the preferred choice for security solutions.`,
      benefits: [
        "Complete security solutions under one roof",
        "Authorized dealer of top brands",
        "15+ years industry experience",
        "5000+ successful installations",
        "24/7 technical support",
        "Competitive pricing",
        "Professional certified team",
        "End-to-end service delivery",
      ],
      process: [
        { title: "Consultation", description: "Free consultation to understand your security needs" },
        { title: "Assessment", description: "Professional site survey and assessment" },
        { title: "Proposal", description: "Customized solution with transparent pricing" },
        { title: "Installation", description: "Expert installation by certified technicians" },
        { title: "Training", description: "Complete training on system operation" },
        { title: "Support", description: "Ongoing support and maintenance services" },
      ],
      faq: [
        { question: `What services do you offer as ${keywordName}?`, answer: "We offer CCTV installation, access control, biometric attendance, fire alarms, video door phones, and complete security solutions." },
        { question: "Which brands do you deal with?", answer: "We are authorized dealers for Hikvision, CP Plus, Dahua, Bosch, Panasonic, Ezviz, and more." },
        { question: "Do you provide maintenance services?", answer: "Yes, we offer AMC (Annual Maintenance Contract) services for all our installations." },
        { question: "How can I contact you?", answer: "Call us at +91 6353583148 or WhatsApp for instant response. We're available 24/7." },
      ],
      cta: `Partner with the best ${keywordName} in Vadodara!`,
    },
  };

  // Return content based on category or default to provider
  return contentMap[keyword.category] || contentMap.provider;
}

export function KeywordPageTemplate({ keyword, business }: KeywordPageTemplateProps) {
  const content = generateUniqueContent(keyword);
  const relatedKeywords = keywords.filter(k => k.category === keyword.category && k.slug !== keyword.slug).slice(0, 6);
  const otherKeywords = keywords.filter(k => k.category !== keyword.category).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">📹</span>
              <span className="font-bold text-lg text-gray-900">CCTV Vadodara</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/#services" className="text-gray-600 hover:text-red-600 transition-colors">Services</Link>
              <Link href="/#areas" className="text-gray-600 hover:text-red-600 transition-colors">Areas</Link>
              <Link href="/#brands" className="text-gray-600 hover:text-red-600 transition-colors">Brands</Link>
              <a href="#contact" className="text-gray-600 hover:text-red-600 transition-colors">Contact</a>
            </div>
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-sm">
                <ol className="flex items-center gap-2 text-gray-400">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li>/</li>
                  <li className="text-red-400">{keyword.keyword}</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
                <BadgeCheck className="w-5 h-5 text-red-400" />
                <span className="text-red-300 text-sm font-medium">Authorized Dealer - Hikvision, CP Plus, Dahua</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {keyword.h1}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                {keyword.metaDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call: +91 6353583148
                </a>
                <a
                  href={`https://wa.me/${business.whatsapp}?text=Hi, I'm interested in ${keyword.keyword} in Vadodara`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Now
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm">5000+ Installations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm">4.9★ Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm">15+ Years Exp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <img
                src={`https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=500&fit=crop`}
                alt={keyword.h1}
                className="rounded-2xl shadow-2xl"
              />
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

      {/* About Section with SEO Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{keyword.title}</h2>
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: content.intro }}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.benefits.slice(0, 6).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=300&h=250&fit=crop"
                alt={`${keyword.keyword} - Security System`}
                className="rounded-xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=250&fit=crop"
                alt={`${keyword.keyword} - Installation`}
                className="rounded-xl shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=300&h=250&fit=crop"
                alt={`${keyword.keyword} - Access Control`}
                className="rounded-xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?w=300&h=250&fit=crop"
                alt={`${keyword.keyword} - Factory Security`}
                className="rounded-xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process for {keyword.keyword}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We follow a systematic approach to ensure you get the best security solution for your needs in Vadodara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.process.map((step, index) => (
              <div key={index} className="relative bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our {keyword.keyword} Projects in Vadodara</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See our recent installations and projects across Vadodara
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1560264280-88b68371db39?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?w=400&h=300&fit=crop",
            ].map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`${keyword.keyword} project ${index + 1} in Vadodara`}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{keyword.keyword} - Project {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions about {keyword.keyword}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our {keyword.keyword.toLowerCase()} services in Vadodara
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {content.faq.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{keyword.keyword} in All 40 Areas of Vadodara</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide {keyword.keyword.toLowerCase()} services across all areas of Vadodara with quick response times.
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

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Services in Vadodara</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our other security services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[...relatedKeywords, ...otherKeywords].slice(0, 6).map((kw) => (
              <Link
                key={kw.slug}
                href={`/${kw.slug}`}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 hover:shadow-md transition-all group"
              >
                <Camera className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-bold text-gray-800 group-hover:text-red-600">{kw.keyword}</h3>
                  <p className="text-sm text-gray-500">in Vadodara</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.cta}</h2>
          <p className="text-red-200 text-lg mb-8 max-w-2xl mx-auto">
            Contact us now for a free consultation and site survey. Get the best {keyword.keyword.toLowerCase()} solutions at competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call: +91 6353583148
            </a>
            <a
              href={`https://wa.me/${business.whatsapp}?text=Hi, I'm interested in ${keyword.keyword} in Vadodara`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <CCTVSecurityForm area="Vadodara" keyword={keyword.keyword} />
      </section>

      {/* SEO Content Footer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-4">{keyword.keyword} Services in Vadodara</h2>
            <p>
              We are the leading provider of <strong>{keyword.keyword}</strong> services in Vadodara, Gujarat. 
              Our team of certified professionals has been serving homes, offices, shops, factories, and commercial 
              establishments across all 40 areas of Vadodara for over 15 years. As authorized dealers of 
              Hikvision, CP Plus, and Dahua, we guarantee genuine products with manufacturer warranty.
            </p>
            <p>
              Whether you need <strong>{keyword.keyword}</strong> for your home in Alkapuri, office in Gotri, 
              shop in Manjalpur, factory in GIDC, or any other property in Vadodara, we have the right solution 
              for you. Our services include free site survey, professional installation, mobile app configuration, 
              and comprehensive after-sales support.
            </p>
            <p>
              Contact us today at <a href={`tel:${business.phone}`}><strong>{business.phone}</strong></a> for 
              a free consultation and get the best <strong>{keyword.keyword}</strong> solutions in Vadodara 
              at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <MegaFooter />

      {/* WhatsApp Float Button */}
      <a
        href={`https://wa.me/${business.whatsapp}?text=Hi, I'm interested in ${keyword.keyword} in Vadodara`}
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
