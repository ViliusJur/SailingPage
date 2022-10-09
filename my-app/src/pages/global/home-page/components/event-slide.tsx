import React from 'react';
import { Paper, Button } from '@mui/material';

type Event = {
    name: string,
    description: string
};

const EventSlide: React.FC<Event> = ({ name, description }) => (
  <Paper>
    <h2>{name}</h2>
    <p>{description}</p>

    <Button className="CheckButton">
      Check it out!
    </Button>
  </Paper>
    );

export default EventSlide;
