const { override, fixBabelImports, addLessLoader, addWebpackAlias, addWebpackExternals } = require('customize-cra');
const path = require("path");
const themeColor = {
    "@primary-color": "#7b9dcc",
    "@success-color": "#11ff0d",
    "@warning-color": "#fff838",
    "@error-color": "#ff3d4a",
    "@link-color": "#2e27cc",
};

module.exports = override(
    //写了下面这个部分，就实现了按需加载，再也不需要再每个页面里面都引入“antd/dist/antd.css”啦
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true  //这里一定要写true，css和less都不行哦
    }),

    addLessLoader({
        javascriptEnabled: true,
        //下面这行很特殊，这里是更改主题的关键，这里我只更改了主色，当然还可以更改其他的，下面会详细写出。
        modifyVars: themeColor
    }),

    addWebpackAlias({ //路径别名
        '@': path.resolve(__dirname, 'src'),
    }),

    addWebpackExternals({ //不做打包处理配置，如直接以cdn引入的
        // echarts: "window.echarts",
        // highcharts:"window.highcharts"
    }),

    (config) => {
        //修改、添加loader 配置 :
        // 所有的loaders规则是在config.module.rules(数组)的第二项
        // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
        // 修改 less 配置 ，规则 loader 在第7项(具体可以打印配置)
        const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
        loaders[7].use.push({
            loader: 'style-resources-loader',
            options: {
                patterns: path.resolve(__dirname, 'src/style/common.less')//全局引入公共的 less 文件
            }
        });
        return config
    }
);