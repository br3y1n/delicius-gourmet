import styled, { withTheme } from 'styled-components'

const Footer = (props) => {
    const
        { theme } = props,

        FooterS = styled.footer`
            width: 100%;
            min-height: ${theme.sizesFrame.footerH};
            background: ${theme.mainColors.shadow};
            display: flex;
            color: ${theme.textColors.main};
            justify-content: center;
            align-items: center;
            font-family: ${theme.fonts.primary};
        `,

        Ul = styled.ul`
            display: flex;
            padding: 2rem 0rem;
            ${theme.mediaQuery('display: block;')}
        `,

        Li = styled.li`
            font-size: ${theme.fontSizes.subtitle};
            list-style: none;
            padding: 0.5rem 1rem;
            border-left: solid 0.1rem ${theme.textColors.main};
            ${theme.mediaQuery('border-left: none;')}
        `,

        LiLast = styled(Li)`
        border-right: solid 0.1rem ${theme.textColors.main};
        ${theme.mediaQuery('border-right: none;')}
        `

    return (
        <FooterS>
            <Ul>
                <Li>© {new Date().getFullYear()} Delicius Gourmet</Li>
                <Li>Cr 43A # 20C-73</Li>
                <LiLast>Tel 3125988707 - 3177174659 </LiLast>
            </Ul>
        </FooterS>
    )
}

export default withTheme(Footer)