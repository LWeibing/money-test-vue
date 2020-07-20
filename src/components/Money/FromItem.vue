<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.fieldName}}</span>
      <input type="text"
             :value="value"
             @input="onValueChange($event.target.value)"
             :placeholder="placeHolder">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class FromItem extends Vue {
    @Prop({required: true}) fieldName!: string;
    @Prop() placeHolder?: string;
    @Prop({default: ''}) value!: string;


    onValueChange(value: string) {
      this.$emit('update:value', value);
    }
  }
</script>

<style lang="scss" scoped>
  .formItem {
    font-size: 14px;
    padding: 0 16px;
    display: flex;
    align-items: center;

    > .name {
      padding-right: 16px;
    }

    input {
      height: 40px;
      padding: 32px 0;
      flex-grow: 1;
      background: transparent;
      border: none;
    }
  }
</style>