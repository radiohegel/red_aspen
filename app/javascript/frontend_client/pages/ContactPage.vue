<template>
	<div>
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