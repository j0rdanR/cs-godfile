import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkEmoji from 'remark-emoji';
import remarkCodeTitle from 'remark-code-title';
// import remarkHeadings from '@vcarl/remark-headings';
import remarkAbbr from 'remark-abbr';
import remarkHint from 'remark-hint';
// import remarkReadingTime from 'remark-reading-time';
import remarkWikiLink from 'remark-wiki-link';
import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';


function getHeadings() {
  let visit;
  let tree_to_string;
  return async function transformer(tree, vFile) {
    if (!visit) {
      tree_to_string = (await import('mdast-util-to-string')).toString;
      visit = (await import('unist-util-visit')).visit;
    }

    vFile.data.headings = [];
		
    visit(tree, 'heading', (node) => {
      vFile.data.headings.push({
        level: node.depth,
        title: tree_to_string(node),
      });
    });

    if (!vFile.data.fm) vFile.data.fm = {};
    vFile.data.fm.headings = vFile.data.headings;
  };
}

const config = defineConfig({
	extensions: ['.svelte.md', '.md'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
		[remarkEmoji, { accessible: true, emoticon: true }],
		remarkCodeTitle,
		remarkAbbr,
		remarkHint,
		// remarkReadingTime,
    remarkWikiLink,
		getHeadings,

	],
	rehypePlugins: [
		rehypeSlug,
		// [rehypeAutolinkHeadings, { behaviour: 'prepend' }],
		// rehypeToc,
    [rehypeExternalLinks, { target: ['_blank'], rel: ['nofollow', 'noopener', 'noreferrer']}]
	]
});

export default config;
