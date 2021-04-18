import React, { cloneElement } from 'react'
import styled, { withTheme } from 'styled-components'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Layout = (props) => {

    const
        { theme, children } = props,
        [showItems, setShowItems] = useState(false),
        [dataRender, setDataRender] = useState(undefined),
        data = useSelector(({ mainData }) => mainData),

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
        `,

        H1 = styled.h1`
            font-size:  ${theme.fontSizes.title};
            font-family: ${theme.fonts.primary};
            color: ${theme.textColors.main};
        `


    useEffect(async () => {
        const dataGoogleSheets = await data
        setDataRender(dataGoogleSheets)
        setShowItems(true)
    }, []);

    return (
        <React.Fragment>
            <Header>
                <Navbar />
            </Header>
            <Section>
                {!showItems ? <H1>Cargando...</H1> : cloneElement(children, { dataRender })}
            </Section>
            <Footer />
        </React.Fragment>
    )
}

export default withTheme(Layout)