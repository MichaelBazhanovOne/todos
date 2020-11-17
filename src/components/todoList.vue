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

import { mapMutations } from 'vuex'

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
		...mapMutations(['removeTodoChecked_V']),

		clearTodos() {
			// this.$emit('clearTodos')
			this.removeTodoChecked_V() //vuex
		}
	}


}
</script>

<style lang="scss" scoped>
.content {
	position: relative;
	z-index: 1;
}
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
	background-color: #fff;
    padding: 10px 20px;
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
	flex-wrap: wrap;
	justify-content: space-between;
	position: relative;

	@media (min-width: 480px) {

		.counter {

		}
		.filter {
			order: 3;
			padding-top: 0px;
			width: 40%;
		}
		.clear {
			order: 5;
		}
	}

}
.counter {
	order: 1;
	// flex-grow: 1;
	// width: 33.333333%;
}
.filter {
	order: 3;
	// flex-grow: 1;

	width: 100%;

	padding-top: 10px;


	&>div {
		display: flex;
		justify-content: center;
		align-items: center;
		button {
			flex-grow: 1;
		}
	}
}
.clear {
	order: 2;
	// width: 33.333333%;
	// flex-grow: 1;

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