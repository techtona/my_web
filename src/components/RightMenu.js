import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import Button from "antd/es/button";
import '../App.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <a href="">Signin</a>
                </Menu.Item>
                <Menu.Item key="app">
                    <a href="">Signup</a>
                </Menu.Item>
                <Menu.Item  key="menu">
                    <p onClick={this.props.showDrawer}>
                        <Icon className="btn-menu-navbar" type="menu-unfold"/>
                    </p>
                </Menu.Item>
            </Menu>
        );
    }
}
export default RightMenu;