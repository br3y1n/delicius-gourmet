import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Redirect, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import RouteWrapper from "./containers/wrapper"
import './assets/css/styles.css'
import Desayunos from "./pages/desayunos"
import Almuerzos from "./pages/almuerzos"
import Home from "./pages/home"
import Combos from "./pages/combos"
import Bebidas from "./pages/bebidas"



ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/inicio" />
        <RouteWrapper path="/inicio" page={Home} />
        <RouteWrapper path="/desayunos" page={Desayunos} />
        <RouteWrapper path="/almuerzos" page={Almuerzos} />
        <RouteWrapper path="/combos" page={Combos} />
        <RouteWrapper path="/bebidas" page={Bebidas} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider >,
  document.getElementById('root'));


