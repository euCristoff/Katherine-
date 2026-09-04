export interface ServiceItem {
  id: string;
  badge: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  iconName: 'bracket' | 'aligner' | 'whitening' | 'botox' | 'lips' | 'face';
  whatsappCta: string;
}

export interface ResultCase {
  id: string;
  title: string;
  category: string;
  description: string;
  timeframe?: string;
  beforeImage: string;
  afterImage: string;
  patientName?: string;
  doctorTag: string;
}

export interface ClinicInfo {
  name: string;
  subtitle: string;
  doctorName: string;
  crmCro: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  mapsUrl: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}
