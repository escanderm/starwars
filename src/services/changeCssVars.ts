export const changeCssVars = (theme: string) => {
  const root = document.documentElement

  const cssVars = ['header', 'bgimage']

  cssVars.forEach((element) => {
    root.style.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element})`)
  })
}
