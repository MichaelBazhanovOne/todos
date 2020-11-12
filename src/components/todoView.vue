<template>
	<div>
		<h2>{{ $route.params['todo'] }}</h2>
		<button type="button" @click="goBack">Назад</button>
		<!-- <button type="button" @click="goUp">Вперед на главную</button> -->
	</div>
</template>

<script>
export default {
	methods: {
		goBack() {
			this.$router.go(-1)

			// let test = this.$route.params['todo'];
			// console.log( this.$route)
			// console.log(test)
		},
		goUp() {
			this.$router.push({ path: '/' })
		}
	}
}
</script>

<style lang="sass" scoped>

</style>