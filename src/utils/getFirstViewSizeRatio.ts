import {
  viewBackgroundImage,
  innerPcImage,
  screenBackgroundImage,
  logoAndContentsWrapper,
  contentsImage,
} from 'consts/aspect'

export const getInnerPcWidthRatio = () => innerPcImage.WIDTH / viewBackgroundImage.WIDTH

export const getInnerPcAspectRatio = () => innerPcImage.HEIGHT / innerPcImage.WIDTH

export const getInnerPcXPerWidthRatio = () => innerPcImage.X / viewBackgroundImage.WIDTH

export const getAspectInnerPcPositionRatio = () => innerPcImage.Y / innerPcImage.X

export const getViewBgAspectRatio = () => viewBackgroundImage.HEIGHT / viewBackgroundImage.WIDTH

export const getScreenBgAspectRatio = () =>
  screenBackgroundImage.HEIGHT / screenBackgroundImage.WIDTH

export const getLogoAndContentsPerInnerPcWidthRatio = () =>
  logoAndContentsWrapper.WIDTH / innerPcImage.WIDTH

export const getLogoAndContentsAspectRatio = () =>
  logoAndContentsWrapper.HEIGHT / logoAndContentsWrapper.WIDTH

export const getLogoAndContentsXPerInnerPcWidthRatio = () =>
  logoAndContentsWrapper.X / innerPcImage.WIDTH

export const getAspectLogoPositionRatio = () => logoAndContentsWrapper.Y / logoAndContentsWrapper.X

export const getContentsPerLogoAndContentsWidth = () =>
  contentsImage.WIDTH / logoAndContentsWrapper.WIDTH

export const getContentsPerLogoAndContentsHeight = () =>
  contentsImage.HEIGHT / logoAndContentsWrapper.HEIGHT
