import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './Components/Search';
import axios from 'axios';
import _ from 'lodash';
import copy from 'copy-to-clipboard';
import CopyIcon from './Components/icon-copy'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
      valid_input: false,
      validation_msg: '',
      clipboard: ''
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
    axios.get(`/api/new?url=${link}`)
      .then(res => {
        console.log(res)
        if (res.data.short) {
          this.setState({ output: res.data.short })
        }
      }).catch(e => {
        console.log(e)
      })
  }

  // checks users input is valid. 
  // note add protocol before validating
  checkInputValid = () => {
    const input = this.input.value;
    let valid = false;
    let validation_msg;
    if (input.length >= 4) {
      this.input.classList.add('touched')
      let formatted = input;
      // append http if missing
      if (!this.urlHasProtocol(input)) { formatted = 'http://' + formatted; }
      if (this.urlIsValid(formatted)) {
        console.log('✅  url valid')
        valid = true;
        validation_msg = '';
      } else {
        console.log('🚫  url invalid')
        validation_msg = 'Please Enter a valid URL';
      }
      this.setState({
        valid_input: valid,
        validation_msg
      })
    }
  }

  handleUserInput = (e) => {
    this.setState({ input: this.input.value }, _.debounce(this.checkInputValid, 200))
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.valid_input) {
      this.getLink(this.state.input)
    } else {
      // if user tries to submit with invalid input
      // input has class added to it for a second for animation 
      this.input.classList.add('input--nope') ``
      //then removed
      setTimeout(() => this.input.classList.remove('input--nope'), 1000)
    }
  }

  onCopyClick = (e) => {
    copy(this.state.output)
    this.setState({
      clipboard: this.state.output
    })
  }

  render() {

    return (
      <div className="App">

        <div
          className={`output ${this.state.clipboard === this.state.output ? 'output--copied' : ''}`}>
          {
            this.state.output &&
            <div>
              <p>Voila! Heres your link!</p>
              <p className='output__url'>{this.state.output}

                <button
                  className='output__copy-btn'
                  onClick={this.onCopyClick}>
                  <CopyIcon />
                </button>
              </p>

              {
                this.state.clipboard === this.state.output &&
                <small>Copied!</small>
              }
            </div>

          }
        </div>


        <form
          className='form'
          action="/new"
          onSubmit={this.onFormSubmit}>
          <label htmlFor="url">{this.state.validation_msg}</label>
          <input
            placeholder='Enter your URL to shorten'
            name='url'
            ref={input => this.input = input}
            className={`${this.state.valid_input ? 'input--valid' : 'input--invalid'} input`}
            type="text"
            onChange={this.handleUserInput}
            value={this.state.input}
          />
          <button
            className='button button--submit'
            type='submit'
          /*disabled={!this.state.valid_input}*/
          >
            Shrink my Link!
          </button>
          <div className='api-details'>
          <h2>API Endpoints</h2>
          <h3>URL</h3>
          <p><code>/new</code></p>
          <hr />
          <h3>Method</h3>
          <p><code>GET</code></p>
          <hr />
          <h3>URL Params</h3>
          <h4>Required:</h4>
          <p><code>url=[string]</code></p>
          <hr />
          <h4>Rules:</h4>
          <ul>
          <li>Must be a valid URL.</li>
          <li>API does a basic cleanup of URL string including adding <code>http://</code> protocol if missing.</li>
          </ul>
          <hr />
          <h4>Error Responses</h4>
          <p><strong>Code:</strong> 400</p>
          <p><strong>Content:</strong><code>{`success: false, msg: 'Your query was empty.'`}</code></p>
          <hr />
          <p><strong>Code:</strong> 404 NOT FOUND</p>
          <p><strong>Content:</strong><code>{`success: false, msg: 'Link Id was invalid or not found.'`}</code></p>
          <hr />
          <p><strong>Code:</strong> 400 BAD REQUEST</p>
          <p><strong>Content:</strong><code>{`success: false, msg: 'Your query is missing a URL parameter.'`}</code></p>
          <hr />
          <p><strong>Code:</strong> 400 BAD REQUEST</p>
          <p><strong>Content:</strong><code>{`success: false, msg: 'Please enter a valid url.'`}</code></p>
          

            </div>
          

        </form>

      </div>
    );
  }
}

export default App;
