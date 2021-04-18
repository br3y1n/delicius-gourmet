import styled, { withTheme } from 'styled-components'
import imgLogo from '../../assets/images/logo.png'
import { Link } from "react-router-dom"
import { useState } from 'react'
import Burger from '../burger'

const Navbar = (props) => {
    const
        { theme } = props,
        [showDrawer, setShowDrawer] = useState(false),

        NavbarS = styled.nav`
            width: calc(100% - 1rem);
            height: calc(100% - 1rem);
            padding: 0.5rem;
            display: flex;
            justify-content: center;
            position: relative;
            font-size: ${theme.fontSizes.subtitle};
            font-family: ${theme.fonts.primary};
            color: ${theme.textColors.main};
        `,

        Logo = styled(Link)`
            text-decoration: none;
            width: 6rem;
            height: calc(100% - 1rem);
            position: absolute;
            color: ${theme.textColors.main};
        `,

        ImgLogo = styled.img`
            height: 80%;
        `,

        TextLogo = styled.p`
            display: contents;
            font-size: 10px;
        `,

        Li = styled.li`
            list-style: none;
            width: 7rem;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            ${theme.mediaQuery(`
                padding: 0.8rem;
                width: calc(100% - 1.6rem);
                border-bottom: 2px solid ${theme.textColors.main};
            `)} 
        `,

        Ul = styled.ul`
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            
             ${Li}:nth-child(2),
             ${Li}:nth-child(3)
             {
                width: 13rem;
              }

            ${theme.mediaQuery(`
                display: ${showDrawer ? 'flex' : 'none'};
                z-index: -1;
                flex-direction: column;
                position: absolute;
                right: 0;
                top: ${theme.sizesFrame.headerH};
                width: 100%;
                height: auto;
                background: ${theme.mainColors.shadow};
                justify-content: space-between;

                ${Li}:nth-child(1){
                    border-top: 2px solid ${theme.textColors.main};
                }

                ${Li}:nth-child(2),
                ${Li}:nth-child(3)
                {
                    width: calc(100% - 1.6rem);
                }
            `)}
        `,

        LinkS = styled(Link)`
            text-decoration: none;
            color: ${theme.textColors.main};
        `


    return (
        <NavbarS>
            <Logo to={"/inicio"}>
                <ImgLogo src={imgLogo} alt="Logo Delicius Gourmet" />
                <TextLogo>Delicius Gourmet</TextLogo>
            </Logo>
            <Burger handlerOnClick={setShowDrawer} showDrawer={showDrawer} />
            <Ul>
                <Li><LinkS to={"/desayunos"}>Desayunos</LinkS></Li>
                <Li><LinkS to={"/almuerzos"}>Almuerzos</LinkS></Li>
                <Li><LinkS to={"/combos"}>Combos</LinkS></Li>
                <Li><LinkS to={"/bebidas"}>Bebidas</LinkS></Li>
            </Ul>
        </NavbarS>
    )
}

export default withTheme(Navbar)