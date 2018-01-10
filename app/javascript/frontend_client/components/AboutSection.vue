<template>
	<div>
	<section class="hero is-medium is-white">
		<div class="hero-body content">
			<p class="title is-2  has-text-centered has-text-primary">
				Red Aspen Management is a Utah-based real estate investment company. Family owned and operated, we purchase, restore, manage, and sell properties throughout the Salt Lake Valley.
			</p>
		</div>
	</section>
	<section class="hero">
		<div class="hero-body">
			<carousel :perPage="1">
			  <slide>
			    <figure class="image">
					  <img src="https://bulma.io/images/placeholders/128x128.png">
					</figure>
			  </slide>			  <slide>
			    <figure class="image">
					  <img src="https://bulma.io/images/placeholders/128x128.png">
					</figure>
			  </slide>			  <slide>
			    <figure class="image">
					  <img src="https://bulma.io/images/placeholders/128x128.png">
					</figure>
			  </slide>			  <slide>
			    <figure class="image">
					  <img src="https://bulma.io/images/placeholders/128x128.png">
					</figure>
			  </slide>
			</carousel>	
		</div>
	</section>
	</div>

</template>

<script>
	import {Carousel, Slide} from 'vue-carousel'

	export default {

	  name: 'AboutSection',
	  components: { Carousel, Slide },
	  data () {
	    return {

	    }
	  }
	}
</script>

<style lang="sass" scoped>
	@import "../styles/app.sass"

	.title
		padding: 6%

</style>