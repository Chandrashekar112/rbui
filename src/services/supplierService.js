import axios from 'axios';

export const supplierService = {};

const headers = {
    "Content-Type": "application/json",
    Authorization: "Barer Token",
  };

supplierService.getSuppliers = async() => {
    try {
        let res =await axios.get(process.env.REACT_APP_RESERVEBAR_API + '/supplier', { headers: headers });
        return res ? res:[]
    } catch (err) {
        throw err.response ? err.response.data : err;
    }
}

supplierService.getUnmapedBrands = async() => {
    try {
        let res = axios.get(process.env.REACT_APP_RESERVEBAR_API + '/supplier/unmappedBrands', { headers: headers });
        return res ? res : [];
    } catch (err) {
        throw err.response ? err.response.data:err
    }
}