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
		fetchState(state) {
			console.log('fetchState')
			let {todos, filter, select} = state.state;
			let s1 = JSON.stringify({todos, filter, select})
			localStorage.setItem('state', s1);
			// ----------------------------------
			//из упакованного state получем данные и читаем с записью во vuex
			let s2 = localStorage.getItem('state');
			console.log(s2)
			let data = JSON.parse(s2);

			for (let item in data) {
				console.log(item)
			}
		}
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
		select: (state) => {
			return state.select
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
		arrowTodoSelectToggle_V(state) {
			state.select = !state.select
		},
		arrowTodoFilter_V(state) {
			if (state.select) {
				state.todos.filter(item => item.checked = true)
			} else {
				state.todos.filter(item => item.checked = false)
			}
		},
		checkTodoToSelect_V(state) {
			//если хотя бы один item=false то select невиден
			state.select = state.todos.every(item => item.checked);
		},
		removeTodoChecked_V(state) {
			state.todos = state.todos.filter( item => {
				return !item.checked
			})
		}
	},
}

export default todos