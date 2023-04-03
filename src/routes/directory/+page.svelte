<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
  import { base } from '$app/paths';
</script>

{#each data?.documents as document}
  <a href={`${base}/${document.route}`}><div class="p-4">
    <p class="text-xl font-semibold">{document.metadata.title}</p>
    {#if document.metadata.path}
      <div class="flex items-center gap-1">
        {#each document.metadata.path.split('/').slice(1) as item}
          <p>{item}</p>
          <div class="text-gray-400 last:hidden">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.073 18.839c-.808.707-2.073.133-2.073-.94V6.101c0-1.074 1.265-1.648 2.073-.94l6.31 5.521a1.75 1.75 0 0 1 0 2.634l-6.31 5.522Zm-.573-1.492 5.896-5.159a.25.25 0 0 0 0-.376L10.5 6.653v10.694Z" fill="currentColor"/></svg>
          </div>
        {/each}
      </div>
    {:else}
      <div>
        <p>No navigation information</p>
      </div>
    {/if}
  </div></a>
{/each}