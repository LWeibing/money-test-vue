<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"></Tabs>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"></Tabs>
    <div></div>
  </Layout>
</template>

<script lang="ts">
  import Tabs from '@/components/Tabs.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    type = '-';
    interval = 'day';
    typeList = [
      {text: '支出', value: '-'},
      {text: '收入', value: '+'}
    ];
    intervalList = [
      {text: '按天', value: 'day'},
      {text: '按周', value: 'week'},
      {text: '按月', value: 'mouth'}
    ];
  }
</script>

<style lang="scss" scoped>
  ::v-deep .type-tabs-item{
    background: white;
    &.selected{
      background: #c4c4c4;
      &::after{
        display: none;
      }
    }
  }
  ::v-deep .interval-tabs-item{
    height: 48px;
  }
</style>