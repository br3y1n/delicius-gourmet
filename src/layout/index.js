import React from 'react'
import styled, { withTheme } from 'styled-components'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Layout = (props) => {

    const
        { theme, children } = props,

        Header = styled.header`
            width: 100%;
            height: ${theme.sizesFrame.headerH};
            position: fixed;
            background: ${theme.mainColors.shadow};
        `,

        Section = styled.section`
            width: calc(100% - 2rem);
            min-height: calc(calc(calc(100% - ${theme.sizesFrame.footerH}) - ${theme.sizesFrame.headerH}) - 2rem);
            padding: calc(${theme.sizesFrame.headerH} + 1rem) 1rem 1rem 1rem;
        `

    return (
        <React.Fragment>
            <Header>
                <Navbar />
            </Header>
            <Section>
                {children}
            </Section>
            <Footer />
        </React.Fragment>
    )
}

export default withTheme(Layout)