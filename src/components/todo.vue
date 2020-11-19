<template>
	<div class="todo">
		<todo-input
		:todos='todos'
		/>
		<!-- @arrowTodo='arrowTodo' -->

		<todo-list
		v-if="todos.length > 0"
		:todos='filtredTodos'
		:counterTodos='counterTodos'
		:buttonClearTodos='buttonClearTodos'
		/>
		<!-- <pre>{{todos}}</pre> -->
		<!-- <pre>{{filtredTodos}}</pre> -->
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
			// filtredTodos
			// counterTodos
			// buttonClearTodos
		}
	},
	mounted() {//getters для тестирования и примера!
		// setTimeout(() => {
		// 	console.log(this.todoById(3))
		// }, 6000)

		// this.fetchItem()

		this.getState();
	},
	computed: {
		...mapState({//vuex
			todos: state => state.todos.todos,
			filter: state => state.todos.filter,
			select: state => state.todos.select,
		}),
		// ...mapGetters(['todoById']),//getters для тестирования и примера!
		...mapGetters(['filtredTodos', 'counterTodos', 'buttonClearTodos']),
	},
	methods: {
		// ...mapActions(['fetchItem']),
		...mapActions(['getState'])
	},
	// watch: {//для сохранения в localStorage
	// 	todos(value) {
	// 		console.log(value)
	// 		// this.setState();

	// 	},
	// 	filter(value) {
	// 		console.log(value)
	// 		// this.setState();
	// 	},
	// 	select(value) {
	// 		console.log(value)
	// 		// this.setState();
	// 	}
	// }
}
</script>

<style lang="scss" scoped>
	.todo {
		// background: #fff;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
	}
</style>
//Это компонент -контейнер
//Все компоненнты будуд входить в него