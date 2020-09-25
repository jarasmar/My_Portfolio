$(document).ready(function () {
  // Add class open to burger menu
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  // Remove class open when clicking on a nav link
  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  // Select all links with a # and animate with smooth scrolling
  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate( {
      scrollTop: $($(this).attr('href')).offset().top - 0
    }, 2000);
  });

  // Add smooth scrolling when clicking the up button
  $('#up').on('click', function () {
    $('html, body').animate( {
      scrollTop: 0
    }, 2000);
  });

  // Initialize Animate On Scroll library to happen just once
  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  })
});