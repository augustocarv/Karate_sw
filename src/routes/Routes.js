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

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Associação" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Associação'}>
                <Associacao/>
              </Main>
            </Fragment>
          } />
          <Route path="/Atletas" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Atletas'}/>
            </Fragment>
          } />
          <Route path="/AulasFrequencias" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Aulas e Frequências'}/>
            </Fragment>
          } />
          <Route path="/Campeonatos" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Campeonatos'}/>
            </Fragment>
          } />
          <Route path="/Prestacoes" render={(props) =>
            <Fragment>
              <Sidebar />
              <Main title={'Prestações de Contas'}/>
            </Fragment>
          } />
          <Redirect exact from="/*" to="/Associação" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
