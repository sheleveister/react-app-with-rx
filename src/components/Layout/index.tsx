import React, { Component, Fragment } from 'react';

import { Router } from '../Router';
import Navbar from '../Navbar';

type LayoutPropsType = {};

class Layout extends Component<LayoutPropsType> {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Router />
      </Fragment>
    )
  }
}

export default Layout;
