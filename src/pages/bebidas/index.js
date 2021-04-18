import styled, { withTheme } from 'styled-components'

const BebidasContainer = (props) => {
    const
        { theme } = props,

        BebidasContainer = styled.div`
            width: calc(100% - 2rem);
            padding: 1rem;
            display: flex;
            justify-content: center;
            font-size: ${theme.fontSizes.subtitle};
            font-family: ${theme.fonts.primary};
            color: ${theme.textColors.main};
        `,

        H1 = styled.h1`
            font-size:  ${theme.fontSizes.title};
        `

    return (
        <BebidasContainer>
            <H1>Bebidas</H1>
        </BebidasContainer>
    )
}

export default withTheme(BebidasContainer)