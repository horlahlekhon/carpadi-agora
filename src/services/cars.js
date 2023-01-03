
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/market`;
import {fetchWrapper} from '../helpers/fetchWrapper';

const retrieveCarsProducts = (limit = 10, offset = 0, status = ['active'], sortOption = 'car__name', filter) => {
    console.log("filter", filter)
    let filterString = ""
    Object.keys(filter).forEach(element => {
        if(filter[element]) filterString += `&${element}=${filter[element]}`
    });
    // if(filter["make"] !== "") filterString + `&make=${filter.make}`
    console.log(filterString)
    let stat =  ""
    if (status.length > 0){
        stat = `&${status.filter(e => e !== '').map(e => `status=${e}`).join("&")}`
    }
    return fetchWrapper.get(`${baseUrl}/buy?limit=${limit}&offset=${offset}&order_by=${sortOption}${stat}${filterString}`)
        .then((response) => {
            return {status: true, data: response}
        })
        .catch((error) => {

            return {status: false, data: error};
        })
}

const retrieveCarFilters = () => {
    return fetchWrapper.get(`${baseUrl}/filters`)
        .then((response) => {
            return {status: true, data: response}
        })
        .catch((error) => {
            return {status: false, data: error};
        })
}
export {
    retrieveCarsProducts,
    retrieveCarFilters
   
}