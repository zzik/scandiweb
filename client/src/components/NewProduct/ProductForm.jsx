
import GeneralInfo from './GeneralInfo'
import TypeSwitcher from './TypeSwitcher'
import { numericValidation, saveHandler } from '../../utils/saveHandler'


const ProductForm = () => {
  return (
    <form id="product_form" onSubmit={saveHandler} onKeyUp={numericValidation}>
        <GeneralInfo />
        <TypeSwitcher />
    </form>
  )
}

export default ProductForm