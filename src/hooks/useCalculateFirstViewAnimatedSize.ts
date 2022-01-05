import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useWatchInnerAspect } from 'hooks/useWatchInnerAspect'
import { useFirstViewInnerPcAnimation } from 'hooks/useFirstViewInnerPcAnimation'
import { useFirstViewBackgroundAnimation } from 'hooks/useFirstViewBackgroundAnimation'
import { resetAllScrollAnimation, addBlurAnimation } from 'utils/scrollAnimation'

type UseCalculateFirstViewAnimatedSizeReturn = {
  innerHeight: number
  firstViewAnimationDummyHeight: number
}

/**
 * ファーストビューでスクロールした時に画面内のPCがピッタリ実際の画面に収まるような拡大率・位置を計算し、アニメーションを付与する
 */
export const useCalculateFirstViewAnimatedSize = (): UseCalculateFirstViewAnimatedSizeReturn => {
  const { innerWidth, innerHeight } = useWatchInnerAspect()
  const { addInnerPcAnimation, firstViewAnimationDummyHeight, ...innerPcAnimationVariables } =
    useFirstViewInnerPcAnimation(innerWidth, innerHeight)
  const { addFirstViewBackgroundAnimation, addBackgroundDummyAnimation } =
    useFirstViewBackgroundAnimation({ ...innerPcAnimationVariables })

  const isRegistered = useRef<boolean>(false)

  useEffect(() => {
    if (!isRegistered.current) {
      gsap.registerPlugin(ScrollTrigger)
      isRegistered.current = true
    }
    if (!innerWidth || !innerHeight) return
    resetAllScrollAnimation()
    addInnerPcAnimation()
    addFirstViewBackgroundAnimation()
    addBackgroundDummyAnimation()
    addBlurAnimation()
  }, [addInnerPcAnimation, addFirstViewBackgroundAnimation, addBackgroundDummyAnimation])

  return { innerHeight, firstViewAnimationDummyHeight }
}
