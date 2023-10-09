<script lang="ts">
  import { onMount } from 'svelte';
  import Nav from './Nav.svelte';

  const copyData = {
    coding:
      'Hello! My name is Derek and I currently work on apple.com as a front-end engineer. You can reach me at...',
    music:
      "I'm a lifelong musician who mainly listens to punk and metal music. I currently don't have a way to play drums regularly (looking for one!), but I've taken this as an opportunity to really focus and improve on guitar. Here are some recent covers I've been working on...Coming soon!",
    gaming: 'Currently Playing: Lies of P, FFXVI, Counter-Strike 2',
  };
  const openWind =
    'animate-fade animate-once animate-duration-500 animate-ease-in';
  let closeWind =
    'animate-fadeout animate-once animate-duration-500 animate-ease-in';

  // import myImage from "/me.jpeg";
  export let open: boolean;
  let openedOnce = false;
  let selected: keyof typeof copyData = 'coding';
  let contentWind = '';
  $: copy = copyData[selected];
  $: if (openedOnce) {
    contentWind = open ? openWind : closeWind;
  } else if (open) {
    openedOnce = true;
  }
</script>

<div class="main-background bg h-screen w-screen">
  <div class={contentWind} class:opacity-0={!openedOnce}>
    <Nav bind:selected />
    <div
      class="flex h-screen flex-col items-center justify-center transition duration-1000"
    >
      <div><img alt="Derek" /></div>
      <p class="w-3/5 p-4 text-center text-gray-800 sm:px-10">
        {copy}
      </p>
    </div>
  </div>
</div>

<style>
  .main-background {
    background: linear-gradient(
      45deg,
      silver 0%,
      gray 25%,
      silver 75%,
      red 100%
    );
    background-size: 400% 100%;
    animation: 10s ease infinite gradient-flow;
  }

  @keyframes gradient-flow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
