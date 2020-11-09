<template>
  <div>
       <div class="feedback-box">
          <div @click="handleShareCopy"><img src="/images/feedback/icon-share.png" />分享</div>
          <div @click="handleFeedBack"><img src="/images/feedback/icon-experiense.png" /></img>留言</div>
          <div @click="handleAnswer"><img src="/images/feedback/icon-dspel.png" />解答</div>
          <div @click="handleColect"><img src="/images/feedback/icon-collect.png" />收藏</div>
       </div>
       <el-collapse-transition>
          <div class="feedback-content" v-show="feedbackStatus">
              <div class="close-content" @click="handleCloseContent">
                  <img width="20" height="20" src="/images/feedback/icon-close.png" alt="">
              </div>
              <iframe height="600" allowTransparency="true" scrolling="no" style="display:block;min-width:100%;width:100px;border:none;overflow:auto;" frameborder="0" src="http://itclancoder.mikecrm.com/WkvRFA4"></iframe>
          </div>
       </el-collapse-transition>
       <el-collapse-transition>
          <div class="answer-content" v-show="answerStatus">
              <div class="close-content" @click="handleCloseContent">
                  <img width="20" height="20" src="/images/feedback/icon-close.png" alt="">
              </div>
              <iframe height="600" allowTransparency="true" scrolling="no" style="display:block;min-width:100%;width:100px;border:none;overflow:auto;" frameborder="0" src="http://itclancoder.mikecrm.com/WkvRFA4"></iframe>
          </div>
       </el-collapse-transition>
  </div>
</template>

<script>
  
  export default {
    name: "FeedBack",
    data() {
      return {
        msgpath: this.$route.path,
        feedbackStatus: false,
        answerStatus: false
      }
    },

    methods: {
      // 复制分享
      handleShareCopy() {
         this.$copyText(this.msgpath).then((e)=> {
          console.log(e)
          const copyUrl = e.text;
          this.$message({
             message: `恭喜您已成功复制到剪切板,试试与他人分享吧`,
             type: 'success',
             duration: 4000,
             center: true
          });
        }, function (e) {
          alert('Can not copy')
          console.log(e)
        })
      },
      // 留言
      handleFeedBack() {
         this.feedbackStatus = true;
      },

      handleAnswer() {
         this.answerStatus = true;
      },
      
      handleCloseContent() {
        this.feedbackStatus = false;
        this.answerStatus = false;
      },

      handleColect() {
        this.$message({
             message: `键盘侠不能只有ctrl+c,ctrl+v,还有ctrl+D,以及点击右上角`,
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