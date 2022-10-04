<template>
  <div class="home-viewport">
    <span class="home-font"> 测试字体大小 </span>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  props: {},
  created() {},
  mounted() {
    console.log(window.screen.width) // view port width
  },
  beforeDestroy() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.home-viewport {
  background-color: #9e9595a1;
  font-size: 16px;
  font-weight: 400;
  height: 224px;
  line-height: 224px;
  margin: 10px auto;
  opacity: 1;
  text-align: center;
  width: 295px;
  border-radius: 8px;
}

.home-font {
  color: #000;
  letter-spacing: 0.64px;
}
</style>
