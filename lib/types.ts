export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  bulletPoints?: string[];
  areas?: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  text: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  established: number;
  owner: string;
  phone: string;
  phoneInternational: string;
  email: string;
  address: string;
  areas: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroSlide {
  image: string;
  slogan: string;
  subtext: string;
}

export interface AreaRegion {
  slug: string;
  name: string;
  image: string;
  description: string;
}
