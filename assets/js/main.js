// Custom JS
! function () {
    //  Responsive dropdown menu
    var menuItems = document.querySelectorAll('nav.main-menu > ul > li'); 

    function responsiveMenu() {
        if (window.innerWidth <= 991) {
            menuItems.forEach(function (li) {
                li.addEventListener('click', function (e) {
                    if (this.lastElementChild.nodeName === 'UL') {
                        this.lastElementChild.classList.toggle('menu-show');
                    }
                    e.preventDefault()
                });
            });
        }
    }

    window.addEventListener('resize',responsiveMenu);
    document.addEventListener('DOMContentLoaded',responsiveMenu);




    // Tab section
    var tabButtons = document.querySelectorAll('.tab-buttons .tab-btn');
    var tabContents = document.querySelectorAll('.tab-content-items .display-tab-content');
    var tabBackground = document.querySelector('section#tab-section .tab-main-content');

    tabButtons.forEach(function(button, i) {
        button.addEventListener('click',function() {
            tabButtons.forEach(function(btn,i) {
                btn.classList.remove('active');
                tabContents[i].style.display = 'none';
            });
            this.classList.add('active');   
            tabContents[i].style.display = 'block';   
            tabBackground.style.backgroundImage = 'url(' + tabContents[i].getAttribute('data-image')+')'
            tabBackground.animate(
                [
                    {
                        opacity: 0.1
                    },
                    {
                        opacity: 1
                    }
                ], {
                    duration: 400,
                    itarations: 1
                });      
        });
    });



}();

// Custom Jquery
$(document).ready(function() {
    $('button.navbar-toggle').on('click',function() {
        $('nav.main-menu').slideToggle();
    })
});