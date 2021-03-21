import React, {Component} from "react";
import background from './images/mountains.jpg';
import AppHeader from "./AppHeader";
import {Container, Embed, Grid, Header, Segment} from "semantic-ui-react";

export default class App extends Component {

    render() {
        return (
            <div>
                <AppHeader />

                <div className='splashImage' style={{backgroundImage : `url(${background})`}} >
                    <Container textAlign='center'>
                        <Header content='RDMPTN' inverted style={{marginTop : '27vh', fontSize : '5em'}}/>
                        <Header content='we out here' inverted style={{marginTop : '3vh'}} size='large'/>
                    </Container>
                </div>

                <Container>
                    <Grid columns={2} textAlign='center'>
                        <Grid.Column>
                            <Header content='our mission statement' size='large' className='halfCaption' />
                        </Grid.Column>
                        <Grid.Column>
                            <iframe src="https://www.youtube.com/embed/M_7PoX11FEc?start=31&end=78"
                                    frameborder="0" className='halfVideo'
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                        </Grid.Column>
                    </Grid>
                </Container>

                {/*<div className='altBackground'>*/}
                {/*    <Container>*/}
                {/*        <Grid columns={2} textAlign='center'>*/}
                {/*            <Grid.Column>*/}
                {/*                <Header content='our mission statement' size='large' className='halfCaption' />*/}
                {/*            </Grid.Column>*/}
                {/*            <Grid.Column>*/}
                {/*                <iframe src="https://www.youtube.com/embed/M_7PoX11FEc?start=31&end=78"*/}
                {/*                        frameborder="0" className='halfVideo'*/}
                {/*                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />*/}
                {/*            </Grid.Column>*/}
                {/*        </Grid>*/}
                {/*    </Container>*/}
                {/*</div>*/}

            </div>
        )
    }
}