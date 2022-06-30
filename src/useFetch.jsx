import { useEffect, useState } from "react";

export default function useFetch(url){
    // debugger;
    const [data, setData] = useState(null);

    const getToken = localStorage.getItem("profile-token")

    useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Basic ${getToken}`,
      },
    })
    .then((response) => response?.json())
    .then((result) => {
        setData(result)
    })
    .catch((error) => {
      console.log(error)
    })

  } , [])

  const apiFn = (url) => {
    setData(null)
      fetch(`https://www.talabulilm.com/${url}`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Basic ${getToken}`,
        },
      })
      .then((response) => response?.json())
      .then((result) => {
        console.log(result)
         setData(result);
      })
      .catch((error) => {
        setData([])
        console.log(error)
      })
  }

    return [data,apiFn]

}
