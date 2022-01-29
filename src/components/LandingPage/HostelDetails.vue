<template>
    <div class="HostelDetails">
        <div class="box">
            <attendance />

    </div>
    <div class="box">
            <billing />

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
        /* padding: 2rem; */
        height: 28vh;
        width: 100%;
        /* background-color: red; */
        margin-bottom: 2rem;
    }
</style>