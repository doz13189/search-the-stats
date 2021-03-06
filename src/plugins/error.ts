export default {
  install: (app: any, options: any) => {
    app.config.globalProperties.$translate = (key: any) => {
      return key.split('.').reduce((o: any, i: any) => {
        if (o) return o[i]
      }, options)
    }
  }
}
// https://v3.vuejs.org/guide/component-edge-cases.html#controlling-updates
