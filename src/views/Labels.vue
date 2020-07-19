<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right"></Icon>
      </router-link>
    </div>
    <div class="create-box">
      <Button @click="creatTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/model/tagListModel';
  import Button from '@/components/Button.vue';

  tagListModel.fetch();
  @Component({
    components: {Button}
  })
  export default class Labels extends Vue {
    tags = tagListModel.data;

    creatTag() {
      const name = window.prompt('请输入新的标签名');
      if (name) {
        const message=tagListModel.creat(name);
        if(message==='重复'){
          window.alert('标签名重复');
        }else if(message==='成功'){
          window.alert('添加成功');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    background: white;
    font-size: 16px;
    padding-left: 16px;

    > .tag {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;

      svg {
        color: #666;
        margin-right: 16px;
      }
    }
  }
  .create-box{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>