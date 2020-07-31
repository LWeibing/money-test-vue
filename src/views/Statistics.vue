<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"></Tabs>
    <ol v-if="groupedList.length>0">
      <li v-for="(group,index) in groupedList" :key="index">
        <h3 class="title">{{timeTitle(group.title)}}<span>¥ {{group.total}}</span></h3>
        <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>¥ {{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="no-record">
      目前没有相关记录
    </div>
  </Layout>
</template>

<script lang="ts">
  import Tabs from '@/components/Tabs.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import typeList from '@/contants/typeList';
  import dayjs from 'dayjs';
  import clone from '@/lib/clone';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    tagString(tags: Tag[]) {
      return tags.length === 0 ? '无' : tags.map(t => t.name).join(', ');
    }

    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    get groupedList() {
      const {recordList} = this;
      type Result = {
        title: string; total?: number; items: RecordItem[];
      }[]
      const newList = clone(recordList).filter(r => r.type === this.type).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      if (newList.length === 0) {return [];}
      const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
          last.items.push(current);
        } else {
          result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
        }
      }
      result.map(group => {
        group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
      });
      return result;
    }

    timeTitle(string: string) {
      const day = dayjs(string);
      const now = dayjs();
      if (day.isSame(now, 'day')) {
        return '今天';
      } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
      } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
        return '前天';
      } else if (day.isSame(now, 'year')) {
        return day.format('MM月D日');
      } else {
        return day.format('YYYY年MM月D日');
      }
    }

    beforeCreate() {
      this.$store.commit('fetchRecord');
    }

    type = '-';
    typeList = typeList;
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .no-record {
    padding: 16px;
    text-align: center;
    color: #999;
  }

  %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .title {
    @extend %item;
    color: rgb(255, 153, 0);
    border-bottom: 1px solid rgb(255, 153, 0);
  }

  .record {
    background: white;
    @extend %item
  }

  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
</style>