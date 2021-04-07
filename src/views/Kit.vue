<template>
<div class="layout">
  <Topnav toggleMenuButtonVisible class="nav" />
  <div class="content">
    <aside v-if="menuVisible">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/kit/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/kit/install">安装</router-link>
        </li>
        <li>
          <router-link to="/kit/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/kit/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/kit/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/kit/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/kit/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import { inject,Ref } from "vue";
export default {
  components: {
    Topnav
  },
  setup() {
    const menuVisible = inject < Ref < boolean >> ('menuVis'); // get
    return {
      menuVisible
    };
  },
};
</script>

<style lang="scss" scoped>
$aside-index : 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  >.nav {
    flex-shrink: 0;
  }
  >.content {
    flex-grow: 1;
    padding-top: 50px;
    // padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  >aside {
    flex-shrink: 0;
  }
  >main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: lightblue;
  width: 150px;
  padding: 16px 0;
  
  padding-top: 20px;
  height: 100%;
  z-index: $aside-index;
  @media (max-width :500px) {
    position: fixed;
    top: 0;
    left: 0;
  }
  >h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  >ol {
    >li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: white;
      }
    }
  }
}
main {
  overflow: auto;
}

</style>