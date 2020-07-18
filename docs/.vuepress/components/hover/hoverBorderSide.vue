<!--
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product: 
 * @Mode Name: 
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-07-18 21:43:35
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2020-07-18 22:49:43
 * @Description: 
-->
<template>
  <div>
    <div class="underline">下划线由中间向两侧展开</div>
  </div>
</template>

<script>
export default {
  name: 'hoverBorderSide',
};
</script>

<style lang="scss" scoped>
.underline {
  width: 200px;
  height: 50px;
  background: #eee;
  margin: 10px auto;
  text-align: center;
  line-height: 50px;
  position: relative;
  cursor: pointer;
}

.underline::after {
  content: '';
  width: 0;
  height: 2px;
  background: #42b983;
  position: absolute;
  top: 100%;
  left: 50%;
  transition: all 0.8s;
}

.underline:hover:after {
  left: 0%;
  width: 100%;
  transition: all 0.8s;
}
</style>
