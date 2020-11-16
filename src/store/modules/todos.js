const todos = {
	state: {
		todos: [],
		filter: 'all',
		select: false
	},
	actions: {
		// fetchItem(state) {
		// 	console.log(state)
		// 	state.commit('testMutations', 'Михаил')
		// 	state.dispatch('testActions', 'Бажанов')
		// },
		// testActions(state) {
		// 	console.log('testActions - из actions вызвать actions')
		// }
	},
	getters: {
		// todoById: state => id => {
		// 	return state.todos.filter( item => item.id == id )
		// },
		filtredTodos: (state) => { //этот метод возвращает отфильтрованный this.todos
			switch (state.filter) {
				case 'all' :
					return state.todos
				case 'active' :
					return state.todos.filter(item => item.checked == false)
				case 'completed' :
					return state.todos.filter(item => item.checked == true)
			}
		},
		counterTodos: (state) => {
			return state.todos.filter(item => item.checked != true).length
		},
		buttonClearTodos: (state) => {
			return state.todos.some(item => item.checked)
		},
	},
	mutations: {
		addTodo(state, todo) {
			state.todos.push(todo)
		},
		removeTodo(state, todoId) {
			state.todos = state.todos.filter(item => {
				return item.id != todoId
			})
		},
		checkTodo(state, todo) {
			state.todos = state.todos.map(item => item.id == todo.id ? todo : item)
		},
		filterTodos(state, filter) {
			state.filter = filter
		},
		// testMutations(state, test) {
		// 	console.log('testMutations', test)
		// }
		arrowTodoSelect_V(state, select) {
			state.select = select
		},
		arrowTodoFilter_V(state, select) {
			if (select) {
				state.todos.filter(item => item.checked = true)
			} else {
				state.todos.filter(item => item.checked = false)
			}
		},
	},
}

export default todos