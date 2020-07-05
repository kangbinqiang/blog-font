<template>
  <div class="container">
    <!-- <el-backtop target=".container"></el-backtop> -->
    <!-- 导航区 -->
    <el-card class="nav_back">
      <el-row :gutter="20">
        <el-col :span="6">
          <h3>康斌强的博客</h3>
        </el-col>
        <el-col :span="12">
          <ul class="nav_ul">
            <li>博客首页</li>
            <li>个人博客</li>
            <li>精品文章</li>
            <li>友情链接</li>
          </ul>
        </el-col>
        <el-col :span="5">
          <el-input placeholder="请输入要搜索的内容" suffix-icon="el-icon-search"></el-input>
        </el-col>
        <el-col :span="1">
          <Icon type="logo-github nav_icon" />
          <!-- <Icon class="<Icon type="logo-github" /> nav_icon"></Icon> -->
        </el-col>
      </el-row>
    </el-card>
    <!-- 轮播图和博客介绍 -->
    <el-row :gutter="20" class="index_row">
      <el-col :span="16">
        <el-carousel :interval="4000" type="card">
          <!-- <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>-->
          <el-carousel-item>
            <el-image style="width: 100%; height: 100%" :src="url" class="image_flash"></el-image>
          </el-carousel-item>
          <el-carousel-item>
            <el-image style="width: 100%; height: 100%" :src="url" class="image_flash"></el-image>
          </el-carousel-item>
          <el-carousel-item>
            <el-image style="width: 100%; height: 100%" :src="url" class="image_flash"></el-image>
          </el-carousel-item>
          <el-carousel-item>
            <el-image style="width: 100%; height: 100%" :src="url" class="image_flash"></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="8">
        <el-card class="index_introduce">
          <el-link :underline="false">
            <el-image style="width: 100%; height: 100%" :src="url" class="image_flash"></el-image>
            <span>程序员节是那一天？</span>
          </el-link>
        </el-card>
      </el-col>
    </el-row>
    <!-- 推荐文章 -->
    <el-row :gutter="20" class="index_row">
      <el-col :span="16">
        <el-card class="card_item">
          <h3>#最近更新</h3>
          <el-divider></el-divider>
          <el-row>
            <i class="el-icon-s-flag index_icon">
              <span>Vue</span>
              <span>Node.js</span>
              <span>前端</span>
            </i>
            <h2 class="index_h2">【置顶】自己动手封装一个Element-ui自定义可配置全局公用table组件</h2>
            <p
              class="index_phrase"
            >最近在写公司后台管理项目时，大哥让我自己封装一个table组件，把页面组件都换了，代码好维护些。我们平时在使用element-ui中的table组件时，如果列多的话html结构将会变得非常臃肿，所以自己封装一个table组件来使用还是非常必要的。</p>
            <i class="el-icon-date icon_right">
              <span>2020-07-03 19:30:26</span>
            </i>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <i class="el-icon-s-flag index_icon">
              <span>Java</span>
              <span>前端</span>
            </i>
            <h2 class="index_h2">【置顶】自己动手封装一个Element-ui自定义可配置全局公用table组件</h2>
            <p
              class="index_phrase"
            >最近在写公司后台管理项目时，大哥让我自己封装一个table组件，把页面组件都换了，代码好维护些。我们平时在使用element-ui中的table组件时，如果列多的话html结构将会变得非常臃肿，所以自己封装一个table组件来使用还是非常必要的。</p>
            <i class="el-icon-date icon_right">
              <span>2020-07-03 19:30:26</span>
            </i>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <i class="el-icon-s-flag index_icon">
              <span>MYSQL</span>
              <span>数据库</span>
            </i>
            <h2 class="index_h2">【置顶】自己动手封装一个Element-ui自定义可配置全局公用table组件</h2>
            <p
              class="index_phrase"
            >最近在写公司后台管理项目时，大哥让我自己封装一个table组件，把页面组件都换了，代码好维护些。我们平时在使用element-ui中的table组件时，如果列多的话html结构将会变得非常臃肿，所以自己封装一个table组件来使用还是非常必要的。</p>
            <i class="el-icon-date icon_right">
              <span>2020-07-03 19:30:26</span>
            </i>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <i class="el-icon-s-flag index_icon">
              <span>Java</span>
              <span>前端</span>
            </i>
            <h2 class="index_h2">【置顶】自己动手封装一个Element-ui自定义可配置全局公用table组件</h2>
            <p
              class="index_phrase"
            >最近在写公司后台管理项目时，大哥让我自己封装一个table组件，把页面组件都换了，代码好维护些。我们平时在使用element-ui中的table组件时，如果列多的话html结构将会变得非常臃肿，所以自己封装一个table组件来使用还是非常必要的。</p>
            <i class="el-icon-date icon_right">
              <span>2020-07-03 19:30:26</span>
            </i>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <i class="el-icon-s-flag index_icon">
              <span>Java</span>
              <span>前端</span>
            </i>
            <h2 class="index_h2">【置顶】自己动手封装一个Element-ui自定义可配置全局公用table组件</h2>
            <p
              class="index_phrase"
            >最近在写公司后台管理项目时，大哥让我自己封装一个table组件，把页面组件都换了，代码好维护些。我们平时在使用element-ui中的table组件时，如果列多的话html结构将会变得非常臃肿，所以自己封装一个table组件来使用还是非常必要的。</p>
            <i class="el-icon-date icon_right">
              <span>2020-07-03 19:30:26</span>
            </i>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <i class="el-icon-s-flag index_icon">
              <span>Java</span>
              <span>前端</span>
            </i>
            <h2 class="index_h2">【置顶】自己动手封装一个Element-ui自定义可配置全局公用table组件</h2>
            <p
              class="index_phrase"
            >最近在写公司后台管理项目时，大哥让我自己封装一个table组件，把页面组件都换了，代码好维护些。我们平时在使用element-ui中的table组件时，如果列多的话html结构将会变得非常臃肿，所以自己封装一个table组件来使用还是非常必要的。</p>
            <i class="el-icon-date icon_right">
              <span>2020-07-03 19:30:26</span>
            </i>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <i class="el-icon-s-flag index_icon">
              <span>Java</span>
              <span>前端</span>
            </i>
            <h2 class="index_h2">【置顶】自己动手封装一个Element-ui自定义可配置全局公用table组件</h2>
            <p
              class="index_phrase"
            >最近在写公司后台管理项目时，大哥让我自己封装一个table组件，把页面组件都换了，代码好维护些。我们平时在使用element-ui中的table组件时，如果列多的话html结构将会变得非常臃肿，所以自己封装一个table组件来使用还是非常必要的。</p>
            <i class="el-icon-date icon_right">
              <span>2020-07-03 19:30:26</span>
            </i>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="index_others">
          <!-- 特别推荐 -->
          <h3>#特别推荐</h3>
          <el-divider></el-divider>
          <el-row class="others_row">
            <div>
              <el-badge value="吐血推荐" class="item">Vue入门与实战</el-badge>
            </div>
            <div>
              <el-badge value="new" class="item">浅谈jvm</el-badge>
            </div>
            <div>
              <el-badge is-dot class="item">Synchronized的理解</el-badge>
            </div>
            <div>
              <el-badge is-dot class="item">事物的隔离级别和特性</el-badge>
            </div>
          </el-row>
          <!-- 标签 -->
          <h3>#最新标签</h3>
          <el-divider></el-divider>
          <el-row class="others_row">
            <el-tag type="success">Vue</el-tag>
            <el-tag type="primary">Java</el-tag>
            <el-tag type="info">Go</el-tag>
            <el-tag type="primary">C++</el-tag>
            <el-tag type="danger">Python</el-tag>
            <el-tag type="warning">.net</el-tag>
            <el-tag type="success">函数式</el-tag>
            <el-tag type="primary">分布式</el-tag>
            <el-tag type="info">缓存算法</el-tag>
            <el-tag type="primary">高并发</el-tag>
            <el-tag type="danger">架构师</el-tag>
            <el-tag type="warning">面试</el-tag>
          </el-row>
          <!-- 留言 -->
          <h3>#我的留言</h3>
          <el-divider></el-divider>
          <el-row class="others_row">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-row>
          <el-button type="primary" class="btn_position" @click="writeMessage">我要留言</el-button>

          <!-- 面试 -->
          <h3>#面试那些事</h3>
          <el-divider></el-divider>
          <el-row class="others_row">
            <ul>
              <li>Java多线程模型知识</li>
              <li>阿里、美团、百度干货</li>
              <li>Java虚拟机原理和并发编程</li>
              <li>SpringCloud的那些事</li>
            </ul>
          </el-row>
          <!-- 链接 -->
          <h3>#友情链接</h3>
          <el-divider></el-divider>
          <el-row class="others_row">
            <ul>
              <li>SpringBoot官网</li>
              <li>Vue官网</li>
              <li>MyBatis官网</li>
              <li>SpringCloud</li>
            </ul>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <!-- 留言板 -->
    <el-dialog title="留言板" :visible.sync="messageVisiable" width="50%">
      <el-form :label-position="dialogPosition" label-width="100px">
        <el-form-item label="主题">
          <el-input v-model="message.titel"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea" v-model="message.content"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="messageVisiable = false">取 消</el-button>
        <el-button type="primary" @click="messageVisiable = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-row :gutter="20">
      <el-card class="footer_back">
        <p>该博客上的文章主要来源于各大网站上的摘抄或者原创文章，如有侵权，请及时联系处理</p>
        <p>该博客旨在收藏、分享高质量的文章，让每位初学者少走弯路</p>
        <p>Copyright © 18822253832@163.com All Rights Reserved</p>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allDate: new Date(),
      fit: ["fill", "contain", "cover", "none", "scale-down"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      score: null,
      items: [
        { type: "", label: "标签一" },
        { type: "success", label: "标签二" },
        { type: "info", label: "标签三" },
        { type: "danger", label: "标签四" },
        { type: "warning", label: "标签五" }
      ],
      activeNames: "",
      // 留言板消息
      messageVisiable: false,
      message: {
        title: "",
        content: ""
      },
      dialogPosition: "top"
    };
  },
  created() {},
  methods: {
    handleChange() {},
    // 留言
    writeMessage() {
      this.messageVisiable = true;
    }
  }
};
</script>

