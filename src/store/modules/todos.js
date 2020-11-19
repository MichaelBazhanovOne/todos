const todos = {
	state: {
		todos: [],
		filter: 'all',
		select: false,
		maxID: 0,
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
		getState(state) {//получение данные из localStorage (browser API) в vuex (относительно vuex)
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
			// 	"maxID":0,
			// })
			// localStorage.setItem('state', castomData);

			//из упакованного state получем данные и читаем с записью во vuex
			let s2 = localStorage.getItem('state');
			let data = JSON.parse(s2);//распарсим данные
			// console.log(data)

			let todos = [...data.todos];
			let filter = data.filter;
			let select = data.select;
			let maxID = data.maxID;

			state.commit('getAll_localStorage', { todos, filter, select, maxID })
		},
		setState(state) {//получение данные из vuex в localStorage (browser API) (относительно vuex)
			let todos = [...state.state.todos];
			let filter = state.state.filter;
			let select = state.state.select;
			let maxID = state.state.maxID;
			let castomData = JSON.stringify({ todos, filter, select, maxID })
			localStorage.setItem('state', castomData);

			//всего в 6 местах использую///////////////////
			//-1- на добавление todo
			//-2- на удаление todo
			//-3- на клик по todo(чек не чек)
			//-4- на клик по select
			//-5- на клик по filter
			//-6- на клик по clear (id = 0)
			///////////////////////////////////////////////
		},
		changeAddTodo(state, todo) {
			state.commit('addTodo', todo);//положили данные в state
			state.dispatch('setState');//положили данные в localStorage
		},
		changeRemoveTodo(state, todoId) {
			state.commit('removeTodo', todoId);//положили данные в state
			state.dispatch('setState');//положили данные в localStorage
		},
		changeChecked(state) {
			state.dispatch('setState');//положили данные в localStorage
		},
		changeSelect(state) {
			state.dispatch('setState');//положили данные в localStorage
		},
		changeFilter(state) {
			state.dispatch('setState');//положили данные в localStorage
		},
		changeClear(state) {
			state.commit('clearID');//положили данные в state
			state.dispatch('setState');//положили данные в localStorage
		},
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
		plus: (state) => {
			return state.maxID + 1
		},
	},
	mutations: {
		getAll_localStorage(state, data) {
			state.todos = [...data.todos];
			state.filter = data.filter;
			state.select = data.select;
			state.maxID = data.maxID;
		},
		ID(state, id) {//maxID
			state.maxID < id ? state.maxID = id : state.maxID = state.maxID
		},
		clearID(state) {
			state.maxID = 0
		},
		// =================================================================
		addTodo(state, todo) {
			state.todos.push(todo)
		},
		removeTodo(state, todoId) {
			console.log(state)
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