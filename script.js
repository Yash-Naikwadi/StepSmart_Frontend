function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (product.classList.contains(category) || category === 'all') {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

var menuButton = document.querySelector('.menu-button');
var navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', toggleMenu);

var menuLinks = navMenu.querySelectorAll('a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 860) { // Only hide the menu if the screen width is less than or equal to 768px
            hideMenu();
        }
    });
});

function toggleMenu() {
    if (navMenu.classList.contains('show')) {
        navMenu.style.transform = 'translateY(-100%)';
        setTimeout(function() {
            navMenu.classList.remove('show');
            navMenu.style.display = 'none';
        }, 300);
    } else {
        navMenu.style.display = 'flex';
        setTimeout(function() {
            navMenu.style.transform = 'translateY(0)';
            navMenu.classList.add('show');
        }, 10);
    }
}

function hideMenu() {
    navMenu.style.transform = 'translateY(-100%)';
    setTimeout(function() {
        navMenu.classList.remove('show');
        navMenu.style.display = 'none';
    }, 300);
}
