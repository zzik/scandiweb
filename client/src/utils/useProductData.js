import {useEffect, useState} from 'react'
import axios from 'axios'

export const useProductData = () => {
    const [productData, setProductData] = useState()

    const dataHandler = (val) => {
      setProductData(val)
    }
  
    useEffect(() => {
      // axios.get("http://localhost:80/scandiweb/server/index.php")
      axios.get("https://junior-scandiweb-test.000webhostapp.com/index.php")
        .then((fin) => dataHandler(fin.data))
    }, [])

    return productData
}

export default useProductData