<template>
	<div class="home">
		<div>
			<img alt="Vue logo" :src="IMAGES.LOGO" />
			<h1>Hello World</h1>
			<div class="counter">
				<button @click="onDecrement">-</button>
				<h5>{{ this.count }}</h5>
				<button @click="onIncrement">+</button>
			</div>

			<p v-for="(blog, index) in blogs" :key="index">{{ blog.title }}</p>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { IMAGES } from '../configs'
export default {
	name: 'Home',
	data() {
		return {
			IMAGES
		}
	},
	computed: {
		...mapState(['count']),
		...mapGetters(['getBlogs']),
		...mapActions(['increment', 'decrement']),
		blogs() {
			return this.getBlogs('review')
		}
	},
	methods: {
		onIncrement() {
			return this.increment
		},
		onDecrement() {
			return this.decrement
		}
	}
}
</script>

<style lang="less" scoped>
.counter {
	h5 {
		margin: 0 20px;
	}
	display: flex;
	justify-content: center;
}

.home {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 80vh;
	text-align: center;
	width: 100%;
}
</style>
