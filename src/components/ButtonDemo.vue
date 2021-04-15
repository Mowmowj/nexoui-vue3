<template>
<!-- <Button/> -->
<div>alsdfjl</div>
    <Button 
        @click="onClick"
        @hover="onClick"
        @focus="onClick"
        @mouseover="onClick"
        size="big"
    >eva
    </Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default {
    components:{ Button },
    setup(){
        const onClick=()=>{
            console.log('!')
        }
        return { onClick }
    }

}
</script>

<style>

</style>