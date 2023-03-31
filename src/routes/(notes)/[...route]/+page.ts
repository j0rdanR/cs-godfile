import type { PageServerLoad } from './$types';
import { routeFromPath } from '$lib/routeFromPath';
import { error } from '@sveltejs/kit';


export const load: PageServerLoad = (async ({ params }) => {

  const modules = import.meta.glob(`/src/content/**/*.{md,svx,svelte.md}`);
	let match: { path?: string; resolver? } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (routeFromPath(path) === params.route) {
			match = { path, resolver };
			break;
		}
	}

	const post = await match?.resolver?.();
	if (!post) throw error(404, 'Post does not exist');


	// can preview determines whether the server should respond to requests for documents that are unpublished: true = return document; false = return 404;
	const canPreview = true;
	let previewMode = false;
	if (!post.metadata?.published && !canPreview) throw error(404, 'Post does not exist. Check preview permisssions');
	else if (!post.metadata?.published && canPreview) {
		console.log('Preview enabled');
		previewMode = true;
	};


	return {
		component: post.default,
		metadata: post.metadata,
		previewMode,
	};
});