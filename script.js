
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        serif: ['"Playfair Display"', 'serif'],
                    },
                    colors: {
                        cream: '#F5F5F0',      // Background base
                        surface: '#EBEBE6',    // Card background
                        olive: '#2C3528',      // Primary text/dark
                        accent: '#7D8C66',     // Muted Green
                        lime: '#C4D6A0',       // Highlight
                    },
                    borderRadius: {
                        '4xl': '2rem',
                    }
                }
            }
        }
        // Initialize Icons
        lucide.createIcons();

        // ROUTING SYSTEM
        function handleRouting() {
            const hash = window.location.hash || '#home';
            
            // Hide all views
            document.querySelectorAll('.page-view').forEach(view => {
                view.classList.add('hidden-view');
                view.classList.remove('fade-enter');
            });

            // Logic to show specific view
            let activeViewId = 'view-home'; // default

            if (hash === '#home') activeViewId = 'view-home';
            else if (hash === '#resume') activeViewId = 'view-resume';
            else if (hash === '#project-keraton') activeViewId = 'view-project-keraton';
            else if (hash === '#project-sakawarsa') activeViewId = 'view-project-sakawarsa';
            else if (hash === '#project-netflix') activeViewId = 'view-project-netflix';
            else if (hash === '#project-books') activeViewId = 'view-project-books';
            else if (hash === '#project-strive') activeViewId = 'view-project-strive';
            else if (hash === '#project-marketplace') activeViewId = 'view-project-marketplace';
            else activeViewId = 'view-home';

            const activeView = document.getElementById(activeViewId);
            if(activeView) {
                activeView.classList.remove('hidden-view');
                activeView.classList.add('fade-enter');
                window.scrollTo(0, 0); // Reset scroll on page change
            }
            
            // Re-trigger icon rendering just in case
            lucide.createIcons();
        }

        // Listen for hash changes
        window.addEventListener('hashchange', handleRouting);
        // Handle initial load
        window.addEventListener('DOMContentLoaded', handleRouting);


        // --- UI UTILS ---

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('bg-[#F5F5F0]/90', 'bg-[#F5F5F0]/95');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.replace('bg-[#F5F5F0]/95', 'bg-[#F5F5F0]/90');
            }
        });

        // Mobile Menu
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');
        const navLinks = document.querySelectorAll('.nav-link');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            });
        });

        // Simple Reveal Animation on Scroll
        const revealElements = document.querySelectorAll('.reveal');
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 150;
            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('DOMContentLoaded', revealOnScroll);