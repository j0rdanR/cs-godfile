import type { PageServerLoad } from './$types';
import { routeFromPath } from '$lib/routeFromPath';
import { error } from '@sveltejs/kit';


export const load: PageServerLoad = (async () => {

	const documents = [];
  const modules = import.meta.glob(`/src/content/**/*.{md,svx,svelte.md}`);

	for (const [path, resolver] of Object.entries(modules)) {
		const doc = await resolver?.();
		if (!doc) break;
		documents.push({
			route: routeFromPath(path),
			path,
			metadata: doc?.metadata,
		})
	}


	return {
		documents,
	};
});