import { useEffect, useState } from "react";

export default function useFetch(url){
    // debugger;
  const [data, setData] = useState(null);

  const getToken = localStorage.getItem("profile-token")

  useEffect(() => {
    if(url !== "EmptyUrl"){
      apiFn(url)
    }
  } , [])

  const apiFn = (url) => {
    setData(null)
    if(url !== undefined){
      fetch(`https://www.talabulilm.com/api2022/${url}`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Basic ${getToken}`,
        },
      })
      .then((response) => response?.json())
      .then((result) => {
         setData(result);
      })
      .catch((error) => {
        setData([])
        console.log(error)
      })
    }
  }



    return [data,apiFn , ]

}