<style lang="less" scoped>
.el-col {
  display: flex;
  justify-content: center;
  justify-items: center;
  span {
    font-size: 12px;
    font-weight: 500;
    font-family: "Helvetica Neue";
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.index_introduce {
  height: 300px;
  width: 100%;
  span {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: 40%;
    color: #ffffff;
    font-size: 18px;
  }
}
.image_flash {
  cursor: pointer;
  transition: all 0.3s;
  opacity: 0.6;
}
.image_flash :hover {
  transform: scale(1.1);
}
.index_row {
  margin-top: 15px;
  padding: 0 160px;
}
.card_item {
  width: 100%;
}
.index_others {
  width: 100%;
  margin-bottom: 15px;
}
.others_row {
  margin: 20px 0;
  i {
    font-size: 18px;
  }
  ul {
    li {
      list-style: none;
      margin: 12px 12px;
      background-color: #f6f6f6;
      font-size: 16px;
      padding: 8px 10px;
    }
  }
}
.btn_position {
  width: 100%;
  margin-bottom: 20px;
}
.nav_back {
  background-color: #5ac8fa;
  color: #ffffff;
  h3 {
    // font-size: 28px;
    font: 28px Helvetica Neue, Helvetica, PingFang SC, Tahoma, Arial, sans-serif;
    height: 40px;
    padding-top: 0;
  }
}
.nav_ul {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  li {
    list-style: none;
    font-size: 20px;
    width: 100px;
    height: 40px;
    margin: 0 2px;
    padding: 4px 10px;
  }
}
.el-tag {
  margin: 5px 5px;
}
.index_icon {
  font-size: 18px;
  color: #5ac8fa;
  span {
    margin-left: 15px;
    font-size: 18px;
  }
}
.icon_right {
  float: right;
  padding-right: 20px;
  font-size: 16px;
  span {
    font-size: 16px;
    margin-left: 15px;
  }
}
.nav_icon {
  font-size: 40px;
  // display: flex;
  // justify-content: center;
  // justify-items: center;
  // color: aquamarine;
}
.footer_back {
  margin-top: 100px;
  background-color: #f1f3f7;
  text-align: center;
  p {
    margin: 8px 0;
  }
}
.el-badge {
  font-size: 18px;
  margin: 10px 20px 0 10px;
  padding-right: 6px;
}
.index_h2 {
  margin-top: 10px;
}
.index_phrase {
  margin: 15px 0;
}
</style>