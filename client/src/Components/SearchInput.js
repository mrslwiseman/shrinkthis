import React, { Component } from 'react';
import { Button, Input, Label, Icon } from 'semantic-ui-react';

const SearchInput = (props) => {


    const { handleUserInput, onCopyClick, inputValue, outputValue, isValid } = props;


    return (

      <Input
        autoFocus
        size={'huge'}
        error={inputValue.length >= 3 && !isValid}
        value={outputValue ? outputValue : inputValue}
        onChange={handleUserInput}
        labelPosition='left'
        placeholder='Enter a URL'
      >
        {
          // hide http:// when long link is displayed
          !outputValue &&
          <Label>http://</Label>
        }


        <input />

        {
          outputValue &&
          <Button icon type='button' onClick={onCopyClick}>
            Copy
      <Icon name='copy' />
          </Button>
        }

      </Input>
    )

}

export default SearchInput;