type pxStr = `${number}px`

const FIGMA_WIDTH_PX = 1440
const FIGMA_HEIGHT_PX = 900
const FIGMA_SM_WIDTH_PX = 414
const FIGMA_SM_HEIGHT_PX = 896

/**
 * Figma の画面設計で指定されている px を、画面設計上の画面サイズ準拠で vw, vh に変換し、
 * 指定したピクセル数, vw, vh で一番小さい値が適用されるように css の min 関数を返却する
 * @param {number | pxStr} px - number | '${number}px'
 * @returns {string}
 */
export const calculateMinSizeBasedOnFigma = (px: number | pxStr): string => {
  const numPx = typeof px === 'string' ? Number(px.replace('px', '')) : px
  const vw = `${(numPx / FIGMA_WIDTH_PX) * 100}vw`
  const vh = `${(numPx / FIGMA_HEIGHT_PX) * 100}vh`

  return `${numPx > 0 ? 'min' : 'max'}(${numPx}px, ${vw}, ${vh})`
}

/**
 * Figma のスマホサイズの画面設計で指定されている px を、画面設計上の画面サイズ準拠で vw, vh に変換し、
 * 指定したピクセル数, vw, vh で一番小さい値が適用されるように css の min 関数を返却する
 * @param {number | pxStr} px - number | '${number}px'
 * @returns {string}
 */
export const calculateSmMinSizeBasedOnFigma = (px: number | pxStr): string => {
  const numPx = typeof px === 'string' ? Number(px.replace('px', '')) : px
  const vw = `${(numPx / FIGMA_SM_WIDTH_PX) * 100}vw`
  const vh = `${(numPx / FIGMA_SM_HEIGHT_PX) * 100}vh`

  return `${numPx > 0 ? 'min' : 'max'}(${numPx}px, ${vw}, ${vh})`
}

/**
 * Figma の画面設計で指定されている px を、画面設計上の width (1440px) 準拠で vw に変換し、
 * 画面サイズが 1440px 以上だったら px, それ未満だったら vw になるような
 * css の min 関数を返却する
 * @param {number | pxStr} px - number | '${number}px'
 * @returns {string}
 */
export const calculateMinSizeBasedOnFigmaWidth = (px: number | pxStr): string => {
  const numPx = typeof px === 'string' ? Number(px.replace('px', '')) : px
  const vw = `${(numPx / FIGMA_WIDTH_PX) * 100}vw`

  return `${numPx > 0 ? 'min' : 'max'}(${numPx}px, ${vw})`
}

/**
 * Figma の画面設計で指定されている px を、画面設計上の width (1440px) 準拠で vw に変換し、
 * 画面サイズが 1440px 以上だったら マイナスのpx, それ未満だったら vw になるような
 * css の min 関数を返却する
 * @param {number | pxStr} px - number | '${number}px'
 * @returns {string}
 */
export const calculateMinNegativeSizeBasedOnFigmaWidth = (px: number | pxStr): string => {
  const numPx = typeof px === 'string' ? Number(px.replace('px', '')) : px
  const vw = `${(numPx / FIGMA_WIDTH_PX) * 100}vw`

  return `min(-${numPx}px, ${vw})`
}

/**
 * Figma の画面設計で指定されている px を、画面設計上の height (900px) 準拠でvh に変換し、
 * 画面サイズが 1440px 以上だったら px, それ未満だったら vw になるような
 * css の min 関数を返却する
 * @param {number | pxStr} px - number | '${number}px'
 * @returns {string}
 */
export const calculateMinSizeBasedOnFigmaHeight = (px: number | pxStr): string => {
  const numPx = typeof px === 'string' ? Number(px.replace('px', '')) : px
  const vh = `${(numPx / FIGMA_HEIGHT_PX) * 100}vh`

  return `${numPx > 0 ? 'min' : 'max'}(${numPx}px, ${vh})`
}

/**
 * Figma の画面設計で指定されている px を、画面設計上の height (1440px) 準拠でvw に変換し返却
 * @param {number | pxStr} px - number | '${number}px'
 * @returns {string}
 */
export const calculateVwBasedOnFigma = (px: number | pxStr): string => {
  const numPx = typeof px === 'string' ? Number(px.replace('px', '')) : px

  return `${(numPx / FIGMA_WIDTH_PX) * 100}vw`
}

/**
 * Figma の画面設計で指定されている px を、画面設計上の height (900px) 準拠でvhに変換し返却
 * @param {number | pxStr} px - number | '${number}px'
 * @returns {string}
 */
export const calculateVhBasedOnFigma = (px: number | pxStr): string => {
  const numPx = typeof px === 'string' ? Number(px.replace('px', '')) : px

  return `${(numPx / FIGMA_HEIGHT_PX) * 100}vh`
}
