import { StarIcon } from 'lucide-react';
import AnimationContainer from '../global/animation-container';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import MagicCard from '../ui/magic-card';

function ReviewCard({
  name,
  username,
  review,
  index = 1,
  avatar,
  rating,
}: {
  name: string;
  username: string;
  review: string;
  avatar?: string;
  index?: number;
  rating?: number;
}) {
  return (
    <AnimationContainer delay={0.2 * index}>
      <MagicCard className="md:p-0">
        <Card className="flex flex-col w-full border-none h-min">
          <CardHeader className="space-y-0 flex space-x-4 items-center flex-row w-full">
            {avatar ? (
              <Avatar>
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
              </Avatar>
            ) : null}
            <div>
              <CardTitle className="text-lg font-medium text-muted-foreground">{name}</CardTitle>
              <CardDescription>{username}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 pb-4">
            <p className="text-muted-foreground">{review}</p>
          </CardContent>
          {rating ? (
            <CardFooter className="w-full space-x-1 mt-auto">
              {Array.from({ length: rating }, (_, i) => (
                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              ))}
            </CardFooter>
          ) : null}
        </Card>
      </MagicCard>
    </AnimationContainer>
  );
}

export default ReviewCard;
