'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
    //context 包含调用信息和运行状态，获取每次调用的上下文
	console.log('event : ', event)
    
    //context中可获取客户端调用的上下文
      let os = context.OS //客户端操作系统，返回值：android、ios    等
      let platform = context.PLATFORM //运行平台，返回值为 mp-weixin、app-plus等
      let appid = context.APPID // manifest.json中配置的appid
      let clientIP = context.CLIENTIP // 客户端ip信息
      let clientUA = context.CLIENTUA // 客户端user-agent
    
	//返回数据给客户端
	return {
        code:200,
        msg:event.name + '的年龄是' + event.age,
        os,
        platform,
        appid,
        clientIP,
        clientUA,
        //context   //context不能直接返回
    }
};