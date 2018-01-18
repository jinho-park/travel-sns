import axios from 'axios';

export const getUserInfo = ({accessToken}) => 
    axios.post('/api/v1.0/user/auth/info', {
        accessToken
});