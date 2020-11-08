<template>
	<div class="todo-item">
		<label class="label">
			<div class="input-block">
				<input class="input" type="checkbox">
			</div>
			<div class="title">{{todo.name}}</div>
		</label>
		<div class="button">
			<button
			@click="removeTodo"
			class="remove" type="button">x</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		todo: Object
	},
	methods: {
		removeTodo() {
			this.$emit('removeTodo', this.todo.id)
		}
	}

}
</script>

<style lang="scss" scoped>
.label {
	display: flex;
	align-items: center;
	flex-grow: 1;
}
.todo-item {
	display: flex;
	align-items: center;
}
.input-block {
	width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.title {
	padding: 15px 0;
	display: block;
	line-height: 1.2;
}
.button {
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.remove {
	background: transparent;
	border: none;
	color: firebrick;
	cursor: pointer;
	font-size: 20px;
	visibility: hidden;
}
.todo-item {
	display: flex;
	align-items: center;
	&:hover {
		.remove {
			visibility: visible;
		}
	}
}
</style>