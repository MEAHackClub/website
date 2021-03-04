import base from '@hackclub/theme'

const theme = base

// theme.fontSizes = […]
// theme.fonts.heading = ''

theme.styles.h1 = theme.text.title
theme.styles.h1.color = 'blue'

theme.styles.h2 = theme.text.headline
theme.styles.h2.color = 'accent'

export default theme