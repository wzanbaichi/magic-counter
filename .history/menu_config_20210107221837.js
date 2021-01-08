const  { globalShortcut, Menu} = require('electron');
const Menus = [
    {
        label:'Files',
        submenu:[
            {
                label: '网页版',
                role: 'help',
                submenu: [{
                    label: '网页版',
                    click: function () {
                        electron.shell.openExternal('https://www.jianshu.com/u/1699a0673cfe')
                    }
                }]
            },
            {
                label: '帮助',
                role: 'help',
                submenu: [{
                    label: '帮助文档',
                    click: function () {
                        electron.shell.openExternal('https://www.jianshu.com/u/1699a0673cfe')
                    }
                }]
            }
        ]
    }
];