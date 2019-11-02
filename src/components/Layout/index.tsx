import React, { Component, Fragment } from 'react';
import { Router } from '../Router/index';
import Navbar from '../Navbar/index';

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
