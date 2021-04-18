import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Redirect, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import RouteWrapper from "./containers/wrapper"
import { Provider } from 'react-redux'
import store from './redux/store'
import Desayunos from "./pages/desayunos"
import Almuerzos from "./pages/almuerzos"
import Home from "./pages/home"
import Combos from "./pages/combos"
import Bebidas from "./pages/bebidas"
import './assets/css/styles.css'



ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Redirect exact from="/" to="/inicio" />
          <RouteWrapper exact path="/inicio" page={Home} />
          <RouteWrapper exact path="/desayunos" page={Desayunos} />
          <RouteWrapper exact path="/almuerzos" page={Almuerzos} />
          <RouteWrapper exact path="/combos" page={Combos} />
          <RouteWrapper exact path="/bebidas" page={Bebidas} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider >
  </Provider >,
  document.getElementById('root'));


