import { REVIEWS } from '@/utils/constants/misc';
import MaxWidthWrapper from '../global/max-width-wrapper';
import ReviewCard from '../reviews/review-card';

function Stories() {
  return (
    <MaxWidthWrapper className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10">
        <div className="flex flex-col items-start h-min gap-6">
          {REVIEWS.slice(0, 3).map(({ name, avatar, rating, review, username }, index) => (
            <ReviewCard
              username={username}
              name={name}
              avatar={avatar}
              review={review}
              key={index}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-col items-start h-min gap-6">
          {REVIEWS.slice(3, 6).map(({ name, username, avatar, review }, index) => (
            <ReviewCard
              username={username}
              name={name}
              avatar={avatar}
              review={review}
              key={index}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-col items-start h-min gap-6">
          {REVIEWS.slice(6, 9).map(({ name, username, avatar, review }, index) => (
            <ReviewCard
              username={username}
              name={name}
              avatar={avatar}
              review={review}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Stories;
