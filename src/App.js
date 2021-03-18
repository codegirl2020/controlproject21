
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './container/Main/Main';
import Layout from './components/Layout/Layout';
import AboutUs from './container/AboutUs/AboutUs';


function App() {
  return (

    <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/aboutus" component={AboutUs} />
      </Switch>
    </Layout>

  );
}

export default App;
