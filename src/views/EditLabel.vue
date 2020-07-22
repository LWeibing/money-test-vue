<template>
  <Layout>
    <div class="navBar">
      <Icon @click="goBack" class="left" name="left"></Icon>
      <span class="title">编辑标签</span>
      <span class="right"></span>
    </div>
    <div class="form-box">
      <FromItem :value="tag.name"
                @update:value="update"
                field-name="标签" place-holder="标签名"></FromItem>
    </div>
    <div class="button-box">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FromItem from '@/components/Money/FromItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FromItem}
  })
  export default class EditLabel extends Vue {
    tag?: Tag = undefined;

    created() {
      this.tag = window.findTag(this.$route.params.id);
      if (!this.tag) {
        this.$router.replace('/404');
      }
    }

    update(name: string) {
      if (this.tag) {
        window.updateTag(this.tag.id, name);
      }
    }

    remove() {
      if (this.tag)
        if (window.removeTag(this.tag.id)) {
          this.$router.back();
        } else {
          window.alert('删除失败');
        }
    }

    goBack() {
      this.$router.back();
    }
  }
</script>

<style lang="scss" scoped>
  .navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .title {

    }

    > .left {
      width: 24px;
      height: 24px;
    }

    > .right {
      width: 24px;
      height: 24px;
    }
  }

  .form-box {
    background: white;
    margin-top: 8px;
  }

  .button-box {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>