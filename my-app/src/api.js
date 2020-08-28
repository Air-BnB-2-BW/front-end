import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://like2learn-airbnb-api.herokuapp.com/",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export default axiosWithAuth;

export const getListings = async () => {
    const { data } = await axiosWithAuth().get('listings/listings')
    return data
}

export const createListing = async (args) => {
    const { data } = await axiosWithAuth().post('listings/listing', args)
    return data
}

export const updateListing = async (id, data) => {
    return await axiosWithAuth().patch(`listings/listing/${id}`, data)
}

