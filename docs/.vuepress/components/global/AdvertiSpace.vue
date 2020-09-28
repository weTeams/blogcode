<template>
  <div>
    <div class="carousel">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in carouses" :key="item.id">
          <a :href="item.href" @click="handleItem" :target="target">
            <img :src="item.imgUrl" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      closeonclickmodal="false"
      width="30%"
      center
    >
      <span>如需合作:请您联系站长,添加微信:suibichuanji,期待我们合作愉快</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
export default {
  name: "AdvertiSpace",
  data() {
    return {
      carouses: [
        {
          imgUrl: "/images/ads.png",
          text: "广告位招租",
          id: "1",
          href: "javascript:;",
          target: "_blank"
        },

        {
          imgUrl: "/images/ads.png",
          text: "广告位招租",
          id: "2",
          href: "javascript:;",
          target: "_blank"
        }
      ],
      centerDialogVisible: false
    };
  },
  methods: {
    handleItem() {
      this.carouses.forEach(item => {
        if (item.href != "javascript:;") {
          item.target = "_blank";
          item.href = item.href;
        } else {
          item.target = "_self";
          this.centerDialogVisible = true;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 960px) {
  .carousel {
    position: fixed;
    bottom: 58px;
    right: 0px;
    border: 1px solid #dcdcdc;
    width: 160px;
    height: 150px;
  }
}

@media screen and (max-width: 768px) {
  .carousel {
    display: none;
  }
}
</style>