import React from 'react';
import { Form, Button } from 'react-bootstrap';

const FormCovid = (props) => {
    const countries = Object.keys(props.stats).map(key => {
        return (
          <option key={key} value={props.stats[key].country}>
            {props.stats[key].country}
          </option>
        );
    });
    return (
      <div className="FormCovid">
        <Form onSubmit={props.handleSubmit} inline="true" className="mx-auto">
           <Form.Group className="mr-3" controlId="country">
            <Form.Label className="mr-3">Country</Form.Label>
            <Form.Control name="country" as="select" custom onChange={props.handleChange}>
                {countries}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Get stats
          </Button>
        </Form>
      </div>
    );
}

export default FormCovid;