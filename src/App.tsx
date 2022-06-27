import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './theme';
import AppNavBar from './components/AppNavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppNavBar />
    </ThemeProvider>
  );
}

export default App;
