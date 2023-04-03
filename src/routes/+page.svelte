<script>
  import Modal from '$lib/ui/Modal.svelte';
  import { base } from '$app/paths';
</script>


<div class="w-full h-full flex bg-gradient-to-br from-sky-200 via-indigo-300 to-purple-400">
  <div class="m-auto text-center pb-24">
    <img src="{base}/fire.gif" alt="Fun fire GIF" class="h-48 mx-auto">
    <h1 class="text-6xl font-bold tracking-tight mb-4">The Godfile</h1>
    <p class="text-xl">Notes compiled and revised for your convenience!</p>
    <p class="font-mono text-sm px-2 py-1 bg-gray-200 bg-opacity-75 text-gray-700 inline-block rounded-lg mt-4">v:0.0.5 Pre-Alpha</p>
  
    <div class="flex justify-center gap-2 mt-12">
      <a href="{base}/about" class="inline-block px-3 py-2 bg-gray-300 bg-opacity-75 text-gray-800 rounded-lg">Learn more</a>
      <a href="{base}/contributing" class="inline-block px-3 py-2 bg-sky-500 text-white rounded-lg">Start reading</a>
    </div>
  </div>
</div>

<Modal />