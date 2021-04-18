import WrapperSection from '../../components/wrappersection'
import CardItem from '../../components/carditem'

const DesayunosContainer = (props) => {
    const
        { dataRender } = props,
        desayunos = dataRender.desayunos.values

    return (
        <WrapperSection title={"Desayunos"} content={Object.values(desayunos).map((item, idx) => !item.activo ? null : <CardItem key={idx} item={item} />)} />
    )
}

export default DesayunosContainer