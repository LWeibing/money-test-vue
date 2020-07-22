<template>
  <Layout content-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
    <Types :value.sync="record.type"></Types>
    <div class="notes">
      <FromItem field-name="备注" place-holder="在这里输入备注" @update:value="onUpdateNotes"></FromItem>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"></Tags>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FromItem from '@/components/Money/FromItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component, Watch} from 'vue-property-decorator';
  import recordListModel from '@/model/recordListModel';

  const recordList = recordListModel.fetch();

  @Component({
    components: {Tags, FromItem, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = window.tagList;
    recordList: RecordItem[] = recordList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      recordListModel.create(this.record);
    }

    @Watch('recordList')
    onRecordListChange() {
      recordListModel.save();
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }

  .notes {
    padding: 12px 0;
  }
</style>