<template>
    <div class="test">
        <h1>Hello World</h1>
        <router-link to='/'>Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'test'
}
</script>

<style scoped>
    .test{
        display: flex;
        align-content: center;
        align-items: center;
    }
</style>