import request from '../utils/request'

// const getUserInfo = () =>{
// return request({url : '/admin/getUserInfo', method: 'GET'})
// }
// export default {
//   getUserInfo
// }
const login = (data) => {
  return request({ url: '/sys/login', method: 'POST', data })
}
export default {
  login
}
