
  let hasEle, supportSkin
  try {
    hasEle = !!require.resolve('path')
  } catch (e) {
    console.error('element-ui has not installed,please install')
  }
  if (!hasEle) return {install: 'const l7Element=\'element-ui has not installed,please install\''}
  try {
    supportSkin = !!require.resolve('element-theme-chalk111')
  } catch (e) {
    supportSkin = false
  }
  if (!supportSkin) console.warn('Don\'t exist element-theme-chalk,can\'t use custom theme')
