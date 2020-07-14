<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tags'
  };
</script>

<style lang="scss" scoped>
  .tags {
    font-size: 14px;
    padding: 16px;
    display: flex;
    flex-grow: 1;
    flex-direction: column-reverse;

    > .current {
      display: flex;
      flex-wrap: wrap;

      > li {
        background: #d9d9d9;
        height: 24px;
        line-height: 24px;
        border-radius: (24px/2);
        padding: 0 1.3em;
        margin-right: 12px;
        margin-top: 6px;
      }
    }

    > .new {
      padding-top: 16px;

      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>