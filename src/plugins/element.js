import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 中文本地化
import locale from'element-plus/lib/locale/lang/zh-cn'


export default (app) => {
  app.use(ElementPlus, { locale })
}
