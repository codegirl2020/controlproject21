
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './container/Main/Main';
import Layout from './components/Layout/Layout';
import AboutUs from './container/AboutUs/AboutUs';
import Packages from './container/Packages/Packages';
import News from './container/News/News';


function App() {
  return (

    <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/packages" component={Packages} />
        <Route path="/news" component={News} />
      </Switch>
    </Layout>

  );
}

export default App;
