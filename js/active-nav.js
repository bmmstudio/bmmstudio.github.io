(function () {
    function highlightActiveNav() {
        var path = window.location.pathname.replace(/\/$/, '') || '/';

        var selectors = 'nav a[href], #mobile-menu a[href]';
        document.querySelectorAll(selectors).forEach(function (link) {
            var href = link.getAttribute('href');
            if (!href || href.charAt(0) === '#' || href.indexOf('http') === 0) return;
            var normalized = href.replace(/\/$/, '') || '/';
            if (normalized === path) {
                link.style.color = '#10b981';
                link.style.fontWeight = '500';
            }
        });

        // Highlight "Oferta" dropdown button when on any service subpage
        var ofertaPages = [
            '/strony-internetowe', '/sklepy-internetowe', '/aplikacje-web',
            '/aplikacje-mobile', '/ui-ux', '/seo', '/sem',
            '/wizytowki-google', '/produkcja-foto', '/produkcja-video',
            '/szkolenia-z-dofinansowaniem'
        ];
        if (ofertaPages.some(function (p) { return path.indexOf(p) === 0; })) {
            document.querySelectorAll('nav button').forEach(function (btn) {
                if (btn.textContent.trim().indexOf('Oferta') === 0) {
                    btn.style.color = '#10b981';
                }
            });
        }

        // Highlight "Galeria" dropdown button when on gallery pages
        if (path.indexOf('/galeria_zdjec') === 0) {
            document.querySelectorAll('nav button').forEach(function (btn) {
                if (btn.textContent.trim().indexOf('Galeria') === 0) {
                    btn.style.color = '#10b981';
                }
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', highlightActiveNav);
    } else {
        highlightActiveNav();
    }
})();
