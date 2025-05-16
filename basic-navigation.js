// Basic Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle'); // Make sure this class matches your HTML button
    const mainNavigation = document.querySelector('.main-navigation'); // Make sure this class matches your nav container

    if (mobileNavToggle && mainNavigation) {
        mobileNavToggle.addEventListener('click', function() {
            mainNavigation.classList.toggle('is-open');
            // Optional: Toggle ARIA attributes for accessibility
            let isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
});