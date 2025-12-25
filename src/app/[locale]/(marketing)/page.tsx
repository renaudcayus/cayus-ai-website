import AboutUs from '@/components/sections/about-us';
import CTA from '@/components/sections/cta';
import Features from '@/components/sections/features';
import Hero from '@/components/sections/hero';
import Testimonials from '@/components/sections/testimonials';
import TheProblem from '@/components/sections/the-problem';
import TrustedBrands from '@/components/sections/trusted-brands';

const HomePage = async ({ params }: { params: { locale: string } }) => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <Hero />
      <TheProblem />
      <TrustedBrands />
      <Features />
      <AboutUs />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;
