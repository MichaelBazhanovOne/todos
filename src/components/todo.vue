<template>
	<div class="todo">
		<todo-input
		@addTodo='addTodo'
		@arrowTodo='arrowTodo'
		/>

		<todo-list
		v-if="todos.length > 0"
		:todos='filtredTodos'
		:counterTodos='counterTodos()'
		@removeTodo="removeTodo"
		@checkTodo="checkTodo"
		@filterTodos="filterTodos"
		@clearTodos="clearTodos"
		/>
		<pre>{{todos}}</pre>
		<pre>{{filtredTodos}}</pre>
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
			todos: [],
			filter: 'all'
		}
	},
	computed: {
		filtredTodos() { //этот метод возвращает отфильтрованный this.todos
			switch (this.filter) {
				case 'all' :
					return this.todos
				case 'active' :
					return this.todos.filter(item => item.checked == false)
				case 'completed' :
					return this.todos.filter(item => item.checked == true)
			}
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
		},
		filterTodos(filter) {
			this.filter = filter
		},
		arrowTodo(select) {
			if (select) {
				this.filtredTodos.filter(item => item.checked = true)
			} else {
				this.filtredTodos.filter(item => item.checked = false)
			}
		},
		counterTodos() {
			return this.todos.filter(item => item.checked != true).length
		},
		clearTodos(e) {
			console.log(e)
		}
	},
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