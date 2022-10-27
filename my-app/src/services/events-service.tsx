import ServerConfiguration from './server-configuration';

const { serverURL, serverPORT } = ServerConfiguration;

const collectionName = 'getEvents';

const fetchMany = async (): Promise<SailingEvent[]> => {
    const url = `${serverURL}:${serverPORT}/${collectionName}`;
    const response = await fetch(url);
    const { data } = await response.json();
    return data.events as SailingEvent[];
};

const EventsService = {
    fetchMany,
};

export default EventsService;
