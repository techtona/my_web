import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button, Icon } from 'antd';

class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
    };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <nav className="menuBar">
                <div className="logo">
                    <a href="">logo</a>
                </div>
                <div className="menuCon">
                    <div className="leftMenu">
                        <LeftMenu />
                    </div>
                    <div className="rightMenu">
                        <RightMenu showDrawer={() => this.showDrawer()}/>
                    </div>
                    <Button className="barsMenu" type="primary">
                        <span className="barsBtn">
                            <Icon type="star" theme="filled" />
                        </span>
                    </Button>
                    <Drawer
                        title="Other Menu"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                    {/*  di sini isikan apa yang dimasukkan kedalam drawer  */}
                    </Drawer>
                </div>
            </nav>
        );
    }
}
export default Navbar;