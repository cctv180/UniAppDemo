import $http from '../http.js'
export const get_label = (data) => {
    return $http({
        url: 'get_label',
        data
    })
}

export const get_list = (data) => {
    return new Promise((reslove, reject) => {
        reslove({
            data: 'get_list请求成功'
        })
    })
}
