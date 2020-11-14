<template>
	<div class="todo-list">

		<div class="content">
			<ul class="list">
				<li class="item" v-for="(todo,index) in todos" :key="index">

					<todo-list-item
						:todo="todo"
					/>

				</li>

			</ul>
		</div>

		<div class="footer">
			<div class="footer-content">

				<div class="counter">{{counterTodos}} items left</div>

				<div class="filter">
					<todo-list-filter />
				</div>

				<div :class="['clear', {show:buttonClearTodos}]">
					<button
						@click="clearTodos"
						type="button">Clear completed
					</button>
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
		counterTodos: Number,
		buttonClearTodos: Boolean,
	},
	components: {
		todoListFilter,
		todoListItem,
	},
	methods: {
		clearTodos() {
			this.$emit('clearTodos')
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
.clear {
	visibility: hidden;

	&.show {
		visibility: visible;
	}
	button {
		border: none;
		background: transparent;
		font-weight: 300;
		color: inherit;
		cursor: pointer;
		border: 1px solid transparent;
		border-radius: 3px;
		outline: none;
		transition: background-color ease 0.4s, color ease 0.4s;

		&:hover {
			background-color: #f6f6f6;
			color: black;
		}
	}
}


</style>