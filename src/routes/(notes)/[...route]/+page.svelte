<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: component = data.component;

	import { twMerge } from 'tailwind-merge';

	let bannerStyle = twMerge(`
		flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm bg-gray-200 text-gray-800
		${data.metadata?.banner?.behaviour === 'persistent' ? 'sticky top-0 z-10':''}
		${data.metadata?.banner?.type === 'error' ? 'text-red-800 bg-red-50':''}
		${data.metadata?.banner?.type === 'info' ? 'text-sky-800 bg-sky-50':''}
		${data.metadata?.banner?.type === 'warn' ? 'text-yellow-700 bg-yellow-50':''}
		${data.metadata?.banner?.type === 'error-inverted' ? 'bg-red-600 text-white':''}
		${data.metadata?.banner?.type === 'info-inverted' ? 'bg-sky-500 text-white':''}
		${data.metadata?.banner?.type === 'warn-inverted' ? 'bg-yellow-500 text-gray-900':''}
	`);

	function formatTime(timestamp) {
		// const diff = (+new Date(timestamp)) - Date.now();
		const diff = (+new Date(timestamp)) - Date.now();

		const toSec = (diff / 1000);
		const toMin = (toSec / 60);
		const toHour = toMin / 60;
		const toDay = toHour / 24;


		// fix issue where edit that happened yesterday night returns 'today' when calculated the next morning.
		let days;
		if (Math.round(toDay) < -1 && (new Date(timestamp).getDate()) !== (new Date().getDate()))
		{ days = Math.floor(toDay); }
		else { days = Math.round(toDay); }

		const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

		if (Math.sign(days) === 1) return undefined;

		// this is an abomination. this should not work. but it does, and it works well, so it will stay for now until i figure it out
		if (Math.abs(days) < 30) {
			return { relative: rtf.format(days, 'day') };
		} else if (Math.abs(days) >= 30) {
			const toMonth = days / 30;
			const months = Math.round(toMonth);
			if (Math.abs(months) > 12) {
				const toYear = months / 12;
				const years = Math.round(toYear);
				return { relative: rtf.format(years, 'year') };
			}
			else return { relative: rtf.format(months, 'month') };
		}

	}

	let modifiedDate = formatTime(data.metadata.modified);
</script>

<svelte:head>
	<!-- <title>{data.metadata.title ? data.metadata.title : (data.metadata.pageTitle ? data.metadata.pageTitle+' - The Godfile':'The Godfile')}</title> -->
	<title>{data.metadata.title + ' / '}The Godfile</title>
</svelte:head>

