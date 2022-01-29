<template>
     <header>
        <img :src="bg" alt="img">
        <div class="profile">
            <div class="profile-details">
                <h1 class="profile-name">John Doe</h1>
                <h4 class="profile-admnNo">000000</h4>
            </div>
            <div class="profile-picture">
            </div>
        </div>
    </header>
</template>

<script>
export default{
    name: 'heading',
    data(){
        return{
            bg: require('/src/assets/Ellipse 1.png')
        }
    }
};
</script>


<style>
    img{
    width: 100vw;
    max-height: 30vh;
    position: fixed;
    z-index: -1;
    
}

.profile{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    position: sticky;
}


.profile-details{
    /* background-color: rebeccapurple; */
    width: 60%;
    font: 1.2em sans-serif;
    color: rgb(29, 29, 29);
    margin: 1rem;
    height: auto;
    margin-top: 1rem;
}

.profile-picture{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: gray;
    margin-top: 1rem;
    border: 5px solid wheat;
}

.profile-admnNo{
    padding-left: 0.5rem;
    letter-spacing: 10px;
}

header{
    /* background-color: blue; */
    position: sticky;
    top: 0;
    height: 30vh;
    margin-bottom: 1.5rem;
}
</style>