window.addEventListener('scroll',onScroll)

onScroll();
function onScroll() {
    showNavOnScroll()
showBackToTopButtonScroll()
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function showNavOnScroll() {
    if (scrollY > 0) {
        document.querySelector("#navigation").classList.add('scroll');
    } else {
        document.querySelector("#navigation").classList.remove('scroll');
    }
}

function showBackToTopButtonScroll() {
    if (scrollY > 550) {
        document.querySelector("#backToTopButton").classList.add('show');
    } else {
        document.querySelector("#backToTopButton").classList.remove('show');
    }
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
#home, 
nav,
#home img, 
#home .stats,
#services,
#services header,
#services .card,
$about,
#about header,
#about .content,
`);
