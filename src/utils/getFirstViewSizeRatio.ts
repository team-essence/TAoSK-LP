import { viewBackgroundImage, innerDisplayImage, screenBackgroundImage } from 'consts/aspect'

export const getInnerPcWidthRatio = () => innerDisplayImage.WIDTH / viewBackgroundImage.WIDTH

export const getInnerPcAspectRatio = () => innerDisplayImage.HEIGHT / innerDisplayImage.WIDTH

export const getInnerPcXPerWidthRatio = () => innerDisplayImage.X / viewBackgroundImage.WIDTH

export const getAspectInnerPcPositionRatio = () => innerDisplayImage.Y / innerDisplayImage.X

export const getViewBgAspectRatio = () => viewBackgroundImage.HEIGHT / viewBackgroundImage.WIDTH

export const getScreenBgAspectRatio = () =>
  screenBackgroundImage.HEIGHT / screenBackgroundImage.WIDTH
