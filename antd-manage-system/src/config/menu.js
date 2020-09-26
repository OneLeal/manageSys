export default [
    {
        label: '首页',
        path: '/admin/home',
        icon: 'home'
    },

    {
        label: 'UI',
        path: '/admin/ui',
        icon: 'appstore',
        children: [
            { label: '按钮', path: '/admin/ui/buttons' },
            { label: '弹框', path: '/admin/ui/modals' },
            { label: 'Loading', path: '/admin/ui/loadings' },
        ]
    }
];