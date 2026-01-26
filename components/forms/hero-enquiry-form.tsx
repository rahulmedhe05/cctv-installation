"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, CheckCircle, ChevronDown } from "lucide-react";

interface HeroEnquiryFormProps {
  area?: string;
  keyword?: string;
}

export function HeroEnquiryForm({ area, keyword }: HeroEnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    propertyType: "",
    securityRequirement: "",
    installationType: "",
    areaLocation: area || "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const propertyTypes = ["Home", "Shop", "Office", "Factory", "Warehouse", "School", "Hospital", "Other"];
  const securityRequirements = ["CCTV Cameras", "Biometric", "Access Control", "Fire Alarm", "Video Door Phone", "Complete Security"];
  const installationTypes = ["New Installation", "Upgrade Existing", "Repair/Service", "AMC"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let message = `📹 *NEW CCTV ENQUIRY*\n\n`;
    message += `👤 *Name:* ${formData.fullName}\n`;
    message += `📱 *Mobile:* ${formData.mobile}\n`;
    if (formData.propertyType) message += `🏢 *Property:* ${formData.propertyType}\n`;
    if (formData.securityRequirement) message += `🔒 *Requirement:* ${formData.securityRequirement}\n`;
    if (formData.installationType) message += `🔧 *Type:* ${formData.installationType}\n`;
    if (formData.areaLocation) message += `📍 *Area:* ${formData.areaLocation}\n`;
    if (formData.message) message += `💬 *Message:* ${formData.message}\n`;
    if (keyword) message += `🔍 *Interest:* ${keyword}\n`;
    message += `\n_From: cctvinstallvadodara.in_`;

    const whatsappURL = `https://wa.me/916353583148?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">Our team will contact you within 30 minutes.</p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-50"
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Required Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
            className="bg-white border-gray-300 h-11 text-gray-900 placeholder:text-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <Input
            type="tel"
            placeholder="10 digit mobile number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            required
            pattern="[0-9]{10}"
            className="bg-white border-gray-300 h-11 text-gray-900 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Property Type <span className="text-gray-400 font-normal">(Optional)</span>
        </label>
        <div className="grid grid-cols-4 gap-2">
          {propertyTypes.slice(0, 4).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData({ ...formData, propertyType: formData.propertyType === type ? "" : type })}
              className={`p-2 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                formData.propertyType === type
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-200 hover:border-red-400"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {propertyTypes.slice(4).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData({ ...formData, propertyType: formData.propertyType === type ? "" : type })}
              className={`p-2 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                formData.propertyType === type
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-200 hover:border-red-400"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Security Requirement */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Security Requirement <span className="text-gray-400 font-normal">(Optional)</span>
        </label>
        <div className="grid grid-cols-3 gap-2">
          {securityRequirements.map((req) => (
            <button
              key={req}
              type="button"
              onClick={() => setFormData({ ...formData, securityRequirement: formData.securityRequirement === req ? "" : req })}
              className={`p-2 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                formData.securityRequirement === req
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-200 hover:border-red-400"
              }`}
            >
              {req}
            </button>
          ))}
        </div>
      </div>

      {/* Installation Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Installation Type <span className="text-gray-400 font-normal">(Optional)</span>
        </label>
        <div className="grid grid-cols-4 gap-2">
          {installationTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData({ ...formData, installationType: formData.installationType === type ? "" : type })}
              className={`p-2 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                formData.installationType === type
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-200 hover:border-red-400"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !formData.fullName || !formData.mobile}
        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-6 text-base mt-2"
      >
        {isSubmitting ? (
          <>Processing...</>
        ) : (
          <>
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send Message on WhatsApp
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        ✓ Free Site Survey &nbsp;•&nbsp; ✓ No Spam Calls &nbsp;•&nbsp; ✓ Quick Response
      </p>
    </form>
  );
}
