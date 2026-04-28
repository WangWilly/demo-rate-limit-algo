(function() {
    const pages = [
        { name: 'Home', url: 'index.html' },
        { name: 'Rate Limit Algorithms', url: 'rate-limit.html' },
        { name: 'gRPC Load Balancing', url: 'grpc-lb.html' },
        { name: 'HTTP Basic Info', url: 'http-basic.html' },
        { name: 'Leaky Bucket (Lazy)', url: 'leaky-bucket.html' },
        { name: 'QUIC Implementation', url: 'quic-impl-brief.html' },
        { name: 'WS & Raw TCP', url: 'ws-rawtcp-connection.html' }
    ];

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Container
    const nav = document.createElement('div');
    nav.id = 'dynamic-nav';
    nav.style.position = 'fixed';
    nav.style.bottom = '20px';
    nav.style.right = '20px';
    nav.style.zIndex = '9999';
    nav.style.fontFamily = 'sans-serif';

    // Button
    const btn = document.createElement('button');
    btn.innerHTML = 'Menu';
    btn.style.backgroundColor = '#3b82f6';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.padding = '10px 20px';
    btn.style.borderRadius = '50px';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    btn.style.fontWeight = 'bold';
    btn.style.transition = 'transform 0.2s';

    btn.onmouseover = () => btn.style.transform = 'scale(1.05)';
    btn.onmouseout = () => btn.style.transform = 'scale(1)';

    // Menu
    const menu = document.createElement('div');
    menu.style.display = 'none';
    menu.style.position = 'absolute';
    menu.style.bottom = '50px';
    menu.style.right = '0';
    menu.style.backgroundColor = '#1e293b';
    menu.style.border = '1px border #334155';
    menu.style.borderRadius = '8px';
    menu.style.padding = '10px 0';
    menu.style.minWidth = '200px';
    menu.style.boxShadow = '0 10px 15px rgba(0,0,0,0.2)';

    pages.forEach(page => {
        const item = document.createElement('a');
        item.href = page.url;
        item.innerHTML = page.name;
        item.style.display = 'block';
        item.style.padding = '10px 20px';
        item.style.color = currentPath === page.url ? '#60a5fa' : '#cbd5e1';
        item.style.textDecoration = 'none';
        item.style.fontSize = '14px';
        item.style.transition = 'background 0.2s';

        item.onmouseover = () => {
            item.style.backgroundColor = '#334155';
        };
        item.onmouseout = () => {
            item.style.backgroundColor = 'transparent';
        };

        menu.appendChild(item);
    });

    btn.onclick = (e) => {
        e.stopPropagation();
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    };

    document.addEventListener('click', () => {
        menu.style.display = 'none';
    });

    nav.appendChild(menu);
    nav.appendChild(btn);
    document.body.appendChild(nav);
})();
