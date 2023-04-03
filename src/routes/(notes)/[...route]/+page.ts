import type { PageLoad } from './$types';
import { routeFromPath } from '$lib/routeFromPath';
import { error } from '@sveltejs/kit';


// For some reason this doesn't work as a server only file. Doesn't matter to me, as the site is prerendered anyways
export const load: PageLoad = (async ({ params }) => {

  const modules = import.meta.glob(`/src/content/**/*.{md,svx,svelte.md}`);
	let match: { path?: string; resolver? } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (routeFromPath(path) === params.route) {
			match = { path, resolver };
			break;
		}
	}

	const document = await match?.resolver?.();
	if (!document) throw error(404, 'Document does not exist');


	// can preview determines whether the server should respond to requests for documents that are unpublished: true = return document; false = return 404;
	const canPreview = true;
	let previewMode = false;
	if (!document.metadata?.published && !canPreview) throw error(404, 'Document does not exist. Check preview permisssions');
	else if (!document.metadata?.published && canPreview) {
		console.log('Preview enabled');
		previewMode = true;
	};


	return {
		component: document.default,
		metadata: document.metadata,
		previewMode,
	};
});