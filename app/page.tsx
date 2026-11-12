import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { templateConfig } from "@/app/data/contentExport";

const componentMap: Record<string, React.ComponentType> = {
  Banner: Hero,
  About: About,
  Services: Services,
  Projects: Projects,
  WhyChooseUs: WhyChooseUs,
  Testimonial: Testimonials,
  Contact: Contact,
};

export default function Home() {
  const homeComponents = templateConfig.pages.home.components;

  return (
    <main className="relative min-h-screen bg-[#0c1014] text-neutral-900 selection:bg-[#C59D5F] selection:text-white">
      <Navbar />

      {homeComponents.map((item, idx) => {
        const Component = componentMap[item.key];
        if (!Component) return null;
        return <Component key={`${item.key}-${idx}`} />;
      })}

      <Footer />
    </main>
  );
}
