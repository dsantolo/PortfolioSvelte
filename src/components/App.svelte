<script lang="ts">
  import MainBackground from './MainBackground.svelte';
  import { onMount } from 'svelte';

  let open = false;
  let topPanel: HTMLElement;

  // Set state and chain animations for panels opening:
  function openPanels() {
    open = true;
    setTimeout(() => {
      topPanel?.classList.remove('z-10');
    }, 1000);
  }

  function closePanels() {
    open = false;
  }

  onMount(() => {
    window.addEventListener('keyup', e => {
      if (e.key === 'Escape') {
        closePanels();
      }
    });
    window.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        openPanels();
      }
    });
    window.addEventListener('click', () => {
      openPanels();
    });
  });
</script>

<main class="grid h-auto w-screen grid-cols-1 grid-rows-1 overflow-x-hidden">
  <MainBackground {open} />
  <div
    class="main-foreground top-0 col-span-1 col-start-1 row-span-1 row-start-1 m-0 flex h-screen w-screen flex-col items-center justify-center"
  >
    <div
      class={`name-container text-5xl ${
        !open ? 'animate-fade duration-500 animate-once animate-ease-in' : ''
      }`}
      class:open
      bind:this={topPanel}
    />
    <NameContainer {open} />
    <div
      class={`bottom-panel relative h-[47.5vh] w-screen border-t-2 border-solid border-gray-500 bg-black transition-transform ${
        open ? 'translate-x-[100vw] duration-1000 ease-linear' : ''
      }`}
      class:open
    />
  </div>
  <MainBackground {open} />
</main>

<style>
  main {
    height: 100vh;
    width: 100vw;
    background: transparent;
  }
  .main-foreground {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    font-family: SF Mono;
    top: 0;
    margin: 0;
    background: transparent;
  }
  .name-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 100vw;
    background: transparent;
    color: black;
    margin: 0;
  }
  .name-container:hover {
    background: radial-gradient(gray 0%, black 75%);
    animation:
      1s ease-in-out name-fadein forwards,
      1s ease-in-out gradient-pulse infinite;
  }
  .name-container.open {
    animation: fadeout 0.5s forwards;
  }
  .top-panel {
    position: relative;
    height: 55vh;
    width: 100%;
    border-bottom: solid 2px gray;
    background-color: black;
    transition: transform 1s ease-out;
  }
  .top-panel.open {
    transform: translateY(-55vh);
  }
  /* .top-panel.closing {
    transform: translateY(-100vh);
    transition: transform 2s ease-in;
  } */
  .bottom-panel {
    position: relative;
    height: 55vh;
    width: 100%;
    border-top: solid 2px gray;
    background-color: black;
    transition: transform 1s ease-out;
  }
  .bottom-panel.open {
    transform: translateY(55vh);
  }

  .name {
    font-family: Optima;
    font-style: italic;
    font-weight: 400;
  }

  /* Animations */
  @keyframes fadeout {
    from {
      visibility: visible;
      opacity: 1;
    }
    to {
      visibility: hidden;
      opacity: 0;
    }
  }
  @keyframes name-fadein {
    0% {
      opacity: 0;
    }
    50% {
      color: white;
    }
    100% {
      opacity: 1;
      color: black;
    }
  }
</style>
