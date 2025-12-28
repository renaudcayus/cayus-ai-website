import AboutUs from '@/components/sections/about-us';
import CTA from '@/components/sections/cta';
import Features from '@/components/sections/features';
<<<<<<< HEAD
import Hero from '@/components/sections/hero';
=======
import Solution from '@/components/sections/solution';
>>>>>>> ac8762b (+solution cards with avatar group)
import Testimonials from '@/components/sections/testimonials';
import TheProblem from '@/components/sections/the-problem';
import TrustedBrands from '@/components/sections/trusted-brands';

const HomePage = async ({ params }: { params: { locale: string } }) => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <Hero />
      <TheProblem />
<<<<<<< HEAD
=======

      {/* Solution Section */}
      <Solution />

      {/* Companies Section */}
>>>>>>> ac8762b (+solution cards with avatar group)
      <TrustedBrands />
      <Features />
      <AboutUs />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;
