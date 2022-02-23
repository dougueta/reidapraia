import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './routes'
import PageBase from './components/PageBase'
import Home from './components/Home'
import Sortition from './components/Sortition'
import Ranking from './components/Ranking'

import Match from './components/Match'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './App.css'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <PageBase>
        {/* <Switch> */}
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition timeout={300} classNames="fade" key={location.key}>
                <Switch location={location}>
                  <Route path={routes.home} component={Home} exact />
                  <Route path={routes.ranking} component={Ranking} exact />
                  <Route path="/sorteio" component={Sortition} exact />
                  <Route path="/partidas" component={Match} exact />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </PageBase>
    </BrowserRouter>
  )
}
export default App
