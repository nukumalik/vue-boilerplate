export default {
	props: ['className', 'variant', 'type', 'color', 'fontSize', 'fontWeight'],
	name: 'Typography',
	data() {
		return {
			classes: 'primary'
		};
	},
	created: function() {
		if (this.variant) this.classes = this.variant;
		console.log(this.classes);
	}
};
