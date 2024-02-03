import { useState } from 'react'
import AttributesBox from './AttributesBox'
import { inputTypeHandler, productTypesObject } from '../../utils/inputTypeHandler'

const TypeSwitcher = () => {

const [inputType, setInputType] = useState(productTypesObject.Dvd)

  return (
    <div className='dynamic_form'>
        <div className='type_control'>
          <label htmlFor='productType' >Type:</label>
          <select name='productType' id='productType' onChange={(event) => {inputTypeHandler(event, productTypesObject,setInputType)}}>
              <option value='Dvd' >DVD</option>
              <option value='Furniture' >Furniture</option>
              <option value='Book' >Book</option>
          </select>
        </div>
        <AttributesBox dataset={inputType} />
    </div>
  )
}

export default TypeSwitcher