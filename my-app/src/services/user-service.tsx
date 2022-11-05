import ServerConfiguration from './server-configuration';

const { serverURL, serverPORT } = ServerConfiguration;

const userEnter = async (url: string, data: Object): Promise<any> => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    const res = await fetch(`${serverURL}:${serverPORT}/${url}`, options);
    return res.json();
};

const UserService = {
    userEnter,
};

export default UserService;
