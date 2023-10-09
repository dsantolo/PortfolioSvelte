<script lang="ts">
  import { onMount } from 'svelte';
  export let title = 'Title';
  export let value = 'coding';
  export let selected = 'coding';

  let hovered = false;
  let borderedLinkEl: HTMLElement;

  function setSelected(value: string) {
    selected = value;
  }

  onMount(() => {
    borderedLinkEl?.addEventListener('mouseover', () => {
      hovered = true;
    });
    borderedLinkEl?.addEventListener('mouseout', () => {
      hovered = false;
    });
  });
</script>

<button
  class="bordered-link flex h-auto w-10
  flex-col justify-around"
  bind:this={borderedLinkEl}
  on:click={() => setSelected(value)}
>
  <div class="link-wrapper" class:hovered />
  <span class="py-4 font-sans text-xl hover:animate-pulse">{title}</span>
  <div class="link-wrapper" class:hovered />
</button>

<style>
  .link-wrapper {
    width: 1vw;
    height: 5px;
  }

  .hovered {
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0) 25%
    );
    animation: 1s ease-in extend-x forwards;
    transform-origin: left;
    text-decoration: bold;
  }

  @keyframes extend-x {
    0% {
      transform: scaleX(1);
      background-position: 0%;
    }

    100% {
      transform: scaleX(100);
      background-position: 100%;
    }
  }
</style>
