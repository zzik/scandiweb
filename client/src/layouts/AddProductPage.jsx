
import { Header, ProductForm } from '../components'

const AddProductPage = (props) => {
  return (
    <>
    <Header text="Add Product" leftButton={props.leftButton} rightButton={props.rightButton} />
    <ProductForm />
    </>
  )
}

export default AddProductPage