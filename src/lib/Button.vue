<template>
    <div :size="size">
        <!-- <button v-bind="$attrs"> -->
        <button v-bind="other">
            <slot/>
        </button>
    </div>
</template>

<script lang="ts">
export default {
    inheritAttrs:false, //取消默认绑定
    setup(props,context){
        const { size , ...other } = context.attrs
        return{ size , other }
    }
}
</script>