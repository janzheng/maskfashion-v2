<style type="text/scss">
  

  .Communities-section {
    position: relative;
    padding-top: 30px;
    padding-bottom: 65px;

    .communities-img {
      width: 100%;
    }

    .Communities-title {
      padding-top: 33px;
      font-size: 30px;
      line-height: 35px;
    }

    .Communities-desc {
      font-size: 24px;
      line-height: 28px;
      font-weight: 300;
    }

    .Communities-cta {
      padding-top: 61px;

      a {
        text-decoration: none;
        font-weight: 500;
        font-size: 20px;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 768px) {
    .Communities-section {
      display: flex;
      width: 100%;
      justify-content: space-evenly;

      .communities-img {
        object-fit: contain;
        width: 50%;
      }

      .Communities-desc {
        font-size: 18px;
        line-height: 24px;
      }

      .communities-info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 40%;
      }

      .Communities-title {
        padding-bottom: 0;
        font-size: 21px;
        line-height: 26px;
        padding-top: 0;
      }

      .Communities-cta {
        padding-top: 0;

        a {
          font-size: 16px;
        }
      }
    }
  }

  @media (min-width: 1080px) {
    .Communities-section {
      .Communities-title {
        font-size: 36px;
        line-height: 42px;
      }

      .Communities-desc {
        font-size: 28px;
        line-height: 33px;
      }

      .Communities-cta {
        a {
          font-size: 24px;
          line-height: 28px;
        }
      }
    }
  }
</style>

<div class="Communities-section section">
  <img
    src="images/communityMasks.png"
    alt="Illustrated group of three people wearing face masks"
    class="communities-img" />
  <div class="communities-info">
    <h2 class="Communities-title title">Mask making communities</h2>
    <p class="Communities-desc desc">
      Lots of small communities are organizing mask-making around the world. I
      don't have very many of them but please add your local communities to this
      list, if you can.
    </p>
    <div class="Communities-cta cta">
      <a href="#">Add yours →</a>
    </div>
  </div>
</div>
