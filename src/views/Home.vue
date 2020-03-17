<template>
	<div class="home">
		<div>
			<img alt="Vue logo" :src="IMAGES.LOGO" />
			<h1>Hello World</h1>
		</div>
	</div>
</template>

<script>
import { IMAGES } from '../configs'
export default {
	name: 'Home',
	data() {
		return {
			IMAGES
		}
	}
}
</script>

<style lang="less" scoped>
.home {
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 80vh;
	width: 100%;
}
</style>
