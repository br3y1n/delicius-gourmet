import styled, { withTheme } from 'styled-components'

const DesayunosContainer = (props) => {
    const
        { theme } = props,

        DesayunosContainer = styled.div`
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
        <DesayunosContainer>
            <H1>Desayunos</H1>
        </DesayunosContainer>
    )
}

export default withTheme(DesayunosContainer)