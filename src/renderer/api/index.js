import axios from 'axios'
import {Message} from 'element-ui'

function getData(url, params, callback) {
  var obj = initFn(params, callback, arguments[1])
  var data = obj.params
  callback = obj.callback

  axios.get(url, {params: data}).then((response) => {
    console.log(response)
    var result = response.data.ajaxResult

    if (result.result) {
      var data = result.data
      if (callback) {
        callback(data, result)
      }
    } else { //失败
      console.log(result.message)
    }
  }).catch((error) => {
    console.log(error)
  })
}

function postData(url, params, config, callback) {
  var obj = initFn(params, callback, arguments[1])
  var data = obj.params
  callback = obj.callback

  console.log(url)
  console.log(data)

  axios.post(url, data, config).then((response) => {
    console.log(response)
    var result = response.data.ajaxResult

    if (result.result) {
      var data = result.data
      if (callback) {
        callback(data, result)
      }
    } else {
      console.log(result.message)
    }
  }).catch((error) => {
    console.log(error)
  })
}

function postDataMessage(url, params, config, callback) {
  var obj = initFn(params, callback, arguments[1])
  var data = obj.params
  callback = obj.callback

  axios.post(url, data, config).then((response) => {
    console.log(response)
    var result = response.data.ajaxResult

    if (result.result) {
      var data = result.data
      Message({message: result.message, type: 'success'})
      if (callback) {
        callback(data)
      }
    } else {
      console.log(result.message)
      Message({message: result.message, type: 'error'})
    }
  }).catch((error) => {
    console.log(error)
    Message({message: '没有网络！', type: 'error'})
  })
}

function initFn(params, callback, argument) {
  //如果没有参数
  if (typeof argument === 'function') {
    callback = argument
    params = {}
  }
  //对象合并,确定最终参数
  return {
    params: Object.assign({}, params),
    callback: callback
  }
}

export {
  getData, postData, postDataMessage
}
