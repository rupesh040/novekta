import contentRaw from "./content.json";
import type {
  StudioConfig,
  HeaderVariant,
  BannerVariant,
  AboutVariant,
  ServicesVariant,
  ProjectsVariant,
  WhyChooseUsVariant,
  TestimonialVariant,
  ContactVariant,
  FooterVariant,
} from "./type";

export const studioContent: StudioConfig = contentRaw.Architecture as unknown as StudioConfig;

export const currentTemplate = "template-1";
export const templateConfig = studioContent.templateComponents[currentTemplate];

export const headerVariantKey = templateConfig.shared.Header;
export const footerVariantKey = templateConfig.shared.Footer;

export const headerData: HeaderVariant =
  studioContent.sections.Header.variants[headerVariantKey];

export const footerData: FooterVariant =
  studioContent.sections.Footer.variants[footerVariantKey];

const homeComponents = templateConfig.pages.home.components;

const getComponentVariantKey = (sectionKey: string): string => {
  const match = homeComponents.find((c) => c.key === sectionKey);
  return match ? match.component : `${sectionKey}1`;
};

export const bannerData: BannerVariant =
  studioContent.sections.Banner.variants[getComponentVariantKey("Banner")];

export const aboutData: AboutVariant =
  studioContent.sections.About.variants[getComponentVariantKey("About")];

export const servicesData: ServicesVariant =
  studioContent.sections.Services.variants[getComponentVariantKey("Services")];

export const projectsData: ProjectsVariant =
  studioContent.sections.Projects.variants[getComponentVariantKey("Projects")];

export const whyChooseUsData: WhyChooseUsVariant =
  studioContent.sections.WhyChooseUs.variants[
    getComponentVariantKey("WhyChooseUs")
  ];

export const testimonialData: TestimonialVariant =
  studioContent.sections.Testimonial.variants[
    getComponentVariantKey("Testimonial")
  ];

export const contactData: ContactVariant =
  studioContent.sections.Contact.variants[getComponentVariantKey("Contact")];

export default studioContent;
