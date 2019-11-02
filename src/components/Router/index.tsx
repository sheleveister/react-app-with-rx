import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Redirect, Route, Switch } from 'react-router-dom';
import Spinner from '../Spinner/index';
import { RouterLinks } from '../../models/navigation';

type RouterPropsType = {};

export const LoadableUsers = Loadable({
  loader: () => import('../../modules/Users'),
  loading: Spinner,
});

export const LoadableTracks = Loadable({
  loader: () => import('../../modules/Tracks'),
  loading: Spinner,
});


export class Router extends Component<RouterPropsType> {
  render() {
    return (
      <Switch>
        <Redirect exact path="/" to={RouterLinks.Users} />
        <Route exact path={RouterLinks.Users} component={LoadableUsers} />
        <Route exact path={RouterLinks.Tracks} component={LoadableTracks} />
      </Switch>
    )
  }
}
