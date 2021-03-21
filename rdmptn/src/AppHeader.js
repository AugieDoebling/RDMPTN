import React, {Component} from "react";
import {Container, Header, Menu} from "semantic-ui-react";

export default class AppHeader extends Component {

    render() {
        return (
            <Menu fixed='top' inverted size='large'>
                <Container>
                    <Menu.Item href='/'>
                        <Header content='RDMPTN' inverted size='huge' className='realBig'/>
                    </Menu.Item>

                    <Menu.Menu position='right' size='massive'>
                        <Menu.Item content='connect' />
                        <Menu.Item content='ministry team' />




                    </Menu.Menu>

                </Container>
            </Menu>
        )
    }
}