<template>
    <view class="content">
        <!-- 自定义组件 navbar导航栏 -->
        <navbar></navbar>
        <tab :list="tabList"></tab>
        <!-- <view v-for="item in 100">
        {{item}}测试行
        </view> -->
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
            getLabel() {
                //调用云函数方法
                uniCloud.callFunction({
                    name: 'get_label',
                }).then((res) => {
                    const {result} = res
                    this.tabList = result.data
                    console.log(this.tabList)
                })
            }
        }
    }
</script>

<style lang="scss">

</style>
