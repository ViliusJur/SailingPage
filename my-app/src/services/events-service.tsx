const serverSettings: ServerInfo = {
    serverURL: 'http://localhost:5000',
    collectionName: 'events',
};

const { serverURL, collectionName } = serverSettings;

const fetchMany = async (): Promise<SailingEvent[]> => {
    const url = `${serverURL}/${collectionName}`;

    const response = await fetch(url);
    const fetchedBoats = await response.json();
    return fetchedBoats as SailingEvent[];
};

const EventsService = {
    fetchMany,
};

export default EventsService;
