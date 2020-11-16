<template>
  <div>
    <div
      class="fold-button"
      v-bind:class="[onOff === true ? 'fold-button' : 'close-fold-btn']"
      @click="handleFoldBtn(onOff)"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="el-zoom-in-center">
      <div class="fixed-container" v-show="fixContainerShow">
        <div class="public-code">
          <h4>关注公众号</h4>
          <p>一个走心,有温度的号,同千万同行一起交流学习</p>
          <img class="medium-zoom lazy" loading="lazy" src="/images/rightBarImgs/itclancoder-code.jpg" alt />
        </div>
        <div class="person-code">
          <h4>加作者微信</h4>
          <p>
            扫二维码 备注
            <span>加群</span>
          </p>
          <img class="medium-zoom lazy" loading="lazy" src="/images/rightBarImgs/other-author-code.jpg" alt />
        </div>
        <div class="person-code">
          <h4>扫码易购</h4>
          <p>
            福利推荐
          </p>
          <img class="medium-zoom lazy" loading="lazy" src="/images/rightBarImgs/xiaoshangdian.jpg" alt />
        </div>
      </div>
     </transition>
  </div>
</template>
<script>
export default {
  name: "AttionFixed",
  data() {
    return {
      onOff: true, // 默认开关,开启
      fixContainerShow: true // 默认显示
    };
  },
  methods: {
    handleFoldBtn(onOff) {
      if (onOff) {
        this.fixContainerShow = false;
        this.onOff = false;
      } else {
        this.fixContainerShow = true;
        this.onOff = true;
      }
    }
  }
};
</script>
<style lang="stylus">
.close-fold-btn {
  transform: rotate(90deg);
  transition: all 0.5s ease;
}

.fold-button {
  display: none;
  background: #42b983;
  transition: all 0.5s ease;

  span {
    display: block;
    cursor: pointer;
    width: 1.25rem;
    height: 1px;
    margin-top: 4px;
    background: #fff;
  }
}

@media (min-width: 960px) {
  .fold-button {
    display: block;
    position: fixed;
    top: 60px;
    right: 70px;
    cursor: pointer;
  }
}

.fixed-container {
  display: none;
}

@media (min-width: 960px) {
  .fixed-container {
    background: #fff;
    display: block;
    position: fixed;
    z-index: 888;
    right: 1px;
    top: 75px;
    width: 140px;
    padding: 0 10px 10px 10px;
    text-align: center;
    background-color: #fff;
    box-shadow: -1px 0 2px 0.5px #42b983;
    color: #42b983;
    h4 {
      font-size: 15px;
      color: #42b983;
      margin: 8px 0;
    }

    p {
      font-size: 12px;
      margin: 0;
    }

    img {
      cursor: pointer;
      width: 90px;
    }
  }
}
</style>
