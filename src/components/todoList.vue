<template>
	<div class="todo-list">

		<div class="content">
			<ul class="list">
				<li class="item">
					<div class="todo-item">
						<label class="label">
							<div class="input-block">
								<input class="input" type="checkbox">
							</div>
							<div class="title">todo name</div>
						</label>
						<div class="button">
							<button class="remove" type="button">x</button>
						</div>
					</div>
				</li>
				<li class="item">
					<div class="todo-item">
						<label class="label">
							<div class="input-block">
								<input class="input" type="checkbox">
							</div>
							<div class="title">todo name</div>
						</label>
						<div class="button">
							<button class="remove" type="button">x</button>
						</div>
					</div>
				</li>
			</ul>
		</div>

		<div class="footer">
			<div class="footer-content">

				<div class="counter">10 осталось заданий</div>

				<div class="filter">
					<todo-list-filter />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import todoListFilter from "./todoListFilter";

export default {
	components: {
		todoListFilter
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

//
.label {
	display: flex;
	align-items: center;
	flex-grow: 1;
}
.todo-item {
	display: flex;
	align-items: center;
}
.input-block {
	width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.title {
	padding: 15px 0;
	display: block;
	line-height: 1.2;
}
.button {
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.remove {
	background: transparent;
	border: none;
	color: firebrick;
	cursor: pointer;
	font-size: 20px;
	visibility: hidden;
}
.todo-item {
	display: flex;
	align-items: center;
	&:hover {
		.remove {
			visibility: visible;
		}
	}
}
</style>