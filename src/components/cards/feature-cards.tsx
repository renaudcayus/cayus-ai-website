import { getScopedI18n } from '@/locals/server';
import { CalendarIcon, Link2Icon, SearchIcon, WaypointsIcon } from 'lucide-react';
import { BentoCard } from '../ui/bento-grid';
import { Calendar } from '../ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Integrations } from '../ui/integrations';
import { Label } from '../ui/label';

async function FeatureCards() {
  const featureCardT = await getScopedI18n('feature.card');
  return (
    <>
      <BentoCard
        Icon={Link2Icon}
        name={featureCardT('1.name')}
        description={featureCardT('1.description')}
        href="#"
        cta="Learn more"
        className="col-span-3 lg:col-span-1"
        background={
          <Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0">
            <CardHeader>
              <CardTitle>Create short links</CardTitle>
              <CardDescription>
                Create short links that are easy to remember and share.
              </CardDescription>
            </CardHeader>
            <CardContent className="-mt-4">
              <Label>Paste your link</Label>
              <Input
                type="text"
                placeholder="Paste your link here..."
                className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
              />
            </CardContent>
          </Card>
        }
      />
      <BentoCard
        Icon={SearchIcon}
        name={featureCardT('2.name')}
        description={featureCardT('2.description')}
        href="#"
        cta="Learn more"
        className="col-span-3 lg:col-span-2"
        background={
          <Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0">
            <CardHeader>
              <CardTitle>Create short links</CardTitle>
              <CardDescription>
                Create short links that are easy to remember and share.
              </CardDescription>
            </CardHeader>
            <CardContent className="-mt-4">
              <Label>Paste your link</Label>
              <Input
                type="text"
                placeholder="Paste your link here..."
                className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
              />
            </CardContent>
          </Card>
        }
      />
      <BentoCard
        Icon={WaypointsIcon}
        name={featureCardT('3.name')}
        description={featureCardT('3.description')}
        href="#"
        cta="Learn more"
        className="col-span-3 lg:col-span-2 max-w-full overflow-hidden"
        background={
          <Integrations className="absolute right-2 pl-28 md:pl-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        }
      />
      <BentoCard
        Icon={CalendarIcon}
        name={featureCardT('4.name')}
        description={featureCardT('4.description')}
        href="#"
        cta="Learn more"
        className="col-span-3 lg:col-span-1"
        background={
          <Calendar
            mode="single"
            selected={new Date(2022, 4, 11, 0, 0, 0)}
            className="absolute right-0 top-10 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
          />
        }
      />
    </>
  );
}

export default FeatureCards;
