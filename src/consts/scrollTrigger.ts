export const FIRST_VIEW_SCROLL_TRIGGER_END_PX = 1000
export const DOT_BLUR_SCROLL_TRIGGER_END_PX = 250

export const scrollTrigger: gsap.AnimationVars['scrollTrigger'] = {
  trigger: '#first-view__container',
  start: 'top',
  end: `${FIRST_VIEW_SCROLL_TRIGGER_END_PX}px`,
  // markers: true,
  pin: true,
  scrub: true,
} as const

export const blurScrollTrigger: gsap.AnimationVars['scrollTrigger'] = {
  trigger: '#first-view__blur-scroll-trigger',
  start: 'top bottom',
  end: `${DOT_BLUR_SCROLL_TRIGGER_END_PX}px`,
  markers: true,
  pin: true,
  scrub: true,
} as const
