<template>
    <div id="detailPage">
        <h1 class="center-align">{{bookName}}</h1>
        <div class="center-align">
            <img src="" alt="#">
            <div style="font-size: 13px; font-weight: bold;">{{author}}</div>
        </div>
        <div v-if="true" class="center-align">
            <span></span>
            签约作品
        </div>
        <div class="evaluate center-align"></div>
        <div class="tag center-align">
            <div class="main-tag">
                <ul>
                    <li>悬疑小说</li>
                </ul>
            </div>
            <div class="sub-tag">
                <ul>
                    <!-- <li v-for="item in list">
                        {{item}}
                    </li> -->
                </ul>
            </div>
        </div>
        <div class="book-msg center-align">
            <ul>
                <li v-for="(item, key) in bookMsg">
                    <label> {{key}} </label>
                    <div> {{item}} </div>
                </li>
            </ul>
        </div>
        <div class="bordertext">简介</div>
        <div>
            <p>{{briefIntro}}</p>
        </div>
        <div class="bordertext">
            <div class="left-part">目录（ {{catalog.length}} ）</div>
            <div class="right-part">
                <input type="checkbox" id="newToFirst">
                <label for="newToFirst">最新发表在前</label>
                <input type="checkbox" id="showBrifIntro">
                <label for="showBrifIntro">显示简介</label>
            </div>
        </div>
        <div class="catalog-list">
            <div class="newest-post"></div>
            <ul>
                <li v-for="(item, key) in catalog" v-if="key < count">
                    <a href="javascript:;" @click="goto(key)">
                        <div class="title-text"> {{item.title}} </div>
                        <p class="brief"> {{item.content}} </p>
                        <div class="bottom-text">
                            <div class="date left-part">{{item.date}}</div>
                            <div class="other right-part">
                                <span>阅读 {{item.read}}</span>
                                <span>讨论 {{item.discuss.length}}</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="see-more" id="visibleBtn">
                <a href="javascript:;" @click="viewMore">查看全部目录</a>
            </div>
        </div>
        <div class="bordertext">
            <div class="left-part">评论（ {{bookDiscuss.length}} ）</div>
        </div>
        <div class="comment-list">
            <ul>
                <li v-for="item in bookDiscuss">
                    <div class="writter-msg">
                        <img src="" alt="#">
                        <div class="writter-detail">
                            <div class="writter-name">{{item.reader_name}}</div>
                            <div class="writter-date">{{item.reader_date}}</div>
                            <div class="writter-com">
                                {{item.reader_content}}
                            </div>
                        </div>
                    </div>
                    <div class="writter-options">
                        <button>写回复</button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bordertext">
            <div class="left-part">喜欢这本书的人也喜欢</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 5,
            bookName: '',
            author: '',
            bookMsg: '',
            briefIntro: '',
            catalog: [],
            bookDiscuss: '',
        }
    },
    methods: {
        goto(index) {
            this.$router.push({name: "chapter-page", params: {index: index}})
        },
        viewMore() {
            this.$router.push({name:"list-page"})
        },
    },
    mounted() {
        this.bookName = this.$store.getters.getName;
        this.author = this.$store.getters.getAuthor;
        this.bookMsg = this.$store.getters.getBookMsg;
        this.briefIntro = this.$store.getters.getBriefIntro;
        this.catalog = this.$store.getters.getCatalog;
        this.bookDiscuss = this.$store.getters.getBookDiscuss;
    },
}
</script>

<style scoped>
</style>