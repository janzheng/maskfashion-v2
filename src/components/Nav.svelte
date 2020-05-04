<script>
  export let active;
  $: isActive = str => (active === str ? "selected" : "");

  import Hamburger from "./sections/Hamburger.svelte";
</script>

<style type="text/scss">
  
  .Header-section {
    display: flex;
    justify-content: space-between;
    height: 70px;
    padding: 20px 0;

    a {
      text-decoration: none;
    }

    .Logotype {
      font-size: 24px;
    }

    .Menu {
      text-align: right;

      a {
        padding-left: 16px;
      }

      .desktop-links {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    .Header-section {
      .Menu {
        .desktop-links {
          display: inline;
          font-size: 18px;
        }

        .mobile-burger {
          display: none;
        }
      }
    }
  }
</style>

<section class="Header-section">
  <a class="Logotype" href="/">MaskFashion</a>
  <div class="Menu">
    <div class="desktop-links">
      <a class={isActive('buy')} href="/buy">Buy a Mask</a>
      <a class={isActive('make')} href="/make">Make a Mask</a>
      <a class={isActive('donate')} href="/donate">Donate a Mask</a>
    </div>
    <div class="mobile-burger">
      <Hamburger />
    </div>
  </div>
</section>
