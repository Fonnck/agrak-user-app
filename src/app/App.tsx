import { useEffect, useState } from 'react'
import { NextUIProvider, createTheme } from '@nextui-org/react'
import { Route, Switch } from 'wouter';


import store from '../redux/store'
import { Home } from '../components/home/Home';
import { Layout } from '../components/generic-components/Layout';
import { Nav } from '../components/ui/Nav';
import { UserControl } from '../components/user/UserControl';
import { Provider } from 'react-redux';
import './App.css'
import { NotFound } from '../components/ui/NotFound';


const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}, // override dark theme colors
  }
});

function App() {

  useEffect(() => {
    /* window.history.pushState(null, '', '/home'); */
  }, [])


  return (
    <Provider store={store}>
      <NextUIProvider theme={darkTheme}>
        <div className="nav-container">
          <Nav />
        </div>
        <Layout>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/user-control">
              <UserControl />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </NextUIProvider>
    </Provider>
  )
}

export default App
