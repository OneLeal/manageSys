const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    disableEsLint
} = require('customize-cra');
const path = require("path");
const themeColor = {
    "@primary-color": "#7b9dcc",
    "@success-color": "#11ff0d",
    "@warning-color": "#fff838",
    "@error-color": "#ff3d4a",
    "@link-color": "#2e27cc",
};

// 配置代理
const addProxy = () => (configFunction) => {
    configFunction.proxy = {
        '/api': {
            target: 'https://www.baidu.com',
            changeOrigin: true,
            pathRewrite: { '^/api': '/' },
        },
    };

    return configFunction;
};

module.exports = {
    webpack: override(
        // 按需加载 antd
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
        }),

        // 自定义 antd 主题
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: themeColor
        }),

        // 配置别名
        addWebpackAlias({
            '@': path.resolve(__dirname, 'src'),
        }),

        // 全局引入公共的 less 文件
        (config) => {
            //修改、添加loader 配置 :
            // 所有的loaders规则是在config.module.rules(数组)的第二项
            // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
            // 修改 less 配置 ，规则 loader 在第7项(具体可以打印配置)
            const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
            loaders[7].use.push({
                loader: 'style-resources-loader',
                options: {
                    patterns: path.resolve(__dirname, 'src/style/common.less')
                }
            });
            return config
        },

        // webpack 中禁用 eslint
        disableEsLint(),
    ),

    devServer: addProxy(),
};