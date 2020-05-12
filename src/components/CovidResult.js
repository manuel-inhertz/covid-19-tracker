import React from 'react';
import {PieChart, Pie, Tooltip} from 'recharts';
import { Container, Row, Col } from 'react-bootstrap';

const CovidResult = (props) => {
    if (!props.result) {return null;}
    
    const cases = [
        {name: "New", value: props.result.cases.new },
        {name: "Active", value: props.result.cases.active},
        {name: "Critical", value: props.result.cases.critical},
        {name: "Recovered", value: props.result.cases.recovered},
        {name: "Total", value: props.result.cases.total}
    ];
    const casesObj = {...cases};
    const deaths = [
        {name: "Total", value: props.result.deaths.total},
        { name: "New", value: props.result.deaths.new },
    ]
    const deathsObj = {...deaths};

    const casesList = Object.keys(casesObj).map(key => {
      return (
        <span key={key}>
              <p><strong>{casesObj[key].name}</strong>: {casesObj[key].value}</p>
        </span>
      );
    });
    const deathsList = Object.keys(deathsObj).map(key => {
        return (
          <span key={key}>
            <p><strong>{deathsObj[key].name}</strong>: {deathsObj[key].value}</p>
          </span>
        );
    });
    return (
      <Container>
        <div className="CovidResult" >
          <div className="PieChart d-flex">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={cases}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={deaths}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="red"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        </div>
        <div>
          <Row>
            <Col md={6}>
              <h4>Cases</h4>
              {casesList}
            </Col>
            <Col md={6}>
              <h4>Deaths</h4>
              {deathsList}
            </Col>
          </Row>
        </div>
      </Container>
    );
}

export default CovidResult;