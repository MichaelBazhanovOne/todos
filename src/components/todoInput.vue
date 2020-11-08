<template>
	<div class="todo-input">
		<input class="input" type="text" placeholder="Todo Name" autofocus>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.todo-input {
	position: relative;
}
.input {
	font-size: 24px;
	padding: 16px 16px 16px 60px;
	border: 1px solid transparent;
	box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
	line-height: 1.4em;
	outline: none;
	color: inherit;
	width: 100%;
	background: #fff;
}
.arrow {
	padding: 0;
	margin: 0;
	border: none;
	background-color: transparent;
	outline: none;
	cursor: pointer;
	position: absolute;
	top: 50%;
	left: 0;
	transform: translate(25px, -50%);
	width: 20px;
	height: 20px;
}
.arrow.select {
	opacity: 0.2;
}
.todo-input {
	position: relative;
}
.error {
	color: red;
	position: absolute;
	bottom: 100%;
	left: 0;
	font-style: italic;
}
.valid-error {
	border: 1px solid red;;
}
</style>