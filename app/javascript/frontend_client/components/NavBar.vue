<template>
		<nav class="navbar is-fixed-top">
				<div class="navbar-brand">
					<router-link to="/" class="navbar-item has-text-primary has-text-weight-semibold">About</router-link>
					<a href="" class="navbar-item has-text-primary has-text-weight-semibold">Properties</a>
					<router-link to="contact" class="navbar-item has-text-primary has-text-weight-semibold">Contact</router-link>
				</div>
			</nav>
</template>

<script>
	export default {
		
	  name: 'NavBar',
	  data () {
	    return {

	    }
	  }
	}
</script>

<style lang="sass" scoped>
	@import "../styles/app.sass"

	.navbar
		background: $light

</style>