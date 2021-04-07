<template>
<router-view/>
</template>
<script lang="ts">
import { provide, ref } from 'vue'
import { router } from '../src/views/router'

export default {
  name: 'App',
  setup(){
      const width = document.documentElement.clientWidth;
      const menuVisible = ref( width>500? true : false )
      provide('menuVis',menuVisible);
      router.afterEach(()=>{
        if(width<=500){
            menuVisible.value=false;
        }
      })
  }
}
</script>
