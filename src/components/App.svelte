<script lang="ts">
  import cn from 'classnames';
  import MainBackground from './MainBackground.svelte';
  import NameContainer from './NameContainer.svelte';
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

<main
  class={cn(
    'grid h-auto  w-screen grid-cols-1 grid-rows-1 overflow-hidden ',
    { '-z-10': open },
    { 'max-h-screen md:max-h-none': !open },
  )}
>
  <MainBackground {open} />
  <div
    class="main-foreground top-0 col-span-1 col-start-1 row-span-1 row-start-1 m-0 flex h-screen w-screen flex-col items-center justify-center"
  >
    <div
      class={cn(
        'top-panel relative h-[47.5vh] w-screen border-b-2 border-solid border-gray-500 bg-black transition-transform',
        {
          'translate-x-[-100vw] duration-1000 ease-linear': open,
        },
      )}
      class:open
      bind:this={topPanel}
    />
    <NameContainer {open} />
    <div
      class={cn(
        'bottom-panel relative h-[47.5vh] w-screen border-t-2 border-solid border-gray-500 bg-black transition-transform',
        { 'translate-x-[100vw] duration-1000 ease-linear': open },
      )}
      class:open
    />
  </div>
</main>
