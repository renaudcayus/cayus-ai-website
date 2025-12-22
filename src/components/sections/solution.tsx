import Image from 'next/image';
import Link from 'next/link';
import AnimationContainer from '../global/animation-container';
import Checklist from '../global/checklist';
import MaxWidthWrapper from '../global/max-width-wrapper';
import { BentoCard, BentoGrid } from '../ui/bento-grid';
import { Button } from '../ui/button';
import MagicBadge from '../ui/magic-badge';

function Solution() {
  return (
    <MaxWidthWrapper className="pt-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
          <MagicBadge title="Solution" />
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
            From conversations to insights <br /> — without adding another tool.
          </h2>
        </div>
      </AnimationContainer>
      <AnimationContainer delay={0.2}>
        <BentoGrid className="py-8 grid-cols-2">
          <BentoCard
            className="col-span-1"
            description={
              <Checklist list={['Prepares 1:1s', 'Highlights Priorities', 'Coaches In Context']} />
            }
            name="For Managers"
            cta={
              <Button variant={'primary'} asChild>
                <Link href={'#'}>Try Now</Link>
              </Button>
            }
            background={
              <Image
                src={'/app_images/managers-graph.png'}
                alt="Suggestions For Managers"
                height={352}
                width={552}
                className="absolute left-0 top-0 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_60%)] group-hover:scale-105"
              />
            }
          />
          <BentoCard
            className="col-span-1"
            description={
              <Checklist
                list={['Provides Behavioural Insights', 'Maturity Trends', 'Measurable ROI']}
              />
            }
            name="For HR Leaders"
            cta={
              <Button variant={'primary'} asChild>
                <Link href={'#'}>Try Now</Link>
              </Button>
            }
            background={
              <Image
                src={'/app_images/HR-graphs.png'}
                alt="Analytics For HRs"
                height={352}
                width={552}
                className="absolute right-0 -top-2 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_60%)] group-hover:scale-105"
              />
            }
          />
        </BentoGrid>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
}

export default Solution;
