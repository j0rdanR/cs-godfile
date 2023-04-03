<script>
	import '../app.postcss';
	import '../prism-vsc-dark-plus.css';
</script>

<div class="flex flex-col h-screen">

  <header class="flex items-center justify-between px-4 h-16 bg-white border-b border-b-gray-200">
    <div>
      <a href="/"><div class="flex items-center gap-1 select-none">
        <span class="text-lg font-medium">Godfile</span>
        <span class="font-bold text-xs uppercase text-white bg-gradient-to-tr from-red-700 to-amber-400 px-1 py-0.5 rounded" title="Version 0.0.5">Pre-Alpha</span>
      </div></a>
    </div>
    <div>
			<a href="/contributing" class="font-medium text-gray-700 border-b-2 border-b-transparent hover:border-b-sky-500 hover:text-sky-600 transition">Contribute</a>
    </div>
  </header>

  
  
  <div class="flex-1 overflow-hidden">
		<slot />
  </div>

</div>