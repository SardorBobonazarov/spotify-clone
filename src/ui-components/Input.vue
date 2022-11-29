<template>
    <div 
        v-for="input in inputs" 
        :class="input.class"
        class="mt-8"
    >
        <h1 class="font-bold text-sm tracking-wider">{{ input.label }}</h1>
        <input 
            :type="input.type" 
            :placeholder="input.placeholder"
            class="border border-solid rounded w-full mt-2 h-6 p-6 placeholder-gray-600"    
        >
    </div>
</template>

<script>
export default {
    props: [ 'inputs' ]
}
</script>

<style>
    
</style>