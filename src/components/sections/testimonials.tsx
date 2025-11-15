import { REVIEWS } from '@/utils/constants/misc';
import AnimationContainer from '../global/animation-container';
import MaxWidthWrapper from '../global/max-width-wrapper';
import ReviewCard from '../reviews/review-card';
import MagicBadge from '../ui/magic-badge';

function Testimonials() {
  return (
    <MaxWidthWrapper className="py-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
          <MagicBadge title="Our Customers" />
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
            What our users are saying
          </h2>
          <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
            Here&apos;s what some of our users have to say about Cayus.
          </p>
        </div>
      </AnimationContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10">
        <div className="flex flex-col items-start h-min gap-6">
          {REVIEWS.slice(0, 3).map(({ name, username, rating, review }) => (
            <ReviewCard
              name={name}
              username={username}
              review={review}
              rating={rating}
              key={username}
            />
          ))}
        </div>
        <div className="flex flex-col items-start h-min gap-6">
          {REVIEWS.slice(3, 6).map(({ name, username, rating, review }) => (
            <ReviewCard
              name={name}
              username={username}
              review={review}
              rating={rating}
              key={username}
            />
          ))}
        </div>
        <div className="flex flex-col items-start h-min gap-6">
          {REVIEWS.slice(6, 9).map(({ name, username, rating, review }) => (
            <ReviewCard
              name={name}
              username={username}
              review={review}
              rating={rating}
              key={username}
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Testimonials;
