import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './Routes.css';
import PrivateRoute from './PrivateRoute'
import history from './history'

/* Components */
import Sidebar from '../components/sidebar/sidebar'
import Main from '../components/main/main'

/* Pages */
import Associacao from '../pages/associacao/associacao'
import Atletas from '../pages/atletas/atletas';
import AulasFrequencias from '../pages/aulasfrequencias/aulasfrequencias';
import Campeonatos from '../pages/campeonatos/campeonatos';
import Prestacoes from '../pages/prestacoes/prestacoes';
import Login from '../pages/login/login';

/* Cadastros */
import CadastroAtleta from '../pages/cadastros/atletas/atletas'
import CadastroAulasFreq from '../pages/cadastros/aulasfrequencias/aulasfrequencias';
import CadastroCampeonatos from '../pages/cadastros/campeonatos/campeonatos'
import CadastroPrestacoes from '../pages/cadastros/prestacoes/prestacoes'

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Login" exact render={(props) =>
          <Login />
        } />
        <div className="App">
          
          <PrivateRoute path="/Associação" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Associação'}>
                <Associacao />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/Atletas" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Atletas'}>
                <Atletas />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/CadastroAtleta" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Atletas'}>
                <CadastroAtleta />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/AulasFrequencias" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Aulas e Frequências'}>
                <AulasFrequencias />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/CadastroAula" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Aulas e Frequências'}>
                <CadastroAulasFreq />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/Campeonatos" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Campeonatos'}>
                <Campeonatos />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/CadastroCampeonato" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Campeonatos'}>
                <CadastroCampeonatos />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/Prestacoes" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Prestações de Contas'}>
                <Prestacoes />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/CadastroPrestacao" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Prestações de Contas'}>
                <CadastroPrestacoes />
              </Main>
            </Fragment>
          } />
        </div>
        <Redirect exact from="/*" to="/Associação" />
      </Switch>
    </Router>
  );
}

export default App;
