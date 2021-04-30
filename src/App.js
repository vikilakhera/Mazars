import React from "react";
import {
    HashRouter as Router,
    Route,Switch
} from 'react-router-dom';
import Sidebar from "./sidebar"
import Layout from "./layout";
import Body from "./body";
import Feedback from "./Feedback";
import First from "./First";
import Second from "./Second";


function App() {
  return (
      <Layout>
        <Sidebar/>
        <Router>
          <Switch>
            <Route exact path="/customer/index" component={Body}/>
            <Route exact path="/customer/feedback" component={Feedback}/>
            <Route exact path="/customer/first" component={First}/>
            <Route exact path="/customer/second" component={Second}/>
          </Switch>
        </Router>
      </Layout>
  );
}

export default App;
