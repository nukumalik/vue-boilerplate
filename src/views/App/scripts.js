import Navbar from '../../components/elements/Navbar';
export default {
	data() {
		return {
			menus: [
				{ path: '/', label: 'Home' },
				{ path: '/about', label: 'About' },
				{ path: '/blog', label: 'Blog' },
				{ path: '/contact', label: 'Contact' }
			]
		};
	},
	components: {
		Navbar
	}
};
