:root {
    --primary-font: "IM Fell English", serif;
    --body-font: "IM Fell English", serif;
    --title-font: "IM Fell English SC", serif;
    --background-color: #1a1a1a;
    --text-color: #f8f8f8;
    --dim-text-color: #d0d0d0;
    --shadow-color: rgba(0, 0, 0, 0.7);
    --highlight-color: rgba(255, 255, 255, 0.6);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--body-font);
    background-color: var(--background-color);
    color: var(--text-color);
    min-height: 100vh;
    background-image: url('images/When the moon hits your eye.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    animation: fadeIn 1s ease-in-out;
}

/* New class to prevent body scroll when menu is open */
body.menu-open {
    overflow: hidden;
}

body::before {
    content: '';
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: -1;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Header & Navigation */
.nav-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    transition: background 0.3s ease, padding 0.3s ease;
}

.nav-header.scrolled {
    background: rgba(0, 0, 0, 0.6);
    padding: 15px 40px;
}

.logo {
    font-family: var(--title-font);
    font-size: 1.8rem;
    color: var(--text-color);
    text-shadow: 2px 2px 4px var(--shadow-color);
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-link {
    font-family: var(--title-font);
    font-size: 1.1rem;
    color: var(--dim-text-color);
    text-decoration: none;
    padding: 10px 0;
    position: relative;
    transition: color 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--highlight-color);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
}

.nav-link:hover, .nav-link.active {
    color: var(--text-color);
}

.nav-link:hover::after, .nav-link.active::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

/* Main Content */
.main-wrapper {
    margin-top: 80px;
    padding: 60px 20px;
    text-align: center;
    flex: 1;
    animation: fadeInUp 1s ease-in-out 0.2s;
    animation-fill-mode: both;
}

.text-box {
    display: inline-block;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 50px;
    max-width: 800px;
    text-align: left;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.page-title {
    font-family: var(--title-font);
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
    text-shadow: 3px 3px 6px var(--shadow-color);
    text-align: center;
}

.content-text {
    font-size: 1.3rem;
    line-height: 1.8;
    text-shadow: 2px 2px 4px var(--shadow-color);
    text-align: justify;
}

/* Footer */
.footer {
    position: relative;
    padding: 20px 40px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(15px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Hamburger Menu (Mobile) */
.hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1001; /* Ensure button is on top */
}

.hamburger-bar {
    display: block;
    width: 25px;
    height: 2px;
    margin: 5px auto;
    background-color: var(--text-color);
    transition: all 0.3s ease-in-out;
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        inset: 0;
        /* Improved shading */
        background: rgba(10, 10, 10, 0.97);
        backdrop-filter: blur(12px);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* Start off-screen */
        transform: translateX(100%);
        visibility: hidden;
        /* Smoother animation */
        transition: transform 0.35s cubic-bezier(0.77, 0, 0.175, 1), visibility 0.35s;
        z-index: 1000;
    }

    .nav-links.active {
        transform: translateX(0);
        visibility: visible;
    }
    
    .hamburger {
        display: block;
    }
    
    .hamburger.active .hamburger-bar:nth-child(2) {
        opacity: 0;
    }
    .hamburger.active .hamburger-bar:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }
    .hamburger.active .hamburger-bar:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }

    .footer {
        flex-direction: column;
        gap: 15px;
    }
}
