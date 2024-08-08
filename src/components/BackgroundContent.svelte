<script lang="ts">
  import { fade } from 'svelte/transition';
  import Nav from './Nav.svelte';
  import image from '$lib/assets/me.png';
  import li_logo from '$lib/assets/li-logo.png';
  import github_logo from '$lib/assets/github_logo.png';

  const copyData = {
    coding:
      "Hello! I'm Derek, a software engineer who also loves music and gaming. I've most recently worked on apple.com as a frontend engineer. You can reach me at...",
    music:
      "I'm a lifelong musician who mainly listens to punk and metal music. I currently don't have a way to play drums regularly (looking for one!), but I've taken this as an opportunity to really focus and improve on guitar. Here are some recent covers I've been working on...Coming soon!",
    gaming: 'Currently Playing: Lies of P (Mac), Counter-Strike 2 (PC)',
    blog: 'Blog posts. Coming soon.',
  };

  export let openedOnce = false;
  export let open = false;

  let selected: keyof typeof copyData = 'coding';
  $: copy = copyData[selected];
</script>

<div
  class="name:background-content flex w-screen animate-fade flex-col justify-center animate-duration-1000 animate-once animate-ease-in sm:flex-row"
  class:opacity-0={!openedOnce}
  class:animate-none={!openedOnce}
  class:animate-reverse={!open}
>
  <Nav bind:selected />
  <div
    class={`flex h-auto w-full flex-col items-center justify-center transition duration-1000 sm:min-h-[100vh] lg:z-0 lg:max-w-5xl`}
  >
    <div class="flex h-1/2 w-48 flex-col justify-center py-8">
      <img class="rounded-xl object-scale-down outline outline-stone-500" alt="Derek" src={image} />
    </div>
    {#key selected}
      <div
        class={`name:lower-content h-1/2 w-full animate-fade flex-col items-center justify-center animate-duration-500 animate-once animate-ease-in sm:max-w-screen-sm`}
      >
        <p class="text-center text-xl text-gray-800">
          {copy}
        </p>
        <div class="mx-auto flex flex-col items-center justify-around sm:mt-40 sm:flex-row">
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
            <a href="https://www.github.com/derekdude" target="_blank" tabindex="0" transition:fade>
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
</div>
