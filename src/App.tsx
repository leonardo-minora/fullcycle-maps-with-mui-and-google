import React from 'react';

import { Button, CssBaseline, Grid, MenuItem, Select, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles'

import theme from './theme';
import AppNavBar from './components/AppNavBar';

const Form = styled('form')(
  ({theme: _theme}) => ({
    margin: _theme.spacing(1),
  })
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppNavBar />
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Form>
            <Select fullWidth displayEmpty>
              <MenuItem value=''>
                <em>Selecione uma rota</em>
              </MenuItem>
              <MenuItem value=''>Rota número 1</MenuItem>
            </Select>
            <div style={{textAlign: 'center', margin: theme.spacing(1)}}>
              <Button type='submit' variant='contained'>Iniciar rota</Button>
            </div>
          </Form>
        </Grid>
        <Grid item xs={12} sm={9}>

        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
