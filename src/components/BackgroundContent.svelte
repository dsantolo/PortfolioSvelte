<script lang="ts">
  import Nav from './Nav.svelte';

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
  class="animate-fade animate-duration-500 animate-once animate-ease-in"
  class:opacity-0={!openedOnce}
  class:animate-none={!openedOnce}
  class:animate-reverse={!open}
>
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
