import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/managment';
import { selectIsLoading } from '../../redux/selector';
import Loader from 'components/Loader/Loader.js';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });
  const defaultTheme = createTheme();

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={20}>
              <List>
                {!!isLoading && <Loader />}
                {contacts.map(contact => (
                  <ListItem
                    key={contact.id}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => dispatch(deleteContact(contact.id))}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar {...stringAvatar(`${contact.name}`)} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        gap: '2px',
                      }}
                      primary={contact.name}
                      secondary={contact.number}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Contacts;
