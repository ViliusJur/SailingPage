import ServerConfiguration from './server-configuration';

const { serverURL, serverPORT } = ServerConfiguration;

const collectionName = 'getBoats';

const fetchMany = async (): Promise<Boat[]> => {
    const url = `${serverURL}:${serverPORT}/${collectionName}`;
    const response = await fetch(url);
    const { data } = await response.json();
    return data.boats as Boat[];
};

const BoatService = {
    fetchMany,
};

export default BoatService;
