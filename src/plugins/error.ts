export default {
  install: (app: any, options: any) => {
    console.log('installed...')
    app.config.globalProperties.$translate = () => {
      console.log('hello')
    }
    // app.config.globalProperties.$translate = (key: any) => {
    //   return key.split('.').reduce((o: any, i: any) => {
    //     if (o) return o[i]
    //   }, options)      
    // }
  }
}
// https://v3.vuejs.org/guide/component-edge-cases.html#controlling-updates
