import {useEffect,useState} from "react"
 
function useCurrencyInfo (currency) {
  const [data,setData] = useState({})
  useEffect(()=> {
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res) => res.json())  //res--> response object to js object res.json
    .then((res)=> setData(res[currency])) // res--> js object
    console.log(data);
  },[currency])
  return data

}

export default useCurrencyInfo;
