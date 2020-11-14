<template>
	<div class="todo">
		<todo-input
		:todos='todos'
		@arrowTodo='arrowTodo'
		/>

		<todo-list
		v-if="todos.length > 0"
		:todos='filtredTodos'
		:counterTodos='counterTodos'
		:buttonClearTodos='buttonClearTodos'
		@clearTodos="clearTodos"
		/>
		<pre>{{todos}}</pre>
		<pre>{{filtredTodos}}</pre>
	</div>
</template>

<script>
import todoInput from "./todoInput";
import todoList from "./todoList";
import { mapState } from 'vuex'

export default {
	components: {
		todoInput,
		todoList,
	},
	data() {
		return {
			// todos: [],
			// filter: 'all'
		}
	},
	computed: {
		...mapState({//vuex
			todos: state => state.todos.todos,
			filter: state => state.todos.filter,
		}),
		filtredTodos() { //этот метод возвращает отфильтрованный this.todos
			switch (this.filter) {
				case 'all' :
					return this.todos
				case 'active' :
					return this.todos.filter(item => item.checked == false)
				case 'completed' :
					return this.todos.filter(item => item.checked == true)
			}
		},
		counterTodos() {
			return this.todos.filter(item => item.checked != true).length
		},
		buttonClearTodos() {
			return this.todos.some(item => item.checked)
		},
	},
	methods: {
		arrowTodo(select) {
			if (select) {
				this.filtredTodos.filter(item => item.checked = true)
			} else {
				this.filtredTodos.filter(item => item.checked = false)
			}
		},
		clearTodos() {
			this.todos = this.todos.filter(item => item.checked == false)
		}
	},
}
</script>

<style lang="scss" scoped>
	.todo {
		background: #fff;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
	}
</style>
//Это компонент -контейнер
//Все компоненнты будуд входить в него