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

<main class="grid h-auto w-screen grid-cols-1 grid-rows-1">
  <MainBackground {open} />
  <div
    class="main-foreground top-0 col-span-1 col-start-1 row-span-1 row-start-1 m-0 flex h-screen w-screen flex-col items-center justify-center"
  >
    <div
      class={`top-panel relative h-[47.5vh] w-screen border-b-2 border-solid border-gray-500 bg-black transition-transform ${
        open ? 'translate-x-[-100vw] duration-1000 ease-linear' : ''
      }`}
      class:open
    />
    <NameContainer {open} />
    <div
      class={`bottom-panel relative h-[47.5vh] w-screen border-t-2 border-solid border-gray-500 bg-black transition-transform ${
        open ? 'translate-x-[100vw] duration-1000 ease-linear' : ''
      }`}
      class:open
    />
  </div>
</main>
