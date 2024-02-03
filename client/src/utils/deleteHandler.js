export const deleteHandler = (e) => {
  e.preventDefault()
  const checkboxArray = Array.from(document.getElementsByName("product_item"))
  const filteredArray = checkboxArray.filter((checkbox) => checkbox.checked)
  const valuesArray = filteredArray.map((element) => element.value)
  valuesArray.forEach((el) => {
    // fetch(`https://scandiweb-test-junior-developer.000webhostapp.com/delete.php?sku=${el}`, {
    fetch(`http://localhost/scandiweb/server/delete.php?sku=${el}`, {
      method: "POST",
    })
  })
  window.location.reload()
}

