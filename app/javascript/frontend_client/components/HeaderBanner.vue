<template>
	<div>
	<section class="hero is-primary is-fullheight">
		<div class="hero-body">
			<div class="container has-text-light columns">
				<div class="column is-four-fifths">
				<p class="title">Red Aspen Management</p>
				<p class="subtitle">Real Estate Investors</p>
				</div>
			</div>
			<aspen-trees class="tree-image"/>
		</div>
	</section>
	</div>
</template>

<script>
	import AspenTrees from '../svg/aspen-trees.svg'

	export default {

	  name: 'HeaderBanner',
	  components: { AspenTrees },
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
		font-size: 40px

	.tree-image
		fill: $light
		position: absolute
		height: 100vh
		width: 107vw


</style>