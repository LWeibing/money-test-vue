<template>
  <Layout>
    <ol class="tags">
      <li>
        <span>衣</span>
        <Icon name="right"></Icon>
      </li>
      <li><span>食</span>
        <Icon name="right"></Icon>
      </li>
      <li><span>住</span>
        <Icon name="right"></Icon>
      </li>
      <li><span>行</span>
        <Icon name="right"></Icon>
      </li>
    </ol>
    <div class="create-box">
      <button class="create">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
  export default {
    name: 'Labels'
  };
</script>

<style lang="scss" scoped>
  .tags{
    background: white;
    font-size: 16px;
    padding-left: 16px;
    >li{
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      svg{
        color: #666;
        margin-right: 16px;
      }
    }
  }
  .create{
    background: #757575;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
    &-box{
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }
</style>