import axios from 'axios'
import {homeRoute} from './routeHandler'

export const saveHandler = (event) => {
  event.preventDefault()

  const sku = document.querySelector('#sku').value
  const url = `https://scandiweb-test-junior-developer.000webhostapp.com/check.php?sku=${sku}`
  
  let data = new FormData(event.target)
  let formObject = Object.fromEntries(data.entries())
  const queryParams = new URLSearchParams(formObject).toString()

  axios.get(url).then(response => 
    response.data ? alert('Please enter a unique SKU.') : axios.post(`https://scandiweb-test-junior-developer.000webhostapp.com/save.php?${queryParams}`).then(homeRoute)
    )

}