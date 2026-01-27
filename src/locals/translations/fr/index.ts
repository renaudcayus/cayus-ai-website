<<<<<<< HEAD
import { aboutUs } from './about-us';
import { cta } from './cta';
import { features } from './features';
import { footer } from './footer';
import { getStarted } from './getStarted';
import { hero } from './hero';
import { navbar } from './navbar';
import { problem } from './problem';
import { testimonials } from './testimonials';
import { trustedBy } from './trusted-by';

const frTranslation = {
  ...navbar,
  ...hero,
  ...getStarted,
  ...problem,
  ...aboutUs,
  ...trustedBy,
  ...features,
  ...testimonials,
  ...cta,
  ...footer,
=======
import { aboutUs } from './aboutUs';
import { getStarted } from './getStarted';
import { hero } from './hero';
import { problem } from './problem';

const frTranslation = {
  ...getStarted,
  ...hero,
  ...problem,
  ...aboutUs,
>>>>>>> 6de4a03 (refactor translations)
};

export default frTranslation;
