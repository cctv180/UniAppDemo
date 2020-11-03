<template>
	<view class="content">
		<image class="logo" :src="src"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
        <button @click="open">执行云函数</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
                src:''
			}
		},
		onLoad() {
		},
		methods: {
            open(){
                let self =this
                //文件上传
                uni.chooseImage({
                    count:1,
                    success(res) {
                        let tempFilePath = res.tempFilePaths[0]
                        console.log('uni.chooseImage:云函数调用成功',res)
                        uniCloud.uploadFile({
                            filePath:tempFilePath,
                            cloudPath:res.tempFiles[0].name,
                            success(res) {
                                console.log(res);
                                self.src = res.fileID
                            },
                            fail() {
                                console.log(err);
                            }
                        })
                    },
                    fail(res) {
                        console.log('uni.chooseImage:云函数调用失败',res)
                    }
                })
                
                // 删除文件
                // 阿里云不支持此API，前端运行此API会报权限错误
                // 腾讯云支持此API，如若使用，需搭配腾讯云提供的自定义登录和权限设置使用
                // uniCloud.deleteFile({
                //     fileList:['https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-hncikqyt3onc0065bf/4ae43563-9bad-46b3-a684-5019732171ae.png'],
                //     success(res){
                //         console.log(res);
                //     },
                //     fail(){
                //         console.log('err');
                //     }
                    
                // })
            }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
