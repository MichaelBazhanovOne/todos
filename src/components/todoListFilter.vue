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
import { mapMutations } from 'vuex'

export default {
	data() {
		return {
			filters: ['all','active','completed'],
			currentFilter: 'all',
		}
	},
	methods: {
		...mapMutations(['filterTodos']),

		filterCurentTodos(filter) {
			this.currentFilter = filter
			// this.$emit('filterTodos', filter)
			this.filterTodos(filter) //vuex
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

		&.active {
			border-color: rgba(175, 47, 47, 0.2);
		}

		&:last-child {
			margin-right: 0;
		}
	}
</style>

