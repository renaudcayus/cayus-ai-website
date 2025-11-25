const problemCards = {
  // Card 1
  'problem.card.1.title': 'Trop de tâches admin',
  'problem.card.1.description':
    '56 % du temps des managers est consacré à l’administratif — pas au leadership.',

  // Card 2
  'problem.card.2.title': 'La formation ne tient pas',
  'problem.card.2.description':
    'Seuls 20 % des formations se traduisent par un changement de comportement.',

  // Card 3
  'problem.card.3.title': 'La surcharge nuit à la rétention',
  'problem.card.3.description': 'Quand les managers sont dépassés, la rétention en souffre.',
};

const problem = {
  'problem.badge': 'Le problème',
  'problem.title': 'Le coût caché de la surcharge des managers',
  'problem.subtitle':
    'Cayus offre aux RH de la visibilité et du contrôle sur ce qui influence réellement la performance managériale.',
  ...problemCards,
};

const hero = {
  'hero.title': 'Liens intelligents avec',
  'hero.highlight': 'Précision',
  'hero.para_r1': `Simplifiez la gestion de vos liens avec Cayus.`,
  'hero.para_r2': `Raccourcissez, suivez et organisez tous vos liens en un seul endroit.`,
};

const aboutUs = {
  'aboutus.para': `Cayus a été créé par deux ingénieurs devenus cadres supérieurs puis dirigeants, avant de se reconvertir en coachs professionnels. Amis de longue date, nos chemins n’ont cessé de se croiser, tout comme notre ambition commune : améliorer le management à grande échelle.
Lorsque les grands modèles de langage sont apparus, notre fondateur Renaud, un leader expérimenté dans le domaine du logiciel, a vu une occasion de réinventer le développement du leadership. Nous avons échangé avec des responsables RH et des managers de différents secteurs, identifiant les véritables obstacles qui freinent la formation au leadership.
Cayus est notre réponse : une plateforme pragmatique conçue pour s’intégrer naturellement dans le quotidien professionnel. Elle élimine le superflu, renforce les managers au lieu de les remplacer et produit un impact mesurable sur les équipes.
Notre objectif est simple : offrir aux managers le temps, le contexte et l’accompagnement dont ils ont besoin pour diriger avec confiance.Is this conversation helpful so far?`,
  'aboutus.title': 'Notre histoire',
  'aboutus.badge': 'À propos de nous',
};

const getStarted = {
  'getStarted.message.error': 'Échec de l’envoi de l’e-mail. Veuillez réessayer plus tard.',
  'getStarted.message.success': 'E-mail envoyé avec succès !',
};

export default {
  ...hero,
  ...getStarted,
  ...problem,
  ...aboutUs,
} as const;
