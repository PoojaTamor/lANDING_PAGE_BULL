(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });



    const carousel = $(".my-carousel");

    // Initialize Owl Carousel
    carousel.owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa-solid fa-arrow-left-long"></i>',
            '<i class="fa-solid fa-arrow-right-long"></i>'
        ],
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // Go to the first item (LATEST) on click
    $(".latest").on("click", function () {
        carousel.trigger('to.owl.carousel', [0, 1000]); // Go to first slide
    });

    // Go to the last item (OLD) on click
    $(".old").on("click", function () {
        const itemCount = carousel.find('.owl-item').length; // Total items
        carousel.trigger('to.owl.carousel', [itemCount - 1, 1000]); // Go to last slide
    });
    
})(jQuery);

// Toggle the dropdown visibility
 function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById('languageDropdown');
    dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' 
        ? 'flex' 
        : 'none';
}

// Load the Google Translate script dynamically
function loadGoogleTranslate() {
    const script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
}

// Initialize the Google Translate widget
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,fr,de,hi', // Add desired languages
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// Trigger translation for a specific language
function translatePage(language) {
    const selectElement = document.querySelector(".goog-te-combo");
    if (selectElement) {
        selectElement.value = language;
        selectElement.dispatchEvent(new Event("change"));
    }
}

// Load Google Translate on page load
window.onload = loadGoogleTranslate;