{#if data.metadata.banner && data.metadata.banner.type}
	<div class={bannerStyle}>
		{#if data.metadata.banner.type === 'error' || data.metadata.banner.type === 'error-inverted'}
			<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm3.446 4.897.084.073a.75.75 0 0 1 .073.976l-.073.084L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976l.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072Z" fill="currentColor"/></svg>
		{:else if data.metadata.banner.type === 'warn' || data.metadata.banner.type === 'warn-inverted'}
			<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.91 2.782a2.25 2.25 0 0 1 2.975.74l.083.138 7.759 14.009a2.25 2.25 0 0 1-1.814 3.334l-.154.006H4.243a2.25 2.25 0 0 1-2.041-3.197l.072-.143L10.031 3.66a2.25 2.25 0 0 1 .878-.878Zm9.505 15.613-7.76-14.008a.75.75 0 0 0-1.254-.088l-.057.088-7.757 14.008a.75.75 0 0 0 .561 1.108l.095.006h15.516a.75.75 0 0 0 .696-1.028l-.04-.086-7.76-14.008 7.76 14.008ZM12 16.002a.999.999 0 1 1 0 1.997.999.999 0 0 1 0-1.997ZM11.995 8.5a.75.75 0 0 1 .744.647l.007.102.004 4.502a.75.75 0 0 1-1.494.103l-.006-.102-.004-4.502a.75.75 0 0 1 .75-.75Z" fill="currentColor"/></svg>
		{:else}
			<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999Zm0 1.5a8.502 8.502 0 1 0 0 17.003A8.502 8.502 0 0 0 12 3.5Zm-.004 7a.75.75 0 0 1 .744.648l.007.102.003 5.502a.75.75 0 0 1-1.493.102l-.007-.101-.003-5.502a.75.75 0 0 1 .75-.75ZM12 7.003a.999.999 0 1 1 0 1.997.999.999 0 0 1 0-1.997Z" fill="currentColor"/></svg>
		{/if}
		<span>{data.metadata.banner.content||'This banner has no message.'}</span>
	</div>
{/if}

{#if data.previewMode}
	<div class="fixed bottom-4 right-6 z-10 flex items-center justify-center gap-1.5 pl-3 pr-4 py-2.5 text-sm bg-amber-100 text-amber-800 rounded-lg">
		<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm.58 16.401-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07-5.807 5.687c.182.064.378.099.582.099h11.5c.203 0 .399-.035.58-.099l-5.805-5.686L18.33 19.4ZM17.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .208.036.408.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116 5.822 5.702c.067-.186.104-.386.104-.595V6.25a1.75 1.75 0 0 0-1.75-1.75Zm-2.498 2a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504Zm0 1.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504Z" fill="currentColor"/></svg>
		<span>Previewing unpublished page</span>
		<span class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping"></span>
	</div>
	<div class="w-full h-8 flex items-center justify-center bg-amber-400 text-sm uppercase font-bold text-gray-800">Preview mode</div>
{/if}

<div class="flex justify-between border-amber-400" class:border-x-8={data.previewMode}>
	<main class="prose flex-1 ml-16 mr-8 pt-12 pb-16">
		{#if data.metadata.preview}
			<div class="rounded-xl w-full h-32 border overflow-hidden not-prose mb-8">
				<img src={data.metadata.preview} alt="Preview" class="w-full">
			</div>
		{/if}
		<!-- {#if data.metadata.path}
			<div class="flex items-center gap-1 mb-8 not-prose">
				{#each data.metadata.path.split('/').slice(1) as item}
					<p>{item}</p>
					<div class="text-gray-400 last:hidden">
						<svg width="16" height="16" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.073 18.839c-.808.707-2.073.133-2.073-.94V6.101c0-1.074 1.265-1.648 2.073-.94l6.31 5.521a1.75 1.75 0 0 1 0 2.634l-6.31 5.522Zm-.573-1.492 5.896-5.159a.25.25 0 0 0 0-.376L10.5 6.653v10.694Z" fill="currentColor"/></svg>
					</div>
				{/each}
			</div>
		{/if} -->
		<svelte:component this={component} />
	</main>
	<div class="pt-12">
		<div class="sticky top-4 p-8 pr-16 flex flex-col gap-2 text-sm bg-white rounded-lg">
			
			<div class="border bg-gray-50 text-gray-700 rounded-md p-2 mb-2 space-y-2">
				
				<!-- document metadata display -->
				{#if modifiedDate?.relative && true}
				<div class="flex items-center gap-1">
					<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm1.75 5.5h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V8.5Zm-11.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-4.25-4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm1.5-6H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75Z" fill="currentColor"/></svg>
					<p>Modified {modifiedDate.relative}</p>
				</div>
				{/if}

				<!-- document path -->
				{#if data.metadata.path}
					<div class="flex items-center gap-1">
						<svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 9.502V8.75a2.25 2.25 0 0 0-2.25-2.25h-5.725l-2.38-1.98A2.25 2.25 0 0 0 8.204 4H4.25A2.25 2.25 0 0 0 2 6.25l-.004 11.5A2.25 2.25 0 0 0 4.246 20H18.47a1.75 1.75 0 0 0 1.698-1.325l1.75-6.998a1.75 1.75 0 0 0-1.698-2.175H20ZM4.25 5.5h3.956a.75.75 0 0 1 .48.173l2.588 2.154a.75.75 0 0 0 .48.173h5.996a.75.75 0 0 1 .75.75v.752H6.424a2.25 2.25 0 0 0-2.183 1.704l-.744 2.978L3.5 6.25a.75.75 0 0 1 .75-.75Zm1.447 6.07a.75.75 0 0 1 .727-.568H20.22a.25.25 0 0 1 .242.31l-1.75 6.999a.25.25 0 0 1-.242.189H4.285a.25.25 0 0 1-.243-.31l1.655-6.62Z" fill="currentColor"/></svg>
						<div class="flex items-center gap-1">
							{#each data.metadata.path.split('/').slice(1) as item}
								<p>{item}</p>
								<div class="text-gray-400 last:hidden">
									<svg width="14" height="14" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.073 18.839c-.808.707-2.073.133-2.073-.94V6.101c0-1.074 1.265-1.648 2.073-.94l6.31 5.521a1.75 1.75 0 0 1 0 2.634l-6.31 5.522Zm-.573-1.492 5.896-5.159a.25.25 0 0 0 0-.376L10.5 6.653v10.694Z" fill="currentColor"/></svg>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
			
			<!-- document table of contents -->
			{#if data.metadata.headings.length > 0}
				<p class="text-xs font-medium uppercase text-gray-500 mb-1 border-b p-1.5 min-w-[196px]">On this page</p>
				{#each data.metadata.headings as item}
					<!-- please get this abomination out of my sight. There is a better way, I just don't want to google it -->
					<a class="text-gray-500 hover:text-gray-900 transition" href={'#'+item.title.replaceAll(' ', '-').replaceAll('/','').replaceAll('(','').replaceAll(')','').toLowerCase()}><p>{@html '&nbsp&nbsp&nbsp&nbsp'.repeat(item.level)}{item.title}</p></a>
					{/each}
			{/if}

		</div>
	</div>
</div>