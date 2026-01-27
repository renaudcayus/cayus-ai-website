import { getScopedI18n } from '@/locals/server';
import FeatureCards from '../cards/feature-cards';
import AnimationContainer from '../global/animation-container';
import MaxWidthWrapper from '../global/max-width-wrapper';
import { BentoGrid } from '../ui/bento-grid';
import MagicBadge from '../ui/magic-badge';

async function Features() {
  const featuresT = await getScopedI18n('feature');
  return (
    <MaxWidthWrapper className="pt-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
          <MagicBadge title={featuresT('badge')} />
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
            {featuresT('title')}
          </h2>
          <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
            {featuresT('description')}
          </p>
        </div>
      </AnimationContainer>
      <AnimationContainer delay={0.2}>
        <BentoGrid className="py-8">
          <FeatureCards />
        </BentoGrid>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
}

export default Features;
