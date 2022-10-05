import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BoatService from 'services/boats-service';

const BoatsHomeSection: React.FC = () => {
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    }));

    const [boats, setBoats] = useState<Boat[]>([]);

    useEffect(() => {
      const init = async () => {
        const fetchedBoats = await BoatService.fetchMany() as Boat[];
        const slicedBoats = fetchedBoats.slice(0, 3);
        setBoats(slicedBoats);
        console.log(slicedBoats);
      };

      init();
    }, []);

return (
  <Grid container spacing={2}>
    {boats.map((boat) => (
      <Grid item xs={4} key={boat.id}>
        <Item>
          <div><strong>{boat.title}</strong></div>
          <div><img src={boat.images[0]} alt={boat.title} /></div>
        </Item>
      </Grid>
      ))}
  </Grid>

);
};

export default BoatsHomeSection;
