import { getScopedI18n } from '@/locals/server';
import Image from 'next/image';
import Link from 'next/link';
import AnimationContainer from '../global/animation-container';
import Checklist from '../global/checklist';
import MaxWidthWrapper from '../global/max-width-wrapper';
import { BentoCard, BentoGrid } from '../ui/bento-grid';
import { Button } from '../ui/button';
import MagicBadge from '../ui/magic-badge';

async function Solution() {
  const [scopedT, scopedTManagers, scoptedTHR] = await Promise.all([
    getScopedI18n('solution'),
    getScopedI18n('solution.manager'),
    getScopedI18n('solution.hr'),
  ]);
  return (
    <MaxWidthWrapper className="pt-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
          <MagicBadge title={scopedT('badge')} />
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6 max-w-[45rem]">
            {scopedT('title')}
          </h2>
        </div>
      </AnimationContainer>
      <AnimationContainer delay={0.2}>
        <BentoGrid className="py-8 grid-cols-2">
          <BentoCard
            className="col-span-1"
            description={
              <Checklist
                list={[
                  scopedTManagers('list.1'),
                  scopedTManagers('list.2'),
                  scopedTManagers('list.3'),
                ]}
              />
            }
            name={scopedTManagers('title')}
            cta={
              <Button variant={'primary'} asChild>
                <Link href={'#'}>{scopedTManagers('cta')}</Link>
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
                list={[scoptedTHR('list.1'), scoptedTHR('list.2'), scoptedTHR('list.3')]}
              />
            }
            name={scoptedTHR('title')}
            cta={
              <Button variant={'primary'} asChild>
                <Link href={'#'}>{scoptedTHR('cta')}</Link>
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
