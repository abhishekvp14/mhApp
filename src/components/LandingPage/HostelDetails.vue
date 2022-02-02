<template>
    <div class="HostelDetails">
        <div class="box">
            <attendance />
    <router-link to='/'>Home</router-link>
    </div>
    <div class="box">
            <billing />
      <router-link to='/test'>Test</router-link>
    </div>
    </div>
</template>

<script>

    import attendance from '../details/attendance.vue'
    import billing from '../details/billing.vue'
    export default {
        name: "HostelDetails",
        components: {
            attendance,
            billing
            }
};
</script>

<style>
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* padding: 2rem; */
        height: 28vh;
        width: 100%;
        /* background-color: red; */
        margin-bottom: 2rem;
    }
</style>