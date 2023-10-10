<script>
  import BorderedLink from './BorderedLink.svelte';
  export let selected = 'coding';
</script>

<div class="name:nav absolute left-0 z-10 h-screen w-1/5 pl-10">
  <nav class="flex h-screen flex-col items-start justify-around">
    <BorderedLink title={'Coding'} value={'coding'} bind:selected />
    <BorderedLink title={'Music'} value={'music'} bind:selected />
    <BorderedLink title={'Gaming'} value={'gaming'} bind:selected />
  </nav>
</div>
