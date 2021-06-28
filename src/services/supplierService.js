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

supplierService.updateSupplier = async (id, data) => {
    try {
        let res = axios.put(process.env.REACT_APP_RESERVEBAR_API + `/supplier/${id}`, data, { headers: headers });
        return res ? res : [];
    } catch (err) {
        throw err.response ? err.response.data : err; 
    }
    
}

supplierService.addSupplier = async(data) => {
    try {
        let res = await axios.post(process.env.REACT_APP_RESERVEBAR_API + '/supplier', data, { headers: headers });
        return res ? res : [];
        
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

supplierService.addSupplierUnmappedBrands = async (data) => {
    try {
        let res = await axios.post(process.env.REACT_APP_RESERVEBAR_API + '/supplier/unmappedbrands', data, { headers: headers });
        return res? res: [];
    } catch (err) {
        throw err.response ? err.response.data : err;
    }
    
}

