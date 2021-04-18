import styled, { withTheme } from 'styled-components'

const WrapperSection = (props) => {
    const
        { theme, title, content } = props,

        WrapperSection = styled.div`
            width: calc(100% - 2rem);
            padding: 1rem;
            font-size: ${theme.fontSizes.subtitle};
            font-family: ${theme.fonts.primary};
            color: ${theme.textColors.main};
        `,

        H1 = styled.h1`
            font-size:  ${theme.fontSizes.title};
            padding: 1rem;
        `,

        WrapContainer = styled.div`
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            ${theme.mediaQuery(`
                flex-flow: column;
                align-items: center;
            `)}
        `

    return (
        <WrapperSection>
            <H1>{title}</H1>
            <WrapContainer>
                {content}
            </WrapContainer>
        </WrapperSection>
    )
}

export default withTheme(WrapperSection)