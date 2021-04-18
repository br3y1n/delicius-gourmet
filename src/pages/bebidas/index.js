import WrapperSection from '../../components/wrappersection'
import CardItem from '../../components/carditem'

const BebidasContainer = (props) => {
    const
        { dataRender } = props,
        bebidas = dataRender.bebidas.values

    return (
        <WrapperSection title={"Bebidas"} content={Object.values(bebidas).map((item, idx) => !item.activo ? null : <CardItem key={idx} item={item} />)} />
    )
}

export default BebidasContainer