import '@splidejs/splide/css/core'
import Splide from '@splidejs/splide'

new Splide('.splide').mount()

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.splide', {
    type: 'loop',
    perPage: 2,
    perMove: 1,
    focus: 'center',
    speed: 500,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    autoplay: false,
    pagination: false,
    interval: 2000,
    keyboard: true,
    breakpoints: {
      991: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  })
  splide.mount()
})
