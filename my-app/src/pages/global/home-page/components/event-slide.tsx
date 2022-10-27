import React from 'react';
import { Paper, Button, Grid } from '@mui/material';

const EventSlide: React.FC<SailingEvent> = ({ title, description, image }) => (
  <Paper sx={{
  border: 1,
  borderRadius: '16px',

  boxShadow: 12,
}}>
    <Grid container spacing={2} padding={5}>
      <Grid item xs={12}>
        <h2>{title}</h2>
      </Grid>
      <Grid item xs={4}>
        <img src={image} alt={title} width="200" />
      </Grid>
      <Grid item xs={8}>
        <p>{description}</p>
      </Grid>
    </Grid>

    <Button className="CheckButton">
      Check it out!
    </Button>
  </Paper>
    );

export default EventSlide;
