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
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	components: {
		todoInput,
		todoList,
	},
	data() {
		return {
		}
	},
	mounted() {//getters для тестирования и примера!
		// setTimeout(() => {
		// 	console.log(this.todoById(3))
		// }, 6000)

		// this.fetchItem()
	},
	computed: {
		...mapState({//vuex
			todos: state => state.todos.todos,
			filter: state => state.todos.filter,
		}),
		// ...mapGetters(['todoById']),//getters для тестирования и примера!
		...mapGetters(['filtredTodos', 'counterTodos', 'buttonClearTodos']),


	},
	methods: {
		// ...mapActions(['fetchItem']),

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