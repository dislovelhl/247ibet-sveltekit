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
    name: '247iBET Editorial Team',
    title: 'Editorial Team',
    bio: 'Our editorial team reviews and verifies every page on 247iBET. We follow documented testing methodology and disclose all commercial relationships.',
    credentials: [
      'Collective iGaming industry research since 2020',
      'Documented verification methodology on /about/how-we-test',
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
