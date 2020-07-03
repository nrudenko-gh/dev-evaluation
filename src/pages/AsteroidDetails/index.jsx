import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import get from 'lodash/fp/get';

import Layout from '../../components/Layout';

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
      <Link to="/">Back to Home</Link>
      <Paper elevation={2}>
        <ul>
          <li>{name}</li>
          <li>
            <a href={nasa_jpl_url}>NASA URL</a>
          </li>
          <li>
            Is Potentially Hazardous Asteroid:{' '}
            {is_potentially_hazardous_asteroid ? 'yes!' : 'no'}
          </li>
        </ul>
      </Paper>
    </Layout>
  );
};

export default AsteroidDetails;
