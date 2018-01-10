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
			<div class="svg-container">
				<aspen-trees/>
			</div>
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

	.svg-content
		display: inline-block
		position: absolute
		top: 0
		left: 0
		fill: $light

</style>