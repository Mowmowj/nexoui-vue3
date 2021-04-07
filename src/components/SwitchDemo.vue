<template>
    <div>
        <!-- 三种写法  第三种是vue3 新的 -->
        <!-- <Switch :value="switchStatus" @nexo=" switchStatus = $event "/> -->
        <!-- <Switch :value="switchStatus" @update:value=" switchStatus = $event "/> -->
        <Switch v-model:value="switchStatus"/>

    </div>
</template>

<script lang="ts">
import { ref } from 'vue'

import Switch from "../lib/Switch.vue";
export default {
  components: { Switch },
  setup(){
      const switchStatus = ref(true)
      return { switchStatus }

  }
  
};
