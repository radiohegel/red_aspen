<template>
	<div>
	<section class="hero is-medium is-white">
		<div class="hero-body content">
			<p class="title is-2  has-text-centered has-text-primary">
				Red Aspen Management is a Utah-based real estate investment company. Family owned and operated, we purchase, restore, manage, and sell properties throughout the Salt Lake Valley.
			</p>
		</div>
	</section>
	<div>
			<carousel :perPage="1">
			  <slide>
			    Slide 1 Content
			  </slide>
			  <slide>
			    Slide 2 Content
			  </slide>			  <slide>
			    Slide 2 Content
			  </slide>			  <slide>
			    Slide 2 Content
			  </slide>			  <slide>
			    Slide 2 Content
			  </slide>			  <slide>
			    Slide 2 Content
			  </slide>			  <slide>
			    Slide 2 Content
			  </slide>
			</carousel>	
	</div>
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