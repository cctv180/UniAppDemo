<template>
    <view class="navbar">
        <view class="navbar-fixed">
            <!-- 状态栏 -->
            <view :style="{height: statusBarHeight+'px'}"></view>
            <!-- 导航栏 -->
            <view class="navbar-content" :style="{height:navBarHeight+'px', width: windowWindth+'px'}">
                <view class="navbar-serach" :style="{height:navBarSerachHeight+'px'}">
                    <view class="navbar-serach_icon"></view>
                    <view class="navbar-serach_text">uni-app vue</view>
                </view>
            </view>
        </view>
        <!-- 状态栏高度+导航栏高度 -->
        <view :style="{height:statusBarHeight+navBarHeight+'px'}"></view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                statusBarHeight: 20,
                navBarHeight: 45,
                navBarSerachHeight: 30,
                windowWindth: 375
            };
        },
        created() {
            const info = uni.getSystemInfoSync();
            // 状态栏高度
            this.statusBarHeight = info.statusBarHeight;

            // #ifndef H5||APP-PLUS||MP-ALIPAY
            // 获取胶囊的位置
            const MenuButtonInfo = uni.getMenuButtonBoundingClientRect();

            // 导航栏的高度 = （胶囊底部高度-状态栏的高度）+（胶囊顶部高度-状态栏内的高度）
            this.navBarHeight = (MenuButtonInfo.bottom - info.statusBarHeight) + (MenuButtonInfo.top - info.statusBarHeight)

            this.windowWindth = MenuButtonInfo.left

            // 搜索框的高度 = （胶囊底部高度- 胶囊顶部高度）
            this.navBarSerachHeight = MenuButtonInfo.bottom - MenuButtonInfo.top
            console.log(MenuButtonInfo);
            console.log(this.navBarHeight);
            console.log(info.statusBarHeight);
            // #endif
        }
    }
</script>

<style lang="scss">
    .navbar {
        .navbar-fixed {
            position: fixed; //固定
            top: 0;
            left: 0;
            z-index: 99;
            width: 100%;
            background-color: $mk-base-color;

            .navbar-content {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 15px;
                height: 45px;
                box-sizing: border-box;

                .navbar-serach {
                    display: flex;
                    align-items: center;
                    padding: 0 15px;
                    width: 100%;
                    height: 30px;
                    border-radius: 20px; //圆角
                    background-color: #FFF;

                    .navbar-serach_icon {
                        width: 10px;
                        height: 10px;
                        border: 1px red solid;
                        margin-right: 10px;
                    }

                    .navbar-serach_text {
                        font-size: 12px;
                        color: #999;

                    }
                }
            }
        }
    }
</style>
