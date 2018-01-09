<template>
		<nav class="navbar is-fixed-top">
				<div class="navbar-brand">
					<a href="" class="navbar-item has-text-primary has-text-weight-semibold">About</a>
					<a href="" class="navbar-item has-text-primary has-text-weight-semibold">Properties</a>
					<a href="" class="navbar-item has-text-primary has-text-weight-semibold">Contact</a>
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