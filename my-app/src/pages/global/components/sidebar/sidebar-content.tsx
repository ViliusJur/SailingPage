import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import BoatCard from '../../home-page/components/boat-card';

type SidebarContentProps = {
    boats: Boat[] | null
};

const SidebarContent: React.FC<SidebarContentProps> = ({ boats }) => (
  <Box
    component="main"
    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
  >
    {!boats
        && (
        <Typography paragraph>
          There are many sailing boats types and models out there. We would like to introduce
          you with best reputation cruizing vessel models from 1960 up to 2000. You can filter boats
          according to the specifications you are interested in. If you are fresh in boat life
          and dont know much about boats you should visit our page
          {' '}
          <a href="enciklopedia">enciklopedia section</a>
          {' '}
          and learn more about it.
        </Typography>
        )}
    {boats
        && (
          <div>
            {boats.map((boat) => (
              <div key={`boat-card-${boat._id}`}>
                <BoatCard {...boat} />
              </div>
            ))}
          </div>
        )}
  </Box>
);

export default SidebarContent;
