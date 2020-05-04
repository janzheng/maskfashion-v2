
<div class="Form-body" >
	<div class="Formlet" >
		<div class="item--field __required" >   
			<div class="_form-wrapper" >
				<div class="Formlet Formlet-input Formlet-input-cta _form-control _margin-bottom-none-i" data-v-5f7c30e6="" >  
					<div class="_flex-row" data-v-5f7c30e6="">
						<input id="Email" name="Email" placeholder="EMAIL" required="required" bind:value={email} class="_form-input _flex-1" data-v-5f7c30e6=""> 
						<input type="submit" value="GET STOKED" class="_button __outline _margin-bottom-none " on:click={prereg}> 
					</div>
					{#if registered}
						<div class="_padding-top">You're all signed up!</div>
					{/if}
				</div> 
			</div>
		</div>          
	</div>
</div>


<script>
	let email = '', registered

	export function prereg() {
		const data = {
			'email': email
		}

		const reg = fetch(
			`cytosis.json`, {
			headers: {
	      'Content-Type': 'application/json'
	    },
  		method: 'POST',
  		body: JSON.stringify(data)
  	}).then((res) => {
  		console.log('reg finished: ', res)
  		if(res.status == 200) {
  			registered = true
  			email = ''
  		}
  	});
	}

</script>