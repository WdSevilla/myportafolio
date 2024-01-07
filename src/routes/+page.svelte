<script>
	// @ts-nocheck

	import '../app.css';

	import Inicio from './inicio/+page.svelte';
	import About from './about/+page.svelte';
	import Tecnologias from './tecnologias/+page.svelte';
	import Proyectos from './proyectos/+page.svelte';
	import Burger from './nav/+page.svelte';
	let paginaActual = 'inicio';
	function newPaginaActual(newPage) {
		paginaActual = newPage;
	}
</script>

<div class=" lg:hidden">
	<div>
		<Burger />
	</div>
</div>
<div class="flex flex-col-2 ">
	<div class="hidden sm:flex">
		<div class=" bg-color1 w-48 ">
			<div class="pt-6 pb-6">
				<img
					class="flex justify-center mx-auto w-24 h-24 "
					src="https://i.ibb.co/MZdTqgS/BK2.png"
					alt="profile"
				/>
			</div>
			<div class="flex justify-center">
				<p class="text-white text-xl">Wilfredo Sevilla</p>
			</div>
			<div class="flex justify-center pt-16">
				<div class="grid grid-cols-1 text-xl space-y-4">
					<button on:click={() => newPaginaActual('inicio')} class="text-white">Inicio</button>
					<button on:click={() => newPaginaActual('about')} class="text-white">Sobre Mi</button>
					<button on:click={() => newPaginaActual('tecnologias')} class="text-white"
						>Tecnologias</button
					>
					<button on:click={() => newPaginaActual('proyectos')} class="text-white">Proyectos</button
					>
				</div>
			</div>
			<!-- <div>
				<a href="https://github.com/WdSevilla" target="_blank"><img class="w-8 h-8" src="https://i.ibb.co/h8V87pM/git.png" alt="git"></a>
				<a href="https://www.linkedin.com/in/wdsevilla/" target="_blank"><img class="w-8 h-8" src="https://i.ibb.co/9GdhKyz/linked.png" alt="linkedin"></a>
			</div> -->
		</div>
	</div>
	<div class="w-screen bg-color2 ">
		{#if paginaActual === 'inicio'}
			<Inicio />
		{:else if paginaActual === 'about'}
			<About />
		{:else if paginaActual === 'tecnologias'}
			<Tecnologias />
		{:else}
			<Proyectos />
		{/if}
	</div>
</div>
<!-- mobile menu -->
