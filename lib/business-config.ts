// Business Configuration for Security System & CCTV Providers

export interface BusinessConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  icon: string;
  services: string[];
  brands: string[];
}

// All 40 areas of Vadodara
export const vadodaraAreas = [
  { slug: "alkapuri", name: "Alkapuri" },
  { slug: "akota", name: "Akota" },
  { slug: "old-padra-road", name: "Old Padra Road" },
  { slug: "gotri", name: "Gotri" },
  { slug: "vasna-bhayli", name: "Vasna Bhayli" },
  { slug: "manjalpur", name: "Manjalpur" },
  { slug: "sama", name: "Sama" },
  { slug: "karelibaug", name: "Karelibaug" },
  { slug: "waghodia-road", name: "Waghodia Road" },
  { slug: "chhani", name: "Chhani" },
  { slug: "harni", name: "Harni" },
  { slug: "kalali", name: "Kalali" },
  { slug: "atladara", name: "Atladara" },
  { slug: "vadsar", name: "Vadsar" },
  { slug: "tarsali", name: "Tarsali" },
  { slug: "sayajigunj", name: "Sayajigunj" },
  { slug: "subhanpura", name: "Subhanpura" },
  { slug: "tandalja", name: "Tandalja" },
  { slug: "makarpura", name: "Makarpura" },
  { slug: "fatehgunj", name: "Fatehgunj" },
  { slug: "race-course", name: "Race Course" },
  { slug: "nizampura", name: "Nizampura" },
  { slug: "productivity-road", name: "Productivity Road" },
  { slug: "ajwa-road", name: "Ajwa Road" },
  { slug: "jetalpur", name: "Jetalpur" },
  { slug: "gorwa", name: "Gorwa" },
  { slug: "bil", name: "Bil" },
  { slug: "savli", name: "Savli" },
  { slug: "dabhoi-road", name: "Dabhoi Road" },
  { slug: "ellora-park", name: "Ellora Park" },
  { slug: "pratap-nagar", name: "Pratap Nagar" },
  { slug: "lalbaug", name: "Lalbaug" },
  { slug: "raopura", name: "Raopura" },
  { slug: "navapura", name: "Navapura" },
  { slug: "wadi", name: "Wadi" },
  { slug: "nandesari", name: "Nandesari" },
  { slug: "karjan", name: "Karjan" },
  { slug: "padra", name: "Padra" },
  { slug: "sindhrot", name: "Sindhrot" },
  { slug: "bapod", name: "Bapod" },
];

// Main business configuration
export const businessConfig: BusinessConfig = {
  id: "security-cctv",
  name: "Security System & CCTV Providers",
  slug: "security-cctv",
  tagline: "Complete Security Solutions for Peace of Mind in Vadodara",
  description: "Professional security and CCTV installation services in Vadodara. We are authorized dealers of Hikvision, CP Plus & Dahua with 15+ years of experience.",
  phone: "+91 6353583148",
  whatsapp: "916353583148",
  email: "info@cctvinstallvadodara.in",
  address: "Vadodara, Gujarat, India",
  colors: {
    primary: "#DC2626", // Red
    secondary: "#FCA5A5", // Light Red
    accent: "#7F1D1D", // Dark Red
    gradient: "from-red-600 to-red-800",
  },
  icon: "📹",
  services: [
    "CCTV Camera Installation",
    "IP Camera Setup",
    "Wireless CCTV Installation",
    "DVR/NVR Installation",
    "Access Control System",
    "Biometric Attendance System",
    "Video Door Phone",
    "Alarm Systems",
    "Fire Alarm Systems",
    "Remote Monitoring Setup",
    "CCTV Maintenance & AMC",
    "Security System Upgrade",
  ],
  brands: [
    "Hikvision",
    "CP Plus",
    "Dahua",
    "Bosch",
    "Panasonic",
    "Ezviz",
    "Godrej",
    "Samsung",
  ],
};

// Get area display name
export const getAreaDisplayName = (slug: string): string => {
  const area = vadodaraAreas.find((a) => a.slug === slug);
  return area ? area.name : slug;
};

// Export allAreas for compatibility
export const allAreas = vadodaraAreas.map((a) => a.slug);
