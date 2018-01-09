<template>
	<div>
	<section class="hero is-primary is-fullheight">
		<div class="hero-body">
			<div class="container columns">
				<div class="column is-four-fifths">
				<p class="title">Red Aspen Management</p>
				<p class="subtitle">Real Estate Investors</p>
				</div>
				<div class="column is-one-fifth">
					<aspen-tree class="tree-image"/>
				</div>
			</div>
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

</style>