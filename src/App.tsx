import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

import Menu from './components/Menu';

/* Pages */
import Dashboard from './pages/Dashboard';
import MonitoringList from './pages/MonitoringList';
import AddMonitoring from './pages/AddMonitoring';
import Reports from './pages/Reports';

/* CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

const App: React.FC = () => {

  return (
    <IonApp>

      <IonReactRouter>

        <IonSplitPane contentId="main">

          <Menu />

          <IonRouterOutlet id="main">

            {/* Dashboard */}
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>

            {/* Monitoring List */}
            <Route exact path="/monitoring">
              <MonitoringList />
            </Route>

            {/* Add Monitoring */}
            <Route exact path="/add-monitoring">
              <AddMonitoring />
            </Route>

            {/* Reports */}
            <Route exact path="/reports">
              <Reports />
            </Route>

            {/* Default Route */}
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>

          </IonRouterOutlet>

        </IonSplitPane>

      </IonReactRouter>

    </IonApp>
  );
};

export default App;