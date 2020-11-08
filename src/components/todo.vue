<template>
	<div class="todo">
		<todo-input
		@addTodo='addTodo'
		/>

		<todo-list
		:todos='todos'
		v-if="todos.length > 0"
		@removeTodo="removeTodo"
		@checkTodo="checkTodo"
		/>
		<pre>{{todos}}</pre>
	</div>
</template>

<script>
import todoInput from "./todoInput";
import todoList from "./todoList";

export default {
	components: {
		todoInput,
		todoList,
	},
	data() {
		return {
			todos: []
		}
	},
	methods: {
		addTodo(todo) {
			this.todos.push(todo)
		},
		removeTodo(todoId) {
			this.todos = this.todos.filter(item => {
				return item.id != todoId
			})
		},
		checkTodo(todo) {
			// console.log(todo)
			// this.todos.forEach(item => {
			// 	if (item.id == todo.id) { item = todo}
			// }) //изменнеи по ссылке
			this.todos = this.todos.map(item => item.id == todo.id ? todo : item)
		}
	}

}
</script>

<style lang="scss" scoped>
	.todo {
		margin-top: 100px;
		background: #fff;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
	}
</style>
//Это компонент -контейнер
//Все компоненнты будуд входить в него