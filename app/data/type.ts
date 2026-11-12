export interface NavLink {
  name: string;
  href: string;
  active?: boolean;
}

export interface HeaderVariant {
  logo?: string;
  brand: {
    name: string;
    subtitle: string;
    established?: string;
  };
  links: NavLink[];
  button: {
    text: string;
    href: string;
  };
}

export interface BannerSlide {
  id: string;
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  houseImage?: string;
  tag: string;
}

export interface BannerVariant {
  eyebrow: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
  slides: BannerSlide[];
}

export interface AboutPillar {
  icon: string;
  title: string;
  description?: string;
}

export interface AboutVariant {
  eyebrow: string;
  headingPart1: string;
  headingPart2: string;
  headingHighlight: string;
  description: string;
  establishedBadge: string;
  mainImage: string;
  features: AboutPillar[];
}

export interface ServiceItem {
  category: string;
  title: string;
  image: string;
  icon: string;
  tag?: string;
  description?: string;
}

export interface ServicesVariant {
  eyebrow: string;
  leftSubtitle: string;
  headingPart1: string;
  headingPart2?: string;
  headingHighlight: string;
  description: string;
  items: ServiceItem[];
}

export interface ProjectItem {
  id: string;
  categoryName: string;
  title: string;
  description: string;
  area: string;
  year?: string;
  location?: string;
  image: string;
}

export interface ProjectsVariant {
  eyebrow: string;
  headingPart1: string;
  headingPart2?: string;
  headingHighlight: string;
  categories: ProjectItem[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsVariant {
  eyebrow: string;
  headingPart1: string;
  headingPart2?: string;
  headingHighlight: string;
  description: string;
  image: string;
  features: FeatureItem[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  highlight?: boolean;
}

export interface TestimonialVariant {
  eyebrow: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  items: TestimonialItem[];
}

export interface ContactInfoItem {
  title: string;
  address?: string;
  number?: string;
}

export interface ContactVariant {
  eyebrow: string;
  headingPart1: string;
  headingHighlight: string;
  description: string;
  office: {
    title: string;
    address: string;
  };
  phone: {
    title: string;
    number: string;
  };
  email: {
    title: string;
    address: string;
  };
  form: {
    title: string;
    subtitle: string;
    projectTypes: string[];
    buttonText: string;
  };
}

export interface FooterVariant {
  logo?: string;
  description: string;
  quickLinks: {
    name: string;
    href: string;
  }[];
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  bottomBar: {
    copyright: string;
    links?: {
      name: string;
      href: string;
    }[];
  };
}

export interface TemplateComponents {
  shared: {
    Header: string;
    Footer: string;
    [key: string]: string;
  };
  pages: {
    [pageName: string]: {
      components: {
        key: string;
        component: string;
      }[];
    };
  };
}

export interface SectionVariants {
  Header: {
    variants: Record<string, HeaderVariant>;
  };
  Banner: {
    variants: Record<string, BannerVariant>;
  };
  About: {
    variants: Record<string, AboutVariant>;
  };
  Services: {
    variants: Record<string, ServicesVariant>;
  };
  Projects: {
    variants: Record<string, ProjectsVariant>;
  };
  WhyChooseUs: {
    variants: Record<string, WhyChooseUsVariant>;
  };
  Testimonial: {
    variants: Record<string, TestimonialVariant>;
  };
  Contact: {
    variants: Record<string, ContactVariant>;
  };
  Footer: {
    variants: Record<string, FooterVariant>;
  };
  [key: string]: {
    variants: Record<string, unknown>;
  };
}

export interface StudioConfig {
  templateComponents: {
    [templateId: string]: TemplateComponents;
  };
  sections: SectionVariants;
}

export interface RootContent {
  Architecture?: StudioConfig;
  Novekta?: StudioConfig;
  [key: string]: unknown;
}
