export const theme = {
    mediaQuery: (css) => {
        return `@media (max-width: 768px) {
                ${css}
            }`
    },
    sizesFrame: {
        footerH: '7rem',
        headerH: '9rem'
    },
    mainColors: {
        primary: '#7c7c7c',
        secondary: '#bfbfbf',
        shadow: 'rgb(0, 0, 0, 0.8)',
    },
    textColors: {
        main: '#939599',
        content: '#66686B'
    },
    fonts: {
        primary: 'Timotheo',
        secondary: 'Montserrat-SemiBold',
        tertiary: 'Montserrat-Regular'
    },
    fontSizes: {
        title: '1.6rem',
        subtitle: '1.1rem',
        paragraph: '0.8rem',
    }
}