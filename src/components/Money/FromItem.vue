<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.fieldName}}</span>
      <template v-if="type==='date'">
        <input :type="type||'text'"
               :value="x(value)"
               @input="onValueChange($event.target.value)"
               :placeholder="placeHolder" :max="x(value)">
      </template>
      <template v-else>
        <input :type="type||'text'"
               :value="value"
               @input="onValueChange($event.target.value)"
               :placeholder="placeHolder">
      </template>
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import dayjs from 'dayjs';

  @Component
  export default class FromItem extends Vue {
    @Prop({required: true}) fieldName!: string;
    @Prop() placeHolder?: string;
    @Prop({default: ''}) value!: string;
    @Prop() type?: string;

    onValueChange(value: string) {
      this.$emit('update:value', value);
    }

    x(isoString: string) {
      return dayjs(isoString).format('YYYY-MM-DD');
    }
  }
</script>

<style lang="scss" scoped>
  .formItem {
    font-size: 14px;
    padding: 6px 16px;
    display: flex;
    align-items: center;

    > .name {
      padding-right: 16px;
    }

    input {
      height: 40px;
      padding: 18px 16px;
      flex-grow: 1;
      background: white;
      border: 1px solid rgba(255, 153, 0, 0.3);
      border-radius: 20px;
    }
  }
</style>