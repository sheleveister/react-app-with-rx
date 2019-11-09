import React, { Component, Fragment } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { Router } from '../Router';
import Navbar from '../Navbar';

type LayoutPropsType = {};

class Layout extends Component<RouteComponentProps<LayoutPropsType>> {
  render() {
    return (
      <Fragment>
        <Navbar {...this.props} />
        <Router />
      </Fragment>
    )
  }
}

export default withRouter(Layout);
