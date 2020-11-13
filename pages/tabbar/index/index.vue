<template>
    <view class="content">
        <!-- 自定义组件 navbar导航栏 -->
        <navbar></navbar>
        <tab></tab>
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
                title: 'Hello'
            }
        },
        onLoad() {

        },
        methods: {

        }
    }
</script>

<style lang="scss">

</style>
