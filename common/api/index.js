//单个文件导出方法
// import {get_label,get_list} from './list.js'

// export default {
//     get_label,
//     get_list
// }

//批量导出文件
const requireApi = require.context(
    //api 目录的相对路径
    '.',
    // 是否查询子目录
    false,
    //查询文件的一个后缀
    /.js$/
)

let module = {}
//console.log(requireApi.keys());
requireApi.keys().forEach((key, index) => {
    if (key === './index.js') return
    //合并对象
    Object.assign(module, requireApi(key))
})
export default module
