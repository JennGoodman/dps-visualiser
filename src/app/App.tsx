import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import DomainStore from './../store/DomainStore';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';
import NoMatch from './NoMatch';
import Footer from './Footer';

const store = new DomainStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <Header />
            <Navigation />
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </>
        </BrowserRouter>
      </Provider>
    );
  }
}
