
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/market`;
import {fetchWrapper} from '../helpers/fetchWrapper';

const retrieveCarsProducts = (limit = 10, offset = 0, status = ['active']) => {
    const stat = status.filter(e => e !== '').map(e => `status=${e}`).join("&")
    return fetchWrapper.get(`${baseUrl}/buy?limit=${limit}&offset=${offset}&${stat}`)
        .then((response) => {
            return {status: true, data: response}
        })
        .catch((error) => {

            return {status: false, data: error};
        })
}

export {
    retrieveCarsProducts,
   
}