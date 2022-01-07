import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/Activities/Dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/homePage';
import ActivityForm from '../../features/Activities/Form/ActivityForm';
import ActivityDetails from '../../features/Activities/Details/ActivityDetails';

function App() { 

  const location = useLocation();

  return (
    // <> equals - <Fragment>
    <>
      <Route exact path='/' component={HomePage} />
      <Route 
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{marginTop: '7em'}}>        
              <Route exact path='/activities' component={ActivityDashboard} />
              <Route path='/activities/:id' component={ActivityDetails} />
              <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
            </Container>
          </>
        )}
      />
      
    </>
  );
}

export default observer(App);
