<template>
	<div>
	<section class="hero is-primary is-fullheight">
		<div class="hero-body">
			<div class="container">
				<p class="title">Red Aspen Management</p>
				<p class="subtitle">Real Estate Investors</p>
			</div>
					<aspen-tree class="tree-image"/>
		</div>
	</section>
	</div>
</template>

<script>
	import AspenTree from '../svg/aspen-tree.svg'

	export default {

	  name: 'HeaderBanner',
	  components: { AspenTree },
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
		fill: white
		position: absolute
		height: 100vh
		width: 125vw




</style>