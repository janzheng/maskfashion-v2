<script>
  import MakerGrid from "../MakerGrid.svelte";
</script>

<style type="text/scss">
  

  .Maker-section {
    margin-left: -32px;
    margin-right: -32px;
    background: #d9f7f2;
    padding: 34px 30px;

    h2 {
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 400;
    }

    h2 span {
      font-weight: 500;
    }

    a {
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;
    }

    p {
      font-size: 18px;
      line-height: 21px;
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    .Maker-section {
      h2 {
        font-size: 50px;
      }

      .Maker-desc {
        font-size: 20px;
        padding-top: 24px;
      }
    }
  }

  @media (min-width: 1080px) {
    .Maker-section {
      padding: 80px 100px 50px 100px;
    }
  }
</style>

<div class="Maker-section section">
  <h2 class="Maker-title title">
    Find a
    <span>Mask Maker</span>
  </h2>

  <p class="Maker-desc desc">
    Many folks have been laid off and are spending their time and money to make
    masks for medical professionals and their communities. Let's support them by
    donating or buying a mask!
  </p>

  <MakerGrid />

  <a href="#">See all makers →</a>
</div>
