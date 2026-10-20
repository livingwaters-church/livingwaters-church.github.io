// assets/JS/nav.js - Global Header & Navigation Loader

document.addEventListener('DOMContentLoaded', () => {
    // Detect subfolder depth to set correct relative paths
    const isSubfolder = window.location.pathname.includes('/') && !window.location.pathname.endsWith('/index.html') && window.location.pathname.split('/').length > 2;
    const pathPrefix = isSubfolder ? '../' : './';

    const headerHTML = `
    <header class="global-header">
        <div class="brand-identity">
            <a href="${pathPrefix}index.html" style="text-decoration: none;">
                <span class="brand-title">Living Waters</span>
            </a>
            <span class="brand-sub">Community Church</span>
        </div>
        <nav class="nav-container">
            <ul class="nav-links">
                <li><a href="${pathPrefix}index.html">Home</a></li>
                <li><a href="${pathPrefix}about/index.html">About</a></li>
                <li><a href="${pathPrefix}ministries/index.html">Ministries</a></li>
                <li><a href="${pathPrefix}media/index.html">Media</a></li>
                <li><a href="${pathPrefix}calendar/index.html">Calendar</a></li>
                <li><a href="${pathPrefix}rightnow/index.html">RightNow</a></li>
                
                <!-- Global Theme Toggle Slider -->
                <li>
                    <button id="theme-toggle" class="btn-theme-toggle" aria-label="Toggle Dark/Light Mode">
                        <span class="slider-thumb">
                            <i id="theme-icon" class="fa-solid fa-moon"></i>
                        </span>
                    </button>
                </li>

                <li><a href="${pathPrefix}donate/index.html" class="btn-nav-give">Give</a></li>
            </ul>
        </nav>
    </header>
    `;

    const navPlaceholder = document.getElementById('global-nav-placeholder') || document.querySelector('header');
    if (navPlaceholder) {
        navPlaceholder.outerHTML = headerHTML;
    }
});
