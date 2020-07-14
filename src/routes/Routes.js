import React, { Fragment, useState } from 'react';
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
import Modalidades from '../pages/modalidade/modalidade';
import Dashboard from '../pages/dashboard/dashboard'
import Login from '../pages/login/login';

/* Cadastros */
import CadastroAtleta from '../pages/cadastros/atletas/atletas'
import CadastroAulasFreq from '../pages/cadastros/aulasfrequencias/aulasfrequencias';
import CadastroCampeonatos from '../pages/cadastros/campeonatos/campeonatos'
import CadastroPrestacoes from '../pages/cadastros/prestacoes/prestacoes'
import CadastroModalidades from '../pages/cadastros/modalidades/modalidades'


const App = () => {
  const [state, setState] = useState({
    hidden: false,
  })
  function setHidden(view) {
    setState({ hidden: view })
  }
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Login" exact render={(props) =>
          <Login />
        } />
        <div className="App">
          <PrivateRoute path="/Dashboard" render={(props) =>
            <Fragment>
              <Sidebar hidden={state.hidden} />
              <Main title={'Dashboard'} hidden={state.hidden} setHidden={setHidden}>
                <Dashboard />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/Associação" render={(props) =>
            <Fragment>
              <Sidebar hidden={state.hidden} />
              <Main title={'Associação'} hidden={state.hidden} setHidden={setHidden}>
                <Associacao />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/Atletas" render={(props) =>
            <Fragment>
              <Sidebar hidden={state.hidden} />
              <Main title={'Atletas'} hidden={state.hidden} setHidden={setHidden}>
                <Atletas />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/CadastroAtleta" render={(props) =>
            <Fragment>
              <Sidebar hidden={state.hidden} />
              <Main title={'Atletas'} hidden={state.hidden} setHidden={setHidden}>
                <CadastroAtleta />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/AulasFrequencias" render={(props) =>
            <Fragment>
              <Sidebar hidden={state.hidden} />
              <Main title={'Aulas e Frequências'} hidden={state.hidden} setHidden={setHidden}>
                <AulasFrequencias />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/CadastroAula" render={(props) =>
            <Fragment>
              <Sidebar hidden={state.hidden} />
              <Main title={'Aulas e Frequências'} hidden={state.hidden} setHidden={setHidden}>
                <CadastroAulasFreq />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/Campeonatos" render={(props) =>
            <Fragment>
              <Sidebar hidden={state.hidden} />
              <Main title={'Campeonatos'} hidden={state.hidden} setHidden={setHidden}>
                <Campeonatos />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/CadastroCampeonato" render={(props) =>
            <Fragment>
              <Sidebar hidden={state.hidden} />
              <Main title={'Campeonatos'} hidden={state.hidden} setHidden={setHidden}>
                <CadastroCampeonatos />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/Modalidades" render={(props) =>
            <Fragment>
              <Sidebar hidden={state.hidden} />
              <Main title={'Modalidade'} hidden={state.hidden} setHidden={setHidden}>
                <Modalidades />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/CadastroModalidades" render={(props) =>
            <Fragment>
              <Sidebar hidden={state.hidden} />
              <Main title={'Campeonatos'} hidden={state.hidden} setHidden={setHidden}>
                <CadastroModalidades />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/Prestacoes" render={(props) =>
            <Fragment>
              <Sidebar hidden={state.hidden} />
              <Main title={'Prestações de Contas'} hidden={state.hidden} setHidden={setHidden}>
                <Prestacoes />
              </Main>
            </Fragment>
          } />
          <PrivateRoute path="/CadastroPrestacao" render={(props) =>
            <Fragment>
              <Sidebar hidden={state.hidden}  />
              <Main title={'Prestações de Contas'} hidden={state.hidden} setHidden={setHidden}>
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
