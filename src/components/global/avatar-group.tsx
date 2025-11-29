import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface Person {
  name: string;
  src: string;
}

export interface AvatarGroupProps {
  group: Person[];
  extra?: ReactNode;
}

export default function AvatarGroup({ group, extra }: AvatarGroupProps) {
  return (
    <div className="flex items-center rounded-full border bg-background p-1 w-auto justify-start">
      <div className="-space-x-[0.6rem] flex">
        {group.map((person) => {
          return (
            <Avatar key={person.name}>
              <AvatarFallback>{person.name.slice(0, 2)}</AvatarFallback>
              <AvatarImage src={person.src} className="object-cover" />
            </Avatar>
          );
        })}
      </div>
      {extra}
    </div>
  );
}
