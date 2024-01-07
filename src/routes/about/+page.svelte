<script>
	import Burger from '../nav/+page.svelte';
	function curri() {
		window.open(
			'https://drive.google.com/file/d/1ekc354siO8sjrHZDnb3RAhN3qdjs0RgI/view?usp=sharing'
		);
	}
</script>

<div class=" lg:hidden">
	<div>
		<Burger />
	</div>
</div>
<div class=" h-screen bg-color2 pt-12">
	<div class="grid grid-rows-1">
		<h2 class="text-white text-center text-4xl font-semibold pb-8">About</h2>
		<div class="grid grid-cols-1 justify-items-center pl-4 space-y-4">
			<div>
				<p class="text-white">
					With over two years of experience in the field of Information Technology, I have focused
					on technical support and Helpdesk, providing effective solutions to users' technological
					issues. Additionally, I possess solid knowledge in Microsoft Azure, having completed a
					preparation course for the AZ-104 certification. Furthermore, I have programming
					knowledge, with experience in JavaScript and Python. This enables me to better understand
					technical challenges and devise creative and efficient solutions. I am passionate about
					staying updated on the latest technological trends and am open to exciting collaborations
					and challenges.
				</p>
			</div>
			<!-- <div>
				<ul class="text-white">
					<li>Nombre: Wilfredo Sevilla</li>
					<li>Correo: sevillawil8@gmail.com</li>
					<li>Edad: 23</li>
					<li>De: La Lucha, La Tigra, San Carlos, Alajuela, Costa Rica</li>
				</ul>
				<button
					on:click={curri}
					class="bg-white rounded-lg p-1 mx-auto flex mt-4 mb-4 font-semibold">Descargar CV</button
				>
			</div> -->
		</div>
		<hr class="divide-y divide-solid color-white" />
		<div class="pb-24">
			<h2 class="text-white text-center text-4xl font-semibold pb-8 mt-4">Skills</h2>
			<div class="grid grid-cols-1 justify-items-center ">
				<div class="text-white">
					<p>Problem-solving</p>
					<p>Adaptability</p>
					<p>Teamwork</p>
					<p>Responsibility</p>
					<p>Analytical Skills</p>
				</div>
			</div>
		</div>

	</div>

	<div class="sm:pl-96 sm:pr-96 ">
		<div class="max-w-full  bg-slate-500 p-6 rounded-md shadow-md ">
			<h2 class="text-2xl font-semibold mb-4 text-white">Give me a touch</h2>

			<!-- Formulario -->
			<form action="#" method="POST">
				<!-- Nombre -->
				<div class="mb-4">
					<label for="nombre" class="block text-sm font-medium text-white">Name</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						class="mt-1 p-2 w-full border rounded-md"
					/>
				</div>

				<!-- Teléfono -->
				<div class="mb-4">
					<label for="telefono" class="block text-sm font-medium text-white">Phone</label>
					<input
						type="tel"
						id="telefono"
						name="telefono"
						class="mt-1 p-2 w-full border rounded-md"
					/>
				</div>

				<!-- Correo -->
				<div class="mb-4">
					<label for="correo" class="block text-sm font-medium text-white">Email</label>
					<input
						type="email"
						id="correo"
						name="correo"
						class="mt-1 p-2 w-full border rounded-md"
					/>
				</div>

				<!-- Mensaje -->
				<div class="mb-6">
					<label for="mensaje" class="block text-sm font-medium text-white">Message</label>
					<textarea
						id="mensaje"
						name="mensaje"
						rows="4"
						class="mt-1 p-2 w-full border rounded-md"
					/>
				</div>

				<!-- Botón de Enviar -->
				<div>
					<button
						type="submit"
						class="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-400">Send</button
					>
				</div>
			</form>
		</div>
	</div>
</div>
