<template>
	<div class="todo-list">

		<div class="content">
			<ul class="list">
				<li class="item" v-for="(todo,index) in todos" :key="index">

					<todo-list-item :todo="todo" @removeTodo="removeTodo"/>

				</li>

			</ul>
		</div>

		<div class="footer">
			<div class="footer-content">

				<div class="counter">{{todos.length}} осталось заданий</div>

				<div class="filter">
					<todo-list-filter />
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import todoListFilter from "./todoListFilter";
import todoListItem from "./todoListItem";

export default {
	props: {
		todos: Array,
	},
	components: {
		todoListFilter,
		todoListItem,
	},
	methods: {
		removeTodo(todoId) {
			this.$emit('removeTodo', todoId)
		}
	}


}
</script>

<style lang="scss" scoped>
.list {
    font-size: 24px;
    border-bottom: 1px solid #ededed;
}
.item {
    border-bottom: 1px solid #ededed;
    &:last-child {
        border-bottom: 0 none;
    }
}
.footer {
    color: #777;
    padding: 10px 15px;
    text-align: center;
    position: relative;
    font-size: 14px;

    &:before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
}
.footer-content{
    display: flex;
    align-items: center;
	position: relative;
}
.filter {
    flex: 1;
}
</style>