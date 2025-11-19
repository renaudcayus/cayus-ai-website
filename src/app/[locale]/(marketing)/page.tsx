import { AnimationContainer, EmailCTA, MaxWidthWrapper } from '@/components';
import AboutUs from '@/components/sections/about-us';
import Testimonials from '@/components/sections/testimonials';
import TrustedBrands from '@/components/sections/trusted-brands';
import { BentoCard, BentoGrid, CARDS } from '@/components/ui/bento-grid';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import { LampContainer } from '@/components/ui/lamp';
import MagicBadge from '@/components/ui/magic-badge';
import MagicCard from '@/components/ui/magic-card';
import { I18nProviderClient } from '@/locals/client';
import { getScopedI18n } from '@/locals/server';
import { PROCESS } from '@/utils';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

const HomePage = async ({ params }: { params: { locale: string } }) => {
  const heroT = await getScopedI18n('hero');

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Hero Section */}
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
              {heroT('title')}{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text inline-bloc">
                {heroT('highlight')}
              </span>
            </h1>
            <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
              {heroT('para_r1')}
              <br className="hidden md:block" />
              <span className="hidden md:block">{heroT('para_r2')}</span>
            </p>
            <I18nProviderClient locale={params.locale}>
              <EmailCTA />
            </I18nProviderClient>
          </AnimationContainer>

          <AnimationContainer
            delay={0.2}
            className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full"
          >
            <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
              <BorderBeam size={250} duration={12} delay={9} />
              <Image
                src="/assets/dashboard.svg"
                alt="Dashboard"
                width={1200}
                height={1200}
                quality={100}
                className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
              />
              <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
              <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
            </div>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      {/* Companies Section */}
      <TrustedBrands />

      {/* Features Section */}
      <MaxWidthWrapper className="pt-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
            <MagicBadge title="Features" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Manage Links Like a Pro
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Cayus is a powerful link management tool that helps you shorten, track, and organize
              all your links in one place.
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.2}>
          <BentoGrid className="py-8">
            {CARDS.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Process Section */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="The Process" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Effortless link management in 3 steps
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Follow these simple steps to optimize, organize, and share your links with ease.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
          {PROCESS.map((process, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard className="group md:py-8">
                <div className="flex flex-col items-start justify-center w-full">
                  <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                  <div className="flex flex-col relative items-start">
                    <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                      {id + 1}
                    </span>
                    <h3 className="text-base mt-6 font-medium text-foreground">{process.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      <AboutUs />

      {/* Reviews Section */}
      <Testimonials />

      {/* CTA Section */}
      <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
        <AnimationContainer delay={0.1}>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="bg-gradient-to-b from-neutral-600 to-neutral-800 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                Step into the future of link management
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Experience the cutting-edge solution that transforms how you handle your links.
                Elevate your online presence with our next-gen platform.
              </p>
              <div className="mt-6">
                <Button>
                  Get started for free
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </LampContainer>
        </AnimationContainer>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
