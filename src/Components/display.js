import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Display = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">The leading drawings</h1>
        <p className="lead">This is a simple project to display the power of the Machine learning in helping students learn.</p>
        <hr className="my-2" />
        <p>It uses different models to display the usecases.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};


export default Display;
