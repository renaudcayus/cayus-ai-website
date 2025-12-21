import { cn } from '@/utils';
import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface Person {
  name: string;
  src: string;
}

export interface AvatarGroupProps {
  group: Person[];
  extra?: ReactNode;
  className?: string;
}

export default function AvatarGroup({ group, extra, className }: AvatarGroupProps) {
  return (
    <div
      className={cn(
        'flex items-center rounded-full border bg-background p-1 w-auto justify-start',
        className,
      )}
    >
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
