<template>
  <div class="nav">
    <router-link to="/money">
      <Icon name="money"/>
      Money
    </router-link>
    |
    <router-link to="/labels">
      <Icon name="label"/>
      Label</router-link>
    |
    <router-link to="/statistics">
      <Icon name="statistics"/>
      Statistics</router-link>
  </div>
</template>

<script lang="ts">
  // import x from '@/assets/icons/money.svg';
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  .nav {
    border: 1px solid red;
  }
</style>