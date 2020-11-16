<template>
	<div :class="['todo-item', {checked:todo.checked}]">
		<label class="label">
			<div class="input-block">
				<input
				@change="checkTodoAsComplited"
				:checked="todo.checked"
				class="input" type="checkbox">
			</div>
			<div class="title">{{todo.name}}</div>
		</label>
		<div class="button">
			<button
			@click="removeExistedTodo"
			class="remove" type="button">
				<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
			</button>
		</div>

				<!-- to='/view' //без параметра-->
				<!-- :to="`/view/${todo.name}`"  //с параметром-->
		<div class="button">
			<router-link
				tag='button'
				:to="`/view/${todo.name}`"
				class="view"
			>
				<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-right" class="svg-inline--fa fa-angle-double-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
			</router-link>
		</div>

	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	props: {
		todo: Object
	},
	methods: {
		...mapMutations(['removeTodo', 'checkTodo',
		'checkTodoToSelect_V']),

		removeExistedTodo() {
			// this.$emit('removeTodo', this.todo.id)
			this.removeTodo(this.todo.id)//vuex

			this.checkTodoToSelect_V()//vuex
		},
		checkTodoAsComplited(e) {
			// this.$emit('checkTodo', this.todo.checked = e.target.checked) //измение по ссылке
			const todoItem = {
				...this.todo,
				checked:  e.target.checked
			}
			// this.$emit('checkTodo', todoItem)
			this.checkTodo(todoItem)//vuex
			this.checkTodoToSelect_V()//vuex
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
.remove {
	visibility: hidden;
}
.view {
	visibility: hidden;
}
.button {
	cursor: pointer;
	margin-right: 25px;
	width: 30px;
	height: 30px;
	color: #607d8b;

	svg {
		width: 20px;
		height: 20px;
	}

	button {
		cursor: pointer;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
		background-color: transparent;
		border: none;
		color: inherit;
	}
}
.todo-item {
	display: flex;
	align-items: center;
	&:hover {
		.remove {
			visibility: visible;
		}
		.view {
			visibility: visible;
		}
	}
	.title {
		transition: opacity ease .4s;
	}

}
.checked {
	.title {
		text-decoration: line-through;
		opacity: 0.2;
	}
}
</style>