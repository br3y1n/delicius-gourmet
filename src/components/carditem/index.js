import styled, { withTheme } from 'styled-components'

const CardItem = (props) => {
    const
        { theme, item } = props,

        CardItem = styled.div`
            width: 20rem;
            height: 25rem;
            max-width: 20rem;
            padding: 2rem;
            display: block;
            font-size: ${theme.fontSizes.paragraph};
            font-family: ${theme.fonts.primary};
            color: ${theme.textColors.main};

            ${theme.mediaQuery(`
                width: 90%;
            `)}
        `,

        H2 = styled.h2`
            font-size:  ${theme.fontSizes.subtitle};
            padding: 0.15rem;
        `,

        HeaderCard = styled.div`
        
            border-radius: 2rem 0 0 0;
            overflow: hidden;
            width: 100%;
            height: 65%;
            box-shadow: rgb(0, 0, 0, 0.7) 15px 0px 23px 0px;
        `,

        BodyCard = styled.div`
            width: 100%;
            height: 35%;
            border-radius: 0 0 2rem 0;
            overflow: hidden;
            background: ${theme.mainColors.shadow};
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-shadow: rgb(0, 0, 0, 0.7) 15px 0px 23px 0px;
        `,

        ImgCard = styled.img`
            width: 100%;
            height: 100%;
            object-fit: cover;
        `,

        P = styled.p`
            padding: 1rem;
            font-family: ${theme.fonts.secondary};
            color: ${theme.textColors.content};
        `


    /* DivItem = styled.li`
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
    ` */


    return (
        <CardItem>
            <HeaderCard>
                <ImgCard src={item.imagen} />
            </HeaderCard>
            <BodyCard>
                <H2>{item.item}</H2>
                <p>({item.precio})</p>
                {item.descripcion && <P>({item.descripcion})</P>}

            </BodyCard>

        </CardItem>
    )
}

export default withTheme(CardItem)