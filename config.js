const DOC_CONFIG = {
    title: "Google Style Docs",
    github: "https://github.com/your-username/repo",
    sidebar: [
        {
            title: "开始使用",
            items: [
                { name: "快速入门", link: "index.html", icon: "play_arrow" },
                { name: "项目介绍", link: "about.html", icon: "info_outline" }
            ]
        }
    ]
};

function initDoc() {
    const $ = mdui.$;
    $('.mdui-typo-headline').text(DOC_CONFIG.title);
    
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
    $('#github-link').attr('href', DOC_CONFIG.github);
}

window.onload = initDoc;
