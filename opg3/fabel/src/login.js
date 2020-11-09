    import React, { Component } from "react";
    import Form from 'react-bootstrap/Form'
    import Button from 'react-bootstrap/Button'
    import "./login.css";
    import { helge } from './data'

    export class Login extends Component {
      constructor(props) {
        super(props);

        this.state = {
          email: "",
          password: ""
        };
      }

      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }


      handleSubmit = event => {
          if (this.state.email === helge.epost && this.state.password === helge.passord) {
            this.props.history.push('/minside')
          } else {
            alert("wrong password/email combination")
          }
      }

      render() {
        return (
          <div className="Login">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="email" bsSize="large">
                <Form.Control
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password" bsSize="large">
                <Form.Control
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </Form.Group>
              <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                onClick={this.handleSubmit}
                type="submit"
              >
                Login
              </Button>
            </Form>
          </div>
        );
      }
    }