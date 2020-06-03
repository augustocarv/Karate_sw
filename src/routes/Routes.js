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

/*Pages */
import Associacao from '../pages/associacao/associacao'
import Atletas from '../pages/atletas/atletas';
import AulasFrequencias from '../pages/aulasfrequencias/aulasfrequencias';
import Campeonatos from '../pages/campeonatos/campeonatos';
import Prestacoes from '../pages/prestacoes/prestacoes';
import Login from '../pages/login/login';


const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Login" exact render={(props) =>
          <Login />
        } />
        <div className="App">
          <Redirect exact from="/*" to="/Associação" />
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
          <PrivateRoute path="/AulasFrequencias" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Aulas e Frequências'}>
                <AulasFrequencias />
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
          <PrivateRoute path="/Prestacoes" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Prestações de Contas'}>
                <Prestacoes />
              </Main>
            </Fragment>
          } />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
