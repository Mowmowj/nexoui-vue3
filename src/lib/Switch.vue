<template>
<button @click="toggleSwitch"  :class="{checked:value}">
    <span></span>
</button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    props:{
        value:Boolean
    },
    setup(props,context){
        const toggleSwitch = ()=>{
        // context.emit('nexo',!props.value)
        context.emit('update:value',!props.value)
        //vue2 this.$emit()
        }
        return {toggleSwitch}
    }
}
</script>

<style scoped lang="scss">
$bh:22px;
$sh:$bh - 4px;

button{
    height: $bh;
    width: $bh*2;
    border: none;
    background-color : grey;
    border-radius:$bh/2;
    position: relative;
    transition: background-color  500ms;
}
span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $sh;
    width: $sh;
    background: purple;
    border-radius: $sh/2;
    transition: left  250ms;
}
button:focus{
    outline: none;
}
button.checked{
    background: palevioletred;
}
button.checked >span{
    left: calc(100% - #{$sh} - 1px);
}
</style>
