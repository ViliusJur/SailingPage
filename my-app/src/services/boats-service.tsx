import ServerConfiguration from './server-configuration';

const { serverURL, serverPORT } = ServerConfiguration;

const fetchMany = async (): Promise<Boat[]> => {
    const url = `${serverURL}:${serverPORT}/getBoats`;
    const response = await fetch(url);
    const { data } = await response.json();
    return data.boats as Boat[];
};

const filterMany = async (year: string): Promise<Boat[]> => {
    const url = `${serverURL}:${serverPORT}/filterBoatsByYear/${year}`;
    const response = await fetch(url);
    const { data } = await response.json();
    return data.boats as Boat[];
};

const BoatService = {
    fetchMany,
    filterMany,
};

export default BoatService;
