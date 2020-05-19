import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contenidos from './pages/Contenidos';
import ContenidoDetalle from './pages/ContenidoDetalle';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function Routes() {
  return (
    <>
      <Router>
        <Header />
        <div className="content">
          <Route exact path='/' component={Home} />
          <Route exact path='/contenidos' component={Contenidos} />
          <Route exact path='/contenidos/detalle/:id' component={ContenidoDetalle} />
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default Routes
