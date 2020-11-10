<template>
  <div>
       <div class="feedback-box">
          <div @click="handleShareCopy"><img src="/images/feedback/icon-share.png" />分享</div>
          <div @click="handleFeedBack('http://itclancoder.mikecrm.com/WkvRFA4')"><img src="/images/feedback/icon-experiense.png" />留言</div>
          <div @click="handleAnswer('http://itclancoder.mikecrm.com/wkgblhv')"><img src="/images/feedback/icon-dspel.png" />解答</div>
          <div @click="handleColect"><img src="/images/feedback/icon-collect.png" />收藏</div>
       </div>
  </div>
</template>

<script>
  
  export default {
    name: "FeedBack",
    data() {
      return {
        msgpath: `http://coder.itclan.cn${this.$route.path}`,
      }
    },

    methods: {
      // 复制分享
      handleShareCopy() {
         this.$copyText(this.msgpath).then((e)=> {
          this.$message({
             message: `恭喜您已成功复制到剪切板,试试与他人分享吧`,
             type: 'success',
             duration: 4000,
             center: true
          });
        }, function (e) {
          alert('Can not copy')
        })
      },
      // 留言
      handleFeedBack(openUrl) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '亲,您即将前往留言,是时候开始你真正的表达了',
          theme: 'round-button',
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        }).then(() => {
          // on confirm 确认
           window.open(openUrl, "_blank");
        })
         .catch(() => {
           // on cancel // 取消
        })
      },

      handleAnswer(openUrl) {
         this.$dialog.confirm({
          title: '温馨提示',
          message: '亲,此项为付费解答服务,我在等风,也在等你',
          theme: 'round-button',
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        }).then(() => {
          // on confirm 确认
           window.open(openUrl, "_blank");
        })
         .catch(() => {
           // on cancel // 取消
        })
      },

      handleColect() {
        this.$message({
             message: `键盘侠不止有ctrl+c,ctrl+v,还有ctrl+D`,
             type: 'success',
             duration: 4000,
             center: true
          });
      }
    
    }
  }
</script>

<style lang="scss" scoped>
.feedback-box {
  display: flex;
  color: #42b983;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin-bottom: 15px;
  div {
    cursor: pointer;
    img {
      display: inline-block;
      vertical-align: middle;
      width: 22px;
      height: 22px;
      margin-right:5px;
    }
  }
  
}

.feedback-content, .answer-content {
   box-shadow: 0 0 3px solid rgba(0,0,0,0.5);
   border: 1px solid #ccc;
   position: relative;
   .close-content {
     position: absolute;
     right: 20px;
     top: 20px;
     cursor: pointer;
   }
}
</style>