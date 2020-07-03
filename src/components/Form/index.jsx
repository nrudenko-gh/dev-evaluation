import React, { useState } from 'react';
import { Button, Paper, TextField } from '@material-ui/core';
import get from 'lodash/fp/get';

import { getAsteroidData } from '../../api';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleInput = (e) => {
    const value = get('target.value', e);
    if (value) setIsSubmitDisabled(false);
    setInputValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getAsteroidData(inputValue);
  };

  return (
    <Paper elevation={1}>
      <form className="form" onSubmit={handleSubmit}>
        <TextField value={inputValue} onInput={handleInput} />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          onSubmit={handleSubmit}
          disabled={isSubmitDisabled}
        >
          Submit
        </Button>
      </form>

      <br />

      <Button variant="contained" color="primary">
        Random Asteroid
      </Button>
    </Paper>
  );
};

export default Form;
