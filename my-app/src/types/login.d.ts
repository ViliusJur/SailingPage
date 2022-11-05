type User = {
    email: string,
    secret: string,
};

type Login = {
    data: User | null,
    error: boolean,
    message: string,
};
