        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').style.opacity = '0';
                setTimeout(() => document.getElementById('loader').style.display = 'none', 500);
            }, 900);
        });
        const header = document.getElementById('siteHeader');
        const scrollTop = document.getElementById('scrollTop');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 60);
            scrollTop.classList.toggle('visible', window.scrollY > 400);
        });
        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        const toggle = document.getElementById('navToggle');
        const links  = document.getElementById('navLinks');
        toggle.addEventListener('click', () => { toggle.classList.toggle('open'); links.classList.toggle('open'); });