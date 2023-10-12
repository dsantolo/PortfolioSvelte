<script lang="ts">
  import LinkBorder from './LinkBorder.svelte';

  export let title = 'Title';
  export let value = 'coding';
  export let selected = 'coding';

  function setSelected(value: string) {
    selected = value;
  }
</script>

<button
  class="bordered-link group flex h-auto w-full
  flex-col items-center justify-center md:items-start"
  on:click={() => setSelected(value)}
>
  <LinkBorder />
  <span
    class="transform py-4 font-sans text-xl group-hover:animate-pulse lg:text-3xl"
    >{title}
  </span>
  <LinkBorder />
</button>

<style>
</style>
