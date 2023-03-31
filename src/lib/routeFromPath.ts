export const DIR_DEFAULT_FILE = 'index';

export const routeFromPath = (path: string) => {
	// requires path to start with /src/content and end with .md
	const routeString = path.replace('/src/content/', '').replace('.md', '');
	const routeSplit = routeString.split('/');

	if (routeSplit.at(-1) === DIR_DEFAULT_FILE) {
		routeSplit.pop();
		return routeSplit.join('/');
	}
	else return routeString;
}