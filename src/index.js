import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainPage from './components/MainPage/MainPage';
import Activitate from './components/Activitate/Activitate';
import Localizare from './components/Localizare/Localizare';
import Traseu from './components/Traseu/Traseu';
import Gps from './components/Gps/Gps';
import Tablete from './components/Tablete/Tablete';
import Avarie from './components/Avarie/Avarie';
import Iesire from './components/Iesire/Iesire';
import history from "./utils/history";
import { Route, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (

  <Router history={history} basename={'/flotaweb'}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/main" component={MainPage} />
      <Route path="/activitate" component={Activitate} />
      <Route path="/localizare" component={Localizare} />
      <Route path="/traseu" component={Traseu} />
      <Route path="/gps" component={Gps} />
      <Route path="/tablete" component={Tablete} />
      <Route path="/avarie" component={Avarie} />
      <Route path="/iesire" component={Iesire} />
    </div>
  </Router>

)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
