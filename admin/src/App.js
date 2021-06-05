
import './App.css';
import Header from "./component/header";
import Layout from "./component/Layout/layout";
import Login from './component/login/login';
import history from "./component/Layout/history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
  Link
} from "react-router-dom";
import Register from './component/login/register';
import Confirm from './component/login/confirm';
import NotAccept from './component/login/notAccept';
import Forgot from './component/login/forgot';
import Reset from './component/login/reset';
import Confirm1 from './component/login/confirm_reset';
// import Testdata from "./component/testdata";
function App() {
  return (
    <Router>
      <div style={{width:"100%"}}>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Layout/>
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/register">
              <Register/>
          </Route>
          <Route path="/confirm">
              <Confirm/>
          </Route>
          <Route path="/confirm_reset/:email" component={Confirm1}/>
          <Route path="/notAccept">
              <NotAccept/>
          </Route>
          <Route path="/forgot">
              <Forgot/>
          </Route>
          <Route path="/reset/:email" component={Reset}/>
      </Switch>
</div>
    </Router>
    
  );
}

export default App;