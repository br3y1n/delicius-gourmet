import WrapperSection from '../../components/wrappersection'
import CardItem from '../../components/carditem'

const AlmuerzosContainer = (props) => {
    const
        { dataRender } = props,
        almuerzos = dataRender.almuerzos.values

    return (
        <WrapperSection title={"Almuerzos"} content={Object.values(almuerzos).map((item, idx) => !item.activo ? null : <CardItem key={idx} item={item} />)} />
    )
}

export default AlmuerzosContainer