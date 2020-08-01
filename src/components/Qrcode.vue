<template>
  <div class="qrcode-box" v-if="flag">
    <p class="text">请扫二维码在手机浏览</p>
    <img class="qrcode" src="/qrcode.png" alt="二维码"/>
    <div class="close" @click="closeQrcode">关闭</div>
  </div>
</template>

<script lang="ts">
  declare function require(img: string): string;

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Qrcode extends Vue {
    flag?: boolean = true;
    closeQrcode() {
      this.flag = false;
    }
  }
</script>

<style lang="scss" scoped>
  .qrcode-box {
    background: white;
    padding: 0 20px;
    max-width: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    > .close {
      text-align: center;
      padding: 6px 0;
    }

    > .qrcode {
      max-width: 100%;
    }

    > .text {
      text-align: center;
      padding: 6px 0;
      color: rgb(255, 153, 0);
    }
  }

</style>