import { error } from '@sveltejs/kit';
import { AUTHORS } from '$lib/authors.js';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const author = AUTHORS[params.slug];

  if (!author) {
    error(404, 'Author not found');
  }

  return { author };
};
