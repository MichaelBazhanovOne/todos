<template>
	<div>
		<button type="button">all</button>
		<button class="active" type="button">active</button>
		<button type="button">completed</button>
	</div>
</template>

<script>
export default {

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

