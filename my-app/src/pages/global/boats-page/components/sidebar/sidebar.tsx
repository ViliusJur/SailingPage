import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import SidebarContent from './sidebar-content';
import BoatService from '../../../../../services/boats-service';

type YearFilter = {
  text: string,
  when: string
};

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const yearFilters: YearFilter[] = [
    {
      text: 'Boats 70s',
      when: '1970',
    },
    {
      text: 'Boats 80s',
      when: '1980',
    },
    {
      text: 'Boats 90s',
      when: '1990',
    },
  ];

  const navigate = useNavigate();
  const { year } = useParams();
  const [filteredBoats, setFilteredBoats] = useState<Boat[] | null>(null);
  const filterBoats = (when: string) => {
    const filter = async () => {
      const fetchedBoats = await BoatService.filterMany(when) as Boat[];
      setFilteredBoats(fetchedBoats);
      navigate(`/boats/${when}`);
    };

    filter();
  };

  useEffect(() => {
    if (year) {
      filterBoats(year);
    } else {
      setFilteredBoats(null);
    }
  }, [year]);

  return (

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
          {yearFilters.map((yearFilter) => (
            <ListItem
              key={yearFilter.text}
              disablePadding
              onClick={() => filterBoats(yearFilter.when)}
            >
              <ListItemButton
                sx={(theme) => ({
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                },
                '&.Mui-selected, &.Mui-selected:hover': {
                  backgroundColor: theme.palette.primary.light,
                },
              })}
                selected={year === yearFilter.when}
              >
                <ListItemIcon>
                  <SailingIcon />
                </ListItemIcon>
                <ListItemText primary={yearFilter.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <SidebarContent boats={filteredBoats} />
    </Box>
  );
        };

  export default Sidebar;
