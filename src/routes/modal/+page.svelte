<script context="module" lang="ts">
	let onTop: null; //keeping track of which open modal is on top
	const modals = {}; //all modals get registered here for easy future access

	// 	returns an object for the modal specified by `id`, which contains the API functions (`open` and `close` )
	export function getModal(id = '') {
		return modals[id];
	}
</script>

<script lang="ts">
	import { onDestroy } from 'svelte';

	let topDiv;
	let visible = false;
	let prevOnTop;
	let closeCallback;

	export let id = '';

	function keyPress(ev) {
		//only respond if the current modal is the top one
		if (ev.key == 'Escape' && onTop == topDiv) close(); //ESC
	}

	/**  API **/
	function open(callback) {
		closeCallback = callback;
		if (visible) return;
		prevOnTop = onTop;
		onTop = topDiv;
		window.addEventListener('keydown', keyPress);

		//this prevents scrolling of the main window on larger screens
		document.body.style.overflow = 'hidden';

		visible = true;
		//Move the modal in the DOM to be the last child of <BODY> so that it can be on top of everything
		document.body.appendChild(topDiv);
	}

	function close(retVal) {
		if (!visible) return;
		window.removeEventListener('keydown', keyPress);
		onTop = prevOnTop;
		if (onTop == null) document.body.style.overflow = '';
		visible = false;
		if (closeCallback) closeCallback(retVal);
	}

	//expose the API
	modals[id] = { open, close };

	onDestroy(() => {
		delete modals[id];
		window.removeEventListener('keydown', keyPress);
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="topModal" class:visible bind:this={topDiv} on:click={() => close()}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div id="modal" on:click|stopPropagation={() => {}}>
		<div id="modal-content">
			<div>
                <div class="text-center font-semibold text-white">
                    <p>WebSite Downtown Hotel La Fortuna</p>
                    <p>
                        Siguiendo el diseño proporcionado se creo el frontend utilizando HTML, JavaScript y
                        Tailwind CSS
                    </p>
                </div>

                <div class="bg-down h-96 w-96 bg-cover m-3 mx-auto rounded-md"></div>
				<div class="flex space-x-4 justify-center">
					<div class="w-8">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
							<path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
							<path fill="#ef652a" d="M226 472l149-41 35-394H226" />
							<path
								fill="#ecedee"
								d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
							/>
							<path
								fill="#fff"
								d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
							/>
						</svg>
					</div>

					<div class="w-64">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 64"
							><defs
								><linearGradient id="logosTailwindcss0" x1="-2.778%" x2="100%" y1="32%" y2="67.556%"
									><stop offset="0%" stop-color="#2298BD" /><stop
										offset="100%"
										stop-color="#0ED7B5"
									/></linearGradient
								></defs
							><path
								fill="url(#logosTailwindcss0)"
								d="M52.867 0c-14.098 0-22.91 7.049-26.434 21.147c5.287-7.05 11.455-9.693 18.504-7.93c4.021 1.005 6.896 3.923 10.078 7.153c5.183 5.26 11.182 11.35 24.285 11.35c14.098 0 22.909-7.049 26.433-21.147c-5.286 7.05-11.454 9.693-18.503 7.93c-4.022-1.005-6.896-3.923-10.078-7.153C71.968 6.09 65.97 0 52.867 0ZM26.433 31.72C12.336 31.72 3.524 38.769 0 52.867c5.287-7.05 11.454-9.693 18.503-7.93c4.022 1.005 6.897 3.923 10.078 7.152c5.184 5.262 11.183 11.35 24.286 11.35c14.097 0 22.908-7.048 26.433-21.146c-5.287 7.05-11.455 9.693-18.503 7.93c-4.022-1.005-6.897-3.923-10.079-7.153c-5.183-5.26-11.182-11.35-24.285-11.35Z"
							/><path
								fill="#2D3748"
								d="M158.592 26.73h-9.226v17.858c0 4.762 3.125 4.688 9.226 4.39v7.217c-12.351 1.488-17.262-1.934-17.262-11.607V26.731h-6.845v-7.738h6.845V8.999l8.036-2.38v12.374h9.226v7.738Zm35.17-7.737h8.036v37.202h-8.036v-5.357c-2.827 3.944-7.217 6.325-13.02 6.325c-10.12 0-18.528-8.557-18.528-19.569c0-11.086 8.408-19.568 18.527-19.568c5.804 0 10.194 2.38 13.021 6.25v-5.283Zm-11.756 30.506c6.696 0 11.756-4.985 11.756-11.905c0-6.92-5.06-11.905-11.756-11.905c-6.696 0-11.756 4.985-11.756 11.905c0 6.92 5.06 11.905 11.756 11.905Zm33.185-36.087c-2.828 0-5.134-2.38-5.134-5.133a5.144 5.144 0 0 1 5.134-5.134a5.144 5.144 0 0 1 5.134 5.134c0 2.753-2.307 5.133-5.134 5.133Zm-4.018 42.783V18.993h8.035v37.202h-8.035Zm17.336 0V1.88h8.036v54.315h-8.036Zm60.194-37.202h8.482l-11.682 37.202h-7.887l-7.738-25.074l-7.812 25.074h-7.887l-11.682-37.202h8.482l7.218 25.67l7.812-25.67h7.664l7.738 25.67l7.292-25.67Zm18.452-5.58c-2.827 0-5.134-2.381-5.134-5.134a5.144 5.144 0 0 1 5.134-5.134a5.144 5.144 0 0 1 5.134 5.134c0 2.753-2.307 5.133-5.134 5.133Zm-4.018 42.782V18.993h8.036v37.202h-8.036Zm36.905-38.17c8.333 0 14.286 5.655 14.286 15.328v22.842h-8.036V34.171c0-5.654-3.274-8.63-8.333-8.63c-5.283 0-9.45 3.124-9.45 10.714v19.94h-8.036V18.993h8.036v4.762c2.456-3.87 6.473-5.73 11.533-5.73Zm52.381-13.913h8.036v52.083h-8.036v-5.357c-2.827 3.944-7.217 6.325-13.02 6.325c-10.12 0-18.528-8.557-18.528-19.569c0-11.086 8.408-19.568 18.527-19.568c5.804 0 10.194 2.38 13.021 6.25V4.112Zm-11.756 45.387c6.696 0 11.756-4.985 11.756-11.905c0-6.92-5.06-11.905-11.756-11.905c-6.696 0-11.756 4.985-11.756 11.905c0 6.92 5.06 11.905 11.756 11.905Zm46.726 7.664c-11.235 0-19.643-8.557-19.643-19.569c0-11.086 8.408-19.568 19.643-19.568c7.292 0 13.616 3.794 16.593 9.598l-6.92 4.018c-1.637-3.497-5.283-5.73-9.747-5.73c-6.548 0-11.533 4.986-11.533 11.682c0 6.696 4.985 11.682 11.533 11.682c4.464 0 8.11-2.307 9.896-5.73l6.92 3.944c-3.126 5.878-9.45 9.673-16.742 9.673Zm29.985-27.902c0 6.77 20.015 2.678 20.015 16.443c0 7.44-6.473 11.459-14.509 11.459c-7.44 0-12.797-3.349-15.178-8.706l6.92-4.018c1.19 3.349 4.166 5.357 8.258 5.357c3.572 0 6.325-1.19 6.325-4.166c0-6.622-20.015-2.902-20.015-16.22c0-6.995 6.027-11.384 13.616-11.384c6.101 0 11.16 2.827 13.765 7.738l-6.77 3.794c-1.34-2.901-3.944-4.24-6.995-4.24c-2.902 0-5.432 1.264-5.432 3.943Zm34.301 0c0 6.77 20.015 2.678 20.015 16.443c0 7.44-6.473 11.459-14.509 11.459c-7.44 0-12.798-3.349-15.179-8.706l6.92-4.018c1.19 3.349 4.167 5.357 8.259 5.357c3.571 0 6.324-1.19 6.324-4.166c0-6.622-20.014-2.902-20.014-16.22c0-6.995 6.026-11.384 13.616-11.384c6.1 0 11.16 2.827 13.765 7.738l-6.771 3.794c-1.34-2.901-3.944-4.24-6.994-4.24c-2.902 0-5.432 1.264-5.432 3.943Z"
							/></svg
						>
					</div>
					<div class="w-8">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
							<rect width="630" height="630" fill="#f7df1e" />
							<path
								d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
							/>
						</svg>
					</div>
					<div />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#topModal {
		visibility: hidden;
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #4448;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#modal {
		position: relative;
		border-radius: 6px;
		background: #585858;
		
		filter: drop-shadow(5px 5px 5px #555);
		padding: 1em;
	}

	.visible {
		visibility: visible !important;
	}

	#close {
		position: absolute;
		top: -12px;
		right: -12px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		fill: #f44;
		transition: transform 0.3s;
	}

	#close:hover {
		transform: scale(2);
	}

	#close line {
		stroke: #fff;
		stroke-width: 2;
	}
	#modal-content {
		max-width: calc(100vw - 20px);
		max-height: calc(100vh - 20px);
		overflow: auto;
	}
</style>
