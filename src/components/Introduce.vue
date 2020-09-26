<template>
  <div class="introduce">
    <h2 v-html="title"></h2>
    <p v-html="content"></p>
  </div>
</template>

<script>
export default {
  name:"introduce",
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.introduce {
  margin-bottom: 20px;
  p {
    margin: 10px 0;
    padding: 0 10px;
  }
}
</style>