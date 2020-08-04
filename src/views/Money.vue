<template>

  <Layout content-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
    <div class="createdAt">
      <FromItem field-name="日期" type="date" :value.sync="record.createdAt"></FromItem>
    </div>
    <div class="notes">
      <FromItem field-name="备注" place-holder="在这里输入备注" :value.sync="record.notes"></FromItem>
    </div>
    <Tags @update:value="record.tags=$event"></Tags>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="record.type"></Tabs>
    <template v-if="metaWidth>500">
      <Qrcord></Qrcord>
    </template>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FromItem from '@/components/Money/FromItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import Tabs from '@/components/Tabs.vue';
  import typeList from '@/contants/typeList';
  import Qrcord from '@/components/Qrcode.vue';

  @Component({
    components: {Qrcord, Tabs, Button, Tags, FromItem, NumberPad},
    computed: {
      recordList() {
        return this.$store.state.recordList;
      }
    }
  })
  export default class Money extends Vue {
    metaWidth = document.documentElement.clientWidth;
    typeList = typeList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0, createdAt: new Date().toISOString()
    };

    created() {
      this.$store.commit('fetchRecord');
    }

    saveRecord() {
      if (!this.record.tags || this.record.tags.length === 0) {
        return window.alert('请至少选择一个标签');
      }
      this.$store.commit('createRecord', this.record);
      if (this.$store.state.createRecordError === null) {
        window.alert('已保存');
        this.record.notes = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
  ::v-deep .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }

  .notes {
    min-height: 60px;
    padding: 6px 0;
    background: #eeeeee;
  }
  .createdAt {
    min-height: 60px;
    padding: 6px 0;
    background: #eeeeee;
    margin-top: -6px;
  }
</style>