import styled, { withTheme } from 'styled-components'

const AlmuerzosContainer = (props) => {
    const
        { theme } = props,

        AlmuerzosContainer = styled.div`
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
        <AlmuerzosContainer>
            <H1>Almuerzos</H1>
        </AlmuerzosContainer>
    )
}

export default withTheme(AlmuerzosContainer)