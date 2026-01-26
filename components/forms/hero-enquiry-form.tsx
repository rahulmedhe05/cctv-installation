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
            className="bg-gray-50 border-gray-200 h-11"
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
            className="bg-gray-50 border-gray-200 h-11"
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

      {/* Area & Message Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Your Area <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <Input
            type="text"
            placeholder="e.g. Alkapuri, Gotri"
            value={formData.areaLocation}
            onChange={(e) => setFormData({ ...formData, areaLocation: e.target.value })}
            className="bg-gray-50 border-gray-200 h-11"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Message <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <Input
            type="text"
            placeholder="Any specific requirement"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-gray-50 border-gray-200 h-11"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !formData.fullName || !formData.mobile}
        className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-6 text-base mt-2"
      >
        {isSubmitting ? (
          <>Processing...</>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Get Free Quote Now
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        ✓ Free Site Survey &nbsp;•&nbsp; ✓ No Spam Calls &nbsp;•&nbsp; ✓ Quick Response
      </p>
    </form>
  );
}
