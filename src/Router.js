import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginPage from './components/LoginPage';
import ActivitiesPage from './components/ActivitiesPage';
import ActivityAdd from './components/ActivityAdd';
import ActivityEdit from './components/ActivityEdit';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 10 }}>
      <Scene key="root" >
        <Scene 
            onRight={() => Actions.activitiesPage()}
            rightTitle="Events"
            key="loginPage"
            component={LoginPage}
            title="SwingIstanbul"
            initial
          />
          <Scene 
          onRight={() => Actions.loginPage()}
          rightTitle="User"
          key="activitiesPage"
          component={ActivitiesPage}
          title="SwingIstanbul"          
        />
        <Scene 
          key="activityAdd"
          component={ActivityAdd}
          title="Add Event"
        />   
        <Scene 
        key="activityEdit"
        component={ActivityEdit}
        title="Edit Event"
      />        
      </Scene>
    </Router>
  );
};

export default RouterComponent;
