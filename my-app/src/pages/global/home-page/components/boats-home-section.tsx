import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import BoatService from 'services/boats-service';
import BoatCard from './boat-card';

const BoatsHomeSection: React.FC = () => {
    const [boats, setBoats] = useState<Boat[]>([]);

    useEffect(() => {
      const init = async () => {
        const fetchedBoats = await BoatService.fetchMany() as Boat[];
        const slicedBoats = fetchedBoats.slice(0, 3);
        setBoats(slicedBoats);
      };

      init();
    }, []);

return (
  <Grid container spacing={2}>
    {boats.map((boat) => (
      <Grid item xs={4} key={`boat-card-${boat.id}`}>
        <BoatCard {...boat} />
      </Grid>
      ))}
  </Grid>

);
};

export default BoatsHomeSection;
