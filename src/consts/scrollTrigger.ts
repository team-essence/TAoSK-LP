export const FIRST_VIEW_SCROLL_TRIGGER_END_PX = 1000
export const DOT_BLUR_SCROLL_TRIGGER_END_PX = 500

export const scrollTrigger: gsap.AnimationVars['scrollTrigger'] = {
  trigger: '#first-view__container',
  start: 'top',
  end: `${FIRST_VIEW_SCROLL_TRIGGER_END_PX}px`,
  // markers: true,
  scrub: true,
} as const

export const dotBlurScrollTrigger: gsap.AnimationVars['scrollTrigger'] = {
  trigger: '#first-view__dot-blur-animation-dummy',
  start: 'top+=500px bottom',
  end: 'bottom bottom',
  // markers: true,
  scrub: true,
} as const

export const illustBlurScrollTrigger: gsap.AnimationVars['scrollTrigger'] = {
  trigger: '#first-view__illust-blur-animation-dummy',
  start: 'top bottom',
  end: 'bottom-=500px bottom',
  markers: true,
  scrub: true,
} as const

export const fixedToAbsoluteScrollTrigger: gsap.AnimationVars['scrollTrigger'] = {
  trigger: '#first-view__illust-blur-animation-dummy',
  start: 'bottom-=500px bottom',
  end: 'bottom+=500px bottom',
  markers: true,
  scrub: true,
} as const
