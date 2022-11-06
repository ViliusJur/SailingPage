import ServerConfiguration from './server-configuration';

const { serverURL, serverPORT } = ServerConfiguration;

const fetchMany = async (): Promise<BoatComment[]> => {
    const url = `${serverURL}:${serverPORT}/getComments`;
    const response = await fetch(url);
    const { data } = await response.json();
    return data.comments as BoatComment[];
};

const addComment = async (url: string, data: BoatComment): Promise<null> => {
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

const CommentsService = {
    fetchMany,
    addComment,
};

export default CommentsService;
