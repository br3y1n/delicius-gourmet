import styled, { withTheme } from 'styled-components'

const CombosContainer = (props) => {
    const
        { theme } = props,

        CombosContainer = styled.div`
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
        <CombosContainer>
            <H1>Combos</H1>
        </CombosContainer>
    )
}

export default withTheme(CombosContainer)