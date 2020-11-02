'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
    //event为客户端上传的参数
    //context 包含调用信息和运行状态，获取每次调用的上下文

    const collection = db.collection('user')

    // add 增加一条数据
    // let res = await collection.add(
    //     [{
    //         name: 'uni-App'
    //     },
    //     {
    //         name: 'html',
    //         type: '前端'
    //     }]
    // )

    // remove 删除一条数据
    //const res = await collection.doc('5f9f9e495f32d30001fe7ca3').remove()

    // update 更新一条数据
    // const res = await collection.doc('5f9f9d84ab6ef400017f979c').update({
    //     type:'html'
    // })
    
    // set 替换更新一条记录 
    // const res = await collection.doc('5f9f9d84ab6ef400017f979c').set({
    //     type:'html set'
    // })    
    
    // set 替换更新一条记录 
    // const res = await collection.doc('aabbccdd').set({
    //     type:'html set',
    //     name:'aabb'
    // })

    // get 获取一条记录 
    //const res = await collection.doc('aabbccdd').get()
    
    
    // get 获取一条记录 
    const res = await collection.where({
        name:'LiMing'
    })

    console.log("数据操作:")
    console.log(JSON.stringify(res))

    //返回数据给客户端
    return {
        code: 200,
        msg:'查询成功',
        data:res
        //context   //context不能直接返回
    }
};
