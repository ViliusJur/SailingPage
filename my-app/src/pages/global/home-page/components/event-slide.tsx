import React from 'react';
import { Paper, Button } from '@mui/material';

const EventSlide: React.FC<SailingEvent> = ({ title, description, image }) => (
  <Paper>
    <h2>{title}</h2>
    <p>{description}</p>
    <div><img src={image} alt={title} height="250" /></div>

    <Button className="CheckButton">
      Check it out!
    </Button>
  </Paper>
    );

export default EventSlide;
