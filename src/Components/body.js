import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Body extends React.Component {
    render(){
        return(
            <Container>
                    <Row>
                        <Col xs="6" sm="4">
                            <h3 >The leading drawings</h3>
                            <p className="lead">This is a simple project to display the power of the Machine learning in helping students learn.</p>

                        </Col>
                        <Col xs="6" sm="4"> <h3 >The leading drawings</h3>
                            <p className="lead">This is a simple project to display the power of the Machine learning in helping students learn.</p>
</Col>
                        <Col sm="4"> <h3 >The leading drawings</h3>
                            <p className="lead">This is a simple project to display the power of the Machine learning in helping students learn.</p>
</Col>
                    </Row>
            </Container>
        );
    }
}