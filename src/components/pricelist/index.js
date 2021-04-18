import styled, { withTheme } from 'styled-components'

const PriceList = (props) => {
    const
        { theme, title, values } = props,

        PriceList = styled.div`
            width: calc(50% - 2rem);
            max-width: 25rem;
            padding: 1rem;
            display: inline-block;
            font-size: ${theme.fontSizes.paragraph};
            font-family: ${theme.fonts.primary};
            color: ${theme.textColors.main};

            ${theme.mediaQuery(`
                width: calc(100% - 2rem);
            `)}
        `,

        H2 = styled.h2`
            font-size:  ${theme.fontSizes.subtitle};
            text-align: left;
            padding-bottom: 1rem;
        `,

        ListContainer = styled.ul`
            width: calc(100% - 2rem);
            max-width: 20rem;
            padding-left: 2rem;
        `,

        DivItem = styled.li`
            font-family: ${theme.fonts.secondary};
            padding: 0.4rem 0rem;
            display: flex;
            justify-content: space-between;
            border-bottom: 0.125rem  ${theme.textColors.content} dotted;
        `,

        DivItemSpent = styled(DivItem)`
            text-decoration: line-through ${theme.textColors.spent};
            text-decoration-thickness: 0.16rem;
            color:  ${theme.textColors.spent};
        `


    return (
        <PriceList>
            <H2>{title}</H2>
            <ListContainer>
                {Object.values(values.values).map((item, idx) => !item.activo
                    ? null
                    : (
                        !item.agotado
                            ? (
                                <DivItem key={idx}>
                                    <p>{item.item}</p>
                                    <p>{item.precio}</p>
                                </DivItem>

                            )
                            : (
                                <DivItemSpent key={idx}>
                                    <p>{item.item}</p>
                                    <p>{item.precio}</p>
                                </DivItemSpent>

                            )
                    ))}
            </ListContainer>


        </PriceList>
    )
}

export default withTheme(PriceList)