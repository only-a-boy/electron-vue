import { getData, postData, postDataMessage } from './index'
import { ip, ocCode, baseConfig } from './config'

export function login (loginForm, callback) {
  const url = ip.server + '/api/ucs/login'

  const data = loginForm

  const config = {
    headers: baseConfig.headers
  }

  return postDataMessage(url, data, config, callback)
}

export function getLineList (callback) {
  const url = ip.pis + '/api/pss/monitor/getLineList'

  const data = {
    ocCode: ocCode.pis
  }

  const config = {
    headers: baseConfig.headers
  }

  return postDataMessage(url, data, config, callback)
}
