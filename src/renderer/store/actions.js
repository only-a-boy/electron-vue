import * as types from './mutation-types'

export const setMenuName = function ({commit, name}) {
  commit(types.SET_MENU, name)
}
