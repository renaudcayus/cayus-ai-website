import { Footer, Navbar } from '@/components';
import GridOverlay from '@/components/global/grid-overlay';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <>
      <GridOverlay />
      <Navbar />
      <main className="mt-20 mx-auto w-full z-0 relative">{children}</main>
      <Footer />
    </>
  );
};

export default MarketingLayout;
