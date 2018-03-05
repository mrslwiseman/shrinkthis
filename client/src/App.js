import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { debounce } from 'lodash';
import copy from 'copy-to-clipboard';
import { urlHasProtocol, urlIsValid } from './helpers';
import { Divider, Segment, Container, Form, Button, Input, Label, Icon, Message } from 'semantic-ui-react';
import SearchInput from './Components/SearchInput';
import LinkList from './Components/LinkList';
import ApiDocs from './Components/ApiDocs';
const config = {
  error_msg: {
    input: 'Please enter a valid URL',
    server: 'There was a problem getting your URL. Please try again later.'
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      link_list: [],
      api_visible: false
    };
  }

  componentWillMount() {
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      input: '',
      output: '',
      valid_input: false,
      clipboard: '',
      error: false,
      error_msg: config.error_msg.input
    })
  }

  getLink = (link) => {
    // TODO: refactor this a bit.
    if (this.state.output != '') return
    return axios.get(`/api/new?url=${link}`)
      .then(res => {
        if (res.data.short) {
          this.setState({
            input: '',
            output: res.data.short,
            link_list: [
              ...this.state.link_list,
              { long: this.state.input, short: res.data.short }
            ]
          })
        }
      }).catch(e => {
        // throw error to outer handleErrors function
        throw e;
      })
  }

  // checks users input is valid. 
  // note add protocol before validating
  checkInputValid = (input) => {
    // const input = this.input.value;
    let valid = false;
    if (input.length >= 3) {
      // this.input.classList.add('touched')
      let formatted = input;
      // append http if missing
      if (!urlHasProtocol(input)) {
        formatted = 'http://' + formatted;
      }
      if (urlIsValid(formatted)) {
        console.log('✅  url valid')
        valid = true;
      } else {
        console.log('🚫  url invalid')
      }
      this.setState({
        valid_input: valid,
        error: !valid
      })
    }
  }

  handleUserInput = (e) => {
    const input = e.target.value
    this.setState(
      { input, output: '' },
      debounce(() => this.checkInputValid(input), 200))
  }

  handleErrors = (fn) => {
    return fn()
      .catch(e => {
        this.setState({
          error: true,
          error_msg: config.error_msg.server
        })
      })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    // if its valid
    if (this.state.valid_input && !this.state.output) {
      this.handleErrors(() => this.getLink(this.state.input))
    }
    // if theres an output, user is wanting to create new short link
    else if (this.state.output) {
      this.resetForm();
    } else {
      // if its not valid and user is trying to submit
      // flash error msg
      this.setState({
        error: true,
        error_msg: 'Please Enter a valid URL.'
      })
    }
  }

  onCopyClick = (e) => {
    copy(this.state.output)
    this.setState({
      clipboard: this.state.output
    })
  }

  onToggleApi = () => {
    this.setState({
      api_visible: !this.state.api_visible
    })
  }

  render() {
    const inputValue = this.state.input;
    const outputValue = this.state.output;
    return (
      <div className="App">
        <Container
          textAlign='center'>
          <h1>Shrink This!</h1>
          <p>A URL Shortener.</p>
          {
            this.state.link_list.length > 0 &&
            <LinkList links={this.state.link_list} />
          }
          <Form onSubmit={this.onFormSubmit}>
            {
              this.state.error &&
              <Message color='red'>
                <p>{this.state.error_msg}</p>
              </Message>
            }

            {
              this.state.clipboard &&
              <Message color='yellow'>
                <p>Copied {this.state.clipboard}</p>
              </Message>
            }
            <Segment>
              <Form.Field>
                <SearchInput
                  handleUserInput={this.handleUserInput}
                  onCopyClick={this.onCopyClick}
                  inputValue={this.state.input}
                  outputValue={this.state.output}
                  isValid={this.state.valid_input}
                />
              </Form.Field>
              <Button.Group vertical>

                <Button
                  primary
                  content={this.state.output ? 'Shrink Another!' : 'Shrink'}
                  icon='right arrow'
                  labelPosition='right' />

                <Button basic type='button' onClick={this.onToggleApi}>View API Docs</Button>
              </Button.Group>
            </Segment>
          </Form>
          <p>Another Matt Wiseman creation.</p>
          <p>Node.js | Express | React | Semantic UI</p>
          <a href="http://github.com/mrslwiseman/shrinkthis" target="_blank">Check out the Sauce.</a>
          <p>😎</p>
          {
            this.state.api_visible &&
            <Segment textAlign='left'>
              <ApiDocs />
            </Segment>
          }
        </Container>
      </div>

    );
  }
}

export default App;
