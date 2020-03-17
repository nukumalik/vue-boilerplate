<template>
	<nav class="navbar navbar-expand-lg shadow" :class="className">
		<a class="navbar-brand" @click="goTo('/')">
			<img alt="logo" :src="IMAGES.LOGO" />
		</a>
		<button class="navbar-toggler" data-toggle="collapse" data-target="#NavbarMenu">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="NavbarMenu">
			<ul class="navbar-nav ml-auto">
				<li v-for="(menu, index) in menus" :key="index" class="nav-item">
					<a class="nav-link" @click="goTo(menu.path)">{{ menu.label }}</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import { IMAGES } from '../../configs'

export default {
	props: ['className', 'menus'],
	name: 'Navbar',
	data() {
		return {
			IMAGES
		}
	},
	methods: {
		goTo(path) {
			this.$router.push(path)
		}
	}
}
</script>

<style lang="less" scoped>
.navbar {
	a {
		cursor: pointer;
	}
	img {
		height: 63px;
	}
	background-color: #fff;
	padding: 15px 10%;
}
</style>
