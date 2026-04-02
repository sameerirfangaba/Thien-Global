        // Loader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').style.opacity = '0';
                setTimeout(() => document.getElementById('loader').style.display = 'none', 500);
            }, 900);
        });

        // Header scroll
        const header = document.getElementById('siteHeader');
        const scrollTop = document.getElementById('scrollTop');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 60);
            scrollTop.classList.toggle('visible', window.scrollY > 400);
        });
        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        // Mobile nav
        const toggle = document.getElementById('navToggle');
        const links  = document.getElementById('navLinks');
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('open');
            links.classList.toggle('open');
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', e => {
                const t = document.querySelector(a.getAttribute('href'));
                if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
            });
        });

        // Reveal
        const io = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
        }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
        document.querySelectorAll('.app-card, .sec-head, .contact-strip-inner').forEach(el => {
            el.classList.add('reveal');
            io.observe(el);
        });
