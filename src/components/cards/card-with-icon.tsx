import AnimationContainer from '../global/animation-container';
import MagicCard from '../ui/magic-card';

interface ICardWithIcon {
  index: number;
  Icon: any;
  title: string;
  description: string;
}

function CardWithIcon({ index, Icon, title, description }: ICardWithIcon) {
  return (
    <AnimationContainer delay={0.2 * index}>
      <MagicCard className="group md:py-8">
        <div className="flex flex-col items-start justify-center w-full">
          <Icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
          <div className="flex flex-col relative items-start">
            <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
              {index + 1}
            </span>
            <h3 className="text-base mt-6 font-medium text-foreground">
              {/* The argument would be string key to get translation, i.e, 1.title, 2.title, and so on. */}
              {title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </MagicCard>
    </AnimationContainer>
  );
}

export default CardWithIcon;
