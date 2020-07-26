<template>
  <Layout content-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
    <Types :value.sync="record.type"></Types>
    <div class="notes">
      <FromItem field-name="备注" place-holder="在这里输入备注" @update:value="onUpdateNotes"></FromItem>
    </div>
    <Tags></Tags>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FromItem from '@/components/Money/FromItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import store from '@/store/index2';

  @Component({
    components: {Tags, FromItem, Types, NumberPad},
    computed:{
      recordList(){
        return store.recordList;
      }
    }
  })
  export default class Money extends Vue {
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      store.createRecord(this.record);
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