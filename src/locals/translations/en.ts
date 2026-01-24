const hero = {
  'hero.title': 'Execution Meets,',
  'hero.highlight': 'Intelligence',
  'hero.para_r1': `Meet Cayus AI, your intelligent chief of staff,`,
  'hero.para_r2': `that lives right inside your existing workflow.`,
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

const problemCards = {
  // Card 1
  'problem.card.1.title': 'Too Much Admin Work',
  'problem.card.1.description': '56% of managers’ time is spent on admin — not leadership.',

  // Card 2
  'problem.card.2.title': 'Training Doesn’t Stick',
  'problem.card.2.description': 'Only 20% of training translates into behaviour change.',

  // Card 3
  'problem.card.3.title': 'Overload Hurts Retention',
  'problem.card.3.description': 'When managers are overwhelmed, retention suffers.',
};

const problem = {
  'problem.badge': 'The Problem',
  'problem.title': 'The Hidden Cost of Manager Overload',
  'problem.subtitle':
    'Cayus gives HR visibility and control over what really drives leadership performance.',

  ...problemCards,
};

const features_card1 = {
  'feature.card.1.name': 'Scales leadership growth across the organisations',
  'feature.card.1.description':
    'Every manager gets an AI Chief of Staff that adopts to their style. It supports better conversations and strengthens leadership muscles over time.',
};

const features_card2 = {
  'feature.card.2.name': 'From Prep Work to Leadership Focus',
  'feature.card.2.description':
    'Hours of information-chasing disappear with insights delivered in seconds. Managers open Cayus and start leading, not sifting.',
};

const features_card3 = {
  'feature.card.3.name': 'Connects to You Reality, Not Theory.',
  'feature.card.3.description':
    "Cayus links with calendars, email, and systems to surface context directly from managers' workflows, keeping agendas rooted in what's really happening day to day.",
};

const features_card4 = {
  'feature.card.4.name': "Strengthens Managers, Doesn't Replace Them.",
  'feature.card.4.description':
    'Cayus removes grunt work but leaves interpretation to manager. It coaches with a proven framework, not a philosophy, building sharper judgement',
};

const features = {
  'feature.title': 'Manage Links Like a Pro',
  'feature.description':
    'Cayus is a powerful link management tool that helps you shorten, track, and organize all your links in one place.',

  ...features_card1,
  ...features_card2,
  ...features_card3,
  ...features_card4,
};

export default {
  ...hero,
  ...getStarted,
  ...aboutUs,
  ...problem,
  ...features,
} as const;
