<template>
    <button 
        class="btn mt-4 text-center rounded-full px-20 py-3 border border-gray-400 hover:border-gray-500 border-solid">
        <slot></slot>
    </button>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    button{
        width: 500px;
        position: relative;
    }
    button::after{
        position: absolute;
        content: '';
        inset: -5px;
        border: 3px solid #111;
        border-radius: 9999px;
        opacity: 0;
        transition: .9s ease;
    }
    button:active::after{
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        opacity: 1;
    }
</style>