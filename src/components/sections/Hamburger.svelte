<script>
  import { fly } from "svelte/transition";
  let menuOpen = false;

  export let active;
  $: isActive = str => (active === str ? "selected" : "");

  let isMenuOpen = () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  };
</script>

<style>
  .menu {
    width: 100%;
    background: white;
    position: absolute;
    top: 0;
    z-index: 1;
    right: 0;
    height: 100%;
    padding-top: 54px;
    text-align: center;
  }

  a {
    display: block;
    text-decoration: none;
  }

  button {
    position: relative;
    z-index: 2;
    background: none;
    border: none;
  }

  button svg {
    fill: #3d3b37;
  }

  .sr-only {
    height: 1px;
    overflow: hidden;
    position: absolute;
    width: 1px;
  }
</style>

<button aria-haspopup="true" on:click={isMenuOpen}>
  {#if !menuOpen}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
    <span class="sr-only">Click to open navbar</span>
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false">
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12
        13.41 17.59 19 19 17.59 13.41 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  {/if}
</button>

{#if menuOpen}
  <div class="menu" transition:fly={{ x: 200, duration: 2000 }}>
    <a class={isActive('buy')} href="/buy" on:click={isMenuOpen}>Buy a Mask</a>
    <a class={isActive('make')} href="/make" on:click={isMenuOpen}>
      Make a Mask
    </a>
    <a class={isActive('donate')} href="/donate" on:click={isMenuOpen}>
      Donate a Mask
    </a>
  </div>
{/if}
