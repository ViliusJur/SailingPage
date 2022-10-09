import React from 'react';
import Carousel from 'react-material-ui-carousel';
import EventSlide from './event-slide';

const EventsHomeSection: React.FC = () => {
    const items = [
        {

            name: 'Random Name #1',
            description: 'Probably the most random thing you have ever seen!',
        },
        {
            name: 'Random Name #2',
            description: 'Hello World!',
        },
    ];

    return (
      <Carousel
        indicatorContainerProps={{
            style: {
                marginTop: '30px',
            },
        }}
      >
        {
            items.map((item) => <EventSlide key={item.name} {...item} />)
        }
      </Carousel>
    );
};

export default EventsHomeSection;
