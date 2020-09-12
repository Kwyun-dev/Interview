<template>
    <div id="allType">
        <h1>综合排行</h1>
        <div class="fixed-position">
            <div v-for="item in datalist" class="all-list">
                <h2>{{ item.name }}</h2>
                <ul>
                    <li v-for="(item1, key) in item.data" class="single-type">
                        <a href="javascript:;" @click="gotoBook(item1)"> 
                            <div class="number">{{key+1}}</div>
                            <div class="brief-mess">
                                <div class="title"> {{ item1.book_name }} </div>
                                <div class="author"> {{ item1.author}} </div>
                            </div>
                            <div class="icon"><img :src="item1.icon" alt="#"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datalist: ''
        }
    },
    methods: {
        gotoBook(item) {
            this.$store.dispatch('setMess', item);
            this.$router.push({name: "detail-page"});
        },
    },
    mounted() {
        this.$axios.get('http://localhost:8899/getBookMes').then((res) => {
            this.datalist = res.data.data
            console.log(this.datalist)
        })
    },
}
</script>
<style scoped>
</style>