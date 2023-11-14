<script>
  import BorderedLink from './BorderedLink.svelte';
  export let selected = 'home';
</script>

<nav
  class="name:nav flex w-screen items-center justify-around px-4 text-xl font-light text-black dark:text-white sm:mx-2 sm:h-screen sm:w-1/5 sm:flex-col sm:items-start lg:absolute lg:left-0 lg:z-10 lg:px-4"
>
  <BorderedLink title={'Coding'} value={'coding'} bind:selected />
  <BorderedLink title={'Music'} value={'music'} bind:selected />
  <BorderedLink title={'Gaming'} value={'gaming'} bind:selected />
  <BorderedLink title={'Blog'} value={'blog'} bind:selected />
</nav>
