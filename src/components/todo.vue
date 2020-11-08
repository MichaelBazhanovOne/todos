<template>
	<div class="todo">
		<todo-input @addTodo='addTodo'/>
		<todo-list />
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