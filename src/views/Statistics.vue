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
  import intervalList from '@/contants/intervalList';
  import typeList from '@/contants/typeList';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    type = '-';
    interval = 'day';
    typeList = typeList;
    intervalList = intervalList;
  }
</script>

<style lang="scss" scoped>
  ::v-deep .type-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }

  ::v-deep .interval-tabs-item {
    height: 48px;
  }
</style>