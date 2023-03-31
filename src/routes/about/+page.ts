import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';


export const load: PageServerLoad = (async () => {

	let module;
	try {
		module = await import('./about.md');
	} catch (err) {
		throw error(500, err.code);
	}


	const doc = await module.default;
	if (!doc) throw error(404, 'Document does not exist');


	return {
		component: module.default,
		metadata: module.metadata
	};
});