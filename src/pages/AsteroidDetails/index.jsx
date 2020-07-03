import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';
import get from 'lodash/fp/get';

import Layout from '../../components/Layout';
import styles from './AstroidDetails.module.css';

const AsteroidDetails = () => {
  const location = useLocation();
  const history = useHistory();

  const { state } = location;

  if (!get('data', state)) {
    history.push('/');
    return null;
  }

  const {
    data: { name, nasa_jpl_url, is_potentially_hazardous_asteroid },
  } = state;

  return (
    <Layout>
      <Paper elevation={2} className={styles.paper}>
        <Link className={styles.backLink} to="/">
          <Button color="primary" variant="outlined" size="small">
            Back
          </Button>
        </Link>

        <ul className={styles.asteroidInfo}>
          <li>
            <strong>Asteroid name:</strong>
            <span>{name}</span>
          </li>
          <li>
            <strong>JPL: </strong>
            <a href={nasa_jpl_url}>{nasa_jpl_url}</a>
          </li>
          <li>
            <strong>Is Potentially Hazardous Asteroid: </strong>
            <span>{is_potentially_hazardous_asteroid ? 'yes!' : 'no'}</span>
          </li>
        </ul>
      </Paper>
    </Layout>
  );
};

export default AsteroidDetails;
