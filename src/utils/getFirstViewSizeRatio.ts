import { viewBackgroundImage, innerPcImage, screenBackgroundImage, logoImage } from 'consts/aspect'

export const getInnerPcWidthRatio = () => innerPcImage.WIDTH / viewBackgroundImage.WIDTH

export const getInnerPcAspectRatio = () => innerPcImage.HEIGHT / innerPcImage.WIDTH

export const getInnerPcXPerWidthRatio = () => innerPcImage.X / viewBackgroundImage.WIDTH

export const getAspectInnerPcPositionRatio = () => innerPcImage.Y / innerPcImage.X

export const getViewBgAspectRatio = () => viewBackgroundImage.HEIGHT / viewBackgroundImage.WIDTH

export const getScreenBgAspectRatio = () =>
  screenBackgroundImage.HEIGHT / screenBackgroundImage.WIDTH

export const getLogoPerInnerPcWidthRatio = () => logoImage.WIDTH / innerPcImage.WIDTH

export const getLogoAspectRatio = () => logoImage.HEIGHT / logoImage.WIDTH

export const getLogoXPerInnerPcWidthRatio = () => logoImage.X / innerPcImage.WIDTH

export const getAspectLogoPositionRatio = () => logoImage.Y / logoImage.X
