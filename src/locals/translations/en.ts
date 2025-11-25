const hero = {
  'hero.title': 'Smart Links with',
  'hero.highlight': 'Precision',
  'hero.para_r1': `Effortlessly streamline your link management with Cayus.`,
  'hero.para_r2': `Shorten, track, and organize all your links in one place.`,
};

const getStarted = {
  'getStarted.message.error': 'Failed to send email. Try again later.',
  'getStarted.message.success': 'Email sent successfully!',
};

const aboutUs = {
  'aboutus.para': `Cayus was created by two engineers who grew into senior management and executive roles, then went on to become professional coaches. Long-time friends, our paths kept crossing and so did our shared ambition: to make management better at scale.
  When large language models arrived, our founder Renaud, an experienced software leader, saw an opportunity to reimagine leadership development. We spoke with HR leaders and managers across industries, uncovering the real obstacles holding leadership training back.
  Cayus is our answer: a pragmatic platform designed to work in the flow of day-to-day business. It clears the noise, strengthens managers instead of replacing them, and delivers measurable impact for teams.
  Our goal is simple: give managers the time, context, and coaching they need to lead with confidence.`,
  'aboutus.title': 'Our Story',
  'aboutus.badge': 'About Us',
};

const problem = {
  'problem.badge': 'The Problem',
  'problem.title': 'The Hidden Cost of Manager Overload',
  'problem.subtitle':
    'Cayus gives HR visibility and control over what really drives leadership performance.',
  'problem.card.1': '56% of managers’ time is spent on admin — not leadership.',
  'problem.card.2': 'Only 20% of training translates into behaviour change.',
  'problem.card.3': 'When managers are overwhelmed, retention suffers.',
};
export default {
  ...hero,
  ...getStarted,
  ...aboutUs,
  ...problem,
} as const;
