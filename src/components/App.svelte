<script>
  import MainBackground from './MainBackground.svelte';
  import NameContainer from './NameContainer.svelte';
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
    window.addEventListener('click', () => {
      openPanels();
    });
  });
</script>

<main>
  <div
    class="main-foreground absolute top-0 m-0 flex h-screen w-screen flex-col items-center justify-center"
    class:z-10={!open}
  >
    <div
      class="top-panel relative h-[55vh] w-screen border-b-2 border-solid border-gray-500 bg-black"
      class:open
    />
    <NameContainer {open} />
    <div
      class="bottom-panel relative h-[55vh] w-screen border-t-2 border-solid border-gray-500 bg-black"
      class:open
    />
  </div>
  <MainBackground {open} />
</main>

<style>
  .top-panel {
    transition: transform 1s ease-out;
  }
  .top-panel.open {
    transform: translateX(-100vw);
  }
  .bottom-panel {
    transition: transform 1s ease-out;
  }
  .bottom-panel.open {
    transform: translateX(100vw);
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
</style>
