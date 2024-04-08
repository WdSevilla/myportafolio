<script>

	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>


<div class="flex place-content-between bg-color1 fixed w-full p-2">
	<p class="text-white font-semibold text-xl">Wilfredo Sevilla</p>

	<button
		class="flex items-center justify-center w-8 h-8 rounded-md focus:outline-none "
		on:click={toggleMenu}
	>
		<svg class="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="fixed inset-0 bg-color2 mt-12 h-32 "
		on:click={toggleMenu}
		style="display: {isOpen ? 'block' : 'none'};"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="absolute inset-0  bg-opacity-75 transition-opacity h-18" on:click={toggleMenu}>
			<div class="pb-48  ">
				<div class="flex flex-col space-y-2 text-white text-lg p-2 ">
					<nav>
					<a href="/">Home</a>
					<hr class="divide-y divide-blue-200" />
					<a href="about">About</a>
					<hr class="divide-y divide-blue-200" />
					<a href="tecnologias">Technlogies</a>
					<hr class="divide-y divide-blue-200" />
					<a href="proyectos">Works</a>
				</nav>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- 
<div class="fixed inset-0 " style="display: {isOpen ? 'block' : 'none'};">
	<div class="absolute inset-0 overflow-hidden">
	svelte-ignore a11y-click-events-have-key-events -->
<!-- <div class="absolute inset-0  bg-opacity-75 transition-opacity" on:click={toggleMenu}>
            <div class="pb-48">
                <a href="/">asdwe</a>
            </div>
		</div>
	</div>
</div> -->
