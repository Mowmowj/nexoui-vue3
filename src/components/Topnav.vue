<template>
        <div class="nav">
            <div class="logo" @click.stop.prevent="toggleMenu">LOGO</div>
            <ul class="menu">
                <li>菜单1</li>
                <li>菜单2</li>
            </ul>
        </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default{
    setup(){
        let menuVisible = inject<Ref<boolean>>('menuVis')//get menuVis
        const toggleMenu = ()=>{
          menuVisible.value = !menuVisible.value
        }
        return {toggleMenu}
    }
}
</script>
<style lang="scss" scoped>
$color: #007974;
.nav {
  color: $color;
  background-color: pink;
  display: flex;
  padding: 16px;
  top: 0;
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  >.logo {
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
    }
  }
  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li {
      margin: 0 1em;
    }
  }
  >.toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
  }
  @media (max-width: 500px) {
    >.menu {
      display: none;
    } 
    >.logo {
      margin: 0 auto;
    }
    >.toggleAside {
      display: inline-block;
    }
  }
}
</style>
