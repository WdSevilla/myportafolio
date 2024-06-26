<script>
  import { onMount } from 'svelte';

  let title = '';
  let subtitle = '';
  const text = 'Bienvenido a mi portafolio';
  const text2 = 'Soy desarrollador web';
  let index = 0;
  let index2 = 0;
  let isTitleComplete = false;

  function typeEffect() {
    if (index < text.length) {
      title += text.charAt(index);
      index++;
      requestAnimationFrame(() => setTimeout(typeEffect, 50)); // Divide la tarea en partes más pequeñas
    } else {
      isTitleComplete = true;
      setTimeout(() => requestAnimationFrame(typeEffect2), 500); // Espera 500ms antes de iniciar el segundo efecto de escritura
    }
  }

  function typeEffect2() {
    if (index2 < text2.length) {
      subtitle += text2.charAt(index2);
      index2++;
      requestAnimationFrame(() => setTimeout(typeEffect2, 50)); // Divide la tarea en partes más pequeñas
    }
  }

  onMount(() => {
    requestAnimationFrame(typeEffect);
  });
</script>

<style>
  #typing-title {
    font-family: 'Courier New', Courier, monospace;
    white-space: nowrap;
    overflow: hidden;
  }

  #typing-title.complete::after {
    content: '';
  }

  #typing-title:not(.complete)::after {
    content: '|';
    animation: blink 0.7s steps(2, start) infinite;
    display: inline-block;
    margin-left: 2px;
  }

  #typing-subtitle {
    font-family: 'Courier New', Courier, monospace;
    white-space: nowrap;
    overflow: hidden;
  }

  .cursor-blink::after {
    content: '|';
    animation: blink 0.7s steps(2, start) infinite;
    display: inline-block;
    margin-left: 2px;
  }

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    50.01%, 100% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    #typing-title, #typing-subtitle {
      font-size: 1.5em;
    }
  }
</style>

<div class="bg-back bg-cover pt-[60%] lg:pt-[24%] h-screen">
  <div class="grid items-center justify-center">
    <h1 id="typing-title" class="text-white text-xl pb-6 lg:text-7xl {isTitleComplete ? 'complete' : ''}">{title}</h1>
    <p id="typing-subtitle" class="text-white text-lg lg:text-3xl text-center {isTitleComplete ? 'cursor-blink' : ''}">{subtitle}</p>
  </div>
</div>
