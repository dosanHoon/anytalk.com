
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'


class Header extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            activeItem: 'home'
        }
    }
    render() {
        const { activeItem } = this.state
        return (
            < Menu inverted>
                <Menu.Item name='home' color={"blue"} as={NavLink} to='/home' />
                <Menu.Item name='about' color={"blue"} as={NavLink} to='/about' />
                
                <Menu.Item name='friends' color={"blue"} as={NavLink} to='/friends' />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item name='login' color={"blue"} as={NavLink} to='/login' />
                    <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
                </Menu.Menu>
            </Menu >
        )
    }
}


export default Header