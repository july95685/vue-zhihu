<template>
  <div id="app">
    <header class="header">
      <i v-if="flag" class="iconfont icon-ic_menu" @click="toggle()"></i>
      <i v-if="!flag" class="iconfont icon-ic_back" @click="back()"></i>
    </header>
    <aside class="aside open" :class="{docked:docked}">
      <ul>
        <li class="chose">
          <span>首页</span>
          <i class="iconfont iconcolor icon-ic_star_black"  />
        </li>
        <li v-for="(x, index) in list"  @click="change(x.id)">
          <span>{{x.name}}</span>
          <i class="iconfont icon-ic_star"  />
        </li>
        <li>
          <span>项目地址</span>
          <i class="iconfont icon-github"  />
        </li>
      </ul>
      <div class="cover" @click="prevent">

      </div>
    </aside>
    <router-view  class="app-view"> </router-view>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import api from './api/index'
export default {
  computed:{
    ...mapState({
      circle:state => state.circleFlag,
      num: state => state.num,

    })
  },
  mounted:function(){
    let vue = this;
    api.getTopics().then(function(data){
      console.log(data);
    })
  },
  data(){
    return {
      list:[],
      timer:'',
      flag:false,
      open:false,
      docked:false,
      transitionName: 'slide-left'
    }
  },
  mounted: function() {
    let vue = this;
    api.getTopics().then(function(data) {
      console.log(data);
      vue.list = data.data.others;
    });
  },
  watch:{

  },
  methods:{
    back(n){
      console.log('back');
      this.flag = !this.flag;
    },
    toggle(){
      console.log('toggle');
      this.flag = !this.flag;
      console.log(this.flag);
      this.docked = true;
    },
    prevent(){
      console.log(223);
      this.docked = false;
    },
    change(id){
      console.log('change');
      var path = '/theme'
      this.$router.push({
        path: path,
        query: {
          id: id || ""
        }
      });
    }
  }
}
</script>

<style lang="less">


  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50vw, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0.1;
    -webkit-transform: translate(-50vw, 0);
  }

  .app-view {
    z-index: 1;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    position: absolute;
    transition: transform 0.3s ease;
    -webkit-overflow-scrolling: touch;
  }

  .app-view-hidden {
    overflow: hidden;
  }

  .header {
    width: 100%;
    height: 81px;
    z-index: 9;
    padding-left: 5%;
    position: fixed;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.51) 95%);
    .iconfont {
      color: #fff;
      font-size: 40px;
      top: 20%;
      position: relative;
    }
  }

  .aside {
    z-index: 11;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    visibility: hidden;
    &::-webkit-scrollbar {
      display: none!important;
      width: 0!important;
      height: 0!important;
      -webkit-appearance: none;
      opacity: 0!important;
    }
    ul {
      margin: 0;
      float: left;
      width: 60%;
      height: 100%;
      padding: 1.3rem 0.5rem 0.5rem;
      overflow: auto;
      background: rgba(91, 116, 146, 0.75);
      transform: translate(-100%, 0);
      transition: transform 0.3s ease;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none!important;
        width: 0!important;
        height: 0!important;
        -webkit-appearance: none;
        opacity: 0!important;
      }
    }
    li {
      cursor: pointer;
      font-size: 0.43rem;
      list-style: none;
      color: #fff;
      margin-top: 20px;
      .iconfont {
        float: right;
        font-size: 0.6rem;
      }
      &.chose {
        color: #FFD300;
      }
    }
    .cover {
      width: 100%;
      height: 100%;
      opacity: 0;
      display: none;
      background: rgba(172, 185, 201, 0.40);
      transition: opacity 0.3s ease;
    }
    &.open {
      ul {
        transform: translate(0);
      }
      .cover {
        opacity: 1;
      }
    }
    &.docked {
      visibility: visible;
      .cover {
        display: block;
      }
    }
  }

  .circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.80);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
    right: 5%;
    bottom: 5vw;
    position: fixed;
    z-index: 10;
    i {
      top: 50%;
      left: 50%;
      font-size: 0.6rem;
      color: #ACB9C9;
      transform: translate(-50%, -50%);
      position: absolute;
    }
  }

  @media screen and (min-width: 640px) {
    .app-view {
      width: 640px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .aside ul {
      width: 350px;
    }
  }


@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_89tkzniqghvholxr.eot?t=1489542174167'); /* IE9*/
  src: url('//at.alicdn.com/t/font_89tkzniqghvholxr.eot?t=1489542174167#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/font_89tkzniqghvholxr.woff?t=1489542174167') format('woff'), /* chrome, firefox */
  url('//at.alicdn.com/t/font_89tkzniqghvholxr.ttf?t=1489542174167') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_89tkzniqghvholxr.svg?t=1489542174167#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-github:before { content: "\e69f"; }

.icon-ic_menu:before { content: "\e601"; }

.icon-ic_back:before { content: "\e602"; }

.icon-ic_star:before { content: "\e603"; }

.icon-ic_star_black:before { content: "\e604"; }

.icon-ic_top:before { content: "\e605"; }


</style>
