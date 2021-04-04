import { action, observable } from 'mobx-miniprogram'

export const store = observable({
  numA: 1,
  numB: 2,
  activeTabBarIndex: 0,
  get sum() {
    return this.numA + this.numB
  },
  // action 包裹的方法用来修改 store 中的数据
  updateNum1: action(function(step) {
    this.numA += step
  }),
  updateNum2: action(function(step) {
    this.numB += step
  }),
  updateActiveTabBarIndex: action(function(index) {
    this.activeTabBarIndex = index
  })
})