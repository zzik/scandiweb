

const GeneralInfo = () => {
  return (
    <div className='general_info'>
    <div className='input_container'> 
        <label htmlFor='sku' >SKU: </label>
        <input type='text' name="sku" id='sku' required />
    </div>
    <div className='input_container'> 
        <label htmlFor='name' >Name: </label>
        <input type='text' name='name' id='name' required />
    </div>
    <div className='input_container'> 
        <label htmlFor='price' >Price: </label>
        <input type='number' min="0" name='price' id='price' required />
    </div>
</div>
  )
}

export default GeneralInfo