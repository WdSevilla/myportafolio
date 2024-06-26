<script>
	import Burger from '../nav/+page.svelte';
	import Contacto from '../contacto/+page.svelte';
	import Modal, { getModal } from '../modal/+page.svelte';
	import Modal2, { getModal2 } from '../modal2/+page.svelte';


</script>

<div class=" lg:hidden">
	<div>
		<Burger />
	</div>
</div>
<div class=" bg-color2 pt-12 lg:h-screen h-auto">
	<div class="lg:grid lg:grid-rows-1 lg:mt-2 flex flex-col ">
		<h2 class="text-white text-center text-4xl font-semibold pb-8 mt-4">Works</h2>
		<div class="lg:grid lg:grid-cols-2 lg:gap-20
		 lg:pl-3 lg:pb-3 flex flex-col mx-auto">
			
			<div class="bg-down bg-cover h-96 w-96 grid place-items-center hover:bg-deg ">
				<!-- <button class="bg-blue-500 rounded-md pl-1 pr-1 font-semibold text-white ">Ver mas...</button> -->
				<button class="bg-blue-500 pl-1 pr-1 font-semibold text-white rounded-md " on:click={() => getModal().open()}> Ver mas... </button>
				<Modal>
				</Modal>
			</div>
			<div class="bg-insta bg-cover h-96 w-96 grid  place-items-center mt-4 mb-4 lg:mb-4  lg:mt-0 hover:bg-degins">
				<!-- <button class="bg-blue-500 rounded-md pl-1 pr-1 font-semibold text-white ">Ver mas...</button> -->
				<button class="bg-blue-500 pl-1 pr-1 font-semibold text-white rounded-md " on:click={() => getModal2().open()}> Ver mas... </button>
				<Modal2>
				</Modal2>
			</div>
		</div>
	</div>
</div>
