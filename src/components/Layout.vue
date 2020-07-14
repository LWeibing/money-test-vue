<template>
  <div class="layout-box">
    <div class="content" :class="contentPrefix && `${contentPrefix}-content`">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
  export default {
    props:['contentPrefix'],
    name: 'Layout'
  };
</script>

<style lang="scss" scoped>
  .layout-box {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    flex-grow: 1;
    overflow: auto;
  }
</style>