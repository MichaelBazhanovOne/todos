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
		fetchState(state) {//получение данные из localStorage (browser API) в vuex (относительно vuex)
			//вкладываем кастомные данные в хранилище
			// ----------------------------------
			// let castomData = JSON.stringify({
			// 	"todos":[
			// 		{
			// 			"id": 1,
			// 			"name": "1",
			// 			"checked": false
			// 		},
			// 		{
			// 			"id": 2,
			// 			"name": "2",
			// 			"checked": true
			// 		},
			// 		{
			// 			"id": 3,
			// 			"name": "3",
			// 			"checked": false
			// 		}
			// 	],
			// 	"filter":"all",
			// 	"select":false,
			// })
			// localStorage.setItem('state', castomData);

			//из упакованного state получем данные и читаем с записью во vuex
			let s2 = localStorage.getItem('state');
			let data = JSON.parse(s2);//распарсим данные
			// console.log(data)

			let todos = [...data.todos];
			let filter = data.filter;
			let select = data.select;

			state.commit('getAll_localStorage', { todos, filter, select })
		},
		setState(state) {//получение данные из vuex в localStorage (browser API) (относительно vuex)
			let todos = [...state.todos];
			let filter = state.filter;
			let select = state.select;
			let castomData = JSON.stringify({ todos, filter, select })
			localStorage.setItem('state', castomData);
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
		getAll_localStorage(state, data) {
			state.todos = [...data.todos];
			state.filter = data.filter;
			state.select = data.select;
		},
		// setAll_localStorage(state, data) {
		// 	state.todos = [...data.todos];
		// 	state.filter = data.filter;
		// 	state.select = data.select;
		// },
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