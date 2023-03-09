<script>
	import Burger from '../nav/+page.svelte';
	function curri(){
		window.open("https://drive.google.com/file/d/1ekc354siO8sjrHZDnb3RAhN3qdjs0RgI/view?usp=sharing");
	}
</script>

<div class=" lg:hidden">
	<div>
		<Burger />
	</div>
</div>
<div class=" h-screen bg-color2 pt-12">
	<div class="grid grid-rows-1">
		<h2 class="text-white text-center text-4xl font-semibold pb-8">Sobre Mi</h2>
		<div class="grid grid-cols-1 justify-items-center pl-4 space-y-4">
			<div>
				<p class="text-white">
					Soy Wilfredo Sevilla estudiante y desarrollador frontend Jr.<br/>
					Apasionado por la tecnologia y siempre dispuesto a afrontar nuevos retos para mejorar personal
					y profesionalmente.
				</p>
			</div>
			<div>
				<ul class="text-white">
					<li>Nombre: Wilfredo Sevilla</li>
					<li>Correo: sevillawil8@gmail.com</li>
					<li>Edad: 23</li>
					<li>De: La Lucha, La Tigra, San Carlos, Alajuela, Costa Rica</li>
				</ul>
				<button on:click={curri} class="bg-white rounded-lg p-1 mx-auto flex mt-4 mb-4 font-semibold"
					>Descargar CV</button
				>
			</div>
		</div>
		<hr class="divide-y divide-solid color-white" />
		<div>
			<h2 class="text-white text-center text-4xl font-semibold pb-8 mt-4">Habilidades</h2>
			<div class="grid grid-cols-1 justify-items-center ">
				<div class="text-white">
				<p>Resolucion de problemas</p>
				<p>Facilidad de adaptacion</p>
				<p>Trabajo en equipo</p>
				<p>Responsabilidad</p>
				<p>Capacidad de analisis</p>
				</div>
			</div>
	
		</div>
	</div>
</div>
