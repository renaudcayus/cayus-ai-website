import { getScopedI18n } from '@/locals/server';
import AnimationContainer from '../global/animation-container';
import MaxWidthWrapper from '../global/max-width-wrapper';
import MagicBadge from '../ui/magic-badge';
import Stories from './stories';

async function AboutUs() {
  const aboutusT = await getScopedI18n('aboutus');
  return (
    <MaxWidthWrapper className="py-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-4xl mx-auto">
          <MagicBadge title={aboutusT('badge')} />
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
            {aboutusT('title')}
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed whitespace-pre-line text-center lg:text-center max-w-3xl">
            {aboutusT('para')} <br />
            <b>{aboutusT('goal.title')}</b>
            {aboutusT('goal.statement')}
          </p>
        </div>
      </AnimationContainer>
      <Stories />
    </MaxWidthWrapper>
  );
}

export default AboutUs;
