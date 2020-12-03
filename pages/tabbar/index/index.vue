<template>
    <view class="home">
        <!-- 自定义组件 navbar导航栏 -->
        <navbar></navbar>
        <tab :list="tabList" @tab="tab"></tab>

        <list-scroll>
            <!-- <view v-for="(item, index) in 100" :key="item.id">
                {{item}}测试行
            </view> -->
            <list-card v-for="(item, index) in 5" :key="item.id"></list-card>
        </list-scroll>

    </view>
</template>

<script>
    // easyCom components/组件名/组件名.vue局部引入 同名免引入
    // import navbar from '@/components/navbar/navbar.vue'
    export default {
        // components:{
        //     navbar
        // },
        data() {
            return {
                title: 'Hello',
                tabList: []
            }
        },
        onLoad() {
            this.getLabel()
        },
        methods: {
            tab({
                data,
                index
            }) {
                console.log(data, index)
            },
            getLabel() {
                //调用云函数方法
                console.log(this.$api)
                this.$api.get_list().then(res => {
                    console.log(res)
                })
                this.$api.get_label({
                    name: 'get_label'
                }).then((res) => {
                    const {
                        data
                    } = res
                    this.tabList = data
                    //console.log(res)
                })

                // uniCloud.callFunction({
                //     name: 'get_label',
                // }).then((res) => {
                //     const {result} = res
                //     this.tabList = result.data
                //     console.log(this.tabList)
                // })
            }
        }
    }
</script>

<style lang="scss">
    page {
        height: 100%;
        display: flex;
    }

    .home {
        display: flex;
        flex-direction: column;
        flex: 1;
        border: 1px #0081FF solid;
        overflow: hidden;
    }
</style>
