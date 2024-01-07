<script>
	import Burger from '../nav/+page.svelte';
</script>

<div class=" lg:hidden">
	<div>
		<Burger />
	</div>
</div>
<div class=" lg:h-screen bg-color2 pt-12 h-screen">
	<div class="grid grid-rows-1 mt-2">
		<h2 class="text-white text-center text-4xl font-semibold pb-8">Tecnologias</h2>
		<div class="mx-auto">
			<div class="sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-14">
				<div>
					<div>
						<p class="w-96 text-white">HTML</p>
						<div class="w-full bg-gray-200 h-3 rounded-lg">
							<div class="bg-green-400 h-3 rounded-lg" style="width: 95%" />
						</div>
					</div>
					<div>
						<div>
							<p class="w-96 text-white">CSS</p>
							<div class="w-full bg-gray-200 h-3 rounded-lg">
								<div class="bg-green-400 h-3 rounded-lg" style="width: 90%" />
							</div>
						</div>
					</div>
				</div>
				<div>
					<div>
						<p class="w-96 text-white">JavaScript</p>
						<div class="w-full bg-gray-200 h-3 rounded-lg">
							<div class="bg-green-400 h-3 rounded-lg" style="width: 85%" />
						</div>
					</div>
					<div>
						<p class="w-96 text-white">Tailwind CSS</p>
						<div class="w-full bg-gray-200 h-3 rounded-lg">
							<div class="bg-green-400 h-3 rounded-lg" style="width: 90%" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mx-auto pb-5">
			<p class="w-96 text-white">Svelte</p>
			<div class="w-full bg-gray-200 h-3 rounded-lg">
				<div class="bg-green-400 h-3 rounded-lg" style="width: 75%" />
			</div>
		</div>
		<hr class="divide-y divide-solid color-white" />
		<div>
			<h2 class="text-white text-center text-4xl font-semibold pb-8 mt-4">Otras Tecnologias</h2>
			<img class="flex mx-auto mb-2" src="https://i.ibb.co/DVpc6XJ/IMG-DB-AZURE.png" alt="" />
		</div>
	</div>
</div>
