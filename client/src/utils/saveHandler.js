import axios from 'axios'
import {homeRoute} from './routeHandler'

export const numericValidation = () => {
  const price = document.querySelector('#price')
  const size = document.querySelector('#size')
  const weight = document.querySelector('#weight')
  const length = document.querySelector('#length')
  const width = document.querySelector('#width')
  const height = document.querySelector('#height')
  const numericElements = [price, size, weight, length, width, height]
  const filtered = numericElements.filter(el => el)

  filtered.forEach(el => {
    const attributeName = el.id
    const alertText = `Error: ${attributeName} must contain numbers only.`
    if (el.value.match(/\D+/g)) {
      alert(alertText)
      el.value = ''
    }
  })

}

export const saveHandler = (event) => {
  event.preventDefault()

  const sku = document.querySelector('#sku').value
  // const url = `http://localhost/scandiweb/server/check.php?sku=${sku}`
  const url = `https://junior-scandiweb-test.000webhostapp.com/check.php?sku=${sku}`

  let data = new FormData(event.target)
  let formObject = Object.fromEntries(data.entries())
  const queryParams = new URLSearchParams(formObject).toString()

  axios.get(url).then(response => 
    // response.data ? alert('Please enter a unique SKU.') : axios.post(`http://localhost/scandiweb/server/save.php?${queryParams}`).then(homeRoute)
    response.data ? alert('Please enter a unique SKU.') : axios.post(`https://junior-scandiweb-test.000webhostapp.com/save.php?${queryParams}`).then(homeRoute)
    )

}