const menuList = [
    {title: '首页', key: '/admin/home', icon: "home"},

    {title: 'UI', key: '/admin/ui', icon: "appstore", children: [
            {title: '按钮', key: '/admin/ui/buttons',},
            {title: '弹框', key: '/admin/ui/modals',},
            {title: 'Loading', key: '/admin/ui/loadings',},
            {title: '通知提醒', key: '/admin/ui/notification',},
            {title: '全局Message', key: '/admin/ui/messages',},
            {title: 'Tab页签', key: '/admin/ui/tabs',},
            {title: '图片画廊', key: '/admin/ui/gallery',},
            {title: '轮播图', key: '/admin/ui/carousel',}
        ]
    },

    {title: '表单', key: '/admin/form', icon:"form", children: [
            {title: '登录', key: '/admin/form/login',},
            {title: '注册', key: '/admin/form/reg',},
            {title: "自定义", key: "/admin/form/default"}
        ]
    },

    {
        title: '表格',
        icon: "table",
        key: '/admin/table',
        children: [
            {
                title: '基础表格',
                key: '/admin/table/basic',
            },
            {
                title: '高级表格',
                key: '/admin/table/high',
            }
        ]
    },

    {title: '富文本', icon:"file-text", key: '/admin/rich'},

    {title: '城市管理', icon:"bank", key: '/admin/city'},

    {title: '订单管理', icon:"gold", key: '/admin/order',
        btnList: [
            {
                title: '订单详情',
                key: 'detail'
            },
            {
                title: '结束订单',
                key: 'finish'
            }
        ]
    },
    {
        title: '员工管理',
        key: '/admin/user',
        icon:"team"
    },
    {
        title: '车辆地图',
        key: '/admin/bikeMap',
        icon:"environment"
    },
    {
        title: '图标',
        icon:"tag",
        key: '/admin/charts',
        children: [
            {
                title: '柱形图',
                key: '/admin/charts/bar'
            },
            {
                title: '饼图',
                key: '/admin/charts/pie'
            },
            {
                title: '折线图',
                key: '/admin/charts/line'
            },
        ]
    },
    {
        title: '权限设置',
        key: '/admin/permission',
        icon:"safety"
    },
];
export default menuList;