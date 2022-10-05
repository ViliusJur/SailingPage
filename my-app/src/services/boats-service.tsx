const serverSettings: ServerInfo = {
    serverURL: 'http://localhost:5000',
    collectionName: 'boats',
};

const { serverURL, collectionName } = serverSettings;

const fetchMany = async (): Promise<Boat[]> => {
    const url = `${serverURL}/${collectionName}`;

    const response = await fetch(url);
    const fetchedBoats = await response.json();
    return fetchedBoats as Boat[];
};

const BoatService = {
    fetchMany,
};

export default BoatService;
