export interface Author {
  id: string;
  name: string;
  title: string;
  avatar?: string;
  bio: string;
  credentials: string[];
  social?: {
    x?: string;
    linkedin?: string;
    email?: string;
  };
}

export const AUTHORS: Record<string, Author> = {
  editorial: {
    id: 'editorial',
    name: '247iBET Team',
    title: 'Editorial Team',
    bio: 'Our editorial team maintains public guides, source checks, affiliate disclosures, and responsible-gambling resources for Canadian readers.',
    credentials: [
      'Canadian iGaming editorial coverage',
      'Source verification and public-content review',
    ],
  },
  // TODO: Add named authors with real credentials
  // example: {
  //   id: 'john-doe',
  //   name: 'John Doe',
  //   title: 'Senior iGaming Analyst',
  //   avatar: '/images/authors/john-doe.jpg',
  //   bio: '10+ years reviewing Canadian online casinos and sportsbooks.',
  //   credentials: ['AGCO compliance training', 'RGDAP certification'],
  //   social: { x: '@johndoe', linkedin: '...' },
  // },
};

export function getAuthor(id: string): Author {
  return AUTHORS[id] || AUTHORS.editorial;
}
