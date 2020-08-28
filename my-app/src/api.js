import axios from "axios";
export const baseURL = "https://ww-foundation.herokuapp.com/"
const axiosWithAuth = () => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export default axiosWithAuth;

export const getListings = async () => {
    // const { data } = await axiosWithAuth().get('listings/listings')
    const { data } = await axiosWithAuth().get('properties/property')
    return data
}

export const createListing = async (args) => {
    // const { data } = await axiosWithAuth().post('listings/listing', args)
    const { data } = await axiosWithAuth().post('properties/property', args)
    return data
}

export const updateListing = async (id, data) => {
    return await axiosWithAuth().patch(`properties/property/${id}`, data)
}

export const deleteListing = async (id) => {
    return await axiosWithAuth().delete(`properties/property/${id}`)
}
