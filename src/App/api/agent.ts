import axios, { AxiosResponse } from "axios";
import { url } from "inspector";

axios.defaults.baseURL=`https://localhost:7145/api`;
axios.defaults.withCredentials=true;
const responseBody=(response:AxiosResponse)=>response.data;

const Requests={
    get:(url:string)=>axios.get(url).then(responseBody),
    post:(url:string,body:{})=>axios.post(url,body).then(responseBody),
    put:(url:string,body:{})=>axios.put(url,body).then(responseBody),
    delete:(url:string)=>axios.delete(url).then(responseBody)
}

const Catalog={
    list:()=>Requests.get(`/product`),
    deatails:(id:number)=>Requests.get(`/product/${id}`)
}
const Basket={
    getBasket:()=>Requests.get(`/basket`),
    addItem:(productId:number,Quantity:1)=>Requests.post(`/basket?ProductId=${productId}&Quantity=${Quantity}`,{}),
    removeItem:(productId:number,Quantity:1)=>Requests.delete(`/basket?ProductId=${productId}&Quantity=${Quantity}`),
}

const agent={
    Catalog,
    Basket
}

export default agent