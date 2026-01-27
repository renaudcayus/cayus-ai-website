import { cn } from '@/utils';
import { ReactNode } from 'react';

const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn('grid w-full auto-rows-[22rem] grid-cols-3 gap-4', className)}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  cta,
  HeaderComponent,
}: {
  name: string;
  className?: string;
  background: ReactNode;
  Icon?: any;
  description?: string | React.ReactNode;

  cta: ReactNode;
  HeaderComponent?: React.ReactNode;
}) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl',
      'bg-neutral-100 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex flex-col justify-start items-start gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {Icon && (
        <Icon className="h-12 w-auto mr-auto origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      )}
      {HeaderComponent}
      <h3 className="text-xl font-semibold text-neutral-500">{name}</h3>
      {typeof description === 'string' ? (
        <p className="max-w-lg text-neutral-400">{description}</p>
      ) : (
        description
      )}
    </div>

    <div
      className={cn(
        'absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
      )}
    >
      {cta}
    </div>
    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
