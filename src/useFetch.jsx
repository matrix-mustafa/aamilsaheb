import { useEffect, useState } from "react";

export default function useFetch(url){
    // debugger;
  const [data, setData] = useState(null);

  const getToken = localStorage.getItem("profile-token")

  useEffect(() => {
    apiFn(url)
  } , [])

  const apiFn = (url) => {
    setData(null)
      fetch(`https://www.talabulilm.com/api2022/profile/${url}`, {
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

    return [data,apiFn]

}
