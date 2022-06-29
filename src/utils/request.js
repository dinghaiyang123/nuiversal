import axios from 'axios'
import md5 from 'md5'
import loading from './loading'
import { ELMessage } from 'element-plus'
// 创建axios实例对象
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 打开loading加载
    loading.open()
    // 调用接口
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    return config
  },
  (error) => {
    // 关闭loading加载
    loading.close()
    return Promise.reject(error)
  }
)
// 响应拦截
service.interceptors.response.use(
  (response) => {
    // 打开loading加载
    loading.close()
    const { success, data, message } = response.data

    //TODO 全局响应处理
    if (success) {
      return data
    } else {
      ELMessage.error(message)
      return Promise.reject(new Error(message))
    }
    //TODO token过期状态
  },
  (error) => {
    // 关闭loading加载
    loading.close()
    //响应失败进行信息提示
    ELMessage.error(error.message)
    return Promise.reject(error)
  }
)
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}
// 获取icode
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}
// 导出
export default request
