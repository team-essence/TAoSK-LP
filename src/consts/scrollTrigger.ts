export const scrollTriggerEndPx = 1000

export const scrollTrigger: gsap.AnimationVars['scrollTrigger'] = {
  trigger: '#first-view__container',
  start: 'top',
  end: `${scrollTriggerEndPx}px`,
  markers: true,
  pin: true,
  scrub: true,
} as const
