<script>
  import MainBackground from './MainBackground.svelte';
  import { onMount } from 'svelte';

  let open = false;

  function openPanels() {
    open = true;
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
  });
</script>

<main>
  <div class="main-foreground">
    <div class="top-panel" class:open />
    <div
      class="name-container text-5xl"
      class:open
      on:click={openPanels}
      on:keydown={openPanels}
      role="button"
      tabindex="0"
    >
      <h1 class="name">Derek Santolo</h1>
    </div>
    <div class="bottom-panel" class:open />
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
