import Layout from "../../layout"
import { Route } from 'react-router-dom'

const RouteWrapper = ({
    page: Component,
    ...rest
}) => (
    <Route {...rest} >
        <Layout>
            <Component />
        </Layout>
    </Route >
);

export default RouteWrapper