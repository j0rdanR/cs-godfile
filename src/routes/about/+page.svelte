<script lang="ts">
  import type { PageData } from './$types';
	export let data: PageData;
	$: component = data.component;
</script>

<div class="w-full h-full overflow-auto">
  <div class="p-24 bg-sky-50">
    <h1 class="text-5xl font-bold tracking-tight">About this project</h1>
  </div>
  
  <div class="prose mx-auto px-12 py-16">
    <svelte:component this={component} />
  </div>
</div>