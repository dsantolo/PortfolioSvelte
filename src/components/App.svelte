<script>
  let open = false;

  let copy =
    "Hello! My name is Derek and I currently work on apple.com as a front-end engineer. You can reach me at...";

  function openPanels() {
    open = true;
    console.log("open panels");
  }
</script>

<main>
  <div class="main-foreground">
    <div class="top-panel" class:open={open === true} />
    <h1
      class="name"
      class:open={open === true}
      on:click={openPanels}
      on:keydown={openPanels}
    >
      Derek Santolo
    </h1>
    <div class="bottom-panel" class:open={open === true} />
  </div>
  <div class="main-background">
    <p class="main-background-copy" class:hidden={open === false}>{copy}</p>
  </div>
</main>

<style>
  main {
    height: 100vh;
    width: 100vw;
    background: transparent;
  }
  .main-background {
    display: flex;
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      45deg,
      silver 0%,
      gray 25%,
      silver 75%,
      red 100%
    );
    background-size: 400% 100%;
    animation: 10s ease infinite gradient-flow;
    z-index: -1;
    transition: visibility 2s;
  }
  .main-background-copy {
    width: 50vh;
    text-align: center;
    font-family: Optima;
    font-weight: 500;
  }
  .main-foreground {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    font-family: SF Mono;
    top: 0;
    margin: 0;
  }
  .name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 100vw;
    background: transparent;
    color: black;
    z-index: 1;
    margin: 0;
    visibility: visible;
    transition: visibility 0.5s;
  }
  .name:hover {
    background: radial-gradient(gray 0%, black 75%);
    animation:
      1s ease-in-out name-fadein forwards,
      1s ease-in-out gradient-pulse infinite;
  }
  .name.open {
    animation: fadeout 0.5s forwards;
    visibility: hidden;
  }
  .top-panel {
    position: relative;
    height: 55vh;
    width: 100%;
    border-bottom: solid 2px gray;
    background-color: black;
  }
  .top-panel.open {
    transform: translateY(-100vh);
    transition: transform 2s ease-in;
  }
  .bottom-panel {
    position: relative;
    height: 55vh;
    width: 100%;
    border-top: solid 2px gray;
    background-color: black;
  }
  .bottom-panel.open {
    transform: translateY(100vh);
    transition: transform 2s ease-in;
  }
  .name {
    font-family: Optima;
    font-style: italic;
    font-weight: 400;
  }
  .hidden {
    visibility: hidden;
  }
  /* Animations */
  @keyframes fadeout {
    from {
      visibility: visible;
      opacity: 1;
    }
    to {
      visibility: hidden;
      opacity: 0;
    }
  }
  @keyframes name-fadein {
    0% {
      opacity: 0;
    }
    50% {
      color: white;
    }
    100% {
      opacity: 1;
      color: black;
    }
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
