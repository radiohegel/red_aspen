<template>
	<div class="form-collection">
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">From</label>
			</div>
			<div class="field-body">
				<div class="field">
					<p class="control is-expanded">
						<input class="input" type="text" v-model="name" placeholder="Name">
					</p>
				</div>
				<div class="field">
					<p class="control is-expanded">
						<input class="input" type="email" v-model="email" placeholder="Email">
					</p>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label"></div>
			<div class="field-body">
				<div class="field is-expanded">
					<div class="field has-addons">
						<p class="control is-expanded">
							<input class="input" type="tel" v-model="phone" placeholder="Your phone number">
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">Subject</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input class="input is-danger" type="text" v-model="subject" placeholder="e.g. Partnership opportunity">
					</div>
					<p class="help is-danger">
						This field is required
					</p>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">Message</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<textarea class="textarea" v-model="message" placeholder="Explain how we can help you"></textarea>
					</div>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label">
				<!-- Left empty for spacing -->
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<button class="button is-primary">
							Send message
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	name: 'ContactForm',

	data () {
		return {
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: ""
		}
	}
}
</script>

<style lang="sass" scoped>
	@import "../styles/app.sass"

	.form-collection
		padding: 15%
		padding-left: 8%

</style>

