/**
 * react-stack react-stack
 *
 * Copyright © 2016. JonirRings.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// TODO add admin routes
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import Welcome from '../components/Welcome';
import ViewerQueries from '../components/ViewerQueries';
import Posts from '../components/Posts';
import Post from '../components/Post';
import Publish from '../components/Publish';
import About from '../components/About';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute
      components={{ nav: Welcome, main: Posts }}
      queries={{ nav: ViewerQueries, main: ViewerQueries }}
    />
  </Route>
);
export default routes;
