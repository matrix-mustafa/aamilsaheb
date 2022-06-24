import { useEffect, useState } from "react";

export default function useFetch(url){
    // debugger;
    const [data, setData] = useState(null);

    useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Basic NTA0NzY3MzM6YzY2NTg3MmI3MTkzNTQxMTMwZTg5ZDJlY2JjOGRjMzM=`,
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
    console.log(url)
    setData(null)
      fetch(`https://www.talabulilm.com/${url}`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Basic NTA0NzY3MzM6YzY2NTg3MmI3MTkzNTQxMTMwZTg5ZDJlY2JjOGRjMzM=`,
        },
      })
      .then((response) => response?.json())
      .then((result) => {
         setData(result);
      })
      .catch((error) => {
        console.log(error)
      })
  }

    return [data,apiFn]

}
