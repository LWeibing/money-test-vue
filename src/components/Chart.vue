<template>
  <div class="wrapper" ref="wrapper"></div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import echarts from 'echarts';
  import EChartOption = echarts.EChartOption;

  @Component
  export default class Chart extends Vue {
    @Prop() options?: EChartOption;

    mounted() {
      // const width = document.documentElement.clientWidth;
      // this.$refs.container.style.width = `${width + 34}px`;
      // this.$refs.container.style.height = `${(width + 34) * 1.2}px`;
      if (this.options === undefined) {return;}
      const chart = echarts.init(this.$refs.wrapper as HTMLDivElement);
      chart.setOption(this.options);
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    height: 75vh;
  }
</style>