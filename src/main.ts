import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './splide.ts'

gsap.registerPlugin(ScrollTrigger)

function init() {
  $('[s-element="text"]').each(function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'top 80%',
      },
    })
    tl.from($(this), {
      yPercent: 20,
      opacity: 0,
      duration: 1.2,
      ease: 'power1.out',
    })
  })

  $('[s-element="image"]').each(function () {
    const tlImage = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: 'top 80%',
      },
    })
    tlImage.from($(this), {
      yPercent: 20,
      opacity: 0,
      duration: 1.2,
      ease: 'power1.out',
    })
  })

  const tlCard = gsap.timeline({
    scrollTrigger: {
      trigger: '[s-element="card"]',
      start: 'top 80%',
    },
  })
  tlCard.from('[s-element="card"]', {
    yPercent: 20,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power1.out',
  })
}
window.addEventListener('load', () => {
  init()
})
