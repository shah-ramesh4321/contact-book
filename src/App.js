
import './App.css';
import Navbar from './components/navbar/Navbar';
import Contacts from './components/contact/Contacts'
import AddContact from './components/contact/AddContact'
import EditContact from './components/contact/EditContact'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
              </Switch>
    </div>
    </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
