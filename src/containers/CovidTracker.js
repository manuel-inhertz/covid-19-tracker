import React, { Component } from 'react';
import FormCovid from '../components/FormCovid';
import { Container } from 'react-bootstrap';
import Axios from 'axios';
import CovidResult from '../components/CovidResult';
import Ui from './Ui';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutContainer from './AboutContainer';

class CovidTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: {country: "italy"},
            result: null,
            formData: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getStats = this.getStats.bind(this);
    }

    componentDidMount() {
        console.log("COMPONENT DID MOUNT");
        this.getStats(); // Get all countries stats from the API
    }

    //** Gets the covid stats based on a date and a country */
    getStats() {
        Axios.get(`https://covid-193.p.rapidapi.com/statistics`, {
          headers: {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key":
              "04449d439bmsh5c1f9a22edf7ba0p1ccddcjsn2a8c3f5d2df3"
          }
        })
          .then(response => {
            this.setState({ stats: { ...response.data.response } });
            console.log(this.state.stats);
          })
          .catch(err => {
            console.log(err);
          });
    }

    //** handles the form imputs values */
    handleChange(evt) {
        this.setState({
          formData: {
            ...this.state.formData,
            [evt.target.name]: evt.target.value
          }
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const stats = this.state.stats;
        Object.keys(stats).map(key => {
            if (stats[key].country === this.state.formData.country) {
                return this.setState({result: stats[key]});
            }
            return null;
        });
    }

    render() { 
        return (
          <Router>
            <Ui>
              <Container>
                  <Switch>
                    <Route path="/about">
                      <AboutContainer />
                    </Route>
                    <Route path="/">
                      <FormCovid stats={this.state.stats} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                      <CovidResult result={this.state.result} />
                    </Route>
                  </Switch>
              </Container>
            </Ui>
          </Router>
        );
    }
}
 
export default CovidTracker;