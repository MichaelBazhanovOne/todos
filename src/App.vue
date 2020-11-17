<template>
  <!-- http://todomvc.com/examples/vue/#/all -->
  <div class="container">
    <h1 class="root-todo">TODOS</h1>

    <router-view></router-view>

    <h2 class="todo-subtitle-1">Creator and Designer</h2>
    <h3 class="todo-subtitle-2">Бажанов Михаил</h3>
  </div>
</template>

<script>
import todo from "./components/todo";

export default {
  name: 'app',
  components: {
    todo
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    background: linear-gradient(#f5f5f5, #2d7ca247);
    min-height: 100vh;
    color: #607d8b;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 16px;
    }

ul {
    margin: 0;
    padding: 0;

    li {
        list-style: none;
    }
}

* {
    box-sizing: border-box;
}
.root-todo {
  text-align: center;
  font-size: 70px;
  opacity: 0.5;
  color: #607d8b;
  margin: 0;
  padding: 40px 0;
  box-sizing: border-box;
}
.todo-subtitle-1 {
  text-align: center;
  margin: 0;
  margin-top: 70px;
}
.todo-subtitle-2 {
  text-align: center;
}
</style>

