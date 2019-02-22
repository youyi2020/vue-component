# vue-components
快速自定义vue组件的全自动脚手架配置
开发过程中可即时预览组件，开发完成后运行打包命令，会自动将新组件加入库文件


## 基本命令
|命令|说明|
|----|----|
|npm run dev|开发环境，可以边编写组件边预览|
|npm run build|生产环境，打包组件库文件|
|npm run new 英文名 中文名|用于新建组件|
|npm run remove 英文名|用于删除组件以及配置文件 例如 npm run remove test, 强烈建议使用此命令删除组件|
|npm run watch|本地开发配合 npm link project使用|
|npm run build:entry|动态生成入口文件|
|npm run build:route|动态生产路由文件|


## 说明

1. 使用npm run new *** *** 创建组件
2. 会生成以下文件

* [组件名].md       //用于组件示例以及文档编写

* [组件名].js       //组件的入口文件，用于挂载到Vue

3. 会修改以下文件

* nav.config.json // 开发环境下的路由配置

* components.json // 组件的配置列表

4. 使用npm run remove *** 会删除以及修改以上文件

## 使用方式

```
import Vue from 'vue'
import *** from '***'

Vue.use(***);
```
