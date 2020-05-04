<script context="module">
  export async function preload(page, session) {
    const cytosis = await this.fetch(`cytosis.json`).then(r => r.json())
    const Content = cytosis.results['Content']
    const Makers = cytosis.results['Mask Makers']
    const Dropoff = cytosis.results['Mask Dropoff']

		// session.update({
		// 	...session, ...Content
		// });
    // console.log('_layout.svelte',page, session)
    return { Content, Makers, Dropoff };
  }
</script>


<script>
	import Nav from '../components/Nav.svelte';
	// import Footer from '../components/Footer.svelte';
	import head from '../_helpers/_head.js';

	// This trick passes down preloaded data to all modules
	// https://stackoverflow.com/questions/60911171/how-to-pass-data-from-a-layout-to-a-page-in-sapper
	export let segment, Content, Makers, Dropoff;
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  const Content$ = writable(Content)
  const Makers$ = writable(Makers)
  const Dropoff$ = writable(Dropoff)

  // this updates the store's value when `segment` changes
  // syntactic sugar for: segment$.set(segment)
  $: $Content$ = Content
  $: $Makers$ = Makers
  $: $Dropoff$ = Dropoff

  setContext('Content', Content$)
  setContext('Makers', Makers$)
  setContext('Dropoff', Dropoff$)

</script>



<svelte:head>
	{#if head}
		<title>{ head.title }</title>

		{#if head.link}
			{#each head.meta as meta}
			<meta 
				charset={meta.charset}
				data-hid={meta.hid} 
				name={meta.name} 
				content={meta.content} 
				property={meta.property} 
			>
  
			{/each}
			{#each head.link as link}
				<link data-hid={link.hid} rel={link.rel} href={link.href}>
			{/each}
		{/if}
	{/if}
</svelte:head>


<div class="App">

	<Nav {segment}/>

	<div id="top" class="ContentFrame Layout">
		<main class="ContentFrame-body __content-frame">
			<slot ></slot>
		</main>
	</div>

</div>






<style type="text/scss">
  @import "../styles/core";

  // general app styles
  .App {
    width: 100%;
    max-width: 1500px;
    padding: 16px * 2;
    padding-top: 0;
  }

  * {
    // font-family: $font-stack;
    font-size: 16px;
    // line-height: $line-height;
  }

  :global(h1, h2, h3, h4) {
    font-weight: bold;
    padding-bottom: 16px;
  }
</style>

