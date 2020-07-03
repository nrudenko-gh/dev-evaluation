import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Paper, TextField, Divider } from '@material-ui/core';
import get from 'lodash/fp/get';

import styles from './Form.module.css';
import { getAsteroidData, getRandomAsteroidData } from '../../api';

const Form = () => {
  const history = useHistory();

  const [inputValue, setInputValue] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const getAsteroid = async (asteroidId) => {
    const { status, data } = await getAsteroidData(asteroidId);
    if (status === 200) redirectToDetails(data);
  };

  const redirectToDetails = (asteroidData) => {
    history.push('/details', { data: asteroidData });
  };

  const handleInput = (e) => {
    const value = get('target.value', e);
    if (value) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
    setInputValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getAsteroid(inputValue);
  };

  const handleGetRandomAsteroid = async (e) => {
    e.preventDefault();
    const { data } = await getRandomAsteroidData();
    const { near_earth_objects } = data;
    const randomAsteroidIndex = Math.floor(
      Math.random() * Math.floor(near_earth_objects.length)
    );
    const { id } = near_earth_objects[randomAsteroidIndex];
    if (id) getAsteroid(id);
  };

  return (
    <Paper elevation={1} display="flex" className={styles.paper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          value={inputValue}
          onInput={handleInput}
          placeholder="Enter Asteroid ID"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          onSubmit={handleSubmit}
          disabled={isSubmitDisabled}
          className={styles.submitBtn}
        >
          Submit
        </Button>
      </form>

      <Divider className={styles.divider} />

      <div className={styles.randomBtn}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleGetRandomAsteroid}
        >
          Random Asteroid
        </Button>
      </div>
    </Paper>
  );
};

export default Form;
