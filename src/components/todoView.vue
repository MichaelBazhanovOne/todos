<template>
  <div class="view-route">
    <h3 class="title">{{ $route.params["todo"] }}</h3>
    <hr />
    <button class="prev" type="button" @click="goBack">Назад</button>
    <!-- <button type="button" @click="goUp">Вперед на главную</button> -->
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);

      // let test = this.$route.params['todo'];
      // console.log( this.$route)
      // console.log(test)
    },
    goUp() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="postcss" scoped>
.view-route {
  .title {
    overflow-wrap: break-word;
  }
  hr {
    border: none;
    height: 2px;
    background-color: #607d8b;
  }
  .prev {
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