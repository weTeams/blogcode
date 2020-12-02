<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="搜索">
        <span slot="label"><i class="el-icon-search"></i>搜索</span>
        <el-tabs v-model="searchActiveName">
          <el-tab-pane
            v-for="item in searchs"
            :label="item.label"
            :name="item.name"
          >
            <div
              class="el-input el-input--medium el-input-group el-input-group--append el-input--prefix el-input--suffix"
            >
              <el-input
                :placeholder="item.tip"
                clearable
                v-model="inputVal"
                @input="handleInput"
                @keypress.native.enter="enterSearch(item.url)"
              >
                <el-button
                  slot="append"
                  @click="handleSearch(item.url)"
                  icon="el-icon-search"
                ></el-button>
              </el-input>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="工具">
        <el-tabs v-model="toolsActiveName">
          <el-tab-pane
            v-for="item in tools"
            :label="item.label"
            :name="item.name"
          >
            <div
              class="el-input el-input--medium el-input-group el-input-group--append el-input--prefix el-input--suffix"
            >
              <el-input
                :placeholder="item.tip"
                clearable
                v-model="inputVal"
                @input="handleInput"
                @keypress.native.enter="enterSearch(item.url)"
              >
                <el-button
                  slot="append"
                  @click="handleSearch(item.url)"
                  icon="el-icon-search"
                ></el-button>
              </el-input>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="社区">
        <el-tabs v-model="communActiveName">
          <el-tab-pane
            v-for="item in communitys"
            :label="item.label"
            :name="item.name"
          >
            <div
              class="el-input el-input--medium el-input-group el-input-group--append el-input--prefix el-input--suffix"
            >
              <el-input
                :placeholder="item.tip"
                clearable
                v-model="inputVal"
                @input="handleInput"
                @keypress.native.enter="enterSearch(item.url)"
              >
                <el-button
                  slot="append"
                  @click="handleSearch(item.url)"
                  icon="el-icon-search"
                ></el-button>
              </el-input>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="代码托管">
        <el-tabs v-model="codeHostActiveName">
          <el-tab-pane
            v-for="item in codehosts"
            :label="item.label"
            :name="item.name"
          >
            <div
              class="el-input el-input--medium el-input-group el-input-group--append el-input--prefix el-input--suffix"
            >
              <el-input
                :placeholder="item.tip"
                clearable
                v-model="inputVal"
                @input="handleInput"
                @keypress.native.enter="enterSearch(item.url)"
              >
                <el-button
                  slot="append"
                  @click="handleSearch(item.url)"
                  icon="el-icon-search"
                ></el-button>
              </el-input>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="求职">
        <el-tabs v-model="jobWantedActiveName">
          <el-tab-pane
            v-for="item in jobwanteds"
            :label="item.label"
            :name="item.name"
          >
            <div
              class="el-input el-input--medium el-input-group el-input-group--append el-input--prefix el-input--suffix"
            >
              <el-input
                :placeholder="item.tip"
                clearable
                v-model="inputVal"
                @input="handleInput"
                @keypress.native.enter="enterSearch(item.url)"
              >
                <el-button
                  slot="append"
                  @click="handleSearch(item.url)"
                  icon="el-icon-search"
                ></el-button>
              </el-input>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="服务器">
        <ul class="servers">
          <li><a target="_blank" href="https://www.aliyun.com/">阿里云</a></li>
          <li>
            <a target="_blank" href="https://cloud.tencent.com/">腾讯云</a>
          </li>
          <li><a target="_blank" href="https://www.west.cn/">西部数码</a></li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
const types = require("../../public/js/search");
export default {
  name: "Search",
  data() {
    return {
      searchActiveName: "baidu",
      toolsActiveName: "weightfind",
      communActiveName: "MDN",
      codeHostActiveName: "github",
      jobWantedActiveName: "lagou",
      searchs: types.searchs,
      tools: types.tools,
      communitys: types.communitys,
      codehosts: types.codehosts,
      jobwanteds: types.jobwanteds,
      inputVal: "",
    };
  },

  methods: {
    handleInput(event) {
      this.inputVal = event;
    },

    handleSearch(url) {
      const key = this.inputVal;
      console.log(url);
      const openUrl = `${url}${key}`;
      console.log(openUrl);
      if (this.inputVal) {
        window.open(openUrl, "_blank");
        this.inputVal = "";
      } else {
        this.$message({
          message: "亲,请您输入关键词后进行搜索哦!",
          showClose: true,
          type: "warning",
          center: true,
          duration: 4000,
        });
      }
    },

    enterSearch(url) {
      const key = this.inputVal;
      const openUrl = `${url}${key}`;
      if (this.inputVal) {
        window.open(openUrl, "_blank");
        this.inputVal = "";
      } else {
        this.$message({
          message: "亲,请您输入关键词后进行搜索哦!",
          showClose: true,
          type: "warning",
          center: true,
          duration: 4000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.servers {
  display: flex;
  justify-content: start;
  li {
    margin-right: 20px;
  }
}
</style>