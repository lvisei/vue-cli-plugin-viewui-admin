<template>
  <div class="page-401">
    <div class="page-401__image"></div>
    <div class="page-401__title">401</div>
    <div class="page-401__subtitle">抱歉，您无相关权限访问该页面!</div>
    <div class="page-401__extra">
      <i-button type="primary" to="/">返回首页</i-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page401',

  components: {},

  props: {},

  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  updated() {},

  beforeDestroy() {},

  methods: {}
}
</script>

<style lang="less">
.page-404 {
  &__title {
    color: rgba(0, 0, 0, 0.85);
    font-size: 24px;
    line-height: 1.8;
    text-align: center;
  }

  &__subtitle {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 1.6;
    text-align: center;
  }

  &__extra {
    margin-top: 32px;
    text-align: center;
  }
}
</style>
