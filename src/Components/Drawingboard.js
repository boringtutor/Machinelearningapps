import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Container } from 'reactstrap';

const DrawingBoard = (props) => {
  return (
    <div>
        <Container>
            <Card>
                <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle><h3>The Number Drawn is : </h3></CardTitle>
                
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">Draw Again</Button>
                </CardBody>
            </Card>
        </Container>
    </div>
  );
};

export default DrawingBoard;