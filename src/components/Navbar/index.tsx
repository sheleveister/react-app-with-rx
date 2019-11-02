import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import { DEFAULT_NAV_LINK, navigation } from '../../utils/navigation';
import { ClickParam } from 'antd/lib/menu';
import { NavbarPropsType, NavbarStateType } from './Navbar.types';
import './Navbar.scss';

const { Item } = Menu;


class Navbar extends Component<NavbarPropsType, NavbarStateType> {
  state = {
    current: DEFAULT_NAV_LINK,
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
