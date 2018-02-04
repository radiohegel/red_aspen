<template>
	<div>
		<section class="hero">
			<div class="hero-body"></div>
		</section>
		<section>
			<contact-form></contact-form>
		</section>
	</div>
</template>

<script>
	import ContactForm from '../components/ContactForm.vue'

	export default {

	  name: 'ContactPage',
	  components: { ContactForm },
	  data () {
	    return {
	    }
	  }

	}

</script>

<style lang="sass" scoped>
	@import "../styles/app.sass"

</style>