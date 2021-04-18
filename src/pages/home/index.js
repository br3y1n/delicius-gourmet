import PriceList from '../../components/pricelist'
import WrapperSection from '../../components/wrappersection'

const ListadoContainer = (props) => {
    const
        { dataRender } = props,
        _renderLogic = (subdata, idx) => {
            const title = subdata[0]
            const values = subdata[1]

            return ['worksheets', 'del dia'].includes(title) ? null : <PriceList key={idx} title={title} values={values} />
        }

    return (
        <WrapperSection title={"Lista de platos"} content={Object.entries(dataRender).map(_renderLogic)} />
    )
}

export default ListadoContainer