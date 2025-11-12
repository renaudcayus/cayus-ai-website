'use client';
import { useId } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useChangeLocale, useCurrentLocale } from '@/locals/client';
import { Languages } from 'lucide-react';

export default function LangSelect() {
  const id = useId();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  function handleOnSelect(locale: 'fr' | 'en') {
    return changeLocale(locale);
  }
  return (
    <div className="*:not-first:mt-2 w-auto relative">
      <Select defaultValue={currentLocale} onValueChange={handleOnSelect}>
        <SelectTrigger id={id}>
          <Languages size={16} className="mr-2" />
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">French</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
