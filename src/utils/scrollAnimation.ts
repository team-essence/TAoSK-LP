import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {
  scrollTrigger,
  dotBlurScrollTrigger,
  illustBlurScrollTrigger,
  fixedToAbsoluteScrollTrigger,
} from 'consts/scrollTrigger'
import { FIXED_TO_ABSOLUTE_SCROLL_PX } from 'consts/scrollTrigger'

/** スクロールアニメーションを全てリセットする */
export const resetAllScrollAnimation = () => {
  const allTriggers = ScrollTrigger.getAll()
  for (let i = 0; i < allTriggers.length; i++) {
    allTriggers[i].kill(true)
  }
}

/** ファーストビューでスクロールで徐々にブラーがかかるアニメーションを付与する */
export const addBlurAnimation = () => {
  gsap.fromTo(
    '#first-view__container',
    { position: 'fixed' },
    {
      scrollTrigger,
      position: 'fixed',
    },
  )
  gsap.fromTo(
    '#first-view__inner-display',
    {
      filter: 'blur(15px)',
      backgroundImage: 'url("/screen/before.webp")',
    },
    {
      scrollTrigger: illustBlurScrollTrigger,
      filter: 'blur(0px)',
      backgroundImage: 'url("/screen/after.webp")',
    },
  )
  gsap.fromTo(
    '#first-view__inner-display',
    { filter: 'blur(0px)' },
    {
      scrollTrigger: dotBlurScrollTrigger,
      filter: 'blur(15px)',
    },
  )
  gsap.fromTo(
    '#first-view__container',
    {
      position: 'fixed',
      top: '0px',
    },
    {
      scrollTrigger: fixedToAbsoluteScrollTrigger,
      position: 'fixed',
      top: `${-FIXED_TO_ABSOLUTE_SCROLL_PX}px`,
      ease: 'none',
    },
  )
  gsap.fromTo(
    '#first-view__container',
    { top: '0px' },
    { scrollTrigger: illustBlurScrollTrigger, top: '0px' },
  )
}
