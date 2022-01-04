export const FIRST_VIEW_SCROLL_TRIGGER_END_PX = 1000
export const DOT_BLUR_SCROLL_PX = 1000
export const ILLUST_BLUR_SCROLL_PX = 1000
export const FIXED_TO_ABSOLUTE_SCROLL_PX = 1000

export const scrollTrigger: gsap.AnimationVars['scrollTrigger'] = {
  trigger: '#first-view__container',
  start: 'top',
  end: `${FIRST_VIEW_SCROLL_TRIGGER_END_PX}px`,
  // markers: true,
  scrub: true,
} as const

export const dotBlurScrollTrigger: gsap.AnimationVars['scrollTrigger'] = {
  trigger: '#first-view__dot-blur-animation-dummy',
  start: `top+=${DOT_BLUR_SCROLL_PX / 2}px bottom`,
  end: 'bottom bottom',
  // markers: true,
  scrub: true,
} as const

export const illustBlurScrollTrigger: gsap.AnimationVars['scrollTrigger'] = {
  trigger: '#first-view__illust-blur-animation-dummy',
  start: 'top bottom',
  end: `bottom-=${ILLUST_BLUR_SCROLL_PX / 2}px bottom`,
  markers: true,
  scrub: true,
} as const

export const fixedToAbsoluteScrollTrigger: gsap.AnimationVars['scrollTrigger'] = {
  trigger: '#first-view__illust-blur-animation-dummy',
  start: `bottom-=${ILLUST_BLUR_SCROLL_PX / 2}px bottom`,
  end: `bottom+=${FIXED_TO_ABSOLUTE_SCROLL_PX / 2}px bottom`,
  markers: true,
  scrub: true,
} as const
