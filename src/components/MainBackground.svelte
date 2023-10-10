<script lang="ts">
  import BackgroundContent from './BackgroundContent.svelte';
  export let open: boolean;

  let openedOnce = false;
  $: if (open) {
    openedOnce = true;
  }
</script>

<div class={`main-background h-screen w-screen`}>
  {#key open}
    <BackgroundContent {openedOnce} {open} />
  {/key}
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
    animation: 10s ease gradient-flow infinite;
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
