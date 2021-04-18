import styled, { withTheme } from 'styled-components'

const ListadoContainer = (props) => {
    const
        { theme } = props,

        ListadoContainer = styled.div`
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
        <ListadoContainer>
            <H1>Lista de platos</H1>
        </ListadoContainer>
    )
}

export default withTheme(ListadoContainer)