
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/market`;
import {fetchWrapper} from '../helpers/fetchWrapper';

const retrieveCarsProducts = (limit = 10, offset = 0, status = ['active'], sortOption = 'car__name', filter) => {
    let filterString = ""
    Object.keys(filter).forEach(element => {
        if(filter[element]) filterString += `&${element}=${String(filter[element]).toLowerCase()}`
    });
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

const retrieveCar = (carId) => {
    return fetchWrapper.get(`${baseUrl}/buy/${carId}`)
        .then((response) => {
            return {status: true, data: response}
        }).catch((error) => {
            return {status: false, data: error};
        })
}

const retrieveBrands = (filter) => {
    
    let filterString = ""
    Object.keys(filter).forEach(element => {
        const elemLower = String(filter[element]).toLowerCase()
        if (filter[element] && elemLower !== "select make" && elemLower !== "select model" ) {
            console.log("element", filter[element])
          filterString += `&${element}=${elemLower}`
        }
    });
    return fetchWrapper.get(`${baseUrl}/home?${filterString}`)
        .then((response) => {
            return {status: true, data: response}
        }).catch((error) => {
            return {status: false, data: error}
        })
}

const fetchVehicleInfoByVin = (vin) => {
    return fetchWrapper.post(`${baseUrl}/vehicle-by-vin/`, {
        vin: vin
    }).then((response) => {
        return {status: true, data: response}
    }).catch((error) => {
        return {status: false, data: error}
    })
}

const postCarPurchaseOffer = (data) => {
    return fetchWrapper.post(`${baseUrl}/sell/`, data)
        .then((response) => {
            return {status: true, data: response}
        }).catch((error) => {
            return {status: false, data: error}
        })    
}

export {
    retrieveCarsProducts,
    retrieveCarFilters,
    retrieveCar,
    retrieveBrands,
    fetchVehicleInfoByVin,
    postCarPurchaseOffer
   
}