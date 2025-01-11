import { useEffect, useState } from "react"

export const useFetch=(url)=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        async function fetchAPI(){
            const response =await fetch(url);
            const result=await response.json();
            setData(result||[]);
        }
        fetchAPI();
    },[url]);
    return { data };
}