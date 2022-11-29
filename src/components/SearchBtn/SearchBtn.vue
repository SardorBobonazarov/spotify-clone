<template>
    <div>
        <label><i class="fas fa-search"></i></label>
        <input type="text" placeholder="Что хочешь послушать?" v-model="search" @input="searchIt">
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    computed: {
        categorySearchFrom(){
            return this.$store.state.searchCategory.searchCategoryFrom
        }
    },
    methods: {
        searchIt(){
            this.$store.commit('setSearch', this.search)
            console.log(this.categorySearchFrom);
        }
    },
}
</script>

<style scoped>
    div{
        position: relative;
    }
    label{
        position: absolute;
        left: 1em;
        top: 50%;
        transform: translateY(-50%);
    }
    label i{
        color: #000;
        font-size: 1.6em;
    }
    input{
        padding: .6em 12em .6em 3em;
        border-radius: 9999px;
        color: #000;
    }
    input::placeholder{
        color: rgba(0, 0, 0, .3);
    }
</style>