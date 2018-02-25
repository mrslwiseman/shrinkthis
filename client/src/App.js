import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './Components/Search';
import axios from 'axios';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
      valid_input: false
    }
  }

  urlHasProtocol = (link) => {
    const re = /^(http:\/\/)|^(https:\/\/)/gi; // check starts with http(s)://
    return re.test(link)
  }

  urlIsValid = (link) => {
    const re = /^((?:https?|ftp):\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
    const result = re.test(link);
    return result
  }


  getLink = (link) => {
    // TODO: refactor this a bit.

    axios.get(`/new?url=${link}`)
      .then(res => {
        if (res.data.short) {
          this.setState({ output: res.data.short })
        }
      }).catch(e => {
        console.log('there was an error')
      })
    // }
  }

  checkInputValid = () => {
    const input = this.input.value;
    let valid = false;
    if (input.length >= 4) {
      this.input.classList.add('touched')
      
      let formatted = input;
      // append http if missing
      if (!this.urlHasProtocol(input)) {
        formatted = 'http://' + formatted;
      }

      if (this.urlIsValid(formatted)) {
        console.log('✅  url valid')
        valid = true;
      } else {
        console.log('🚫  url invalid')
      }
      this.setState({ valid_input: valid })
    }
  }

  handleUserInput = (e) => {
    this.setState({ input: this.input.value }, _.debounce(this.checkInputValid, 200))
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.input !== '') {
      // check is a valid link
      this.getLink(this.state.input)
    }
  }

  render() {

    return (
      <div className="App">
        <form 
        className='form'
        action="/new" 
        onSubmit={this.onFormSubmit}>

          <input
            ref={input => this.input = input}
            className={`${this.state.valid_input ? 'input--valid' : 'input--invalid'} input`}
            type="text"
            onChange={this.handleUserInput}
            value={this.state.input}
          />
          <button
            className='button button--submit'
            type='submit'
            disabled={!this.state.valid_input}>
            Submit
          </button>
        </form>
        <p>{this.state.output}</p>
      </div>
    );
  }
}

export default App;
