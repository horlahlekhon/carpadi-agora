
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/market`;
import {fetchWrapper} from '../helpers/fetchWrapper';

const retrieveCarsProducts = (limit = 10, offset = 0, status = ['active'], sortOption = 'car__name') => {
    let stat =  ""
    if (status.length > 0){
        stat = `&${status.filter(e => e !== '').map(e => `status=${e}`).join("&")}`
    }
    return fetchWrapper.get(`${baseUrl}/buy?limit=${limit}&offset=${offset}&order_by=${sortOption}${stat}`)
        .then((response) => {
            return {status: true, data: response}
        })
        .catch((error) => {

            return {status: false, data: error};
        })
}

const retrieveCarBrands = (option = undefined) => {
    return fetchWrapper.get(`${baseUrl}/brands?option=${option}`)
        .then((response) => {
            return {status: true, data: response}
        })
        .catch((error) => {
            return {status: false, data: error};
        })
}
export {
    retrieveCarsProducts,
    retrieveCarBrands
   
}