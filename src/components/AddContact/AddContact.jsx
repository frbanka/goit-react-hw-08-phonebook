import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/managment';
import { nanoid } from 'nanoid';
import { addedContactNotification } from '../../redux/utils/notifications';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Icon from '@mui/material/Icon';

const AddContact = () => {
  const dispatch = useDispatch();
  const createNewContact = e => {
    e.preventDefault();
    dispatch(
      addContact({
        id: nanoid(),
        name: e.target.name.value,
        number: e.target.phone.value,
      })
    );
    addedContactNotification(e.target.name.value);
    e.target.reset();
  };

  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add new contact
          </Typography>
          <Icon color="primary" sx={{ marginTop: 2, fontSize: 40 }}>
            add_circle
          </Icon>
          <Box component="form" onSubmit={createNewContact} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  
                  name="name"
                  label="Contact name"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  
                  label="Phone number"
                  name="phone"
                  type="number"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default AddContact;
