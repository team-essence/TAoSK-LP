import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {
  dotBlurScrollTrigger,
  illustBlurScrollTrigger,
  makeDarkerScrollTrigger,
} from 'consts/scrollTrigger'
import { convertIntoRGBA } from 'utils/color/convertIntoRGBA'
import { theme } from 'styles/global/theme'

/** スクロールアニメーションを全てリセットする */
export const resetAllScrollAnimation = () => {
  const allTriggers = ScrollTrigger.getAll()
  for (let i = 0; i < allTriggers.length; i++) {
    allTriggers[i].kill(true)
  }
}

/** ファーストビューでスクロールで徐々にブラーがかかるアニメーションを付与する */
export const addBlurAnimation = () => {
  // この順番でアニメーションを付与しないと期待通りのアニメーションにならない
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
    '#first-view__logo-and-contents',
    {
      filter: 'blur(15px)',
    },
    {
      scrollTrigger: illustBlurScrollTrigger,
      filter: 'blur(0px)',
    },
  )
  gsap.fromTo(
    '#first-view__logo-and-contents',
    { filter: 'blur(0px)' },
    {
      scrollTrigger: dotBlurScrollTrigger,
      filter: 'blur(15px)',
    },
  )
}

export const addBackgroundDarkenAnimation = () => {
  gsap.fromTo(
    '#first-view__inner-display-overlay',
    {
      backgroundColor: convertIntoRGBA(theme.COLORS.BACKGROUND.SCORPION, 0),
    },
    {
      scrollTrigger: makeDarkerScrollTrigger,
      backgroundColor: convertIntoRGBA(theme.COLORS.BACKGROUND.SCORPION, 0.32),
    },
  )
}
