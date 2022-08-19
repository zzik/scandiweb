import React from 'react'
import GeneralInfo from './GeneralInfo'
import TypeSwitcher from './TypeSwitcher'
import { saveHandler } from '../../utils/saveHandler'


const ProductForm = () => {
  return (
    <form id="product_form" onSubmit={saveHandler}>
        <GeneralInfo />
        <TypeSwitcher />
    </form>
  )
}

export default ProductForm