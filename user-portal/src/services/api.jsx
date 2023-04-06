import { axiosObject } from "../App";

async function getData(url) {
  var response = await axiosObject.get(url);
  if (response.status === 200) {
    return response.data;
  }
  return null;
}

async function postData(url, body, headers = { 'Content-Type': 'application/json' }) {
    try {
        const response = await axiosObject.post(url, body, headers)
        return response.data;

    } catch (error) {
        return error.response.data
    }

}

async function patchData(url, body, headers = { 'Content-Type': 'application/json' }) {
    try {
        const response = await axiosObject.patch(url, body, headers)
        return response.data;
    } catch (error) {
        return error.response.data
    }

}

async function deleteData(url) {

    try {
        const response = await axiosObject.delete(url)
        return response.data

    } catch (error) {
        return error.response.data
    }
}


export {
    getData,
    postData,
    deleteData,
    patchData
}
