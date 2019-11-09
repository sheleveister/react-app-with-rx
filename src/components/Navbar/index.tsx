import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { ClickParam } from 'antd/lib/menu';

import { DEFAULT_NAV_LINK, navigation } from '../../utils/navigation';
import { INavigation } from '../../models/navigation';

import { NavbarPropsType, NavbarStateType } from './Navbar.types';
import './Navbar.scss';

const { Item } = Menu;


class Navbar extends Component<NavbarPropsType, NavbarStateType> {
  state = {
    current: DEFAULT_NAV_LINK,
  };

  componentDidMount(): void {
    this.getNavLink();
  }

  getNavLink = () => {
    const { pathname } = this.props.location;
    const currentPath: INavigation|undefined = navigation
      .find(item => item.link === pathname);

    if (currentPath) {
      this.setState({ current: currentPath.key });
    }
  };

  handleClick = (e: ClickParam): void => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { current } = this.state;

    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        {navigation.map(({ key, link, icon, name }) => (
          <Item key={key}>
            <NavLink to={link}>
              <Icon type={icon} />
              { name }
            </NavLink>
          </Item>
        ))}
      </Menu>
    )
  }
}

export default Navbar;
