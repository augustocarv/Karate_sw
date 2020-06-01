import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './Routes.css';

/* Components */
import Sidebar from '../components/sidebar/sidebar'
import Main from '../components/main/main'

/*Pages */
import Associacao from '../pages/associacao/associacao'
import Atletas from '../pages/atletas/atletas';
import AulasFrequencias from '../pages/aulasfrequencias/aulasfrequencias';
import Campeonatos from '../pages/campeonatos/campeonatos';
import Prestacoes from '../pages/prestacoes/prestacoes';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Associação" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Associação'}>
                <Associacao />
              </Main>
            </Fragment>
          } />
          <Route path="/Atletas" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Atletas'}>
                <Atletas />
              </Main>
            </Fragment>
          } />
          <Route path="/AulasFrequencias" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Aulas e Frequências'}>
                <AulasFrequencias />
              </Main>
            </Fragment>
          } />
          <Route path="/Campeonatos" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Campeonatos'}>
                <Campeonatos />
              </Main>
            </Fragment>
          } />
          <Route path="/Prestacoes" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Prestações de Contas'}>
                <Prestacoes />
              </Main>
            </Fragment>
          } />
          <Redirect exact from="/*" to="/Associação" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
