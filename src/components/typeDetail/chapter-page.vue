<template>
    <div id="chapterPage">
        <h1 class="chapter-title">{{title}}</h1>
        <div class="chapter-msg">
            <span class="author">{{author}}</span>
            <span class="date">{{date}}</span>
        </div>
        <div class="chapter-content">{{content}}</div>

        <div class="turn-page">
            <span @click="jump('back')" class="chapter-back" id="back">{{prev}}</span>
            <span @click="jump('next')" class="chapter-next" id="next">{{next}}</span>
        </div>

        <!-- <div class="bordertext-chap">专栏信息</div> -->
        <div class="bordertext-chap">讨论({{chapComList.length}})</div>
        <div class="chapter-comment">
            <ul>
                <li v-for="item in chapComList">
                    <div class="msg">
                        <div class="writter-name">{{item.name}}</div>
                        <div class="writter-date">{{item.date}}</div>
                    </div>
                    <div class="comment">{{item.content}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: '',
            title: '',
            author: '',
            date: '',
            content: '',
            chapComList: '',
            read: '',
            prev: '上一篇：',
            next: '下一篇：',
        }
    },
    methods: {
        jump(type) {
            if(type == "back") {
                // this.$router.push({name: "chapter-page", params: {index: this.index - 1}})
                this.changeChapter(this.index - 1)
            }else if(type == "next") {
                // this.$router.push({name: "chapter-page", params: {index: this.index + 1}})
                this.changeChapter(this.index + 1)
            }
        },
        changeChapter(index2) {
            this.index = index2;
            var tag = this.$store.getters.getCatalog;
            var tar = tag[this.index];
            this.title = tar.title;
            this.author = this.$store.getters.getAuthor;
            this.date = tar.date;
            this.content = tar.content;
            this.chapComList = tar.discuss;
            this.read = tar.read;
            console.log(this.index)

            let t1 = document.getElementById('back');
            let t2 = document.getElementById('next');
            if(this.index <= 0) {
                t1.style.display = "none";
                t2.style.display = "inline-block"
                this.next += tag[this.index + 1].title;
            }else if(this.index >= tag.length) {
                t1.style.display = "inline-block";
                t2.style.display = "none";
                this.prev += tag[this.index - 1].title;
            }else {
                this.next += tag[this.index + 1].title;
                this.prev += tag[this.index - 1].title;
            }
        }
    },
    mounted() {
        this.index = this.$route.params.index;
        var tag = this.$store.getters.getCatalog;
        var tar = tag[this.index];
        this.title = tar.title;
        this.author = this.$store.getters.getAuthor;
        this.date = tar.date;
        this.content = tar.content;
        this.chapComList = tar.discuss;
        this.read = tar.read;
        console.log(this.chapComList)

        if(this.index <= 0) {
            let t1 = document.getElementById('back');
            t1.style.display = "none";
            this.next += tag[this.index + 1].title;
        }else if(this.index >= tag.length) {
            let t1 = document.getElementById('next');
            t1.style.display = "none";
            this.prev += tag[this.index - 1].title;
        }else {
            this.next += tag[this.index + 1].title;
            this.prev += tag[this.index - 1].title;
        }
    },
}
</script>

<style scoped>
</style>