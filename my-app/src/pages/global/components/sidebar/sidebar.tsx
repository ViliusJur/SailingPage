import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SailingIcon from '@mui/icons-material/Sailing';

const drawerWidth = 240;

const Sidebar: React.FC = () => (
  <Box sx={{ display: 'flex' }}>
    <Drawer
      sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'relative',
          },
        }}
      variant="permanent"
      anchor="left"
    >
      <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Best production boats</Typography>
      <Divider />
      <List>
        {['Boats 70s', 'Boats 80s', 'Boats 90s'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SailingIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          ))}
      </List>
    </Drawer>
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
      <Typography paragraph>
        There are many sailing boats types and models out there. We would like to introduce
        you with best reputation cruizing vessel models from 1960 up to 2000. You can filter boats
        according to the specifications you are interested in. If you are fresh in boat life
        and dont know much about boats you should visit our page
        {' '}
        <a href="enciklopedia">enciklopedia section</a>
        {' '}
        and learn
        more about it.

      </Typography>
    </Box>
  </Box>
  );

  export default Sidebar;
