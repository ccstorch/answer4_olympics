import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { Layout } from './components';
import { history } from './store.js';
import ListCountriesView from './views/listCountries/ListCountriesView';
import ShowCountryView from './views/showCountry/ShowCountryView';

const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ListCountriesView}/>
      <Route path="country/:name" component={ShowCountryView}/>
    </Route>
  </Router>
);

export default router;
