// Mobile navigation menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerIcon = document.getElementById('burger-icon');

    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
            const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
            burgerBtn.setAttribute('aria-expanded', String(!isExpanded));
            mobileMenu.classList.toggle('hidden');

            if (burgerIcon) {
                if (!isExpanded) {
                    burgerIcon.classList.remove('fa-bars');
                    burgerIcon.classList.add('fa-xmark');
                } else {
                    burgerIcon.classList.remove('fa-xmark');
                    burgerIcon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when a link inside it is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.add('hidden');
                if (burgerIcon) {
                    burgerIcon.classList.remove('fa-xmark');
                    burgerIcon.classList.add('fa-bars');
                }
            });
        });
    }
});
