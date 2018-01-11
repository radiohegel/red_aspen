<template>
	<div>
	<section class="hero is-medium is-white">
		<div class="hero-head">
			<mountains/>
		</div>
		<div class="hero-body content">
			<p class="title is-2  has-text-centered has-text-primary">
				Red Aspen Management is a Utah-based real estate investment company. Family owned and operated, we purchase, restore, manage, and sell properties throughout the Salt Lake Valley.
			</p>
		</div>
	</section>
	<section class="hero is-primary">
		<div class="hero-body">
			<carousel :perPage="1">
			  <slide>
			    <figure class="image">
					  <img src="../images/photo1.jpg">
					</figure>
				</slide>
				<slide>
					<figure class="image">
					  <img src="../images/photo2.jpg">
					</figure>
				</slide>
				<slide>
			    <figure class="image">
					  <img src="../images/photo3.jpg">
					</figure>
				</slide>
				<slide>
					<figure class="image">
					  <img src="../images/photo4.jpg">
					</figure>
				</slide>
			  <slide>
			    <figure class="image">
					  <img src="../images/photo5.jpg">
					</figure>
				</slide>
				<slide>
					<figure class="image">
					  <img src="../images/photo6.jpg">
					</figure>
				</slide>
				<slide>
			    <figure class="image">
					  <img src="../images/photo7.jpg">
					</figure>
				</slide>
				<slide>
					<figure class="image">
					  <img src="../images/photo8.jpg">
					</figure>
				</slide>
			</carousel>	
		</div>
	</section>
	</div>

</template>

<script>
	import {Carousel, Slide} from 'vue-carousel'
	import Mountains from '../svg/mountains.svg'

	export default {

	  name: 'AboutSection',
	  components: { Carousel, Slide, Mountains },
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

	.image
		height: 70%
		width: 70%
		margin: auto

</style>