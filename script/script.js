// Navigation-bar
const hamburger = document.querySelector('.navigation .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.navigation .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.navigation .nav-bar .nav-list ul li a');
// const navigation = document.querySelector('.navigation.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// document.addEventListener('scroll', () => {
//     var scroll_position = window.scrollY;
//     if (scroll_position > 500 && scroll_position < 6000) {
//         navigation.style.backgroundColor = 'rgba(31, 30, 30, 0.24)';
//     }
//     else if (scroll_position > 11850 && scroll_position < 17420) {
//         navigation.style.backgroundColor = 'rgba(31, 30, 30, 0.24)';
//     }
//     else {
//         navigation.style.backgroundColor = 'transparent';
//     }
// });

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
// End-of-navigation-bar

// Home-text-effect
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width / 2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`
    });
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
    width = window.innerWidth;
}
// End-of-home-text-effect-01

// Scrolling-effect
gsap.registerPlugin(ScrollTrigger);

const scrollEffect = (pnl, wpr) => {
    let sections = gsap.utils.toArray(pnl);
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: wpr,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(wpr).offsetWidth
        }
    });
}

scrollEffect(".panel2", ".wrapper2");
scrollEffect(".panel3", ".wrapper3");
// End-of-scrolling-effect

// Home-page-02-effect
// gsap.fromTo('.circle', { x: })
// End-of-hame-page-02-effect