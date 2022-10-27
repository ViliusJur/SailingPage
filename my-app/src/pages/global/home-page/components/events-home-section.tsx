import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import EventsService from 'services/events-service';
import EventSlide from './event-slide';

const EventsHomeSection: React.FC = () => {
    const [events, setEvents] = useState<SailingEvent[]>([]);

    useEffect(() => {
        const init = async () => {
            const fetchedEvents = await EventsService.fetchMany() as SailingEvent[];
            setEvents(fetchedEvents);
          };

          init();
    }, []);

    return (
      <Carousel
        indicatorContainerProps={{
            style: {
                marginTop: '30px',
            },
        }}
      >
        {
            events.map((event) => <EventSlide key={event._id} {...event} />)
        }
      </Carousel>
    );
};

export default EventsHomeSection;
