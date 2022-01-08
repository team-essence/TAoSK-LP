import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {
  dotBlurScrollTrigger,
  illustBlurScrollTrigger,
  makeDarkerScrollTrigger,
  FIRST_VIEW_SCROLL_TRIGGER_END_PX,
  DOT_BLUR_SCROLL_PX,
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
  // 画面のリサイズが行われた際に、意図していない箇所でブラーがかかってしまうのを防ぐ
  const filterBlurAtDotBlurScrollTrigger = (): string => {
    const blurScrollPosition = FIRST_VIEW_SCROLL_TRIGGER_END_PX + DOT_BLUR_SCROLL_PX
    if (window.scrollY >= blurScrollPosition) {
      return 'blur(0px)'
    } else {
      return 'blur(15px)'
    }
  }

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
      filter: filterBlurAtDotBlurScrollTrigger,
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
      filter: filterBlurAtDotBlurScrollTrigger,
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
