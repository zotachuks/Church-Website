$('#upcomings').owlCarousel({
  items: 3,
  autoplay: true,
  smartSpeed: 2000,
  loop: true,
  autoplayHover: true,
  dots: true,
  navText: ['<i class="fa fa-chevron-left fa-2x"></i>', '<i class="fa fa-chevron-right fa-2x"></i>'],
  responsiveClass: true,
  responsive: {
  0: {
    items: 1
  },
  780: {
    items: 2
  },
  1024: {
    items: 3
  }
}
})

$('#activities').owlCarousel({
  items: 4,
  autoplay: true,
  smartSpeed: 2000,
  loop: true,
  autoplayHover: true,
  dots: true,
  navText: ['<i class="fa fa-chevron-left fa-2x"></i>', '<i class="fa fa-chevron-right fa-2x"></i>'],
  responsiveClass: true,
  responsive: {
  0: {
    items: 1
  },
  780: {
    items: 2
  },
  1024: {
    items: 4
  }
}
})
