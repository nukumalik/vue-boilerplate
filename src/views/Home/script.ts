import { mapState, mapGetters, mapActions } from 'vuex';
import { IMAGES } from '../../configs';
import Typography from '../../components/elements/Typography';

export default {
	name: 'Home',
	data() {
		return {
			IMAGES
		};
	},
	components: {
		Typography
	},
	computed: {
		...mapState(['count']),
		...mapGetters(['getBlogs']),
		...mapActions(['increment', 'decrement']),
		blogs() {
			return this.getBlogs('review');
		}
	},
	methods: {
		onIncrement() {
			return this.increment;
		},
		onDecrement() {
			return this.decrement;
		}
	}
};
