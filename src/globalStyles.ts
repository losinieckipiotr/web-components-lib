let cached: CSSStyleSheet | undefined

export function globalStyles () {
  if (cached) {
    return cached
  }

  const style = Array.from(document.styleSheets).find((style) => {
    if (import.meta.env.MODE === 'development') {
      const styleNode = style.ownerNode as Element
      return styleNode.getAttribute('data-vite-dev-id')?.includes('vite-plugin:stylex.css')
    }
    return true
  })

  if (!style) {
    throw new Error("can't find vite-plugin:stylex.css")
  }

  const constructedStyle = new CSSStyleSheet()
  const cssRules = Array.from(style.cssRules).map(rule => rule.cssText).join(' ')
  constructedStyle.replaceSync(cssRules)

  cached = constructedStyle

  return cached
}
