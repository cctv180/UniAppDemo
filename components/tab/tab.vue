<template>
    <view class="tab">
        <scroll-view class="tab-scroll" scroll-x>
            <view class="tab-scroll__box">
                <view v-for="(item,index) in list" :key="item.name" class="tab-scroll__item">
                    {{item.name}}
                </view>
            </view>
        </scroll-view>
        <view class="tab-icons">
            <uni-icons type="gear" size="26" color="#666"></uni-icons>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                        name: 'uni-app'
                    },
                    {
                        name: 'vue'
                    },
                    {
                        name: 'react'
                    },
                    {
                        name: 'java'
                    },
                    {
                        name: '前端'
                    },
                    {
                        name: '后端'
                    },
                    {
                        name: '后端2'
                    },
                    {
                        name: '后端3'
                    },
                    {
                        name: '后端4'
                    }
                ]

            };
        }
    }
</script>

<style lang="scss">
    .tab {
        display: flex;
        width: 100%;
        border-bottom: 1px #e5e5e5 solid; //下画线
        background-color: #fff;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;

        .tab-scroll {
            flex: 1;
            overflow: hidden;
            box-sizing: border-box;
            // border: 1px red solid;//画线框

            .tab-scroll__box {
                display: flex;
                align-items: center;
                flex-wrap: nowrap; //禁换行
                height: 45px;
                box-sizing: border-box;

                .tab-scroll__item {
                    flex-shrink: 0;
                    padding: 0 10px; // 边距
                    color: #333;
                    font-size: 14px;
                }
            }

            .tab-icons {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 45px;

                &::after {
                    content: '';
                    position: absolute;
                    top: 12px;
                    bottom: 12px;
                    left: 0;
                    width: 1px;
                    background-color: #e5e5e5;
                    border: 1px red solid;//画线框
                }
            }
        }
    }
</style>
