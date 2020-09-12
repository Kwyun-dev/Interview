<template>
    <div id="listPage">
        <h2>目录 <span>( {{catalog.length}} )</span> </h2>
        <div class="bordertext">目录 ( {{catalog.length}}) </div>
        <div class="catalog-list">
            <ul>
                <li v-for="(item, key) in catalog" v-if="key < count">
                    <a href="javascript:;" @click="gotoChapter(key)">
                        <h3>{{item.title}}</h3>
                        <div class="content">{{item.content}}</div>
                        <div class="msg">
                            <div class="left-part">
                                {{item.date}}
                            </div>
                            <div class="right-part">
                                阅读 {{item.read}} &nbsp;&nbsp;
                                讨论 {{item.discuss.length}}
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="see-more" id="visibleBtn">
            <a href="javascript:;" @click="changeLimit">点击加载更多</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            catalog: '',
            count: 2,
        }
    },
    methods: {
        changeLimit() {
            this.count ++;
            if(this.count >= this.catalog.length) {
                var tag = document.getElementById("visibleBtn");
                tag.style.display = "none"
            }
        },
        gotoChapter(index) {
            console.log(index)
            this.$router.push({name: "chapter-page", params: {index: index}})
        }
    },
    mounted() {
        this.catalog = this.$store.getters.getCatalog;
    },
}
</script>

<style scoped>
</style>