import AnimationContainer from '../global/animation-container';
import AvatarGroup from '../global/avatar-group';
import Checklist from '../global/checklist';
import MaxWidthWrapper from '../global/max-width-wrapper';
import { BentoCard, BentoGrid } from '../ui/bento-grid';
import { Calendar } from '../ui/calendar';
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
            HeaderComponent={
              <AvatarGroup
                group={[
                  { name: 'Jessica', src: '/assets/manager-1.jpg' },
                  { name: 'Jessica', src: '/assets/manager-2.jpg' },
                  { name: 'Jessica', src: '/assets/manager-3.jpg' },
                ]}
              />
            }
            description={
              <Checklist list={['Prepares 1:1s', 'Highlights Priorities', 'Coaches In Context']} />
            }
            name="For Managers"
            cta="Learn More"
            href="#"
            background={
              <Calendar
                mode="single"
                selected={new Date(2022, 4, 11, 0, 0, 0)}
                className="absolute right-0 top-10 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
              />
            }
          />
          <BentoCard
            className="col-span-1"
            HeaderComponent={
              <AvatarGroup
                group={[
                  { name: 'Jessica', src: '/assets/HR1.jpg' },
                  { name: 'Lisa', src: '/assets/HR2.jpg' },
                  { name: 'Jessica', src: '/assets/HR3.jpg' },
                  { name: 'Jessica', src: '/assets/manager-4.jpg' },
                ]}
              />
            }
            description={
              <Checklist
                list={['Provides Behavioural Insights', 'Maturity Trends', 'Measurable ROI']}
              />
            }
            name="For HR Leaders"
            cta="Learn More"
            href="#"
            background={
              <Calendar
                mode="single"
                selected={new Date(2022, 4, 11, 0, 0, 0)}
                className="absolute right-0 top-10 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
              />
            }
          />
        </BentoGrid>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
}

export default Solution;
