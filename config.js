// 网站配置
const DOC_CONFIG = {
    title: "我的项目文档",
    github: "https://github.com/your-username/repo",
    // 侧边栏配置
    sidebar: [
        {
            title: "开始使用",
            items: [
                { name: "快速入门", link: "index.html", icon: "play_arrow" },
                { name: "项目介绍", link: "about.html", icon: "info_outline" }
            ]
        },
        {
            title: "核心组件",
            items: [
                { name: "基础组件", link: "components-basic.html", icon: "extension" },
                { name: "高级交互", link: "components-advanced.html", icon: "layers" }
            ]
        }
    ]
};

// 自动渲染侧边栏和顶部栏的函数
function initDoc() {
    const $ = mdui.$;
    
    // 1. 设置页面标题
    if (DOC_CONFIG.title) {
        $('.mdui-typo-headline').text(DOC_CONFIG.title);
        document.title = DOC_CONFIG.title + " - " + $('.mdui-typo-title').text();
    }

    // 2. 渲染侧边栏
    let sidebarHtml = '';
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';

    DOC_CONFIG.sidebar.forEach(section => {
        sidebarHtml += `<div class="mdui-subheader">${section.title}</div>`;
        section.items.forEach(item => {
            const isActive = currentPath === item.link ? 'mdui-list-item-active' : '';
            sidebarHtml += `
                <a href="${item.link}" class="mdui-list-item mdui-ripple ${isActive}">
                    <i class="mdui-list-item-icon mdui-icon material-icons">${item.icon}</i>
                    <div class="mdui-list-item-content">${item.name}</div>
                </a>`;
        });
    });
    $('#main-drawer .mdui-list').html(sidebarHtml);

    // 3. 设置 GitHub 链接
    $('#github-link').attr('href', DOC_CONFIG.github);
}

// 页面加载完成后执行
window.onload = initDoc;
