'use client';

import { AnimatedBeam } from '@/components/ui/animated-beam';
import { cn } from '@/utils';
import React, { forwardRef, useRef } from 'react';
import { Icons } from '../global/icons';

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  function Circle({ className, children }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

export function Integrations({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  const animatedBeamStartColor = '#0ea5e9';
  const animatedBeamEndColor = '#0ea5e9';

  return (
    <div
      className={cn(
        'relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl',
        className,
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user className="text-black" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-16 w-16">
            <Icons.openai className="h-6 w-6" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.outlookCal className="h-6 w-6" />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.microsoftTeams className="h-6 w-6" />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.meetings className="h-6 w-6" />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.chats className="h-6 w-6" />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.outlook className="h-6 w-6" />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        gradientStartColor={animatedBeamStartColor}
        gradientStopColor={animatedBeamEndColor}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
        reverse
      />
      <AnimatedBeam
        gradientStartColor={animatedBeamStartColor}
        gradientStopColor={animatedBeamEndColor}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
        reverse
      />
      <AnimatedBeam
        gradientStartColor={animatedBeamStartColor}
        gradientStopColor={animatedBeamEndColor}
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
        reverse
      />
      <AnimatedBeam
        gradientStartColor={animatedBeamStartColor}
        gradientStopColor={animatedBeamEndColor}
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
        reverse
      />
      <AnimatedBeam
        gradientStartColor={animatedBeamStartColor}
        gradientStopColor={animatedBeamEndColor}
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
        reverse
      />
      <AnimatedBeam
        gradientStartColor={animatedBeamStartColor}
        gradientStopColor={animatedBeamEndColor}
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
        reverse
      />
    </div>
  );
}
