import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);//подключаем роутер к vue

//======Входящие компоненты
import todo from './components/todo'
import todoView from './components/todoView'
//======Входящие компоненты

//описываем все пути роутера
const routes = [
	{
		path: '/', //по какому url какой компонент отобразить
		component: todo
	},
	{
		path: '/view/:todo', //по какому url какой компонент отобразить с параметром
		component: todoView
	}
];

export default new VueRouter({routes, mode: 'history'})

