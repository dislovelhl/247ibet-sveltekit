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
    title: 'Platform Team',
    bio: 'Our team maintains and verifies all platform standards on 247iBET. We prioritize security, fast payments, and responsible gaming for all Canadian players.',
    credentials: [
      'Dedicated iGaming operations since 2020',
      'Continuous platform verification and security auditing',
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
