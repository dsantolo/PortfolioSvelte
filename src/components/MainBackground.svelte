<script lang="ts">
  import BackgroundContent from './BackgroundContent.svelte';
  export let open: boolean;

  let openedOnce = false;
  $: if (open) {
    openedOnce = true;
  }
</script>

<div
  class={`name:main-background col-span-1 col-start-1 row-span-1 row-start-1
     bg-gradient-to-br from-slate-700 from-0% via-gray-300 via-50% to-red-700 to-95% bg-cover dark:from-black dark:via-slate-700 dark:via-10% dark:to-white dark:to-95%`}
>
  {#key open}
    <BackgroundContent {openedOnce} {open} />
  {/key}
</div>
