const todos = {
	state: {
		todos: [],
		filter: 'all'
	},
	actions: {},
	getters: {},
	mutations: {
		addTodo(state, todo) {
			state.todos.push(todo)
		},
	},
}

export default todos