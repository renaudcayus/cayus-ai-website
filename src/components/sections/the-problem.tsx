import { getScopedI18n } from '@/locals/server';
import { BarChart3Icon, FolderOpenIcon, WandSparklesIcon } from 'lucide-react';
import CardWithIcon from '../cards/card-with-icon';
import AnimationContainer from '../global/animation-container';
import MaxWidthWrapper from '../global/max-width-wrapper';
import MagicBadge from '../ui/magic-badge';

async function TheProblem() {
  const [scopedT, cardT] = await Promise.all([
    getScopedI18n('problem'),
    getScopedI18n('problem.card'),
  ]);

  return (
    <MaxWidthWrapper className="py-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
          <MagicBadge title={scopedT('badge')} />
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
            {scopedT('title')}
          </h2>
          <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
            {scopedT('subtitle')}
          </p>
        </div>
      </AnimationContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
        <CardWithIcon
          index={1}
          Icon={FolderOpenIcon}
          title={cardT('1.title')}
          description={cardT('1.description')}
        />
        <CardWithIcon
          index={2}
          Icon={WandSparklesIcon}
          title={cardT('2.title')}
          description={cardT('2.description')}
        />
        <CardWithIcon
          index={3}
          Icon={BarChart3Icon}
          title={cardT('3.title')}
          description={cardT('3.description')}
        />
      </div>
    </MaxWidthWrapper>
  );
}

export default TheProblem;
