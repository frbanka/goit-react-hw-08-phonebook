import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Filter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();

  const filterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Find contact
          </Typography>
          <Box onChange={e => filterChange(e)} sx={{ mt: 2 }}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  id={filterId}
                  label="Search contact"
                  type="search"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Filter;
