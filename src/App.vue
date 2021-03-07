<template>
<div>导航栏</div>
<hr/>
<router-link to="/">nexo</router-link>
<router-link to="/2">nexo2</router-link>
<router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
