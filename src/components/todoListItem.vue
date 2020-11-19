<template>
	<div :class="['todo-item', {checked:todo.checked}]">
		<label class="label">
			<div class="input-block">
				<input
					@change="checkTodoAsComplited"
					:checked="todo.checked"
					class="input" type="checkbox"
				>
			</div>
			<div class="custom-checkbox">
				<div v-if="todo.checked">
					<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
				</div>
				<div v-else>
					<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path></svg>
				</div>
			</div>
			<div class="title truncate">{{todo.name}}</div>

		</label>

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

		<div class="button">
			<button
			@click="removeExistedTodo"
			class="remove" type="button">
				<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
			</button>
		</div>


	</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
	props: {
		todo: Object
	},
	methods: {
		...mapMutations(['checkTodo', 'checkTodoToSelect_V']),
		...mapActions(['changeRemoveTodo','changeChecked']),

		removeExistedTodo() {
			// this.$emit('removeTodo', this.todo.id)
			// this.removeTodo(this.todo.id)//vuex
			this.changeRemoveTodo(this.todo.id)//vuex (переписан на Action)

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

			this.changeChecked()//vuex-action
		}
	}

}
</script>

<style lang="scss" scoped>
.label {
	display: flex;
	align-items: center;
	flex-grow: 1;
	height: 100%;
	cursor: pointer;
	overflow: hidden;
}
.todo-item {
	display: flex;
	align-items: center;
	height: 40px;
}
.input-block {
	position: absolute;
	z-index: -1;
	opacity: 0;
}
.custom-checkbox {
	width: 60px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;

	&>div {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&>div svg{
		width: 20px;
		height: 20px;
	}
}
.title {
	// display: flex;
	// align-items: center;
	// height: 100%;
}
.remove {
	visibility: hidden;
}
.view {
	visibility: hidden;
}
.button {
	cursor: pointer;
	margin-right: 20px;
	width: 30px;
	height: 30px;
	flex-shrink: 0;


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
	background-color: #fff;
	transition: background-color ease .25s;

	&:hover {
		// background: linear-gradient(to left, #2d7ca247, #f5f5f5);
		background-color: transparent;

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
.truncate {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>