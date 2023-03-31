import axios from "axios";
async function FetchOrders(url,body,headers={"Content-Type":"Application/json"}){
    let orders = await axios.get(url,body,headers);
    return orders;
}
async function SearchOrders(url,userId,limit,offset,search){
    let orders = await axios.get(`${url}/${userId}`,{params:{search:search,limit:limit,offset:offset}})
    return orders;
}

export {FetchOrders,SearchOrders};