
<!-- <div class="'w-full h-full flex flex-col overflow-hidden border-2 border-green-500">

  <a!-- header --a>
  <header class="flex-none z-10 h-16 flex items-center justify-between px-4 bg-white bg-opacity-80 backdrop-blur-lg border-b border-b-gray-200">
    <div>
      <div class="flex items-center gap-1">
        <span class="tracking-tight text-lg font-medium">
          Godfile
        </span>
        <span class="font-bold text-xs uppercase text-white bg-sky-500 px-1 py-0.5 rounded">Alpha</span>
      </div>
    </div>
    <div>
      Contribute
    </div>
  </header>

  <a!-- content area --a>
  <div class="flex-auto w-full h-full flex overflow-hidden">

    <a!-- sidebar --a>
    <nav class="flex-none overflow-x-hidden overflow-y-auto grid grid-cols-1 w-72 bg-white bg-opacity-80 backdrop-blur-lg border-r border-r-gray-200">
      nav
    </nav>

    <a!-- page --a>
    <div class="flex-1 overflow-x-hidden flex flex-col">
      <a!-- page content --a>
      <div class="flex-auto">
        <slot />
      </div>
    </div>
  </div>
</div> -->



<!-- <div class="fixed inset-0 overflow-hidden">
  

  <header class="h-16 z-10 flex items-center justify-between px-4 bg-white bg-opacity-80 backdrop-blur-lg border border-b-gray-200">
    <div>
      <div class="flex items-center gap-1">
        <span class="text-lg font-medium">
          Godfile
        </span>
        <span class="font-bold text-xs uppercase text-white bg-sky-500 px-1 py-0.5 rounded">Alpha</span>
      </div>
    </div>
    <div>
      Contribute
    </div>
  </header>

  <div class="overflow-hidden h-full border-4 border-green-500">
    <nav class="w-72 h-full pt-16 bg-pink-300 bg-opacity-80 backdrop-blur-lg border-4 border-r-gray-200 self-start">
      content
    </nav>
    
    <div class="h-full border-4 border-red-500">
      <div class="h-16 w-full bg-red-400"></div>
      <slot />
    </div>
  </div>
</div> -->

<script>
  import { onMount } from 'svelte';
  let scrollElement;
  onMount(() => {
    scrollElement.scrollTop = localStorage.getItem('scrollPositon') || 0;
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('scrollPositon', scrollElement.scrollTop);
    });
  })
</script>

<div class="flex w-full h-full">
  <nav class="w-72 overflow-y-auto p-4 flex flex-col gap-8 bg-white border-r border-r-gray-200">
    <div class="flex flex-col gap-3 pl-2">
      <p class="-ml-2 -mb-1 text-sm font-medium text-gray-500">Introduction</p>
      <a href="/">Home</a>
      <a href="/contributing">Contributing</a>
      <a href="/changelog">Changelog</a>
      <a href="/syllabus">Syllabus</a>
    </div>
    <div class="flex flex-col gap-3 pl-2">
      <p class="-ml-2 -mb-1 text-sm font-medium text-gray-500">Managing Data</p>
      <a href="/managing-data/normalisation">Normalisation</a>

    </div>    
  </nav>
  
  <div class="flex-1 overflow-y-auto scroll-smooth" bind:this={scrollElement}>
    <slot />
  </div>
</div>