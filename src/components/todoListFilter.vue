<template>
	<div>
		<button
		v-for="filter in filters" :key="filter"
		@click="filterCurentTodos(filter)"
		:class="[{active: currentFilter === filter}]"
		type="button"
		>{{filter}}</button>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
	data() {
		return {
			filters: ['all','active','completed'],
			// currentFilter: 'all',
		}
	},
	computed: {
		...mapGetters(['currentFilter']),
	},
	methods: {
		...mapMutations(['filterTodos']),
		...mapActions(['changeFilter']),

		filterCurentTodos(filter) {
			// this.currentFilter = filter
			// this.$emit('filterTodos', filter)


			this.filterTodos(filter) //vuex-mutation
			this.changeFilter();//vuex-action
		}
	}
}
</script>

<style lang="scss" scoped>
	button {
		margin-right: 20px;
		border: none;
		background: transparent;
		font-weight: 300;
		color: inherit;
		cursor: pointer;
		border: 1px solid transparent;
		border-radius: 3px;
		outline: none;

		transition: background-color ease 0.4s, color ease 0.4s;

		&:hover {
			background-color: #f6f6f6;
			color: black;
		}

		&.active {
			border-color: black;
			color: black;
			background-color: #fff;
		}

		&:last-child {
			margin-right: 0;
		}
	}
</style>

