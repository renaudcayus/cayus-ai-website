// constants
import {
  CHILD_VARIANTS,
  FADE_IN_VARIANTS,
  LIST_ITEM_VARIANTS,
  MODAL_VARIANTS,
} from './constants/animation';
import { aeonik, inter } from './constants/fonts';
import { COMPANIES, DEFAULT_AVATAR_URL, PAGINATION_LIMIT } from './constants/misc';
import { NAV_LINKS } from './constants/nav-links';

// functions
import { cn } from './functions/cn';
import { generateMetadata } from './functions/metadata';
import { isValidUrl } from './functions/urls';

export {
  aeonik,
  CHILD_VARIANTS,
  // functions
  cn,
  COMPANIES,
  DEFAULT_AVATAR_URL,
  FADE_IN_VARIANTS,
  generateMetadata,
  inter,
  isValidUrl,
  // constants
  LIST_ITEM_VARIANTS,
  MODAL_VARIANTS,
  NAV_LINKS,
  PAGINATION_LIMIT,
};
