import WrapperSection from '../../components/wrappersection'
import CardItem from '../../components/carditem'

const CombosContainer = (props) => {
    const
        { dataRender } = props,
        combos = dataRender.combos.values

    return (
        <WrapperSection title={"Combos"} content={Object.values(combos).map((item, idx) => !item.activo ? null : <CardItem key={idx} item={item} />)} />
    )
}

export default CombosContainer