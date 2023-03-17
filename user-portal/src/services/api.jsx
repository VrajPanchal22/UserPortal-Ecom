import { axiosObject } from "../App";

async function getData(url) {
    var response = await axiosObject.get(url)
    if (response.status === 200) {
        return response.data;
    }
    return null;
}

export {
    getData
}