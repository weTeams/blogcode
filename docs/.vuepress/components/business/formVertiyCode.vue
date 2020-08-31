<template>
  <div>
    <el-input class="el-input" placeholder="请输入手机号码" v-model="input" clearable></el-input>
    <el-button @click="handleElBtn">{{btnText}}</el-button>
  </div>
</template>

<script>
import { Input, Message } from "element-ui";

export default {
  name: "formVertiyCode",
  data() {
    return {
      input: "",
      btnText: "获取验证码"
    };
  },
  methods: {
    handleElBtn() {}
  }
};
</script>

<style lang="scss" scoped>
.el-input {
  width: 50%;
}
</style>