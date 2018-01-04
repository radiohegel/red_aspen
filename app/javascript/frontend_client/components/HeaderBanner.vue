<template>
	<section class="hero is-primary is-fullheight">
		<div class="hero-body">
			<div class="container">
				<p class="title">Red Aspen Management</p>
				<p class="subtitle">Real Estate Investors</p>
			</div>
		</div>
	</section>
</template>

<script>
	export default {

	  name: 'HeaderBanner',

	  data () {
	    return {

	    }
	  }
	}
</script>

<style lang="sass" scoped>
	@import '../styles/app.sass'

	.hero-body .title
		font-size: 80px

	.hero-body .subtitle
		font-size: 30px

</style>