<script lang="ts">
  import Nav from './Nav.svelte';

  interface CopyData {
    home: string;
    music: string;
  }

  const copyDataObj: CopyData = {
    home: 'Hello! My name is Derek and I currently work on apple.com as a front-end engineer. You can reach me at...',
    music:
      "I'm a lifelong musician who mainly listens to punk and metal music. I currently don't have a way to play drums regularly (looking for one!), but I've taken this as an opportunity to really focus and improve on guitar. Here are some recent covers I've been working on...Coming soon!",
  };

  // import myImage from "/me.jpeg";
  export let open: boolean;
  let selected: keyof CopyData = 'home';
  $: copy = copyDataObj[selected];
</script>

<div class="main-background">
  {#if open}
    <div class="content-wrapper" class:underground={!open}>
      <Nav />
      <div class="content" class:hidden={!open}>
        <div class="image-container"><img alt="Derek" /></div>
        <p class="copy">{copy}</p>
      </div>
    </div>
  {/if}
</div>

<style>
  .main-background {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-around;
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    justify-content: flex-start;
    background: linear-gradient(
      45deg,
      silver 0%,
      gray 25%,
      silver 75%,
      red 100%
    );
    background-size: 400% 100%;
    animation: 10s ease infinite gradient-flow;
    transition: visibility 2s;
  }
  .content-wrapper {
    display: flex;
    width: 100vw;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: 0 auto 0 auto;
  }
  .copy {
    width: 50vh;
    text-align: center;
    font-family: Optima;
    font-weight: 500;
  }
  .hidden {
    visibility: hidden;
  }
  .underground {
    z-index: -1;
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
