<template>
	<section class="hero is-primary is-fullheight">
		<div class="hero-head">
			<nav class="navbar">
				<div class="navbar-brand">
					<a href="" class="navbar-item has-text-primary has-text-weight-semibold">About</a>
					<a href="" class="navbar-item has-text-primary has-text-weight-semibold">Properties</a>
					<a href="" class="navbar-item has-text-primary has-text-weight-semibold">Contact</a>
				</div>
			</nav>
		</div>
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
		font-size: 90px

	.hero-body .subtitle
		font-size: 40px

	.hero-head .navbar
		background: $white

</style>