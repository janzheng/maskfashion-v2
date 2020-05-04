<script>
  import { getContext, onMount } from 'svelte';

  // Content passed down from layout
  let makers
  
  const Makers$ = getContext('Makers')
  $: makers = $Makers$
  // $: console.log('Makers', Makers)

</script>

<style type="text/scss">
  .maker-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 4px;
    margin-bottom: 24px;

    .maker-item-container {
      margin-top: 20px;
      border-radius: 10px;
      overflow: hidden;
      max-width: 440px;

      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }

      .maker-desc {
        background-color: white;
        padding: 8px;
        text-align: left;
        margin-top: -7px;

        .details {
          display: flex;
          justify-content: space-between;

          p {
            display: inline;
          }
        }
      }

      .maker-name {
        font-size: 18px;
        font-weight: 500;
      }

      .maker-location {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 768px) {
    .maker-grid {
      margin-top: 46px;
      margin-bottom: 65px;

      .maker-item-container {
        max-width: 300px;
      }
    }
  }

  @media (min-width: 1080px) {
    .maker-grid {
      .maker-item-container {
        max-width: 400px;
      }
    }
  }
</style>

<!-- Cytosis has been moved into the Home component -->
<!-- 
<Cytosis 
	tableName={'Mask Makers'} 
	airKey={'keylYLkFHWTY3b8Ca'} 
	airBase={'appU40RlkLFNfoQ3X'} 
  tableQuery={'mask-makers'}
  routeName={'mask-makers'}
  bind:cytosis={$cytosis}
  bind:table={$makers}
> -->
{#if $makers}
  <div class="maker-grid">
    {#each $makers.slice(0, 6) as item (item.id)}
      {#if item.fields.Photos && item.fields.Photos.length > 0}
        <div class="maker-item-container">
          <img
            alt={item.fields.AltText}
            src={item.fields.Photos[0].thumbnails.large.url} />
          <div class="maker-desc">
            <p class="maker-name">{item.fields['Name']}</p>
            <div class="details">
              <p class="maker-location">{item.fields['Location']}</p>
              {#if item.fields['Donation & Pricing Info']}
                <p class="maker-pricing">
                  {@html item.fields['Donation & Pricing Info']}
                </p>
              {/if}
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
{/if}
<!-- </Cytosis> -->
