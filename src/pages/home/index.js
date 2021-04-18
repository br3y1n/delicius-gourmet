import styled, { withTheme } from 'styled-components'
import PriceList from '../../components/pricelist'

const ListadoContainer = (props) => {
    const
        { theme, dataRender } = props,
        _renderLogic = (subdata, idx) => {
            const title = subdata[0]
            const values = subdata[1]

            return ['worksheets', 'del dia'].includes(title) ? null : <PriceList key={idx} title={title} values={values} />
        },

        ListadoContainer = styled.div`
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

    console.log(dataRender)
    return (
        <ListadoContainer>
            <H1>Lista de platos</H1>
            <WrapContainer>
                {Object.entries(dataRender).map(_renderLogic)}
            </WrapContainer>


        </ListadoContainer>
    )
}

export default withTheme(ListadoContainer)