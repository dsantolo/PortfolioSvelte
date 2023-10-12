<script lang="ts">
  import { fade } from 'svelte/transition';
  import Nav from './Nav.svelte';
  import image from '$lib/assets/me.png';
  import li_logo from '$lib/assets/li-logo.png';
  import github_logo from '$lib/assets/github_logo.png';

  const copyData = {
    coding:
      'Hello! My name is Derek and I currently work on apple.com as a front-end engineer. You can reach me at...',
    music:
      "I'm a lifelong musician who mainly listens to punk and metal music. I currently don't have a way to play drums regularly (looking for one!), but I've taken this as an opportunity to really focus and improve on guitar. Here are some recent covers I've been working on...Coming soon!",
    gaming: 'Currently Playing: Lies of P, FFXVI, Counter-Strike 2',
  };

  export let openedOnce = false;
  export let open = false;

  let selected: keyof typeof copyData = 'coding';
  $: copy = copyData[selected];
</script>

<div
  class="flex w-screen animate-fade flex-col justify-center animate-duration-500 animate-once animate-ease-in sm:flex-row"
  class:opacity-0={!openedOnce}
  class:animate-none={!openedOnce}
  class:animate-reverse={!open}
>
  <Nav bind:selected />
  {#key selected}
    <div
      class={`flex h-screen w-full animate-fade flex-col items-center justify-center transition duration-1000 animate-duration-500 animate-once animate-ease-in sm:w-3/5 lg:z-0 lg:w-screen`}
    >
      <div class="h-34 w-28 flex-grow-0 pb-10">
        <img
          class="rounded-xl object-scale-down outline outline-stone-500"
          alt="Derek"
          src={image}
        />
      </div>
      <p class="p-4 text-center text-gray-800 sm:p-1 sm:px-10 lg:w-3/5">
        {copy}
      </p>
      <div
        class="mx-auto flex w-full flex-col items-center justify-around sm:mt-40 sm:flex-row"
      >
        {#if selected === 'coding'}
          <a
            href="https://www.linkedin.com/in/dereksantolo"
            target="_blank"
            tabindex="0"
            transition:fade
          >
            <img
              class="h-40 w-40 rounded-xl object-scale-down"
              alt="LinkedIn logo"
              src={li_logo}
            />
          </a>
          <a
            href="https://www.github.com/derekdude"
            target="_blank"
            tabindex="0"
            transition:fade
          >
            <img
              class="h-40 w-40 rounded-xl object-scale-down"
              alt="GitHub logo"
              src={github_logo}
            />
          </a>
        {/if}
      </div>
    </div>
  {/key}
</div>
