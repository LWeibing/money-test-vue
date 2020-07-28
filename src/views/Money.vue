<template>
  <Layout content-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="record.type"></Tabs>
    <div class="notes">
      <FromItem field-name="备注" place-holder="在这里输入备注" @update:value="onUpdateNotes"></FromItem>
    </div>
    <Tags></Tags>
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

  @Component({
    components: {Tabs, Button, Tags, FromItem, NumberPad},
    computed: {
      recordList() {
        return this.$store.state.recordList;
      }
    }
  })
  export default class Money extends Vue {
    typeList = typeList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };

    created() {
      this.$store.commit('fetchRecord');
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      this.$store.commit('createRecord', this.record);
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