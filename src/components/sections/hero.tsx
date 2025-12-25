import { getScopedI18n } from '@/locals/server';
import Image from 'next/image';
import AnimationContainer from '../global/animation-container';
import MaxWidthWrapper from '../global/max-width-wrapper';
import EmailCTA from '../marketing/email-cta';
import { BorderBeam } from '../ui/border-beam';

async function Hero() {
  const heroT = await getScopedI18n('hero');
  return (
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

          <EmailCTA />
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
  );
}

export default Hero;
