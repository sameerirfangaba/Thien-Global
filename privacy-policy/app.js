        // Loader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').style.opacity = '0';
                setTimeout(() => document.getElementById('loader').style.display = 'none', 500);
            }, 900);
        });

        // Scroll events
        const header = document.getElementById('siteHeader');
        const scrollTop = document.getElementById('scrollTop');
        const spFill = document.getElementById('spFill');
        const spPct  = document.getElementById('spPct');

        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 60);
            scrollTop.classList.toggle('visible', window.scrollY > 400);

            // Progress bar
            const doc = document.documentElement;
            const pct = Math.round((window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100);
            spFill.style.height = pct + '%';
            spPct.textContent = pct + '%';

            // Active sidebar item
            const sections = document.querySelectorAll('.ps-block');
            let current = '';
            sections.forEach(s => {
                if (window.scrollY >= s.offsetTop - 200) current = s.id;
            });
            document.querySelectorAll('.sn-item').forEach(l => {
                l.classList.toggle('active', l.getAttribute('href') === '#' + current);
            });
        });

        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        // Mobile nav
        const toggle = document.getElementById('navToggle');
        const links  = document.getElementById('navLinks');
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('open');
            links.classList.toggle('open');
        });

        // Smooth scroll sidebar links
        document.querySelectorAll('.sn-item, .sn-item').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });