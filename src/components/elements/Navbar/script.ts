import { IMAGES } from '../../../configs';
import Typography from '../Typography';

export default {
	props: ['background', 'className', 'color', 'menus'],
	name: 'Navbar',
	data() {
		return { IMAGES };
	},
	components: { Typography },
	methods: {
		goTo
	}
};

// Methods
function goTo(path) {
	this.$router.push(path);
}
