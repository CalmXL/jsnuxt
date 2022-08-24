
module.exports = {
  mode: 'universal',
  /*
   * 该配置项用于配置应用默认的 meta 标签。
   * Headers of the page
   */
  head: {
    title: '妙思维JS++前端开发官方网站 - WEB|JavaScript|Vue|React|Node',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' },
      { hid: 'JS++前端开发工程师精英就业班与提升班课程是针对前端开发零基础、爱好者、职业技术提升、互联网创业相关人员的一套完整的WEB前端开发学习体系，该体系通过深度基础课程对学员进行培养，使学员掌握最完整最有深度的技术理论知识和实战的基础技能。' },
      { hid: '前端开发,WEB开发,在线课程,编程,项目实战,项目架构,JavaScript,Vue,React,Node' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  server: {
    port: 3008
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  *
  * Global CSS
  * 该配置用于定义应用全局的 样式文件、模板或第三方库
  */
  css: [
    '@/assets/styles/resets.css',
    '@/assets/styles/common.css',
    '@/assets/styles/iconfont.css',
    '@/assets/styles/border.css',
    'swiper/css/swiper.min.css'

  ],
  /*
   * 该配置项用于配置那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
   * Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/assets/scripts/common', ssr: false },
    { src: '@/plugins/vue-awesome-swiper', ssr: false },
    { src: '@/plugins/vue-lazyload', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  /*
  ** Build configuration
  */
  build: {
    publicPath: 'http://source.jsplusplus.com',
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
