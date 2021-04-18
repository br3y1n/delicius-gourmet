import React from 'react'
import styled, { withTheme } from 'styled-components'

const Burger = (props) => {

    const
        { theme, showDrawer, handlerOnClick } = props,

        Line = styled.div`
            width: 30px;
            height: 4px;
            background: ${theme.textColors.main};
            border-radius: 10px;
        `,

        Div = styled.div`
            display: none;
            ${theme.mediaQuery(`
                position: absolute;
                right: 3rem;
                top: 3.7rem;
                margin: 0px 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 30px;
                height: 24px;
                cursor: pointer;
                ${showDrawer && `
                    ${Line}:nth-child(1){
                        transform: rotate(45deg) translate(7px, 7px);
                    }
                    ${Line}:nth-child(2)
                    {
                        display: none;
                    }
                    ${Line}:nth-child(3)
                    {
                        transform: rotate(-45deg) translate(7px, -7px);
                    }
                    
                `}
            `)}
        `
    return (
        <Div onClick={() => handlerOnClick(prevState => !prevState)}>
            <Line />
            <Line />
            <Line />
        </Div>
    )
}

export default withTheme(Burger)