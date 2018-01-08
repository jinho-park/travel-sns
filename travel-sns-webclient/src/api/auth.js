import axios from 'axios';

export const localRegister = ({email, password, nickname}) =>
    axios.post('/api/v1.0/user/auth/user', {
        email,
        password,
        nickname
    });