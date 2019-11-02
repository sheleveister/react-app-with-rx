import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouterLinks } from '../../models/navigation';
import { UsersContainer } from '../../containers/UsersContainer/UsersContainer';
import Tracks from '../../modules/Tracks';

type RouterPropsType = {};

export class Router extends Component<RouterPropsType> {
  render() {
    return (
      <Switch>
        <Redirect exact path="/" to={RouterLinks.Users} />
        <Route exact path={RouterLinks.Users} component={UsersContainer} />
        <Route exact path={RouterLinks.Tracks} component={Tracks} />
      </Switch>
    )
  }
}
