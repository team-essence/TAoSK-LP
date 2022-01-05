import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useWatchInnerAspect } from 'hooks/useWatchInnerAspect'
import { useFirstViewInnerPcAnimation } from 'hooks/useFirstViewInnerPcAnimation'
import { useFirstViewBackgroundAnimation } from 'hooks/useFirstViewBackgroundAnimation'
import { useFirstViewLogoAndContentsAnimation } from 'hooks/useFirstViewLogoAndContentsAnimation'
import {
  resetAllScrollAnimation,
  addBlurAnimation,
  addBackgroundDarkenAnimation,
} from 'utils/scrollAnimation'

type UseCalculateFirstViewAnimatedSizeReturn = {
  innerHeight: number
  firstViewAnimationDummyHeight: number
}

// TODO: useCalculateFirstViewAnimatedSizeは名前が不適切なので変更する
/**
 * ファーストビューでスクロールした時に画面内のPCがピッタリ実際の画面に収まるような拡大率・位置を計算し、アニメーションを付与する
 */
export const useCalculateFirstViewAnimatedSize = (): UseCalculateFirstViewAnimatedSizeReturn => {
  const { innerWidth, innerHeight } = useWatchInnerAspect()
  const { addInnerPcAnimation, firstViewAnimationDummyHeight, ...innerPcAnimationVariables } =
    useFirstViewInnerPcAnimation(innerWidth, innerHeight)
  const { addFirstViewBackgroundAnimation, addBackgroundDummyAnimation } =
    useFirstViewBackgroundAnimation({ ...innerPcAnimationVariables })
  const { addLogoAndContentsAnimation, addMovingLogoAndContentsAsScrollAnimation } =
    useFirstViewLogoAndContentsAnimation({
      ...innerPcAnimationVariables,
    })

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
    addMovingLogoAndContentsAsScrollAnimation()
    addLogoAndContentsAnimation()
    addBlurAnimation()
    addBackgroundDarkenAnimation()
  }, [
    addInnerPcAnimation,
    addFirstViewBackgroundAnimation,
    addBackgroundDummyAnimation,
    addLogoAndContentsAnimation,
  ])

  return { innerHeight, firstViewAnimationDummyHeight }
}
