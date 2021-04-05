
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './container/Main/Main';
import Layout from './components/Layout/Layout';
import AboutUs from './container/AboutUs/AboutUs';
import Packages from './container/Packages/Packages';
import News from './container/News/News';
import Contacts from './container/Contacts/Contacts';
import Auth from './components/Auth/Auth';
import FormAdd from './components/FormAdd/FormAdd';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (

    <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/add" component={FormAdd} />
        <Route path="/packages" component={Packages} />
        <Route path="/contact" component={Contacts} />
        <Route path="/news" component={News} />
        <Route path="/admin" component={Auth} />
      </Switch>
    </Layout>

  );
}

export default App;
