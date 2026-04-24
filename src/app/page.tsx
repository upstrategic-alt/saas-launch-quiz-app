import HeroQuiz from "@/components/HeroQuiz";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FNNL.X | AI SaaS Launch Qualifier",
  description: "Get a custom project quote and launch plan for your AI-powered GoHighLevel SaaS or custom app.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 border-b border-white/5 backdrop-blur-md bg-black/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter">
            FNNL<span className="text-zinc-500">.X</span>
          </div>
          <a 
            href="#quiz" 
            className="text-xs font-bold uppercase tracking-widest bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
          >
            Get Quote
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="quiz" className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
              LAUNCH YOUR <br />
              <span className="text-zinc-500">AI-POWERED</span> SYSTEM.
            </h1>
            <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              A high-end diagnostic to qualify your project and calculate your custom launch plan in under 60 seconds.
            </p>
          </div>

          {/* The Interactive Quote App */}
          <div className="relative z-10">
            <HeroQuiz />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
