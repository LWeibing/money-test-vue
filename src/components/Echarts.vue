<template>
  <div ref="container"></div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import echarts from 'echarts';

  @Component
  export default class Echarts extends Vue {
    get option() {
      return {
        option: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        }
      };
    }

    mounted() {
      const width = document.documentElement.clientWidth;
      this.$refs.container.style.width = `${width - 20}px`;
      this.$refs.container.style.height = `${(width - 20) * 1.2}px`;
      this.chart = echarts.init(this.$refs.container, 'dark');
      this.chart.setOption(this.option.option);
    }
  }
</script>

<style lang="scss" scoped>

</style>