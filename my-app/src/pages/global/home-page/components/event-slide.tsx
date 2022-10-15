import React from 'react';
import { Paper, Button } from '@mui/material';

const EventSlide: React.FC<SailingEvent> = ({ title, description, image }) => (
  <Paper sx={{ bgcolor: 'background.paper' }}>
    <h2>{title}</h2>
    <p>{description}</p>
    <div><img src={image} alt={title} height="200" /></div>

    <Button className="CheckButton">
      Check it out!
    </Button>
  </Paper>
    );

export default EventSlide;
