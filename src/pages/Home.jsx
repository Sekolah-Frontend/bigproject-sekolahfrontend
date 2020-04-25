import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Home = () => {
  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={5} sm={2}>
            <div className='cilsyplus'>Cilsyplus.</div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>Categories</div>
            <Grid xs={12} sm={6}>
              <form>
                <TextField id='outlined-basic' label='Outlined' variant='outlined' />
              </form>
            </Grid>
          </Grid>
          <Grid item xs={5} sm={4}>
            login
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
