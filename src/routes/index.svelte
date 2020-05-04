


<svelte:head>
</svelte:head>



<div class="Home">

  <HeroSection />
  <MakerSection />
  <MakeAMaskSection />
  <CommunitiesSection />
  <DonateSection />
  <FYISection />
  <FooterSection />
</div>



<script>

	export let cytosis;
	import Cytosis from 'cytosis';
  import marked from 'marked';


  import HeroSection from '../components/sections/HeroSection.svelte'
  import MakerSection from '../components/sections/MakerSection.svelte'
  import MakeAMaskSection from '../components/sections/MakeAMaskSection.svelte'
  import CommunitiesSection from '../components/sections/CommunitiesSection.svelte'
  import DonateSection from '../components/sections/DonateSection.svelte'
  import FYISection from '../components/sections/FYISection.svelte'
  import FooterSection from '../components/sections/FooterSection.svelte'



</script>






<style type="text/scss">

  #video {
    margin-top: 96px;
    padding: 150px 80px;
    position: relative;
    overflow: hidden;
    width: 100%;
    background-color: transparent;

  }

  .herovideo {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
  }

  @media only screen and (max-width: 500px) {
    video.herovideo {
      display: none;
    }
  }

</style>




