<template>
    <div class="loader">
       <div></div>
       <div></div>
       <div></div> 
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .loader{
        min-height: 70vh;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loader div{
        height: 20px;
        width: 20px;
        margin-right: 3em;
        background-color: rgba(128, 128, 128, 0.6);
        border-radius: 50%;
        animation: loader 1.5s infinite ease;
    }
    .loader div:nth-child(2){
        animation-delay: .3s;
    }
    .loader div:last-child{
        animation-delay: .6s;
    }
    @keyframes loader{
        0%{
            transform: scale(1) translateY(0);
            background-color: #ccc;
        }
        25%{
            transform: scale(1.2) translateY(-3px);
            background-color: rgba(128, 128, 128, 0.6);
        }
        50%{
            transform: translateY(3px);
        }100%{
            transform: scale(1) translateY(0);
        }
    }
</style>